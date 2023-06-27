# Prerequisites

In order to install STIGATRON, you need the following:

* **[Cosign CLI](https://github.com/sigstore/cosign):** For pulling and loading images in your registry.
* **[Helm CLI](https://helm.sh/docs/intro/install/):** For installation of the required Helm charts.
* **[Rancher v2.7.0+](https://ranchermanager.docs.rancher.com/integrations-in-rancher/rancher-extensions):** STIGATRON utilizes Rancher's UI Extensions Capability.
* Access to the `local` RKE2 cluster for the Rancher Multi-cluster Manager and the access to install Helm charts.
* Access to the `downstream` RKE2 cluster(s) that you would like to install and scan with STIGATRON.