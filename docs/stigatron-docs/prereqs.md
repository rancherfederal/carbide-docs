# Prerequisites

In order to install STIGATRON, you need the following:

* For pulling/storing the STIGATRON images in your registry, you'll need the [Cosign CLI](https://github.com/sigstore/cosign).
* For installation, you'll need the [Helm CLI](https://helm.sh/docs/intro/install/).
* Access to the `local` cluster that the Rancher Multi-cluster Manager is running on, and the ability to install Helm charts on it.
* Since STIGATRON utilizes Rancher's UI Extensions capability, you need to be running Rancher v2.7.0+.
* Access to the downstream RKE2 cluster(s) you want to install STIGATRON onto.
