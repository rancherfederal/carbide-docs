# Enforcement

This page will walk you through configuring Policy Enforcement (Kubewarden, Kyverno, Open Policy Agent) to ensure images running in your cluster that come from the hardened registry are validated against our public key before deploying.

## Kubewarden Enforcement

### Installation

To install Kubewarden, run the following commands, substituting your registry information:

```bash
# add and update the helm chart repository
helm repo add kubewarden https://charts.kubewarden.io
helm repo update

# install the crds helm chart
helm install --wait -n kubewarden --create-namespace kubewarden-crds kubewarden/kubewarden-crds

# install the controller helm chart
helm install --wait -n kubewarden kubewarden-controller kubewarden/kubewarden-controller --set "common.cattle.systemDefaultRegistry=<registry-url>"

# install the defaults helm chart
helm install --wait -n kubewarden kubewarden-defaults kubewarden/kubewarden-defaults --set "common.cattle.systemDefaultRegistry=<registry-url>" kubewarden/kubewarden-defaults
```

For more information about installing Kubewarden, see the [docs](https://docs.kubewarden.io/quick-start#installation).

### Private Registry

If your Rancher system images are in a private registry requiring authentication, you'll need to configure your Kubewarden policy-server with a [Pull Secret](https://docs.kubewarden.io/operator-manual/policy-servers/private-registry) in order for it to validate the signature.

### Copying Policy Artifact to a Registry (Connected Environments)

```bash
# authenticate into carbide secured registry
cosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# download the public key for carbide
curl -sfOL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub

# fetch the image from the carbide secured registry
hauler store add image rgcrprod.azurecr.us/policies/verify-image-signatures:v0.1.7 --key carbide-key.pub --platform linux/amd64

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://<registry-url>
```

### Saving Policy Artifact (Airgaped Environments)

Use the below script, substituting your registry, to both validate and save locally the policy artifact:

```bash
# authenticate into carbide secured registry
cosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# download the public key for carbide
curl -sfOL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub

# fetch the image from the carbide secured registry
hauler store add image rgcrprod.azurecr.us/policies/verify-image-signatures:v0.1.7 --key carbide-key.pub --platform linux/amd64

# save and output the content from the hauler store to tarball
hauler store save --filename kubewarden-policy.tar.zst
```

### Loading Policy Artifact to a Registry (Airgaped Environments)

To move the Policy Artifact into your registry, use the following script and the resulting TAR from the [Saving Policy](enforcement.md#saving-the-policy-artifact).

```bash
# load the content from the tarball to the hauler store
hauler store load kubewarden-policy.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://<registry-url>
```

### Creating the Policy

After installing/configuring Kubewarden and copying the policy to your registry, apply the following ClusterAdmissionPolicy (substituting `<registry-url>` with your registry domain):

```yaml
apiVersion: policies.kubewarden.io/v1
kind: ClusterAdmissionPolicy
metadata:
  name: verify-image-signatures
spec:
  module: <registry-url>/policies/verify-image-signatures:v0.1.7
  rules:
    - apiGroups: ['', 'apps', 'batch']
      apiVersions: ['v1']
      resources:
        [
          'pods',
          'deployments',
          'statefulsets',
          'replicationcontrollers',
          'jobs',
          'cronjobs',
        ]
      operations:
        - CREATE
        - UPDATE
  mutating: true
  settings:
    signatures:
      - image: '<registry-url>/carbide/*'
        pubKeys:
          - |
            -----BEGIN PUBLIC KEY-----
            MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKO
            tCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==
            -----END PUBLIC KEY-----
      - image: '<registry-url>/jetstack/*'
        pubKeys:
          - |
            -----BEGIN PUBLIC KEY-----
            MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKO
            tCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==
            -----END PUBLIC KEY-----
      - image: '<registry-url>/rancher/*'
        pubKeys:
          - |
            -----BEGIN PUBLIC KEY-----
            MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKO
            tCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==
            -----END PUBLIC KEY-----
      - image: '<registry-url>/longhornio/*'
        pubKeys:
          - |
            -----BEGIN PUBLIC KEY-----
            MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKO
            tCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==
            -----END PUBLIC KEY-----
      - image: '<registry-url>/neuvector/*'
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

After installing/configuring Kyverno, apply the following Policy (substituting `<registry-url>` with your registry domain):

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
            - '<registry-url>/carbide/*'
            - '<registry-url>/jetstack/*'
            - '<registry-url>/rancher/*'
            - '<registry-url>/longhornio/*'
            - '<registry-url>/neuvector/*'
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
