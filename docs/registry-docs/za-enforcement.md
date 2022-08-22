# Enforcement
## OPA Gatekeeper Enforcement 
```bash
coming soon
```

## Kubewarden Enforcement 

After installing [Kubewarden](https://docs.kubewarden.io/quick-start#installation) onto your cluster, apply the following policy:

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
    - image: "rgcrprod.azurecr.us/*"
        pubKeys: 
        - "-----BEGIN PUBLIC KEY-----MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKOtCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==-----END PUBLIC KEY-----
```