# Validating Images in an Airgap

This will guide you through validating the signatures and attestations of each image within an airgapped environments.

## Validating Local Images

### Individual Image

To validate a single image that was packaged and brought over the airgap utilizing `cosign save`, you can use the following, substituting the directory containing the saved image:

```bash
IMAGE=UPDATE_TO_LOCAL_IMAGE_DIRECTORY

# Verify the image
cosign verify --key $KEY --local-image $IMAGE

# Verify the SBOM
cosign verify --key $KEY --local-image $IMAGE --attachment sbom

# Verify Vulnerability Scan
cosign verify-attestation --key $KEY --local-image $IMAGE --type vuln > /dev/null
```

### Compressed Package of Images

If using the [download script](downloading-images.md#downloading-release-images) to download packages of images, you can use the following script to validate all images of the package. It might be best to output to a file for further inspection, especially with a package containing a lot of images like Rancher:

```bash
# SSF Public Key
KEY=/tmp/ssf-key.pub

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

mkdir -p "$WORKING_DIR"
tar zxf "$SOURCE_TAR" -C "$WORKING_DIR"

for image in $WORKING_DIR/*; do
    if [ -d "$image" ]; then
        echo "---"
        echo "Image Verification:"
        cosign verify --key $KEY --local-image $image
        echo ""
        echo "SBOM Verification:"
        cosign verify --key $KEY --local-image $image --attachment sbom
        echo ""
        echo "Vulnerability Scan Verification:"
        cosign verify-attestation --key $KEY --local-image $image --type vuln > /dev/null
    fi
done

rm -rf $WORKING_DIR
```

Example usage, assuming you've saved the above into a script file:

```bash
sh /tmp/verify-local-images.sh > /tmp/results.txt
cat /tmp/results.txt
```

## Validating Images in Airgapped Registry

You should be able to validate images in an airgapped registry using the normal [Validating Images](validating-images.md) documentation, just substituting your local registry and credentials.