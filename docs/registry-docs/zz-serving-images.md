# Serving Container Images

## Requirements

* [Cosign](https://docs.sigstore.dev/cosign/installation/)

## TODO

How do we compile a list of images to copy?

## Copying a Local Image to a Registry

```bash
cosign copy image-name YOUR_REGISTRY_DOMAIN_HERE/image-name
```
