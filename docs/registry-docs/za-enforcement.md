# Enforcement
## OPA Gatekeeper Enforcement 
```bash
coming soon
```

## Kubewarden Enforcement 

### Installation

See the docs on how to install [Kubewarden](https://docs.kubewarden.io/quick-start#installation) onto your cluster.

### Private Registry

If your Rancher system images are in a private registry requiring authentication, you'll need to configure your Kubewarden policy-server with a [Pull Secret](https://docs.kubewarden.io/operator-manual/policy-servers/private-registry) in order for it to validate the signature.

### Creating the Policy

After installing/configuring Kubewarden, apply the following ClusterAdmissionPolicy (substituting `YOUR_REGISTRY_HERE` with your registry domain):

```yaml
apiVersion: policies.kubewarden.io/v1
kind: ClusterAdmissionPolicy
metadata:
  name: verify-image-signatures
spec:
  module: ghcr.io/kubewarden/policies/verify-image-signatures:v0.1.7
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