# Installation

## Bundle Artifacts in Connected Environment

In a connected environment, utilize the `Hauler` CLI to verify and collect the Rancher Government images and helm chart from the Carbide Secured Registry.

1. Download the public key for Carbide.

    ```bash
    curl -sfL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub -o /tmp/carbide-key.pub
    ```

2. Login into the Carbide registry with your Carbide Credentials, then validate and fetch the images to the local `Hauler` store. Add the Rancher helm chart to your store, and save store as a tarball.

    ```bash
    hauler login rgcrprod.azurecr.us -u <redacted> -p <redacted>
    hauler store sync --products rancher-government=v2.10.3 --key carbide-key.pub
    hauler store add chart rancher --repo https://rancherfederal.github.io/carbide-charts --version 2.10.3
    hauler store save --filename rancher-govt.tar.zst
    ```

3. Move the resulting `rancher-govt.tar.zst` file into your airgapped/classified environment.

## Copy Files to Your Classified Registry

1. Copy the `rancher-govt.tar.zst` and the `Hauler` binary to a server in your airgapped/classified environment. Please ensure `Hauler` is added to your PATH.

2. Log in to your registry, load the bundle to the local store, and copy the images to your registry.

    ```bash
    hauler login <registry-url> -u <redacted> -p <redacted>
    hauler store load rancher-govt.tar.zst
    hauler store copy registry://<registry-url>
    ```

## Rancher Government Helm Chart

1. Add and update the helm repository.

    ```bash
    helm repo add carbide-charts https://rancherfederal.github.io/carbide-charts
    helm repo update carbide-charts
    ```

2. Update the values for your environment and set the rancherImageTag with the `-carbide-*` tag.

    ```bash
    helm install rancher carbide-charts/rancher \
    --namespace cattle-system \
    --set hostname=<rancher.my.org> \
    --set bootstrapPassword=admin \
    --set rancherImageTag=v2.10.3-carbide-1 \
    --set carbide.whitelabel.enabled=false \
    --version=v2.10.3
    ```

## Upgrade Your Rancher Installation

1. Add and update the helm repository.

    ```bash
    helm repo add carbide-charts https://rancherfederal.github.io/carbide-charts
    helm repo update carbide-charts
    ```

2. Get existing values.

    ```bash
    helm get values -n cattle-system rancher > /tmp/values.yaml
    ```

3. Update values for your environment and set rancherImageTag with the `-carbide-*` tag.

    ```bash
    helm upgrade rancher carbide-charts/rancher \
    --namespace cattle-system \
    -f /tmp/values.yaml \
    --set rancherImageTag=v2.10.3-carbide-1 \
    --set carbide.whitelabel.enabled=false \
    --version=v2.10.3
    ```

For more information about airgapped installation of Rancher, see the docs [here](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/airgapped-helm-cli-install).

