# Loading Local Images to Registry

This page will walk you through seeding your registry with local images from the hardened registry for all Rancher components.

## Requirements

* [Cosign](https://docs.sigstore.dev/cosign/installation/)

## Downloading images

Make sure you've checked out the section on [Downloading Images](downloading-images.md) and that you've saved your images using the save script on that page. It is required to collect the manifest that the load script will use.

**NOTE**: `cosign` requires that your target registry is secured with a valid certificate. If necessary, you may need to set-up/add the CA to your host's CA chain so it interprets the secured.

## Copying a Local Image to a Registry

Update/run the following script to load your images from the generated TAR (will work for any component TAR):
* Rancher Government Carbide - `carbide-images.tar.gz`
* K3s - `k3s-images.tar.gz`
* RKE2 - `rke2-images.tar.gz`
* Longhorn - `longhorn-images.tar.gz`
* NeuVector - `neuvector-images.tar.gz`
* Kubewarden - `kubewarden-images.tar.gz`
* Cert Manager - `cert-manager-images.tar.gz`
* Rancher - `rancher-images.tar.gz`

```bash
# Remote Registry
TARGET_REGISTRY=YOUR_REGISTRY_HERE

# Set these if your target registry requires authentication.
# TARGET_REGISTRY_USER=YOUR_REGISTRY_USER_HERE
# TARGET_REGISTRY_PASSWORD=YOUR_REGISTRY_PASSWORD_HERE

# Source and Working Files
SOURCE_TAR=IMAGE_TAR_PATH
WORKING_DIR=/tmp/images  # Change this if desired/necessary

if [[ ! -f "$SOURCE_TAR" ]]; then
    echo "ERROR: Tarball '$SOURCE_TAR' not found."
    exit 1
fi

if [[ -d "$WORKING_DIR" ]]; then
    echo "ERROR: Working directory '$WORKING_DIR' exists."
    echo "Remove it or change the value."
    exit 1
fi

if [[ ! -z $TARGET_REGISTRY_USER ]] && [[ ! -z $TARGET_REGISTRY_PASSWORD ]]; then
    cosign login -u $TARGET_REGISTRY_USER -p $TARGET_REGISTRY_PASSWORD $TARGET_REGISTRY
fi

mkdir -p "$WORKING_DIR"
tar zxf "$SOURCE_TAR" -C "$WORKING_DIR"

for image in $(cat $WORKING_DIR/manifest.txt); do
    IFS="|" read -r img_id source_image <<< $image
    dest_image=$(echo $source_image | sed "s|TARGET_REGISTRY|$TARGET_REGISTRY|g")
    cosign load --dir "$WORKING_DIR/$img_id" $dest_image
done

rm -rf $WORKING_DIR
```
