# Validating Images

This will guide you through validating the signatures and attestations of each image in the secured registry, as well as how to download artifacts about the image (Software Bill of Materials, Vulnerability Scan, Cryptographic Signature, etc...).

#### carbide-key.pub

```bash
# download the public key for carbide
curl -#OL https://github.com/rancherfederal/carbide-releases/releases/download/0.1.1/carbide-key.pub

# view the public key for carbide
cat carbide-key.pub

-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKO
tCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==
-----END PUBLIC KEY-----
```

## Secure Supply Chain

## Checking the Digital Signature In A Registry

Before pulling images, or after images have been pushed to a registry, you should verify those images against the carbide public key. These instructions are for verifying images directly from a registry.

_NOTE_: You'll need to substitute `rgcrprod.azurecr.us` with your own registry domain if verifying in your own registry.

```bash
# export the public key for carbide
export KEY=carbide-key.pub
# verify the image's attestation by validating the supplied signature
cosign verify --key $KEY rgcrprod.azurecr.us/rancher/rancher:v2.8.2
```

### Software Bill of Materials

```bash
# verify the image's SBOM attestation by validating the supplied signature
cosign verify --key $KEY rgcrprod.azurecr.us/rancher/rancher:v2.8.2 --attachment sbom

# view the image's SBOM
cosign download sbom rgcrprod.azurecr.us/rancher/rancher:v2.8.2
```

### Vulnerability Scan Results

```bash
# verify the image's SBOM attestation by validating the supplied signature
cosign verify-attestation --key $KEY rgcrprod.azurecr.us/rancher/rancher:v2.8.2 --type vuln > /dev/null

# view the image's vulnerability scan results
cosign verify-attestation --key $KEY rgcrprod.azurecr.us/rancher/rancher:v2.8.2 --type vuln | jq -r '.payload' | base64 -d | jq
```

### Resources

For more information on `cosign`, check out [Chainguard Academy](https://edu.chainguard.dev/open-source/sigstore/cosign/how-to-verify-file-signatures-with-cosign/).
