# Rancher Configuration

This page will walk you through how to configure Rancher to use images from the CSR instead of the upstream Docker Hub images. This will apply to both its own components and downstream Rancher Kubernetes clusters (RKE2/K3s).

> **NOTE**: Due to current limitations of cloud providers, this project will not work for managing Cloud Provider clusters (AKS, EKS, GKE). If you're currently using Rancher to manage those workloads, do not use this project. We intend to improve this experience in the future.

## Compatibility Matrix

| Infra   | Provisioner                  | Registry Auth Strategy                          | Test Status |
| ------- | ---------------------------- | ----------------------------------------------- | ----------- |
| Any     | Rancher (Cloud provisioner)  | Global Registry (Rancher)                       | Validated   |
| Any     | Rancher (Custom provisioner) | Authenticated Registry (Manual registries.yaml) | Validated   |
| Any     | Self Installation            | Global Registry (Rancher)                       | Validated   |
| Any     | Imported Cluster             | Unknown                                         |             |
| AWS-EKS | Rancher                      | ECR (public or private)                         |             |

### Preliminary Setup

As Rancher has a dependency on Cert Manager, you'll need to update/install Cert Manager with the images provided by the CSR.

If you're following Rancher's [connected installation](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster#4-install-cert-manager) instructions, you'll need to follow the steps below to use the Carbide Secured Registry (CSR) images for cert-manager.

If using the [airgapped installation](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha) instructions, make sure you've pulled the images to your local/airgapped registry.

#### Configuring Cert Manager

Follow Rancher's [connected installation](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster#4-install-cert-manager) instructions, but using the following steps instead of the `helm install` command from the docs.

After adding the Cert Manager repo and installing the CRDs, use the following to create a temporary `values.yaml` for your chart, subsituting your registry domain:

```
cat <<EOT > /tmp/values.yaml
image:
  registry: <registry-url>
  repository: jetstack/cert-manager-controller

webhook:
  image:
    registry: <registry-url>
    repository: jetstack/cert-manager-webhook

cainjector:
  image:
    registry: <registry-url>
    repository: jetstack/cert-manager-cainjector

startupapicheck:
  image:
    registry: <registry-url>
    repository: jetstack/cert-manager-startupapicheck

acmesolver:
  image:
    registry: <registry-url>
    repository: jetstack/cert-manager-acmesolver
EOT
```

Then use the following `helm install` command to use the images:

```
helm install cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
  --version v1.14.4 \
  -f /tmp/values.yaml
```

## Registry Auth Strategies

### Global Registry (Rancher)

#### Existing Rancher Installations

##### Setting a Private Registry with No Credentials as the Default Registry

1. Log into Rancher and configure the default administrator password.
1. Click **☰ > Global Settings**.
1. Go to the setting called `system-default-registry` and choose **⋮ > Edit Setting**.
1. Change the value to your registry (e.g. `registry.yourdomain.com:port`). Do not prefix the registry with `http://` or `https://`.

**Result:** Rancher will use your private registry to pull system images.

##### Setting a Private Registry with Credentials when Deploying a Cluster

You can follow these steps to configure a private registry when you create a cluster:

1. Click **☰ > Cluster Management**.
1. On the **Clusters** page, click **Create**.
1. Choose a cluster type.
1. In the **Cluster Configuration** go to the **Registries** tab and click **Pull images for Rancher from a private registry**.
1. Enter the registry hostname and credentials.
1. Click **Create**.

**Result:** The new cluster will be able to pull images from the private registry.

#### New Rancher Installations

Follow Rancher's [Installation Guide](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster), making sure to use the carbide chart obtained in the previous [helm chart](../carbide-charts.md) section.

When installing Rancher, to utilize the private registry, you'll need to set the following values in your helm values:

```bash
helm install rancher carbide-charts/rancher \
  --namespace cattle-system \
  --set hostname=rancher.my.org \
  --set replicas=3 \
  --set rancherImage=<registry-url>/rancher/rancher
  --set systemDefaultRegistry=<registry-url>
```

> **NOTE:** This requires configuring RKE2/K3s `registries.yaml` to work. See the [RKE2/K3s configuration](../configuration/kubernetes.md) section for more details.

###  Authenticated Registry (Manual registries.yaml)

See the [RKE2/K3s configuration](../configuration/kubernetes.md) section for more details.
