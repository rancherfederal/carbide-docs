# Prerequisites 

Below are all the things you need to get started with the Hardened Container Registry. As we improve and streamline the process, this list could evolve.

## Registry Disclaimer

 The Secured Registry (rgcrprod.azurecr.us) is _not_ intended to be used as the primary registry for running Kubernetes clusters. It is only intended as the acquisition point to obtain the Carbide secured images. Customers should seed their own private OCI registries, and use that registry for their Kubernetes clusters.

## Required Tools
To explore what's available, you'll need some common tooling:

Supply Chain Validation:
- [cosign](https://github.com/sigstore/cosign)

Container Tools
- [docker](https://docs.docker.com/get-docker/0) (just the cli, but it comes as a package)
- [helm](https://helm.sh/docs/)
- [hauler](https://hauler.dev) (Not currently required, but will be in the near future)

Other Tools
- [tar](https://www.gnu.org/software/tar/) (required for airgap packaging/serving)
- [gzip](https://www.gzip.org/) (required for airgap packaging/serving)