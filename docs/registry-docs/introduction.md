# Introduction

This page will walk through benefits of the hardened registry and what exactly the hardened registry provides.

## What is the Carbide Secured Registry (CSR)?
Here at Rancher Government Solutions, we take the security of our products seriously.  Products like `rke2` are tailor-built to address the "secure by default" needs of the federal government, while still maintaining the same ease of deployments that our users have come to love from Rancher products.

The introduction of Carbide Secured Registry (CSR) marks the next big step we are taking to continually enhance our products emphasis on security, this time by directly addressing the supply chain.

Now, as an alternative to the "upstream" hosted images from Docker Hub, securely built images can now be sourced from the Carbide Secured Registry (CSR), and come with the following enhancements:

- Attested build artifacts for core Rancher products (images, sbom's, and vulnerability reports)
- Securely built on Rancher Government's internally hosted Secure Software Factory (conforming to the [DoD Reference Architecture](https://dodcio.defense.gov/Portals/0/Documents/Library/DoD%20Enterprise%20DevSecOps%20Reference%20Design%20-%20CNCF%20Kubernetes%20w-DD1910_cleared_20211022.pdf) and [CNCF Best Practices](https://project.linuxfoundation.org/hubfs/CNCF_SSCP_v1.pdf))

Quantifiably measuring the improvements that Carbide Secured Registry (CSR) provides is difficult considering the early stage of standards around supply chain security.  However, initial measurements can be gleaned from the Linux Foundation's [SLSA](https://slsa.dev) levels.

The Carbide Secured Registry (CSR)  was designed from the ground up to build the foundation for the eventual achievement of SLSA 4, or in other words, the most guarantee in a secure software supply chain. Specifically, this means introducing the following capabilities:

- Fully defined as code build/release process _with signed, non-falsifiable provenance_
- Custom built, isolated build infrastructure, conforming to best practices such as those defined in the [DoD Reference Architecture](https://dodcio.defense.gov/Portals/0/Documents/Library/DoD%20Enterprise%20DevSecOps%20Reference%20Design%20-%20CNCF%20Kubernetes%20w-DD1910_cleared_20211022.pdf), and [CNCF Best Practices](https://project.linuxfoundation.org/hubfs/CNCF_SSCP_v1.pdf)
- Verifiable SBOMs and dependency vulnerability reports

It's important to recognize that the Carbide Secured Registry (CSR) has an ever-evolving set of capabilities. As the standards and best practices around software supply chain security evolve, so will Carbide Secured Registry (CSR).

> **DISCLAIMER**:  The Secured Registry (rgcrprod.azurecr.us) is _not_ intended to be used as the primary registry for running Kubernetes clusters. It is only intended as the acquisition point to obtain the Carbide secured images. Customers should seed their own private OCI registries, and use that registry for their Kubernetes clusters.

If you see areas for improvement, please submit Github issues [here](https://github.com/rancherfederal/carbide-docs/issues).
