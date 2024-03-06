# Rancher Manager Configuration

This page will walk you through how to configure Rancher Manager images instead of the upstream Docker hub images, both for its own components and downstream Rancher Kubernetes clusters (RKE2/K3s).

**NOTE**: Due to current limitations of cloud providers, this project will not work for managing Cloud Provider clusters (AKS, EKS, GKE). If you're currently using Rancher to manage those workloads, do not use this project. We intend to improve this experience in the future.

## Compatibility Matrix

| Infra   | Provisioner                  | Registry Auth Strategy                          | Test Status |
| ------- | ---------------------------- | ----------------------------------------------- | ----------- |
| Any     | Rancher (Cloud provisioner)  | Global Registry (Rancher)                       | Validated   |
| Any     | Rancher (Custom provisioner) | Authenticated Registry (Manual registries.yaml) | Validated   |
| Any     | Self Installation            | Global Registry (Rancher)                       | Validated   |
| Any     | Imported Cluster             | Unknown                                         |             |
| AWS-EKS | Rancher                      | ECR (public or private)                         |             |

## Configuring Cert Manager

As Rancher has a dependency on Cert Manager, you'll need to update your Helm install of Cert Manager to use Carbide Secured Registry (CSR) images that are validated and signed by Rancher Government.

If you're following Rancher's [Connected](https://rancher.com/docs/rancher/v2.6/en/installation/install-rancher-on-k8s/#4-install-cert-manager) installation instructions, you'll need to follow the next steps to use the Carbide Secured Registry (CSR) images for cert-manager.

If using the [Airgapped](https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/air-gap/install-rancher/#1-add-the-cert-manager-repo) installation instructions, make sure you've pulled the images to your local/airgapped registry.

### Cert Manager Helm Install

Follow Rancher's [Connected](https://rancher.com/docs/rancher/v2.6/en/installation/install-rancher-on-k8s/#4-install-cert-manager) installation instructions, but using the following steps instead of the `helm install` command from the docs.

After adding the Cert Manager repo and installing the CRDs, use the following to create a temporary `values.yaml` for your chart, subsituting your registry domain:

```
cat <<EOT > /tmp/cert-manager-values.yaml
image:
  registry: YOUR_REGISTRY_DOMAIN_HERE
  repository: jetstack/cert-manager-controller

webhook:
  image:
    registry: YOUR_REGISTRY_DOMAIN_HERE
    repository: jetstack/cert-manager-webhook

cainjector:
  image:
    registry: YOUR_REGISTRY_DOMAIN_HERE
    repository: jetstack/cert-manager-cainjector

startupapicheck:
  image:
    registry: YOUR_REGISTRY_DOMAIN_HERE
    repository: jetstack/cert-manager-ctl
EOT
```

Then use the following `helm install` command to use the images:

```
helm install cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
  --version v1.7.1 \
  -f /tmp/values.yaml
```

## Registry Auth Scenarios

### Global Registry

#### Setting a Private Registry with No Credentials as the Default Registry

1. Log into Rancher and configure the default administrator password.
1. Click **☰ > Global Settings**.
1. Go to the setting called `system-default-registry` and choose **⋮ > Edit Setting**.
1. Change the value to your registry (e.g. `registry.yourdomain.com:port`). Do not prefix the registry with `http://` or `https://`.

**Result:** Rancher will use your private registry to pull system images.

#### Setting a Private Registry with Credentials when Deploying a Cluster

You can follow these steps to configure a private registry when you create a cluster:

1. Click **☰ > Cluster Management**.
1. On the **Clusters** page, click **Create**.
1. Choose a cluster type.
1. In the **Cluster Configuration** go to the **Registries** tab and click **Pull images for Rancher from a private registry**.
1. Enter the registry hostname and credentials.
1. Click **Create**.

**Result:** The new cluster will be able to pull images from the private registry.

### Manual `registries.yaml` configuration (`RKE2`/`k3s`)

In order to configure authentication to the CRI _before_ pulling down the base kubernetes container image. To modify the system images that `k3s` or `rke2` uses upon bootstrapping, configure k3s' mirror settings as described [here](https://rancher.com/docs/k3s/latest/en/installation/private-registry/#mirrors).

The full configuration using the shared alpha account is below:

```yaml
# /etc/rancher/k3s/registries.yaml
# /etc/rancher/rke2/registries.yaml
mirrors:
  docker.io:
    endpoint:
      - 'https://YOUR_REGISTRY_DOMAIN'

configs:
  'YOUR_REGISTRY_DOMAIN':
    auth:
      username: <redacted>
      password: <redacted>
```

#### `registries.yaml` Strategy

| Scenario                    | Best practice                                                            |
| --------------------------- | ------------------------------------------------------------------------ |
| Use of a 'golden image'     | Pre-configure `registries.yaml` on golden image before host provisioning |
| Rancher provisioned cluster | Embed a `cloud-init` file into cluster provisioning (Example below)      |
| Ansible/Saltstack/Manual    | Pre-configure `registries.yaml` on host before cluster provisioning      |

### Usage with `Rancher`

Follow Rancher's [Installation Guide](https://rancher.com/docs/rancher/v2.5/en/installation/install-rancher-on-k8s), adding in the following steps to use our [Carbide Helm Chart](https://github.com/rancherfederal/carbide-charts) and the `helm install` command.

When installing Rancher, to utilize the private registry, you'll need to set the following values in your Helm values:

```bash
helm repo add carbide-charts https://rancherfederal.github.io/carbide-charts
helm repo update
helm search repo carbide-charts

helm install rancher carbide-charts/rancher \
  --namespace cattle-system \
  --set hostname=rancher.my.org \
  --set replicas=3 \
  --set rancherImage=YOUR_REGISTRY_DOMAIN/rancher/rancher
  --set systemDefaultRegistry=YOUR_REGISTRY_DOMAIN
```

**NOTE:** This requires configuring your above K3s/RKE2 `registries.yaml` to work.

#### Example `cloud-init` (`RKE2`)

```yaml
# cloud-init

runcmd:
  - mkdir /etc/rancher/rke2
write_files:
  - path: /etc/rancher/rke2/registries.yaml
    content: |
      mirrors:
        docker.io:
            endpoint:
            - "https://YOUR_REGISTRY_DOMAIN"

        configs:
        "YOUR_REGISTRY_DOMAIN":
            auth:
            username: <redacted>
            password: <redacted>
    permissions: '0644'
```
