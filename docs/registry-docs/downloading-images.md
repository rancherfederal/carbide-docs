# Downloading the Images

This page will walk you through how you can locally download secured images from the hardened registry and package them to move over an airgap to your registry.

If you're copying images into a connected registry, check the documents [here](copying-images.md).

## Carbide

**NOTE:** We are actively working to improve the collection and formatting of the below procceses. Additionally, please see the [Hauler Docs](https://rancherfederal.github.io/hauler-docs/docs/guides-references/hauler-content/images) for how to specify a specific platform.

```bash
# authenticate into carbide secured registry
hauler login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# download the public key for carbide
curl -sfOL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub

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
hauler store sync --files carbide-images.yaml --store carbide-store

# save and output the content from the hauler store to tarball
hauler store save --filename carbide-images.tar.zst
```

## K3s

```bash
# authenticate into carbide secured registry
hauler login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# download the public key for carbide
curl -sfOL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub

# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --products k3s=v1.27.12-k3s1 --key carbide-key.pub --store k3s-store

# save and output the content from the hauler store to tarball
hauler store save --filename k3s-images.tar.zst
```

## RKE2

```bash
# authenticate into carbide secured registry
hauler login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# download the public key for carbide
curl -sfOL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub

# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --products rke2=v1.27.12+rke2r1 --key carbide-key.pub --store rke2-store

# save and output the content from the hauler store to tarball
hauler store save --filename rke2-images.tar.zst
```

## Rancher

### Cert Manager

```bash
# authenticate into carbide secured registry
hauler login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# download the public key for carbide
curl -sfOL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub

# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --products cert-manager=v1.14.4 --key carbide-key.pub --store certmanager-store

# save and output the content from the hauler store to tarball
hauler store save --filename certmanager-images.tar.zst
```

### Rancher

```bash
# authenticate into carbide secured registry
hauler login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# download the public key for carbide
curl -sfOL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub

# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --products rancher=v2.8.3 --key carbide-key.pub --store rancher-store

# save and output the content from the hauler store to tarball
hauler store save --filename rancher-images.tar.zst
```

## Longhorn

```bash
# authenticate into carbide secured registry
hauler login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# download the public key for carbide
curl -sfOL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub

# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --products longhorn=v1.6.1 --key carbide-key.pub --store longhorn-store

# save and output the content from the hauler store to tarball
hauler store save --filename longhorn-images.tar.zst
```

## NeuVector

```bash
# authenticate into carbide secured registry
hauler login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# download the public key for carbide
curl -sfOL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub

# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --products neuvector=v5.3.2 --key carbide-key.pub --store neuvector-store

# save and output the content from the hauler store to tarball
hauler store save --filename neuvector-images.tar.zst
```

## Kubewarden

```bash
# authenticate into carbide secured registry
hauler login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# download the public key for carbide
curl -sfOL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub

# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --products kubewarden=kubewarden-controller-2.0.11 --key carbide-key.pub --store kubewarden-store

# save and output the content from the hauler store to tarball
hauler store save --filename kubewarden-images.tar.zst
```

See [Loading Local Images to Registry](loading-images.md) for information on loading the images into your airgapped registry.
