# RKE2/K3s Configuration

### Usage with `k3s`

To modify the system images that `k3s` uses upon bootstrapping, configure k3s' mirror settings as described [here](https://rancher.com/docs/k3s/latest/en/installation/private-registry/#mirrors).

The full configuration using the shared alpha account is below:

```yaml
# /etc/rancher/k3s/registries.yaml
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

NOTE: The above configuration "registers" `rgcrprod.azurecr.us` as a potential mirror for _all_ images that come from `docker.io`.  For example: `nginx:latest` will also try to mirror from `rgcrprod.azurecr.us`, but since it is not available, it will silently fallback to `docker.io/nginx:latest`.

WARNING: When validating the images with `ctr` or `crictl`, the loaded images will still maintain their pre-mirror naming (`rancher/system-agent:v0.1.1-suc:`).

### Usage with `rke2`

Similar to `k3s`, the SSF images are pulled upon bootstrapping by configuring `rke2`'s mirroring configuration as described [here](https://rke2.io).

The full configuration using the shared alpha account is below:

```yaml
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
