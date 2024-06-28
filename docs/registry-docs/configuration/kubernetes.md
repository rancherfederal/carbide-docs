# RKE2/K3s Configuration

This page will walk you through how to configure Rancher Kubernetes distributions (K3s, RKE2) to utilize the secured images instead of the upstream Docker hub images.

### Usage with `k3s`

To modify the system images that `k3s` uses upon bootstrapping, configure k3s' mirror settings as described [here](https://rancher.com/docs/k3s/latest/en/installation/private-registry/#mirrors).

The full configuration using your authenticated registry is below:

```yaml
# /etc/rancher/k3s/registries.yaml
mirrors:
  docker.io:
      endpoint:
      - "https://<registry-url>"

configs:
  "<registry-url>":
    auth:
      username: <redacted>
      password: <redacted>
```

You will also need to utilize the `system-default-registry` flag when installing K3s to ensure it uses the registry. For instance:

```bash
curl -sfL https://get.k3s.io | sh -s - --system-default-registry=<registry-url>
```

### Usage with `rke2`

Similar to `k3s`, the Carbide Secured Registry (CSR) images are pulled upon bootstrapping by configuring `rke2`'s mirroring configuration as described [here](https://rke2.io).

The full configuration using the shared alpha account is below:

```yaml
# /etc/rancher/rke2/registries.yaml
mirrors:
  docker.io:
      endpoint:
      - "https://<registry-url>"

configs:
  "<registry-url>":
    auth:
      username: <redacted>
      password: <redacted>
```

You will also need to utilize the `system-default-registry` flag when installing RKE2 to ensure it uses the registry. For instance, if using the configuration file:

```bash
# /etc/rancher/rke2/config.yaml
node-name: controlplane1
write-kubeconfig-mode: 0640
system-default-registry: <registry-url>
...
```

#### `registries.yaml` Strategy Approaches

| Scenario                    | Best practice                                                            |
| --------------------------- | ------------------------------------------------------------------------ |
| Use of a 'golden machine image'     | Pre-configure `registries.yaml` on golden machine image before host provisioning |
| Rancher provisioned cluster | Embed a `cloud-init` file into cluster provisioning (Example below)      |
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
            - "https://<registry-url>"

        configs:
        "<registry-url>":
            auth:
            username: <redacted>
            password: <redacted>
    permissions: '0644'
```
