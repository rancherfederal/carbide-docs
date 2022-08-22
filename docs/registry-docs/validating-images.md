# Validating Images

#### ssf-key.pub
```bash
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKO
tCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==
-----END PUBLIC KEY-----
```

## Secure Supply Chain 

### Prerequisites

* [Cosign CLI](https://docs.sigstore.dev/cosign/installation/)
* [Oras CLI](https://oras.land/cli/)

### Checking the Digital Signature
```bash
# export the public key for the production ssf
export KEY=ssf-key.pub
# Verifying the image's attestation by validating the supplied signature
cosign verify --key $KEY rgcrprod.azurecr.us/rancher/system-agent:v0.1.1-suc
```

### Software Bill of Materials
```bash
# Verifying the image's SBOM attestation by validating the supplied signature
cosign verify --key $KEY rgcrprod.azurecr.us/rancher/system-agent:v0.1.1-suc --attachment sbom

# Viewing the image's SBOM
cosign download sbom rgcrprod.azurecr.us/rancher/system-agent:v0.1.1-suc
```

### Vulnerability Scan Results
```bash
# Verifying the image's SBOM attestation by validating the supplied signature
cosign verify --key $KEY rgcrprod.azurecr.us/rancher/system-agent:v0.1.1-suc.trivy.json

# Viewing the image's vulnerability scan results
oras download rgcrprod.azurecr.us/rancher/system-agent:v0.1.1-suc.trivy.json
```