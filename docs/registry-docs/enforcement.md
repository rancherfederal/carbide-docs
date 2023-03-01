# Enforcement

This page will walk you through configuring Policy Enforcement (Kubewarden, Kyverno, Open Policy Agent) to ensure images running in your cluster that come from the hardened registry are validated against our public key before deploying.

## Kubewarden Enforcement 

### Installation

To install Kubewarden, run the following commands, substituting your registry information:

```bash
helm repo add kubewarden https://charts.kubewarden.io
helm repo update

helm install --wait -n kubewarden --create-namespace kubewarden-crds kubewarden/kubewarden-crds

helm install --wait -n kubewarden kubewarden-controller --set "common.cattle.systemDefaultRegistry=YOUR_REGISTRY_HERE" kubewarden/kubewarden-controller

helm install --wait -n kubewarden kubewarden-defaults --set "common.cattle.systemDefaultRegistry=YOUR_REGISTRY_HERE" kubewarden/kubewarden-defaults
```

For more information about installing Kubewarden, see the [docs](https://docs.kubewarden.io/quick-start#installation).


### Private Registry

If your Rancher system images are in a private registry requiring authentication, you'll need to configure your Kubewarden policy-server with a [Pull Secret](https://docs.kubewarden.io/operator-manual/policy-servers/private-registry) in order for it to validate the signature.

### Copying Policy Artifact to Registry

You will also need to copy the policy artifact used by Kubewarden to your registry. 

#### Saving the Policy Artifact
Use the below script, substituting your registry, to both validate and save locally the policy artifact:

```bash
# Working directories & TAR
DEST_DIRECTORY=/tmp/kubewarden-policy
DEST_TAR=/tmp/kubewarden-policy.tar.gz  # Change this to the location you want for your resulting TAR 

# Temporarily create file with the Carbide public key
cat <<EOT >/tmp/carbide-pub.key
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKO
tCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==
-----END PUBLIC KEY-----
EOT

# Verify the image
cosign verify --key /tmp/carbide-pub.key rgcrprod.azurecr.us/policies/verify-image-signatures:v0.1.7

# Save the image and compress it
cosign save --dir "$DEST_DIRECTORY" rgcrprod.azurecr.us/policies/verify-image-signatures:v0.1.7

# Compress directory
tar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .

# Clean up working directory
rm -rf $DEST_DIRECTORY
```

If working in an airgapped, you can now move that resulting TAR over the airgap.

#### Loading Policy Artifact into Registry

To move the Policy Artifact into your registry, use the following script and the resulting TAR from the [Saving Policy](enforcement.md#saving-the-policy-artifact).

```bash
# Remote Registry
TARGET_REGISTRY=YOUR_REGISTRY_HERE

# Set these if your target registry requires authentication.
# TARGET_REGISTRY_USER=YOUR_REGISTRY_USER_HERE
# TARGET_REGISTRY_PASSWORD=YOUR_REGISTRY_PASSWORD_HERE

# Source and Working Files
SOURCE_TAR=/tmp/kubewarden-policy.tar.gz # Adjust if necessary to point to the TAR
WORKING_DIR=/tmp/images  # Change this if desired/necessary

# Temporarily create file with the Carbide public key
cat <<EOT >/tmp/carbide-pub.key
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKO
tCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==
-----END PUBLIC KEY-----
EOT

if [[ ! -f "$SOURCE_TAR" ]]; then
    echo "ERROR: Tarball '$SOURCE_TAR' not found."
    exit 1
fi

if [[ -d "$WORKING_DIR" ]]; then
    echo "ERROR: Working directory '$WORKING_DIR' exists."
    echo "Remove it or change the value."
    exit 1
fi

if [[ ! -z $TARGET_REGISTRY_USER ]] && [[ ! -z $TARGET_REGISTRY_PASSWORD ]]; then
    cosign login -u $TARGET_REGISTRY_USER -p $TARGET_REGISTRY_PASSWORD $TARGET_REGISTRY
fi

mkdir -p "$WORKING_DIR"
tar zxf "$SOURCE_TAR" -C "$WORKING_DIR"

cosign verify --key /tmp/carbide-pub.key --local-image "$WORKING_DIR"

if [[ "$?" != "0" ]]; then
    echo "Exiting due to failed signature verification."
    exit 1
fi

# Load into the registry
cosign load --dir "$WORKING_DIR" $TARGET_REGISTRY/policies/verify-image-signatures:v0.1.7
```

### Creating the Policy

After installing/configuring Kubewarden and copying the policy to your registry, apply the following ClusterAdmissionPolicy (substituting `YOUR_REGISTRY_HERE` with your registry domain):

```yaml
apiVersion: policies.kubewarden.io/v1
kind: ClusterAdmissionPolicy
metadata:
  name: verify-image-signatures
spec:
  module: YOUR_REGISTRY_HERE/policies/verify-image-signatures:v0.1.7
  rules:
  - apiGroups: ["", "apps", "batch"]
    apiVersions: ["v1"]
    resources: ["pods", "deployments", "statefulsets", "replicationcontrollers", "jobs", "cronjobs"]
    operations:
    - CREATE
    - UPDATE
  mutating: true
  settings:
    signatures:
    - image: "YOUR_REGISTRY_HERE/rancher/*"
      pubKeys: 
        - |
          -----BEGIN PUBLIC KEY-----
          MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKO
          tCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==
          -----END PUBLIC KEY-----
    - image: "YOUR_REGISTRY_HERE/longhornio/*"
      pubKeys: 
        - |
          -----BEGIN PUBLIC KEY-----
          MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKO
          tCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==
          -----END PUBLIC KEY-----
```

## Kyverno Enforcement

### Installation

See the docs on how to install [Kyverno](https://kyverno.io/docs/installation) onto your cluster.

### Private Registry

If your Rancher system images are in a private registry requiring authentication, you'll need to configure your Kyverno policy-server with a [Pull Secret](https://kyverno.io/policies/other/require_imagepullsecrets/require_imagepullsecrets) in order for it to validate the signature.

### Creating the Policy

After installing/configuring Kyverno, apply the following Policy (substituting `YOUR_REGISTRY_HERE` with your registry domain):

```yaml
apiVersion: kyverno.io/v1
kind: Policy
metadata:
  name: verify-image-signatures
spec:
  validationFailureAction: enforce
  background: false
  webhookTimeoutSeconds: 30
  failurePolicy: Fail
  rules:
    - name: check-image
      match:
        any:
        - resources:
            kinds:
            - Pod
            - Deployment
      verifyImages:
      - imageReferences:
        - "YOUR_REGISTRY_HERE/rancher/*"
        - "YOUR_REGISTRY_HERE/longhornio/*"
        attestors:
        - count: 1
          entries:
          - keys:
              publicKeys: |-
                -----BEGIN PUBLIC KEY-----
                MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKO
                tCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==
                -----END PUBLIC KEY-----
```

## OPA Gatekeeper Enforcement 

Gatekeeper can be used to verify image signatures through its [External Data Provider](https://open-policy-agent.github.io/gatekeeper/website/docs/externaldata).
