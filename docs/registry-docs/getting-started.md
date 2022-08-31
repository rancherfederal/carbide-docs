# Getting Started

## Beta Expectations
As our product is still in the beta phase, there are some expectations to level-set:

* Beta users can expect beta registry credentials to be revoked in lieu of release keys at IOC.
* Beta users can expect our signing key to potentially change at IOC.
* Beta users can expect tooling and processes to be changed, improved and streamlined continuously throughout the beta.
* Beta users can expect throttling of the LHOCR registry at IOC (standard practice will be to use your own registry).

If you see issues and areas for improvement, please submit Github issues [here](https://github.com/rancherfederal/ssf-feedback/issues/).

## What is this?
Here at Rancher Government Solutions, we take the security of our products seriously.  Products like `rke2` are tailor built to address the "secure by default" needs of the federal government, while still maintaining the same ease of deployments that our users have come to love from Rancher products.

The introduction of RGS' SSF marks the next big step we are taking to continually enhance our products emphasis on security, this time by directly addressing the supply chain.

Now, as an alternative to the "upstream" hosted images from Docker Hub, securely built images can now be sourced from RGS' SSF, and come with the following enhancements:

- Attested build artifacts for core Rancher products (images, sbom's, and vulnerability reports)
- Securely built on RGS' internally hosted Secure Software Factory (conforming to the [DoD Reference Architecture](https://dodcio.defense.gov/Portals/0/Documents/Library/DoD%20Enterprise%20DevSecOps%20Reference%20Design%20-%20CNCF%20Kubernetes%20w-DD1910_cleared_20211022.pdf) and [CNCF Best Practices](https://project.linuxfoundation.org/hubfs/CNCF_SSCP_v1.pdf))

Quantifiably measuring the improvements that RGS' SSF provides is difficult considering the early stage of standards around supply chain security.  However, initial measurements can be gleaned from the Linux Foundation's [SLSA](https://slsa.dev) levels.

RGS' SSF was designed from the ground up to build the foundation for the eventual achievement of SLSA 4, or in other words, the most guarantee in a secure software supply chain.  Specifically, this means introducing the following capabilities:

- Fully defined as code build/release process _with signed, non-falsifiable provenance_
- Custom built, isolated build infrastructure, conforming to best practices such as those defined in the [DoD Reference Architecture](https://dodcio.defense.gov/Portals/0/Documents/Library/DoD%20Enterprise%20DevSecOps%20Reference%20Design%20-%20CNCF%20Kubernetes%20w-DD1910_cleared_20211022.pdf), and [CNCF Best Practices](https://project.linuxfoundation.org/hubfs/CNCF_SSCP_v1.pdf)
- Verifiable SBOMs and dependency vulnerability reports

If we follow the SLSA level requirements using the enhancements introduced with RGS' SSF, it currently puts us firmly at a SLSA level 2 (up from SLSA 0).  However, the astute readers will recognize that with the current verbatim implementation of SLSA levels, level 3 and 4 are currently unobtainable due to requirements such as "accredited build platforms".

As stated earlier, the foundation for ultimately achieving SLSA 4 have been put in place to allow us to mature alongside software supply chain best practices, and standards.  On that note, it's important to recognize that RGS' SSF is an ever evolving set of capabilities.  Just as the standards and best practices around software supply chain security evolve, so will RGS' SSF.
