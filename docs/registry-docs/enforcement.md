# Enforcement

Policy enforcement engines can be used to validate your cluster images against our public key. This will ensure only the images from our hardened registry are allowed to run.

## Kubewarden Enforcement

The Kubewarden images can be pulled from the Carbide Secured Registry (CSR).

### Installation

To install Kubewarden, run the following commands, substituting your registry information.

1. Add and update the helm chart repository.

```bash
helm repo add kubewarden https://charts.kubewarden.io
helm repo update
```

2. Install the CRDs helm chart.

```bash
helm install --wait -n kubewarden --create-namespace kubewarden-crds kubewarden/kubewarden-crds
```

3. Install the controller helm chart.

```bash
helm install --wait -n kubewarden kubewarden-controller kubewarden/kubewarden-controller --set "common.cattle.systemDefaultRegistry=<registry-url>"
```

4. Install the defaults helm chart.

```bash
helm install --wait -n kubewarden kubewarden-defaults kubewarden/kubewarden-defaults --set "common.cattle.systemDefaultRegistry=<registry-url>" kubewarden/kubewarden-defaults
```

For more information about installing Kubewarden, see the [docs](https://docs.kubewarden.io/quick-start#installation).

### Private Registry

If your Rancher system images are in a private registry requiring authentication, you'll need to configure your Kubewarden policy-server with a [Pull Secret](https://docs.kubewarden.io/operator-manual/policy-servers/private-registry) in order for it to validate the signature.

### Copying Policy Artifact to a Registry (Connected Environments)

1. Fetch the image from the Carbide Secured Registry.

```bash
hauler store add image rgcrprod.azurecr.us/policies/verify-image-signatures:v0.1.7 --key carbide-key.pub --platform linux/amd64
```

2. Copy the content from the Hauler store to your registry.

```bash
hauler store copy --username <redacted> --password <redacted> registry://<registry-url>
```

### Airgapped Environments

Use the below steps, substituting your registry, to validate and locally save the policy artifact.

#### Saving Policy Artifact

1. Fetch the image from the Carbide Secured Registry.

```bash
hauler store add image rgcrprod.azurecr.us/policies/verify-image-signatures:v0.1.7 --key carbide-key.pub --platform linux/amd64
```

2. Save and output the content from the Hauler store to tarball.

```bash
hauler store save --filename kubewarden-policy.tar.zst
```

#### Loading Policy Artifact to a Registry

3. Load the content from the tarball to the Hauler store.

```bash
hauler store load kubewarden-policy.tar.zst
```

4. Copy the content from the Hauler store to your registry.

```bash
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

Follow the instructions to install [Kyverno](https://kyverno.io/docs/installation) onto your cluster.

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
