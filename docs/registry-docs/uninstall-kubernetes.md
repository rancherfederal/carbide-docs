# RKE2/K3 Uninstall

## K3s

To revert from using the Carbide Secured Images to the normal Rancher images, you simply need to follow the docs to pull the normal images and overwrite them in your registry: https://docs.k3s.io/installation/airgap

If you want to pull images from Docker Hub, you'll need to revert the `registries.yaml` configuration made [here](kubernetes-config.md#usage-with-k3s) and rerun your K3s configuration/installation command