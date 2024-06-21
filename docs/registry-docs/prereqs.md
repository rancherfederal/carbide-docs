# Prerequisites

Below are all the things you need to get started with the Hardened Container Registry. As we improve and streamline the process, this list could evolve.

>**Registry Disclaimer:** The Carbide Secured Registry (rgcrprod.azurecr.us) is _not_ intended to be used as the primary registry for running Kubernetes clusters. It is only intended as the acquisition point to obtain the Carbide images. Customers should seed their own private registries, and use that registry for their Kubernetes clusters.

## Required Tooling

**Packaging/Airgapping: [hauler](https://hauler.dev)**
```bash
# example installation steps
# please see the docs: https://rancherfederal.github.io/hauler-docs/docs/introduction/install

curl -sfL https://get.hauler.dev | bash
```

**Supply Chain Verification: [cosign](https://docs.sigstore.dev)**
```bash
# example installation steps
# please see the docs: https://docs.sigstore.dev/system_config/installation

curl -O -L "https://github.com/sigstore/cosign/releases/latest/download/cosign-linux-amd64"
sudo mv cosign-linux-amd64 /usr/local/bin/cosign
sudo chmod 755 /usr/local/bin/cosign
```

**K8s Package Management: [helm](https://helm.sh/docs)**
```bash
# example installation steps
# please see the docs: https://helm.sh/docs/intro/install

curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
sudo chmod 755 get_helm.sh && sudo ./get_helm.sh
```

## Required Artifacts

**Carbide Public Key**
```bash
# download the public key for carbide
curl -sfOL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub

# view the public key for carbide
cat carbide-key.pub

-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKO
tCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==
-----END PUBLIC KEY-----
```

## Setup

```bash
# authenticate into carbide secured registry
hauler login -u <redacted> -p <redacted> rgcrprod.azurecr.us
```
