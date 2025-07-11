# Prerequisites

Below are all the things you need to get started with the Carbide Secured Registry (CSR). As we improve and streamline the process, this list could evolve.

>**Registry Disclaimer:** The Carbide Secured Registry (rgcrprod.azurecr.us) is _not_ intended to be used as the primary registry for running Kubernetes clusters. It is only intended as the acquisition point to obtain the Carbide images. Customers should seed their own private registries, and use that registry for their Kubernetes clusters.

## Required Tooling

**K8s Package Management: [Helm](https://helm.sh/docs)**

Example installation steps:
```bash
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
sudo chmod 755 get_helm.sh && sudo ./get_helm.sh
```

For more options, visit the [Helm install docs](https://helm.sh/docs/intro/install).

**Supply Chain Verification: [Cosign](https://docs.sigstore.dev)**

Example installation steps:
```bash
curl -O -L "https://github.com/sigstore/cosign/releases/latest/download/cosign-linux-amd64"
sudo mv cosign-linux-amd64 /usr/local/bin/cosign
sudo chmod 755 /usr/local/bin/cosign
```

For more options, visit the [Cosign install docs](https://docs.sigstore.dev/system_config/installation).

## Recommended Tooling

**Packaging/Airgapping: [Hauler](https://hauler.dev)**

Example installation steps:
```bash
curl -sfL https://get.hauler.dev | bash
```
For more options, visit the [Hauler install docs](https://docs.hauler.dev/docs/introduction/install).

## Required Artifacts

**Carbide Public Key**

Download the public key for Carbide.
```bash
curl -sfOL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub
```
View the public key for Carbide.
```bash
cat carbide-key.pub

-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKO
tCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==
-----END PUBLIC KEY-----
```

## Log In to CSR

Log in to the Carbide Secured Registry.

Using Hauler (recommended):
```bash
hauler login -u <redacted> -p <redacted> rgcrprod.azurecr.us
```
Using Docker: 
```bash
docker login -u <redacted> -p <redacted> rgcrprod.azurecr.us
```