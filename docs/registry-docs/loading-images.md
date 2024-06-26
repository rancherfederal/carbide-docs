# Loading Images to a Registry

This page will walk you through seeding your registry with downloaded images from the CSR for all Rancher components.

> This demonstration will be using `hauler`, but any tool with the ability to push/pull an oci image will be adequate.

This assumes you've followed the [downloading images](downloading-images.md) section and that you've transferred your tarballs to your airgapped environment.

## Carbide

```bash
# load the content from the tarball to the hauler store
hauler store load --store carbide-store carbide-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --store carbide-store --username <redacted> --password <redacted> registry://<registry-url>
```

## K3s

```bash
# load the content from the tarball to the hauler store
hauler store load --store k3s-store k3s-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --store k3s-store --username <redacted> --password <redacted> registry://<registry-url>
```

## RKE2

```bash
# load the content from the tarball to the hauler store
hauler store load --store rke2-store rke2-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --store rke2-store --username <redacted> --password <redacted> registry://<registry-url>
```

## Rancher

### Cert Manager

```bash
# load the content from the tarball to the hauler store
hauler store load --store certmanager-store certmanager-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --store certmanager-store --username <redacted> --password <redacted> registry://<registry-url>
```

### Rancher

```bash
# load the content from the tarball to the hauler store
hauler store load --store rancher-store rancher-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --store rancher-store --username <redacted> --password <redacted> registry://<registry-url>
```

## Longhorn

```bash
# load the content from the tarball to the hauler store
hauler store load --store longhorn-store longhorn-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --store longhorn-store --username <redacted> --password <redacted> registry://<registry-url>
```

## NeuVector

```bash
# load the content from the tarball to the hauler store
hauler store load --store neuvector-store neuvector-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --store neuvector-store --username <redacted> --password <redacted> registry://<registry-url>
```

## Kubewarden

```bash
# load the content from the tarball to the hauler store
hauler store load --store kubewarden-store kubewarden-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --store kubewarden-store --username <redacted> --password <redacted> registry://<registry-url>
```
