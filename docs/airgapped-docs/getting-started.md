# Getting Started

This will guide you through getting started with Airgapped Docs.

## Airgapped Docs Images

The images for Airgapped Docs can be found [here](https://rancherfederal.github.io/carbide-docs/docs/registry-docs/downloading-images). You'll need to pull these images using `hauler`.

### Internet-Connected Environment

If you're working in a connected environment, look [here](../registry-docs/copying-images.md) for instructions on pulling the images into your registry.

### Airgapped Environment

If you're working in an airgapped environment, look [here](../registry-docs/downloading-images.md) for instructions on pulling the images locally.

On the airgap, look [here](../registry-docs/loading-images.md) for loading the localized images into the airgapped registry.

## Airgapped Docs Helm Chart

The chart for Airgapped Docs can be found [here](../carbide-charts.md). You'll need to pull the chart using `hauler`.

## Configuring Registry Credentials

### Local Cluster

On the local cluster running Rancher Multi-cluster Manager, you'll need to configure credentials for the registry with the Airgapped Docs images. See the [Rancher Configuration](../registry-docs/rancher-config.md) on how to set up those credentials.

### Downstream Clusters

For downstream clusters, you'll need to also configure registry credentials. Depending on how RKE2 was configured and set up, there are a few ways to do this.

### Rancher-Provisioned Cluster

If you provisioned or are provisioning RKE2 directly from the Rancher UI, you can configure/update that cluster with credentials.

1. Click the upper-left menu and navigate to `Cluster Management`.
2. If updating an existing cluster, select that cluster, click the 3-dot menu in the upper-right, and select `Edit Config`. If creating a new cluster, just click `Create` in the upper-left.
3. Once you get to the screen to update/create the cluster's node pools, scroll to the bottom under `Cluster Configuration` and find the `Registries` tab.
4. Select the second option (`Use specified private registry for Rancher System Container Images`).
5. Enter your registry hostname in the first box.
6. In the `Authentication` box, select `Create a HTTP Basic Auth Secret` and enter your credentials.

- For future clusters using the same registry, you can just select existing secret.

7. Click `Save`.

![Rancher Registry Configuration](/img/registry-configuration.png)

8. Wait for cluster to reconcile.

### Imported Cluster

If you're working with a cluster that was imported or is to be imported into the Rancher MCM, you'll need to update the containerd `registries.yaml` file on every node, substituting your registry hostname and credentials:

```bash
# /etc/rancher/k3s/registries.yaml
# /etc/rancher/rke2/registries.yaml
configs:
  "<registry-url>":
    auth:
      username: <redacted>
      password: <redacted>
```
