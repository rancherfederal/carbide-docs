# RKE2/K3s Configuration

### Usage with `k3s`

To modify the system images that `k3s` uses upon bootstrapping, configure k3s' mirror settings as described [here](https://rancher.com/docs/k3s/latest/en/installation/private-registry/#mirrors).

The full configuration using the shared alpha account is below:

```yaml
# /etc/rancher/k3s/registries.yaml
configs:
  "rgcrprod.azurecr.us":
    auth:
      username: internal-tester-read
      password: <redacted>
```

You will also need to utilize the `system-default-registry` flag when installing K3s to ensure it uses the registry. For instance:

```bash
curl -sfL https://get.k3s.io | sh - --system-default-registry rgcrprod.azurecr.us
```

### Usage with `rke2`

Similar to `k3s`, the SSF images are pulled upon bootstrapping by configuring `rke2`'s mirroring configuration as described [here](https://rke2.io).

The full configuration using the shared alpha account is below:

```yaml
# /etc/rancher/rke2/registries.yaml
configs:
  "rgcrprod.azurecr.us":
    auth:
      username: internal-tester-read
      password: <redacted>
```

You will also need to utilize the `system-default-registry` flag when installing RKE2 to ensure it uses the registry. For instance, if using the configuration file:

```bash
# /etc/rancher/rke2/config.yaml
node-name: controlplane1
write-kubeconfig-mode: 0640
system-default-registry: rgcrprod.azurecr.us
...
```

### Usage with `Rancher`

When installing Rancher, to utilize the private registry, you'll need to set the following values in your Helm values:

```bash
helm install rancher rancher-latest/rancher \
  --namespace cattle-system \
  --set hostname=rancher.my.org \
  --set replicas=3 \
  --set rancherImage: rgcrprod.azurecr.us/rancher/ancher
  --set systemDefaultRegistry: rgcrprod.azurecr.us

NOTE: This requires configuring your above K3s/RKE2 `registries.yaml` to work.