# Copying Images to a Registry

This page will walk you through how you can copy the secured images from the hardened registry into another registry within a connected environment.

If you're copying images into an airgap, check the documents [here](downloading-images.md).

## Carbide

```bash
# authenticate into carbide secured registry
cosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --products carbide=v0.1.1 --key carbide-key.pub --platform linux/amd64

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://harbor.example.com
```

## K3s

```bash
# authenticate into carbide secured registry
cosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --products k3s=v1.26.13-k3s2 --key carbide-key.pub --platform linux/amd64

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://harbor.example.com
```

## RKE2

```bash
# authenticate into carbide secured registry
cosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --products rke2=v1.26.13+rke2r1 --key carbide-key.pub --platform linux/amd64

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://harbor.example.com
```

## Rancher

### Cert Manager

```bash
# authenticate into carbide secured registry
cosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --products cert-manager=v1.14.1 --key carbide-key.pub --platform linux/amd64

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://harbor.example.com
```

### Rancher

```bash
# authenticate into carbide secured registry
cosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --products rancher=v2.8.2 --key carbide-key.pub --platform linux/amd64

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://harbor.example.com
```

## Longhorn

```bash
# authenticate into carbide secured registry
cosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --products longhorn=v1.6.0 --key carbide-key.pub --platform linux/amd64

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://harbor.example.com
```

## NeuVector

```bash
# authenticate into carbide secured registry
cosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --products neuvector=v5.3.0 --key carbide-key.pub --platform linux/amd64

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://harbor.example.com
```

## Kubewarden

```bash
# authenticate into carbide secured registry
cosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --products kubewarden=v2.0.8 --key carbide-key.pub --platform linux/amd64

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://harbor.example.com
```
