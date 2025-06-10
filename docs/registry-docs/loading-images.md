# Loading Images to a Registry

Once you've downloaded your desired images from the Carbide Secured Registry (CSR), follow these steps to load copy the content to your airgapped registry. 

These instructions assume you have [downloaded the images](downloading-images.md) and transferred the tarballs to your airgapped environment.

This example uses [Hauler](https://docs.hauler.dev/docs/intro), but any tool with the ability to push/pull an OCI image will be adequate.

## Adding Images to Airgap Registry

### Carbide

**1. Load content from the tarball to the Hauler store.**
```bash
hauler store load --store carbide-store carbide-images.tar.zst
```

**2. Copy the content from the Hauler store to your registry.**

```bash
hauler store copy --store carbide-store --username <redacted> --password <redacted> registry://<registry-url>
```

### Rancher

Load from tarball:

```bash
hauler store load --store rancher-store rancher-images.tar.zst
```

Copy to registry:

```bash
hauler store copy --store rancher-store --username <redacted> --password <redacted> registry://<registry-url>
```

### Cert Manager

Load from tarball:

```bash
hauler store load --store certmanager-store certmanager-images.tar.zst
```

Copy to registry:

```bash
hauler store copy --store certmanager-store --username <redacted> --password <redacted> registry://<registry-url>
```

### RKE2

Load from tarball:

```bash
hauler store load --store rke2-store rke2-images.tar.zst
```

Copy to registry:

```bash
hauler store copy --store rke2-store --username <redacted> --password <redacted> registry://<registry-url>
```

### K3s

Load from tarball:

```bash
hauler store load --store k3s-store k3s-images.tar.zst
```

Copy to registry:

```bash
hauler store copy --store k3s-store --username <redacted> --password <redacted> registry://<registry-url>
```

### Harvester

Load from tarball:

```bash
hauler store load --store harvester-store harvester-images.tar.zst
```

Copy to registry:

```bash
hauler store copy --store harvester-store --username <redacted> --password <redacted> registry://<registry-url>
```

### Longhorn

Load from tarball:

```bash
hauler store load --store longhorn-store longhorn-images.tar.zst
```

Copy to registry:

```bash
hauler store copy --store longhorn-store --username <redacted> --password <redacted> registry://<registry-url>
```

### NeuVector

Load from tarball:

```bash
hauler store load --store neuvector-store neuvector-images.tar.zst
```

Copy to registry:

```bash
hauler store copy --store neuvector-store --username <redacted> --password <redacted> registry://<registry-url>
```

### Kubewarden

Load from tarball:

```bash
hauler store load --store kubewarden-store kubewarden-images.tar.zst
```

Copy to registry:

```bash
hauler store copy --store kubewarden-store --username <redacted> --password <redacted> registry://<registry-url>
```

### Application Collection

Load from tarball:

```bash
hauler store load --store application-store application.tar.zst
```

Copy to registry:

```bash
hauler store copy --store application-store --username <redacted> --password <redacted> registry://<registry-url>
```