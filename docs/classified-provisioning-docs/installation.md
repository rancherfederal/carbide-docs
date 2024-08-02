# Installation

## Bundle Artifacts in Connected Environment

In a connected environment, utilize the `hauler` CLI to verify and collect the Classified Provisioning images from the Carbide registry.

1. Download the Carbide public key.

    ```bash
    # Download the public key for Carbide
    curl -sfOL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub
    ```

1. Create the Hauler manifest file.

    ```bash
    cat <<EOT > /tmp/manifest.yaml
    apiVersion: content.hauler.cattle.io/v1alpha1
    kind: Images
    metadata:
      name: carbide-rancher-extra
      annotations:
        hauler.dev/key: "/tmp/carbide-key.pub"
    spec:
      images:
        - name: "rgcrprod.azurecr.us/rancher/machine:v0.15.0-rancher112-carbide-1"
        - name: "rgcrprod.azurecr.us/rancher/rancher:v2.8.5-carbide-1"
        - name: "rgcrprod.azurecr.us/rancher/rancher-agent:v2.8.5-carbide-1"
    EOT
    ```

    **NOTE**: If deploying to a different architecture than the server used to pull your images, be sure to set the `hauler.dev/platform` annotation. For instance:

    ```yaml
    apiVersion: content.hauler.cattle.io/v1alpha1
    kind: Images
    metadata:
      name: carbide-rancher-extra
      annotations:
        hauler.dev/key: "/tmp/carbide-key.pub"
        hauler.dev/platform: "linux/amd64"
    spec:
      images:
        - name: "rgcrprod.azurecr.us/rancher/machine:v0.15.0-rancher112-carbide-1"
        - name: "rgcrprod.azurecr.us/rancher/rancher:v2.8.5-carbide-1"
        - name: "rgcrprod.azurecr.us/rancher/rancher-agent:v2.8.5-carbide-1"
    ```

2. Login into the Carbide registry, then validate & pull the images to the local Hauler store.

    ```bash
    hauler login -u <redacted> -p <redacted> rgcrprod.azurecr.us
    hauler store sync --files /tmp/manifest.yaml
    hauler store save --filename carbide-provisioning-images.tar.zst
    ```

3. Move the resulting `carbide-provisioning-images.tar.zst` file into your air-gapped, classified environment. 

## Copy Files to Your Classified Registry

1. Copy the `carbide-provisioning-images.tar.zst` and the `hauler` CLI to a server in your classified environment. Ensure `hauler` is added to your PATH.

2. Load the bundle to the local store & copy the images to your registry.

    ```bash
    hauler login -u <redacted> -p <redacted> registry.url.example.com
    hauler store load carbide-provisioning-images.tar.zst
    hauler store copy registry://registry.url.example.com
    ```

## Update Your Rancher Installation

1. Using `helm` and the [airgapped Rancher chart tarball](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha), upgrade your existing Rancher installation with the new tag.

    ```bash
    helm upgrade -n cattle-system --reuse-values --set rancherImageTag=v2.8.5-carbide-1 rancher rancher-2.8.5.tgz
    ```

For more information about Air-gaped Installation of Rancher, see the [Rancher air-gapped](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install) docs.

