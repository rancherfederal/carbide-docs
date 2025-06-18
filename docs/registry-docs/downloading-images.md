# Downloading the Images

The Carbide Secured Registry (CSR) is not intended to be used as the primary registry for running Kubernetes clusters. Instead, follow these steps to download and package the images to move over an airgap to your own registry.

If you're copying images into a connected registry, check the documentation [here](copying-images.md).

This example uses [Hauler](https://docs.hauler.dev/docs/intro), but any tool with the ability to push/pull an OCI image will be adequate.

## Downloading Secured Images

The following steps are for pulling the multi-arch images. Please see the [Hauler Docs](https://rancherfederal.github.io/hauler-docs/docs/guides-references/hauler-content/images) for how to specify a specific platform.

If using the `hauler store sync` command from the Carbide portal, you may now select your platform in the UI and the `--platform` flag will be added to the command for you.

### Carbide

**1. Generate the Hauler manifest for Carbide.**

The Hauler manifest is a yaml file which specifies the artifacts to fetch. 

```bash
cat <<EOF > carbide-images.yaml
apiVersion: content.hauler.cattle.io/v1
kind: Images
metadata:
  name: carbide-images
spec:
  images:
$(curl -sfL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-images.txt | sed '/nats/d' | sed 's/^/    - name: /')
---
apiVersion: content.hauler.cattle.io/v1
kind: Images
metadata:
  name: carbide-dependency-images
spec:
  images:
$(curl -sfL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-images.txt | sed '/rgcr/d' | sed 's/^/    - name: /')
EOF
```
You can optionally set metadata such as platform specs and public keys in the manifest instead of through command line flags (not shown in this example). For more information on this, check out the [Hauler Manifests](https://docs.hauler.dev/docs/guides-references/hauler-manifests) guide.

**2. Fetch the content from the Hauler manifest.**

The `hauler store sync` command syncs the content specified in the manifest with the Hauler store, which can then be copied to your registry. 

Setting `--store` allows you to specify the Hauler store, in this case, `carbide-store`. You may also specify the desired platform at this step with `--platform`. 

```bash
hauler store sync --store carbide-store --files carbide-images.yaml --platform <platform/arch> --key carbide-key.pub
```

**3. Save and output the content from the Hauler store to a tarball.**

If you named your store in the previous step, specify which store you'd like to save.

Use `--filename` to name the tar file output.

```bash
hauler store save --store carbide-store --filename carbide-images.tar.zst
```

### Rancher

Carbide customers can also fetch `collections` from the CSR, which will pull all the required artifacts for a product into the Hauler store.

Installing Rancher requires Cert Manager, which can be pulled from the CSR as well.

**1. Log in to the Carbide Secured Registry.**

```bash
hauler login -u <username> -p <password> rgcrprod.azurecr.us
```

**2. Sync Rancher to your Hauler store.**

Specify the  `--products` flag with your desired version. 

```bash
hauler store sync --store rancher-store --products rancher=v2.8.3 --key carbide-key.pub --platform <platform/arch>
```

**3. Save the Hauler store as a tarball.** 
```bash
hauler store save --store rancher-store --filename rancher-images.tar.zst
```

### Cert Manager

Sync content:

```bash
hauler store sync --store certmanager-store --products cert-manager=v1.14.4 --key carbide-key.pub --platform <platform/arch>
```

Save tarball:

```bash
hauler store save --store certmanager-store --filename certmanager-images.tar.zst
```

### RKE2

Sync content:

```bash
hauler store sync --store rke2-store --products rke2=v1.27.12+rke2r1 --key carbide-key.pub --platform <platform/arch>
```

Save tarball:

```bash
hauler store save --store rke2-store --filename rke2-images.tar.zst
```

### K3s

Sync content:

```bash
hauler store sync --store k3s-store --products k3s=v1.27.12-k3s1 --key carbide-key.pub --platform <platform/arch>
```

Save tarball:

```bash
hauler store save --store k3s-store --filename k3s-images.tar.zst
```

### Harvester

Sync content:

```bash
hauler store sync --store harvester-store --products harvester=v1.4.1 --key carbide-key.pub --platform <platform/arch>
```

Save tarball:

```bash
hauler store copy --store harvester-store --filename harvester-images.tar.zst
```

### Longhorn

Sync content:

```bash
hauler store sync --store longhorn-store --products longhorn=v1.6.1 --key carbide-key.pub --platform <platform/arch>
```

Save tarball:

```bash
hauler store save --store longhorn-store --filename longhorn-images.tar.zst
```

### NeuVector

Sync content: 

```bash
hauler store sync --store neuvector-store --products neuvector=v5.3.2 --key carbide-key.pub --platform <platform/arch>
```

Save tarball:

```bash
hauler store save --store neuvector-store --filename neuvector-images.tar.zst
```

### Kubewarden

Sync content:

```bash
hauler store sync --store kubewarden-store --products kubewarden=kubewarden-controller-2.0.11 --key carbide-key.pub --platform <platform/arch>
```

Save tarball:

```bash
hauler store save --store kubewarden-store --filename kubewarden-images.tar.zst
```

See [Loading Local Images to Registry](loading-images.md) for information on loading the images into your airgapped registry.
