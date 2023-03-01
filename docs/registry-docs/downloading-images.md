# Downloading Release Images

This page will walk you through how you can locally download secured images from the hardened registry and package them to move over an airgap.

## Requirements

* [Cosign](https://docs.sigstore.dev/cosign/installation/)
* [Helm](https://helm.sh/docs/intro/install/) (For Cert Manager Only)

## Carbide

```bash
# Carbide Registry
SOURCE_REGISTRY=rgcrprod.azurecr.us
SOURCE_REGISTRY_USER=YOUR_CARBIDE_USER
SOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS

# Working directories & TAR
DEST_DIRECTORY=/tmp/carbide-images
DEST_TAR=/tmp/carbide-images.tar.gz  # Change this to the location you want for your resulting TAR 

# Carbide Version
CARBIDE_RELEASE=0.1.0

if [[ -d "$DEST_DIRECTORY" ]]; then
    echo "ERROR: Directory '$DEST_DIRECTORY' exists."
    echo "Change or delete it before running."
    exit 1
fi

if [[ -d "$DEST_TAR" ]]; then
    echo "ERROR: Directory '$DEST_TAR' exists."
    echo "Change or delete it before running."
    exit 1
fi

cosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY
mkdir -p "$DEST_DIRECTORY"

CARBIDE_IMAGES=$(curl --silent -L https://github.com/rancherfederal/carbide-releases/releases/download/$CARBIDE_RELEASE/carbide-images.txt)
for image in $CARBIDE_IMAGES; do
    source_image=$(echo $image)
    dest_image=$(echo $image | sed "s|rgcrprod.azurecr.us|TARGET_REGISTRY|g")
    
    # Create manifest to use during load
    img_id_num=$(mktemp -d XXXXXXXXXXXXXXXXXXXX)
    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt
    
    # Save image locally
    mkdir $DEST_DIRECTORY/$img_id_num
    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image
done

# Compress directory
tar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .

# Clean up working directory
rm -rf $DEST_DIRECTORY
```

## K3s

```bash
# Carbide Registry
SOURCE_REGISTRY=rgcrprod.azurecr.us
SOURCE_REGISTRY_USER=YOUR_CARBIDE_USER
SOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS

# Working directories & TAR
DEST_DIRECTORY=/tmp/k3s-images
DEST_TAR=/tmp/k3s-images.tar.gz  # Change this to the location you want for your resulting TAR 

# K3s Version
K3S_RELEASE=v1.24.4+k3s1

if [[ -d "$DEST_DIRECTORY" ]]; then
    echo "ERROR: Directory '$DEST_DIRECTORY' exists."
    echo "Change or delete it before running."
    exit 1
fi

if [[ -d "$DEST_TAR" ]]; then
    echo "ERROR: Directory '$DEST_TAR' exists."
    echo "Change or delete it before running."
    exit 1
fi

cosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY
mkdir -p "$DEST_DIRECTORY"

K3S_IMAGES=$(curl --silent -L https://github.com/k3s-io/k3s/releases/download/$K3S_RELEASE/k3s-images.txt)
for image in $K3S_IMAGES; do
    source_image=$(echo $image | sed "s|docker.io|$SOURCE_REGISTRY|g")
    dest_image=$(echo $image | sed "s|docker.io|TARGET_REGISTRY|g")
    
    # Create manifest to use during load
    img_id_num=$(mktemp -d XXXXXXXXXXXXXXXXXXXX)
    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt
    
    # Save image locally
    mkdir $DEST_DIRECTORY/$img_id_num
    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image
done

# Compress directory
tar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .

# Clean up working directory
rm -rf $DEST_DIRECTORY
```

## RKE2

```bash
# Carbide Registry
SOURCE_REGISTRY=rgcrprod.azurecr.us
SOURCE_REGISTRY_USER=YOUR_CARBIDE_USER
SOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS

# Working directories & TAR
DEST_DIRECTORY=/tmp/rke2-images
DEST_TAR=/tmp/rke2-images.tar.gz  # Change this to the location you want for your resulting TAR 

# RKE2 Version
RKE2_RELEASE=v1.24.3+rke2r1

if [[ -d "$DEST_DIRECTORY" ]]; then
    echo "ERROR: Directory '$DEST_DIRECTORY' exists."
    echo "Change or delete it before running."
    exit 1
fi

if [[ -d "$DEST_TAR" ]]; then
    echo "ERROR: Directory '$DEST_TAR' exists."
    echo "Change or delete it before running."
    exit 1
fi

cosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY
mkdir -p "$DEST_DIRECTORY"

RKE2_IMAGES=$(curl --silent -L https://github.com/rancher/rke2/releases/download/$RKE2_RELEASE/rke2-images-all.linux-amd64.txt)
for image in $RKE2_IMAGES; do
    source_image=$(echo $image | sed "s|docker.io|$SOURCE_REGISTRY|g")
    dest_image=$(echo $image | sed "s|docker.io|TARGET_REGISTRY|g")
    
    # Create manifest to use during load
    img_id_num=$(mktemp -d XXXXXXXXXXXXXXXXXXXX)
    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt
    
    # Save image locally
    mkdir $DEST_DIRECTORY/$img_id_num
    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image
done

# Compress directory
tar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .

# Clean up working directory
rm -rf $DEST_DIRECTORY
```

## Longhorn

```bash
# Carbide Registry
SOURCE_REGISTRY=rgcrprod.azurecr.us
SOURCE_REGISTRY_USER=YOUR_CARBIDE_USER
SOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS

# Working directories & TAR
DEST_DIRECTORY=/tmp/longhorn-images
DEST_TAR=/tmp/longhorn-images.tar.gz  # Change this to the location you want for your resulting TAR 

# Longhorn Version
LONGHORN_RELEASE=v1.3.1

if [[ -d "$DEST_DIRECTORY" ]]; then
    echo "ERROR: Directory '$DEST_DIRECTORY' exists."
    echo "Change or delete it before running."
    exit 1
fi

if [[ -d "$DEST_TAR" ]]; then
    echo "ERROR: Directory '$DEST_TAR' exists."
    echo "Change or delete it before running."
    exit 1
fi

cosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY
mkdir -p "$DEST_DIRECTORY"


LONGHORN_IMAGES=$(curl --silent -L https://raw.githubusercontent.com/longhorn/longhorn/$LONGHORN_RELEASE/deploy/longhorn-images.txt)
for image in $LONGHORN_IMAGES; do
    source_image="$SOURCE_REGISTRY/$image"
    dest_image="TARGET_REGISTRY/$image"
    
    # Create manifest to use during load
    img_id_num=$(mktemp -d XXXXXXXXXXXXXXXXXXXX)
    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt
    
    # Save image locally
    mkdir $DEST_DIRECTORY/$img_id_num
    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image
done

# Compress directory
tar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .

# Clean up working directory
rm -rf $DEST_DIRECTORY
```

## Kubewarden

```bash
# Carbide Registry
SOURCE_REGISTRY=rgcrprod.azurecr.us
SOURCE_REGISTRY_USER=YOUR_CARBIDE_USER
SOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS

# Working directories & TAR
DEST_DIRECTORY=/tmp/kubewarden-images
DEST_TAR=/tmp/kubewarden-images.tar.gz  # Change this to the location you want for your resulting TAR 

if [[ -d "$DEST_DIRECTORY" ]]; then
    echo "ERROR: Directory '$DEST_DIRECTORY' exists."
    echo "Change or delete it before running."
    exit 1
fi

if [[ -d "$DEST_TAR" ]]; then
    echo "ERROR: Directory '$DEST_TAR' exists."
    echo "Change or delete it before running."
    exit 1
fi

cosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY
mkdir -p "$DEST_DIRECTORY"

# Add the Kubewarden repo (required Helm)
helm repo add kubewarden https://charts.kubewarden.io
helm repo update

# Grab the list of images and download them (requires docker, grep, sed, and awk)
for image in $(helm template kubewarden/kubewarden-controller | grep 'image:' | sed 's/"//g' | sed "s/'//g" | awk '{ print $2 }'); do
    source_image=$(echo $image | sed "s/ghcr.io/$SOURCE_REGISTRY/g")
    dest_image=$(echo $image | sed "s/ghcr.io/TARGET_REGISTRY/g")
    
    # Create manifest to use during load
    img_id_num=$(mktemp -d XXXXXXXXXXXXXXXXXXXX)
    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt
    
    # Save image locally
    mkdir $DEST_DIRECTORY/$img_id_num
    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image
done

for image in $(helm template kubewarden/kubewarden-defaults | grep 'image:' | sed 's/"//g' | sed "s/'//g" | awk '{ print $2 }'); do
    source_image=$(echo $image | sed "s/ghcr.io/$SOURCE_REGISTRY/g")
    dest_image=$(echo $image | sed "s/ghcr.io/TARGET_REGISTRY/g")
    
    # Create manifest to use during load
    img_id_num=$(mktemp -d XXXXXXXXXXXXXXXXXXXX)
    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt
    
    # Save image locally
    mkdir $DEST_DIRECTORY/$img_id_num
    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image
done

# Compress directory
tar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .

# Clean up working directory
rm -rf $DEST_DIRECTORY
```

## Rancher

### Cert Manager

```bash
# Carbide Registry
SOURCE_REGISTRY=rgcrprod.azurecr.us
SOURCE_REGISTRY_USER=YOUR_CARBIDE_USER
SOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS

# Working directories & TAR
DEST_DIRECTORY=/tmp/cert-manager-images
DEST_TAR=/tmp/cert-manager-images.tar.gz  # Change this to the location you want for your resulting TAR 

# Cert Manager Chart Version
CERT_MANAGER_RELEASE=v1.7.3

if [[ -d "$DEST_DIRECTORY" ]]; then
    echo "ERROR: Directory '$DEST_DIRECTORY' exists."
    echo "Change or delete it before running."
    exit 1
fi

if [[ -d "$DEST_TAR" ]]; then
    echo "ERROR: Directory '$DEST_TAR' exists."
    echo "Change or delete it before running."
    exit 1
fi

cosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY
mkdir -p "$DEST_DIRECTORY"

# Add the cert manager repo (required Helm)
helm repo add jetstack https://charts.jetstack.io
helm repo update

# Grab the list of images and download them (requires docker, grep, sed, and awk)
for image in $(helm template jetstack/cert-manager --version $CERT_MANAGER_RELEASE | grep 'image:' | sed 's/"//g' | sed "s/'//g" | awk '{ print $2 }'); do
    source_image=$(echo $image | sed "s/quay.io/$SOURCE_REGISTRY/g")
    dest_image=$(echo $image | sed "s/quay.io/TARGET_REGISTRY/g")
    
    # Create manifest to use during load
    img_id_num=$(mktemp -d XXXXXXXXXXXXXXXXXXXX)
    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt
    
    # Save image locally
    mkdir $DEST_DIRECTORY/$img_id_num
    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image
done

# Compress directory
tar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .

# Clean up working directory
rm -rf $DEST_DIRECTORY
```

### Rancher

```bash
# Carbide Registry
SOURCE_REGISTRY=rgcrprod.azurecr.us
SOURCE_REGISTRY_USER=YOUR_CARBIDE_USER
SOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS

# Working directories & TAR
DEST_DIRECTORY=/tmp/rancher-images
DEST_TAR=/tmp/rancher-images.tar.gz  # Change this to the location you want for your resulting TAR 

# Rancher Version
RANCHER_RELEASE=v2.7.1

if [[ -d "$DEST_DIRECTORY" ]]; then
    echo "ERROR: Directory '$DEST_DIRECTORY' exists."
    echo "Change or delete it before running."
    exit 1
fi

if [[ -d "$DEST_TAR" ]]; then
    echo "ERROR: Directory '$DEST_TAR' exists."
    echo "Change or delete it before running."
    exit 1
fi

cosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY
mkdir -p "$DEST_DIRECTORY"

RANCHER_IMAGES=$(curl --silent -L https://github.com/rancher/rancher/releases/download/$RANCHER_RELEASE/rancher-images.txt)
for image in $RANCHER_IMAGES; do
    source_image="$SOURCE_REGISTRY/$image"
    dest_image="TARGET_REGISTRY/$image"
    
    # Create manifest to use during load
    img_id_num=$(mktemp -d XXXXXXXXXXXXXXXXXXXX)
    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt
    
    # Save image locally
    mkdir $DEST_DIRECTORY/$img_id_num
    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image
done

# Compress directory
tar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .

# Clean up working directory
rm -rf $DEST_DIRECTORY
```

See [Validate Images in the Airgap](validating-airgap-images.md) and [Loading Local Images to Registry](loading-images.md) for information on loading these into your airgapped registry.