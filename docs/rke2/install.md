# Install RKE2 from the Carbide Registry

## Save the Artifacts

You can use the open source airgap tool [Hauler](https://docs.hauler.dev/docs/intro) to aggregate and transport the RKE2 artifacts. Follow the [Hauler installation instructions](https://docs.hauler.dev/docs/introduction/install), then proceed with the following steps. This pattern is repeatable for other artifacts you may want to bring into your airgapped environment.

These steps assume you have already created nodes in your air-gap environment, and are using the bundled containerd as the container runtime.

1. On your connected machine, sync the required artifacts for your desired RKE2 version. The Carbide product manifest includes the images, binary, and extra artifacts required such as the install script and shasum files so you have everything you'll need in the airgap.

```bash
 hauler store sync --products rke2=v1.34.5+rke2r1 --platform linux/amd64 --product-registry registry.ranchercarbide.dev
```

Sync commands and image lists can be found on the [Carbide portal](https://portal.ranchercarbide.dev/product/rke2).

2. Save the Hauler store to a file. The `--containerd` flag ensures the tarball is compatible if copied directly into containerd. 

```bash
hauler store save --filename haul.tar.zst --containerd
```

## Copy the Images

1. On your airgap machine with the Hauler CLI installed, and .tar.zst file available, load the stored content.

```bash
hauler store load haul.tar.zst
```
2. You copy the Hauler store content directly to the images directory. For RKE2, ensure the directory `/var/lib/rancher/rke2/agent/images/` exists on the node. Then run:

```bash
hauler store copy dir://var/lib/rancher/rke2/agent/images/
```

3. If you have a private registry available, you can also copy the artifacts using Hauler. If the registry is authenticated, login with `hauler store login <airgap.private.registry> -u <username> -p <password>` first.

```bash
hauler store copy registry://airgap.private.registry
```

## Script Install

1. Run the install script, setting `INSTALL_RKE2_ARTIFACT_PATH` to the directory which contains your RKE2 install artifacts from the Hauler store. 

```bash
INSTALL_RKE2_ARTIFACT_PATH=/root/rke2-artifacts sh install.sh
```

2. Enable and start the rke2 server service.

```bash 
systemctl enable rke2-server.service && systemctl start rke2-server.service
```

3. Watch the logs:

```bash
journalctl -u rke2-server -f
```

## Binary Install

1. Place the binary file `rke2-binary:v1.34.5-rke2r1` in /usr/local/bin on each node and ensure it's executable.

2. Run the binary with desired parameters. If using a private registry, set:

```bash
system-default-registry: "airgap.private.registry"
```