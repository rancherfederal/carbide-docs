# Validating Images

Images in the Caride Secured Registry (CSR) allow for signature validation and downloading artifacts with metadata about the image such as Software Bill of Materials (SBOMs), Vulnerability Scans, and Cryptographic Signatures.

This will guide you through validating the signatures and attestations of each image in the CSR.

## Secure Supply Chain

Before pulling images, or even after images have been pushed to a registry, you should always verify those images against the Carbide public key. Below are the instructions for using `cosign` directly from a registry. 

If using `Hauler` to seed your registry, Hauler will automatically verify the signatures when the public key is set in the manifest or as a flag with `--key`.

> **NOTE:** You'll need to substitute `rgcrprod.azurecr.us` with your own registry domain, if verifying images in your own registry.

In Carbide Images v2 (or Cosign v2), the attachment of supply chain artifacts to the top layer of an image has been deprecated. In order to maintain interoperability, we have migrated our images and supply chain artifacts to be attached at the individual layer for a specific platform or architecture of an image. If you would like to see more information, please see the notice from cosign [here](https://github.com/sigstore/cosign/blob/main/specs/SBOM_SPEC.md).

<details open>
<summary><b>Carbide Images v2</b> (After 03/2024)</summary>

### Display Supply Chain Artifacts

View supply chain artifacts for an image: 

```bash
cosign tree rgcrprod.azurecr.us/carbide/carbide-docs@sha256:9cfda4875822b37f1e899c962e9bae5bb709235a1794834a839eaa74f429eb91
```

Sample output for carbide-docs:0.1.4 for linux/amd64:
```bash
carbide-docs@sha256:9cfda4875822b37f1e899c962e9bae5bb709235a1794834a839eaa74f429eb91
📦 Supply Chain Security Related artifacts for an image: rgcrprod.azurecr.us/carbide/carbide-docs@sha256:9cfda4875822b37f1e899c962e9bae5bb709235a1794834a839eaa74f429eb91
└── 💾 Attestations for an image tag: rgcrprod.azurecr.us/carbide/carbide-docs:sha256-9cfda4875822b37f1e899c962e9bae5bb709235a1794834a839eaa74f429eb91.att
   ├── 🍒 sha256:dfa305431fecc7148b2975285295701a4e7e2f314bda41efa1fe4fb31758dc68
   └── 🍒 sha256:133e5c020fe7fd20ae4453a9193a3b2a5e36a0447aa9d322ba83494bfde912d4
└── 🔐 Signatures for an image tag: rgcrprod.azurecr.us/carbide/carbide-docs:sha256-9cfda4875822b37f1e899c962e9bae5bb709235a1794834a839eaa74f429eb91.sig
   └── 🍒 sha256:f8cf6aea22f450991fc1800bc0b1440377a40833a94ff51c850210218fd5ad4d
```

### Verifying the Digital Signature

Verify the image's attestation by validating the supplied signature:

```bash
cosign verify --key carbide-key.pub rgcrprod.azurecr.us/carbide/carbide-docs:0.1.4 | jq
```

### Viewing the Software Bill of Materials

Verify the image's sbom attestation by validating the supplied signature:

```bash
cosign verify-attestation --key carbide-key.pub rgcrprod.azurecr.us/carbide/carbide-docs@sha256:9cfda4875822b37f1e899c962e9bae5bb709235a1794834a839eaa74f429eb91 --type spdxjson | jq
```

View the image's SBOM: 

```bash
cosign verify-attestation --key carbide-key.pub rgcrprod.azurecr.us/carbide/carbide-docs@sha256:9cfda4875822b37f1e899c962e9bae5bb709235a1794834a839eaa74f429eb91 --type spdxjson | jq -r '.payload' | base64 -d | jq
```

### Viewing the Vulnerability Scan Results

Verify the image's vulnerability attestation by validating the supplied signature:

```bash
cosign verify-attestation --key carbide-key.pub rgcrprod.azurecr.us/carbide/carbide-docs@sha256:9cfda4875822b37f1e899c962e9bae5bb709235a1794834a839eaa74f429eb91 --type vuln | jq
```

View the image's vulnerability scan results:

```bash
cosign verify-attestation --key carbide-key.pub rgcrprod.azurecr.us/carbide/carbide-docs@sha256:9cfda4875822b37f1e899c962e9bae5bb709235a1794834a839eaa74f429eb91 --type vuln | jq -r '.payload' | base64 -d | jq
```

</details>

<details>
<summary><b>Carbide v1</b> (Before 03/2024)</summary>

### Display Supply Chain Artifacts

Display supply chain related artifacts for an image:

```bash
cosign tree rgcrprod.azurecr.us/carbide/carbide-docs:0.1.3
```

Example output:

```bash
📦 Supply Chain Security Related artifacts for an image: rgcrprod.azurecr.us/carbide/carbide-docs:0.1.3
└── 💾 Attestations for an image tag: rgcrprod.azurecr.us/carbide/carbide-docs:sha256-4d8b3e7e6e1a7640ca5f4ea833a5aef7a6f031947093e3e7625c8c949c1c8839.att
   └── 🍒 sha256:8890d36772569483c9295be31a779770af0a61b51c6ba83cecc699fc724b9fd7
└── 🔐 Signatures for an image tag: rgcrprod.azurecr.us/carbide/carbide-docs:sha256-4d8b3e7e6e1a7640ca5f4ea833a5aef7a6f031947093e3e7625c8c949c1c8839.sig
   └── 🍒 sha256:a28126ae0a4bb23f71787e912125c25232677f6948812d937fd8feb9fe03ac6f
└── 📦 SBOMs for an image tag: rgcrprod.azurecr.us/carbide/carbide-docs:sha256-4d8b3e7e6e1a7640ca5f4ea833a5aef7a6f031947093e3e7625c8c949c1c8839.sbom
   └── 🍒 sha256:970fc626b7075bd4822083cebc26d2e7cfcc1d5f1bfbcf9c3d0b3543a769be99
```

### Verifying the Digital Signature

Verify the image's attestation by validating the supplied signature:

```bash
cosign verify --key carbide-key.pub rgcrprod.azurecr.us/carbide/carbide-docs:0.1.3
```

### Viewing the Software Bill of Materials

Verify the image's SBOM attestation by validating the supplied signature:

```bash
cosign verify --key carbide-key.pub rgcrprod.azurecr.us/carbide/carbide-docs:0.1.3 --attachment sbom
```

View the image's SBOM:

```bash
cosign download sbom rgcrprod.azurecr.us/carbide/carbide-docs:0.1.3
```

### Viewing the Vulnerability Scan Results

Verify the image's SBOM attestation by validating the supplied signature:

```bash
cosign verify-attestation --key carbide-key.pub rgcrprod.azurecr.us/carbide/carbide-docs:0.1.3 --type vuln | jq
```

View the image's vulnerability scan results:

```bash
cosign verify-attestation --key carbide-key.pub rgcrprod.azurecr.us/carbide/carbide-docs:0.1.3 --type vuln | jq -r '.payload' | base64 -d | jq
```

</details>

### Resources

For more information on `cosign`, check out the [Chainguard Academy](https://edu.chainguard.dev/open-source/sigstore/cosign/how-to-verify-file-signatures-with-cosign).
