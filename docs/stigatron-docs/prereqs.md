# Prerequisites

>:warning: **DEPRECATION NOTICE**: Please note, STIGATRON is now deprecated in favor of the more tightly integrated [Rancher Compliance Operator](../compliance-operator/rke2-stig-scans.md). The operator replicates the STIG checks performed by STIGATRON. Please see documentation for more details. 

In order to utilize STIGATRON, you will need the following prerequisites:

- **Rancher v2.7.0 or higher:** https://ranchermanager.docs.rancher.com/integrations-in-rancher/rancher-extensions
- **Helm:** https://helm.sh/docs/intro/install
- Access to the `local` cluster, to be able to install and deploy the app(s).
- Access to the `downstream` cluster(s), to be able to install and deploy the app(s).

It is also assumed you have followed all of the Carbide Secured Registry (CSR) documentation.

This means you have:
- seeded your registry with the images from the CSR
- the carbide helm charts available for use
- configured k3s/rke2 to use your registry
- configured Rancher Manager to use your registry
- setup policy enforcement to only allow images from the CSR
