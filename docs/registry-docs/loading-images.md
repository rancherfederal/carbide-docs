# Loading Images to a Registry

This page will walk you through seeding your registry with local images from the hardened registry for all Rancher components.

Make sure you've checked out the section on [Downloading Images](downloading-images.md) and that you've airgapped the tarballs onto your network.

## Carbide

```bash
# load the content from the tarball to the hauler store
hauler store load carbide-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://<registry-url>
```

## K3s

```bash
# load the content from the tarball to the hauler store
hauler store load k3s-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://<registry-url>
```

## RKE2

```bash
# load the content from the tarball to the hauler store
hauler store load rke2-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://<registry-url>
```

## Rancher

### Cert Manager

```bash
# load the content from the tarball to the hauler store
hauler store load certmanager-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://<registry-url>
```

### Rancher

```bash
# load the content from the tarball to the hauler store
hauler store load rancher-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://<registry-url>
```

## Longhorn

```bash
# load the content from the tarball to the hauler store
hauler store load longhorn-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://<registry-url>
```

## NeuVector

```bash
# load the content from the tarball to the hauler store
hauler store load neuvector-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://<registry-url>
```

## Kubewarden

```bash
# load the content from the tarball to the hauler store
hauler store load kubewarden-images.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://<registry-url>
```
