# RKE2/K3s Uninstall

## K3s

### Reverting to DockerHub Images (Private Registry)

If using a private registry, to revert from using the Carbide Secured Images to the normal Rancher images, you simply need to follow the docs to pull the normal images and overwrite them in your registry: https://docs.k3s.io/installation/airgap

Upon restart of your pods, they should be utilizing the upstream images.

**NOTE**: If you've configured enforcement using Kubewarden or Kyverno, be sure to disable/uninstall to avoid policy enforcement blocking DockerHub images.

### Reverting to DockerHub Images (Directly)

If you want to revert to using images directly from Docker Hub, you'll need to delete the `registries.yaml` configuration file made [here](kubernetes-config.md#usage-with-k3s).

You will also need to unset the `system-default-registry` configuration when installing K3s by re-running the `curl` command used to install K3s on each node, with the parameter unset.

For instance, if you originally ran the following when using Carbide images:

```bash
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --flannel-backend none" K3S_TOKEN=12345 sh - --system-default-registry YOUR_REGISTRY_DOMAIN_HERE
```

You'd need to run:

```bash
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --flannel-backend none" K3S_TOKEN=12345 sh - 
```

## RKE2

### Reverting to DockerHub Images (Private Registry)

If using a private registry, to revert from using the Carbide Secured Images to the normal Rancher images, you simply need to follow the docs to pull the normal images and overwrite them in your registry: https://docs.rke2.io/install/airgap

Upon restart of your pods, they should be utilizing the upstream images.

### Reverting to DockerHub Images (Directly)

If you want to revert to using images directly from Docker Hub, you'll need to delete the `registries.yaml` configuration file made [here](kubernetes-config.md#usage-with-rke2).

You'll also need to clean up the `system-default-registry` key/value from your `/etc/rancher/rke2/config.yaml` file on each node, and restart rke2.

```bash
# /etc/rancher/rke2/config.yaml
node-name: controlplane1
write-kubeconfig-mode: 0640
...
```

To restart controlplane nodes, run: `systemctl restart rke2-server`
To restart agents, run: `systemctl restart rke2-agent`

*NOTE*: For controlplane nodes, be sure to restart them one at a time.