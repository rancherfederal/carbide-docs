# Prerequisites

In order to install STIGATRON, you need the following:

* For pulling/storing the STIGATRON images in your registry, you'll need the [Cosign CLI](https://github.com/sigstore/cosign).
* For installation, you'll need the [Helm CLI](https://helm.sh/docs/intro/install/).
* Rancher v2.7.0+. (STIGATRON utilizes Rancher's UI Extensions Capability)
* Access to the `local` RKE2 cluster that the Rancher Multi-cluster Manager deployed onto and the ability to install Helm charts on it.
* Access to the `downstream` RKE2 cluster(s) you want to install STIGATRON onto.