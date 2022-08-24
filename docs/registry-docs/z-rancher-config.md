# Rancher Manager Configuration

## Compatibility Matrix
| Infra           | Provisioner                  | Registry Auth Strategy                                           | Test Status |
|-----------------|------------------------------|------------------------------------------------------------------|-------------|
| *               | Self-install                 | Global Registry (Rancher)                                        |             |
| AWS-EKS         | Rancher                      | ECR (public or IAM)                                              |             |
| * (non eks/aks) | Rancher (Cloud provisioner)  | Global Registry (Rancher)                                        |             |
| * (non eks/aks) | Rancher (Custom provisioner) | Authenticated Registry requires manual registries.yaml creation  |             |
| *               | Imported Cluster             | UNKNOWN                                                          |             |

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
In order to configure authentication to the CRI *before* pulling down the base kubernetes container image. To modify the system images that `k3s` or `rke2` uses upon bootstrapping, configure k3s' mirror settings as described [here](https://rancher.com/docs/k3s/latest/en/installation/private-registry/#mirrors).

The full configuration using the shared alpha account is below:

```yaml
# /etc/rancher/k3s/registries.yaml
# /etc/rancher/rke2/registries.yaml
mirrors:
  docker.io:
    endpoint:
      - "https://rgcrprod.azurecr.us"

configs:
  "rgcrprod.azurecr.us":
    auth:
      username: internal-tester-read
      password: <redacted>
```

#### `registries.yaml` Strategy 
| Scenario                    | Best practice                                                            |   
|-----------------------------|--------------------------------------------------------------------------|
| Use of a 'golden image'     | Pre-configure `registries.yaml` on golden image before host provisioning |   
| Rancher provisioned cluster | Embed a `cloud-init` file into cluster provisioning (Example below)          |   
| Ansible/Saltstack/Manual    | Pre-configure `registries.yaml` on host before cluster provisioning      |   

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
            - "https://rgcrprod.azurecr.us"

        configs:
        "rgcrprod.azurecr.us":
            auth:
            username: internal-tester-read
            password: <redacted>
    permissions: "0644"
```

### ECR + IAM

Convallis tellus id interdum velit laoreet. Neque egestas congue quisque egestas diam in arcu cursus euismod. Pellentesque sit amet porttitor eget dolor. Et tortor at risus viverra adipiscing at in. Lacinia at quis risus sed vulputate. In metus vulputate eu scelerisque felis imperdiet proin. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Eu mi bibendum neque egestas congue quisque egestas diam. Sed tempus urna et pharetra. Nibh praesent tristique magna sit.
