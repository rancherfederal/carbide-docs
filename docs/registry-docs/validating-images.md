# Validating Images

This will guide you through validating the signatures and attestations of each image in the secured registry, as well as how to download artifacts about the image (SBOM, Trivy Vulnerability Scan).

#### ssf-key.pub
```bash
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKO
tCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==
-----END PUBLIC KEY-----
```

The key is also available to be pulled from each Carbide release's artifacts found [here](https://github.com/rancherfederal/carbide-releases/releases/)

## Secure Supply Chain 

## Prerequisites

* [Cosign CLI](https://docs.sigstore.dev/cosign/installation/)

## Checking the Digital Signature In A Registry

Before pulling images, or after images have been pushed to a registry, you should verify those images against the RGS public key. These instructions are for verifying images directly from a registry.

*NOTE*: You'll need to substitute `rgcrprod.azurecr.us` with your own registry domain if verifying in your own registry.

```bash
# export the public key for the production ssf
export KEY=ssf-key.pub
# Verifying the image's attestation by validating the supplied signature
cosign verify --key $KEY rgcrprod.azurecr.us/rancher/rancher:v2.7.1
```

### Software Bill of Materials
```bash
# Verifying the image's SBOM attestation by validating the supplied signature
cosign verify --key $KEY rgcrprod.azurecr.us/rancher/rancher:v2.7.1 --attachment sbom

# Viewing the image's SBOM
cosign download sbom rgcrprod.azurecr.us/rancher/rancher:v2.7.1
```

### Vulnerability Scan Results
```bash
# Verifying the image's SBOM attestation by validating the supplied signature
cosign verify-attestation --key $KEY rgcrprod.azurecr.us/rancher/rancher:v2.7.1 --type vuln > /dev/null

# Viewing the image's vulnerability scan results
cosign verify-attestation --key $KEY rgcrprod.azurecr.us/rancher/rancher:v2.7.1 --type vuln | jq -r '.payload' | base64 -d | jq
```

### Resources
For more information on `cosign`, check out [Chainguard Academy](https://edu.chainguard.dev/open-source/sigstore/cosign/how-to-verify-file-signatures-with-cosign/).
