# Downloading the Images

This page will walk you through locally downloading our secured images from our hardened registry, as well as packaging them to move over an airgap into your registry.

If you're hauling images into a connected registry, check the documentation [here](copying-images.md).

## Downloading Secured Images

### Carbide

**NOTE:** We are actively working to improve the collection and formatting of the below procceses. Additionally, please see the [Hauler Docs](https://rancherfederal.github.io/hauler-docs/docs/guides-references/hauler-content/images) for how to specify a specific platform.

```bash
# generate the hauler manifest for carbide
cat <<EOF > carbide-images.yaml
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Images
metadata:
  name: carbide-images
  annotations:
    hauler.dev/key: carbide-key.pub
spec:
  images:
$(curl -sfL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-images.txt | sed '/nats/d' | sed 's/^/    - name: /')
---
apiVersion: content.hauler.cattle.io/v1alpha1
kind: Images
metadata:
  name: carbide-dependency-images
spec:
  images:
$(curl -sfL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-images.txt | sed '/rgcr/d' | sed 's/^/    - name: /')
EOF

# fetch the content from generated hauler manifest
# verify the location of the key and the platform/architecture
# key verification is not used here due to natsio images not being signed
hauler store sync --store carbide-store --files carbide-images.yaml --platform <platform/arch>

# save and output the content from the hauler store to tarball
hauler store save --store carbide-store --filename carbide-images.tar.zst
```

### K3s

```bash
# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --store k3s-store --products k3s=v1.27.12-k3s1 --key carbide-key.pub --platform <platform/arch>

# save and output the content from the hauler store to tarball
hauler store save --store k3s-store --filename k3s-images.tar.zst
```

### RKE2

```bash
# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --store rke2-store --products rke2=v1.27.12+rke2r1 --key carbide-key.pub --platform <platform/arch>

# save and output the content from the hauler store to tarball
hauler store save --store rke2-store --filename rke2-images.tar.zst
```

### Rancher

#### Cert Manager

```bash
# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --store certmanager-store --products cert-manager=v1.14.4 --key carbide-key.pub --platform <platform/arch>

# save and output the content from the hauler store to tarball
hauler store save --store certmanager-store --filename certmanager-images.tar.zst
```

#### Rancher

```bash
# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --store rancher-store --products rancher=v2.8.3 --key carbide-key.pub --platform <platform/arch>

# save and output the content from the hauler store to tarball
hauler store save --store rancher-store --filename rancher-images.tar.zst
```

### Longhorn

```bash
# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --store longhorn-store --products longhorn=v1.6.1 --key carbide-key.pub --platform <platform/arch>

# save and output the content from the hauler store to tarball
hauler store save --store longhorn-store --filename longhorn-images.tar.zst
```

### NeuVector

```bash
# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --store neuvector-store --products neuvector=v5.3.2 --key carbide-key.pub --platform <platform/arch>

# save and output the content from the hauler store to tarball
hauler store save --store neuvector-store --filename neuvector-images.tar.zst
```

### Kubewarden

```bash
# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --store kubewarden-store --products kubewarden=kubewarden-controller-2.0.11 --key carbide-key.pub --platform <platform/arch>

# save and output the content from the hauler store to tarball
hauler store save --store kubewarden-store --filename kubewarden-images.tar.zst
```

See [Loading Local Images to Registry](loading-images.md) for information on loading the images into your airgapped registry.
