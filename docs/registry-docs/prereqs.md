# Prerequisites 

### Required Tools
To explore what's available, you'll need some common tooling:

Supply Chain Validation:
- [cosign](https://github.com/sigstore/cosign)

Container Tools (choose one)
- [docker](https://docs.docker.com/get-docker/0) (just the cli, but it comes as a package)
- [skopeo](https://github.com/containers/skopeo)
- [hauler](https://hauler.dev)

### Accounts

In this initial alpha release, there are 2 accounts that serve different purposes:

#### Token Authentication

For longer term deployments, a read only, non-expiring token is provided.  This authentication method does not provide access to the UI, but does allow for clients such as `docker`, and `containerd` (kubernetes) to authenticate indefinately.

```bash
# To login with the shared credentials
docker login -u internal-tester-read -p <redacted> rgcrprod.azurecr.us
```
If using in a Kubernetes cluster, follow the [basic usage](#basic-usage) instructions below.

#### Early UI access authentication

We are initially using the default UI that comes with Azure Government's Container Registry, with near plans of replacing this with a more purpose built custom UI.

In the meantime, a read only azure acocunt can be used for __obtaining temporary pull credentials__.  These tokens can be generated as follows:

```bash
# NOTE: The Azure CLI is required
az acr login -n rgscr

# username: ssf-demo@rancherfederal.onmicrosoft.us
# password: redacted
```