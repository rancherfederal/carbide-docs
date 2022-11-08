# Enforcement

This page will walk you through configuring Policy Enforcement (Kubewarden, Kyverno, Open Policy Agent) to ensure images running in your cluster that come from the hardened registry are validated against our public key before deploying.

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
