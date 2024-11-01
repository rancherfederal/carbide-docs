# Installation

## Bundle Artifacts in Connected Environment

In a connected environment, utilize the `hauler` CLI to verify and collect the Classified Provisioning images from the Carbide registry.

1. Download the Carbide public key.

    ```bash
    # download the public key for carbide
    curl -sfL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub -o /tmp/carbide-key.pub
    ```

1. Create the Hauler manifest file.

    ```yaml
    cat <<EOF > /tmp/carbide-provisioning-manifest.yaml
    apiVersion: content.hauler.cattle.io/v1alpha1
    kind: Images
    metadata:
      name: carbide-provisioning-images
      annotations:
        hauler.dev/key: /tmp/carbide-key.pub
        # hauler.dev/platform: linux/amd64 # only fetch specific platform/architecture
    spec:
      images:
        - name: rgcrprod.azurecr.us/rancher/machine:v0.15.0-rancher118-carbide-1
        - name: rgcrprod.azurecr.us/rancher/rancher:v2.9.3-carbide-1
        - name: rgcrprod.azurecr.us/rancher/rancher-agent:v2.9.3-carbide-1
    ---
    apiVersion: content.hauler.cattle.io/v1alpha1
    kind: Charts
    metadata:
      name: carbide-provisioning-charts
    spec:
      charts:
        - name: rancher
          repoURL: https://rancherfederal.github.io/carbide-charts
          version: 2.9.3
    EOF
    ```

2. Login into the Carbide registry with your Carbide Credentials, and then validate and fetch the images to the local `hauler` store.

    ```bash
    hauler login rgcrprod.azurecr.us -u <redacted> -p <redacted>
    hauler store sync --files /tmp/carbide-provisioning-manifest.yaml
    hauler store save --filename carbide-provisioning-images.tar.zst
    ```

3. Move the resulting `carbide-provisioning-images.tar.zst` file into your airgapped/classified environment.

## Copy Files to Your Classified Registry

1. Copy the `carbide-provisioning-images.tar.zst` and the `hauler` binary to a server in your airgapped/classified environment. Please ensure `hauler` is added to your PATH.

2. Load the bundle to the local store and copy the images to your registry.

    ```bash
    hauler login <registry-url> -u <redacted> -p <redacted>
    hauler store load carbide-provisioning-images.tar.zst
    hauler store copy registry://<registry-url>
    ```

## Update Your Rancher Installation

1. Extract the Carbide Rancher chart from the local `hauler` store and upgrade your existing Rancher installation with the new rancher image tag...

    ```bash
    hauler store extract hauler/rancher:2.9.3
    helm upgrade -i rancher rancher-2.9.3.tgz -n cattle-system --reuse-values --set rancherImageTag=v2.9.3-carbide-1
    ```

For more information about airgapped installation of Rancher, see the docs [here](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/airgapped-helm-cli-install).

