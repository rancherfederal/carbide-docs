# Loading Images to a Registry

This page will walk you through seeding your registry with local images from the hardened registry for all Rancher components.

Make sure you've checked out the section on [Downloading Images](downloading-images.md) and that you've airgapped the tarballs onto your network.

## Carbide

```bash
# load the content from the tarball to the hauler store
hauler store load carbide-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://harbor.example.com
```

## K3s

```bash
# load the content from the tarball to the hauler store
hauler store load k3s-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://harbor.example.com
```

## RKE2

```bash
# load the content from the tarball to the hauler store
hauler store load rke2-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://harbor.example.com
```

## Rancher

### Cert Manager

```bash
# load the content from the tarball to the hauler store
hauler store load cert-manager-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://harbor.example.com
```

### Rancher

```bash
# load the content from the tarball to the hauler store
hauler store load rancher-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://harbor.example.com
```

## Longhorn

```bash
# load the content from the tarball to the hauler store
hauler store load longhorn-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://harbor.example.com
```

## NeuVector

```bash
# load the content from the tarball to the hauler store
hauler store load neuvector-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://harbor.example.com
```

## Kubewarden

```bash
# load the content from the tarball to the hauler store
hauler store load kubewarden-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://harbor.example.com
```
