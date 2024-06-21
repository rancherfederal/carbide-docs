# Copying Images to a Registry

This page will walk you through copying our secured images into your own registry for later use.

If you're hauling images into an airgapped registry, check the documentation [here](downloading-images.md).

## Setup

```bash
# authenticate into carbide secured registry
hauler login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# download the public key for carbide
curl -sfOL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub
```

## Copying Secured Images

**NOTE:** We are actively working to improve the collection and formatting of the below procceses. Additionally, please see the [Hauler Docs](https://rancherfederal.github.io/hauler-docs/docs/guides-references/hauler-content/images) for how to specify a specific platform.
### Carbide

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

# copy the content from the hauler store to your registry
hauler store copy --store carbide-store --username <redacted> --password <redacted> registry://<registry-url>
```

### K3s

```bash
# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --store k3s-store --products k3s=v1.27.12-k3s1 --key carbide-key.pub --platform <platform/arch>

# copy the content from the hauler store to your registry
hauler store copy --store k3s-store --username <redacted> --password <redacted> registry://<registry-url>
```

### RKE2

```bash
# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --store rke2-store --products rke2=v1.27.12+rke2r1 --key carbide-key.pub --platform <platform/arch>

# copy the content from the hauler store to your registry
hauler store copy --store rke2-store --username <redacted> --password <redacted> registry://<registry-url>
```
### Rancher

#### Cert Manager

```bash
# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --store certmanager-store --products cert-manager=v1.14.4 --key carbide-key.pub --platform <platform/arch>

# copy the content from the hauler store to your registry
hauler store copy --store certmanager-store --username <redacted> --password <redacted> registry://<registry-url>
```

#### Rancher

```bash
# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --store rancher-store --products rancher=v2.8.3 --key carbide-key.pub --platform <platform/arch>

# copy the content from the hauler store to your registry
hauler store copy --store rancher-store --username <redacted> --password <redacted> registry://<registry-url>
```

### Longhorn

```bash
# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --store longhorn-store --products longhorn=v1.6.1 --key carbide-key.pub --platform <platform/arch>

# copy the content from the hauler store to your registry
hauler store copy --store longhorn-store --username <redacted> --password <redacted> registry://<registry-url>
```

### NeuVector

```bash
# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --store neuvector-store --products neuvector=v5.3.2 --key carbide-key.pub --platform <platform/arch>

# copy the content from the hauler store to your registry
hauler store copy --store neuvector-store --username <redacted> --password <redacted> registry://<registry-url>
```

### Kubewarden

```bash
# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --store kubewarden-store --products kubewarden=kubewarden-controller-2.0.11 --key carbide-key.pub --platform <platform/arch>

# copy the content from the hauler store to your registry
hauler store copy --store kubewarden-store --username <redacted> --password <redacted> registry://<registry-url>
```
