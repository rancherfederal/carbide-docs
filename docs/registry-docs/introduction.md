# Introduction

This page will walk through IOC expectations of the hardened registry and what exactly the hardened registry provides.

## IOC Expectations
As our product is still in the IOC phase, there are some expectations to level-set:

* IOC users can expect tooling and processes to be changed, improved, and streamlined continuously as we strive to improve the Carbide offering.

> **DISCLAIMER**:  The Secured Registry (rgcrprod.azurecr.us) is _not_ intended to be used as the primary registry for running Kubernetes clusters. It is only intended as the acquisition point to obtain the Carbide secured images. Customers should seed their own private OCI registries, and use that registry for their Kubernetes clusters.

If you see areas for improvement, please submit Github issues [here](https://github.com/rancherfederal/carbide-docs/issues).

## What is this?
Here at Rancher Government Solutions, we take the security of our products seriously.  Products like `rke2` are tailor-built to address the "secure by default" needs of the federal government, while still maintaining the same ease of deployments that our users have come to love from Rancher products.

The Carbide Secured Registry (CSR) enhances our products' emphasis on security, this time by directly addressing the supply chain.

Now, as an alternative to the "upstream" hosted images from Docker Hub, securely built images can be sourced from the Carbide Secured Registry (CSR), and come with the following enhancements:

- Attested build artifacts for core Rancher products (images, SBOMs, and vulnerability reports)
- Securely built on Rancher Government's internally hosted Secure Software Factory (conforming to the [DoD Reference Architecture](https://dodcio.defense.gov/Portals/0/Documents/Library/DoD%20Enterprise%20DevSecOps%20Reference%20Design%20-%20CNCF%20Kubernetes%20w-DD1910_cleared_20211022.pdf) and [CNCF Best Practices](https://project.linuxfoundation.org/hubfs/CNCF_SSCP_v1.pdf))

The Carbide Secured Registry (CSR) was designed to comply with the highest level of [SLSA standards](https://slsa.dev) (L3) for supply chain security. Specifically, this means introducing the following capabilities:

- Fully defined as code build/release process _with signed, non-falsifiable provenance_
- Custom built, isolated build infrastructure, conforming to best practices
- Verifiable SBOMs and dependency vulnerability reports

It's important to recognize that the Carbide Secured Registry (CSR) has an ever-evolving set of capabilities. As the standards and best practices around software supply chain security evolve, so will Carbide Secured Registry (CSR).
