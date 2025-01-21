# Introduction

### What is the Carbide Secured Registry (CSR)?

At Rancher Government Solutions, we take the security of our products seriously.  Products like RKE2 are tailor-built to address the "secure by default" needs of the federal government, while maintaining the ease of deployment that our users love from Rancher products.

The Carbide Secured Registry (CSR) uses a secure software supply chain to deliver these mission-critical products.

In comparison to upstream-hosted images from Docker Hub, CSR images come with the following enhancements:

- Securely built on Rancher Government's internally hosted Secure Software Factory
- Defined-as-code build and release process conforming to the [DoD Reference Architecture](https://dodcio.defense.gov/Portals/0/Documents/Library/DoD%20Enterprise%20DevSecOps%20Reference%20Design%20-%20CNCF%20Kubernetes%20w-DD1910_cleared_20211022.pdf) and [CNCF Best Practices](https://project.linuxfoundation.org/hubfs/CNCF_SSCP_v1.pdf)
- Verifiable build artifacts (images, SBOMs, and vulnerability reports) with signed, non-falsifiable provenance for core Rancher products
- Meets the Linux Foundation's [SLSA](https://slsa.dev) standards at the most secure level, SLSA L3.

The Carbide Secured Registry (CSR) will evolve with the standards and best practices around software supply chain security, so we can continue to deliver the highest levels of software security. If you see areas for improvement, please submit Github issues [here](https://github.com/rancherfederal/carbide-docs/issues).

> **DISCLAIMER**:  The Carbide Secured Registry (rgcrprod.azurecr.us) is _not_ intended to be used as the primary registry for running Kubernetes clusters. It is only intended as the acquisition point to obtain the Carbide-secured images. Customers should seed their own private OCI registries, and use that registry for their Kubernetes clusters.