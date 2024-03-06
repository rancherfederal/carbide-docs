# Rancher Manager Uninstall

This page will walk you through how to uninstall Carbide Registry Images from Rancher Manager both for its own components and downstream Rancher Kubernetes clusters (RKE2/K3s).

## Reverting Cert Manager

As Rancher has a dependency on Cert Manager, you'll need to update your Helm install of Cert Manager to use the default images.

### Using Your Own Registry

If using your own registry, you simply need to [collect](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images#2-collect-the-cert-manager-image) the necessary images for cert-manager and overwrite those images in your registry.

As pods cycle, the new image should propagate across the cluster.

### Using Docker Hub Images

If you want to go back to using Docker Hub images directly, you'll need to upgrade the cert-manager installation to revert pointing to the private registry hosting the Carbide images:

```bash
helm install cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
  --version v1.7.1
```

## Registry Auth Scenarios
### Global Registry

#### Uninstall Carbide Images on Rancher (Private Registry)

If using your own registry, you simply need to collect the necessary images for Rancher and overwrite those images in your registry.

As pods cycle, the new image should propagate across the cluster.

#### Uninstall Carbide Images on Rancher (Docker Hub)

If wanting to use upgrade Docker Hub images for Rancher:

1. Log into Rancher and configure the default administrator password.
1. Click **☰ > Global Settings**.
1. Go to the setting called `system-default-registry` and choose **⋮ > Edit Setting**.
1. Click the `Use the default value` button.

**Result:** Rancher will use your private registry to pull system images.

#### Reverting Downstream Clusters to use DockerHub Images

If you want to revert downstream RKE2/K3s clusters to use DockerHub images:

1. Click **☰ > Cluster Management**.
2. On the **Clusters** page, select the 3-dot button to the right for downstream cluster you'd like to revert, and select **Edit Config**.
3. .
4. In the **Cluster Configuration** go to the **Registries** tab and click **Use default global registry for Rancher System Container Images**.
5. Click **Save**.

**Result:** The cluster will update nodepools to use DockerHub images.


### Manual `registries.yaml` configuration (`RKE2`/`k3s`)

See the [RKE2/K3s Uninstall](uninstall-kubernetes.md) documentation.

### Reverting `Rancher` Chart

Follow Rancher's [Installation Guide](https://rancher.com/docs/rancher/v2.7/en/installation/install-rancher-on-k8s), you can revert to using DockerHub images by removing values from the Helm upgrade command.

```bash
helm upgrade rancher rancher-latest/rancher \
  --namespace cattle-system \
  --set hostname=rancher.my.org \
  --set replicas=3
```