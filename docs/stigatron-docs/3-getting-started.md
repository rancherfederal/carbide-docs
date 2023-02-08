# Getting Started

This will guide you through getting started with STIGATRON.

## STIGATRON Images

* The images for STIGATRON can be found [here](https://github.com/rancherfederal/carbide-images/releases/). You'll need to pull these images using `cosign` (we intend to improve the packaging/management of these images in an upcoming release):

### Internet-Connected Environment

If you're working in a connected environment, look [here](/carbide-docs/docs/registry-docs/pulling-images#carbide-docs) for instructions on pulling the images into your registry.

### Airgapped Environment


If you're working in a connected environment, look [here](/carbide-docs/docs/registry-docs/pulling-images#carbide-docs) for instructions on pulling the images locally.

On the airgap, look [here](/carbide-docs/docs/registry-docs/zz-serving-images) for loading the localized images into the airgapped registry.

## Configuring Registry Credentials

### Local Cluster

On the local cluster running Rancher Multi-cluster Manager, you'll need to configure credentials for the registry you've copied the STIGATRON images to. See the [Rancher Configuration](/carbide-docs/docs/registry-docs/z-rancher-config) on how to set up those credentials.

### Downstream RKE2 Clusters

For downstream RKE2 clusters, you'll need to also configure registry credentials. Depending on how RKE2 was configured and set up, there are a few ways to do this.

### Rancher-Provisioned RKE2 Cluster

If you provisioned or are provisioning RKE2 directly from the Rancher UI, you can configure/update that cluster with credentials.

1. Click the upper-left menu and navigate to `Cluster Management`.
2. If updating an existing cluster, select that cluster, click the 3-dot menu in the upper-right, and select `Edit Config`. If creating a new cluster, just click `Create` in the upper-left.
3. Once you get to the screen to update/create the cluster's node pools, scroll to the bottom under `Cluster Configuration` and find the `Registries` tab.
4. Select the second option (`Use specified private registry for Rancher System Container Images`).
5. Enter your registry hostname in the first box.
6. In the `Authentication` box, select `Create a HTTP Basic Auth Secret` and enter your credentials.
  * For future clusters using the same registry, you can just select existing secret.
7. Click `Save`.

  ![Rancher Registry Configuration](/img/stigatron/registry-configuration.png)

8. Wait for cluster to reconcile.

### Imported RKE2 Cluster

If you're working with a cluster that was imported or is to be imported into the Rancher MCM, you'll need to update the containerd `registries.yaml` file on every node, substituting your registry hostname and credentials:

```bash
# /etc/rancher/rke2/registries.yaml
configs:
  "YOUR_REGISTRY_HOSTNAME":
    auth:
      username: YOUR_REGISTRY_USERNAME
      password: YOUR_REGISTRY_PASSWORD
```

## Configuring the Carbide Helm Repo

### Internet-Connected
```
helm repo add carbide-charts https://rancherfederal.github.io/carbide-charts
helm repo update
helm search repo carbide-charts
helm install example-release carbide-charts/<chart>
```

### Air-Gap
```
helm repo add carbide-charts https://rancherfederal.github.io/carbide-charts
helm repo update
helm search repo carbide-charts
helm pull carbide-charts/<chart>
```

Take the resulting `tgz` file over the airgap, then on the airgapped device:
```
helm install example-release <chart-x.y.z>.tgz
```

