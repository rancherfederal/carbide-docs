# Downloading Release Images

## Requirements

* [Cosign](https://docs.sigstore.dev/cosign/installation/)
* [Helm](https://helm.sh/docs/intro/install/) (For Cert Manager Only)

## Connected Environment

### K3s

```bash
# To login with the shared credentials
cosign login -u internal-tester-read -p <redacted> rgcrprod.azurecr.us

# Your target registry (and login if it requires authentication)
TARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE
# cosign login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY  

# Set the specific release of K3s you're targeting: https://github.com/k3s-io/k3s/releases
K3S_RELEASE=v1.24.4+k3s1

K3S_IMAGES=$(curl --silent -L https://github.com/k3s-io/k3s/releases/download/$K3S_RELEASE/k3s-images.txt)
for image in $K3S_IMAGES; do
    source_image=$(echo $image | sed "s/docker.io/rgcrprod.azurecr.us/g")
    dest_image=$(echo $image | sed "s/docker.io/$TARGET_REGISTRY/g")
    cosign copy $source_image $dest_image
done
```

### RKE2

```bash
# To login with the shared credentials
cosign login -u internal-tester-read -p <redacted> rgcrprod.azurecr.us

# Your target registry (and login if it requires authentication)
TARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE
# cosign login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY  

# Set the specific release of RKE2 you're targeting: https://github.com/rancher/rke2/releases
RKE2_RELEASE=v1.24.3+rke2r1

RKE2_IMAGES=$(curl --silent -L https://github.com/rancher/rke2/releases/download/$RKE2_RELEASE/rke2-images-all.linux-amd64.txt)
for image in $RKE2_IMAGES; do
    source_image=$(echo $image | sed "s/docker.io/rgcrprod.azurecr.us/g")
    dest_image=$(echo $image | sed "s/docker.io/$TARGET_REGISTRY/g")
    cosign copy $source_image $dest_image
done
```

### Longhorn

```bash
# To login with the shared credentials
docker login -u internal-tester-read -p <redacted> rgcrprod.azurecr.us

# Your target registry (and login if it requires authentication)
TARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE
# docker login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY  

# Set the specific release of Longhorn you're targeting: https://github.com/longhorn/longhorn/releases
LONGHORN_RELEASE=v1.3.1

LONGHORN_IMAGES=$(curl --silent -L https://raw.githubusercontent.com/longhorn/longhorn/$LONGHORN_RELEASE/deploy/longhorn-images.txt)
for image in $LONGHORN_IMAGES; do
    source_image="rgcrprod.azurecr.us/$image"
    dest_image="$TARGET_REGISTRY/$image"
    cosign copy $source_image $dest_image
done
```

### Rancher

#### Cert Manager

```bash
# Log into the registry
cosign login -u internal-tester-read -p <redacted> rgcrprod.azurecr.us

# Add the cert manager repo (required Helm)
helm repo add jetstack https://charts.jetstack.io
helm repo update

# Grab the list of images and download them (requires docker, grep, sed, and awk)
for image in $(helm template jetstack/cert-manager --version v1.9.1 | grep 'image:' | sed 's/"//g' | awk '{ print $2 }'); do
    source_image=$(echo $image | sed 's/quay.io/rgcrprod.azurecr.us/g')
    dest_image=$(echo $image | sed "s/quay.io/$TARGET_REGISTRY/g")
    cosign copy $source_image $dest_image
done
```

See [Rancher Manager Configuration](z-rancher-config.md) for configuring the Cert Manager chart to use these images.

#### Rancher

```bash
# To login with the shared credentials
docker login -u internal-tester-read -p <redacted> rgcrprod.azurecr.us

# Your target registry (and login if it requires authentication)
TARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE
# docker login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY  

# Set the specific release of Rancher you're targeting: https://github.com/rancher/rancher/releases
RANCHER_RELEASE=v2.6.7

RANCHER_IMAGES=$(curl --silent -L https://github.com/rancher/rancher/releases/download/$RANCHER_RELEASE/rancher-images.txt)
for image in $RANCHER_IMAGES; do
    source_image="rgcrprod.azurecr.us/$image"
    dest_image="$TARGET_REGISTRY/$image"
    cosign copy $source_image $dest_image
done
```

## Airgapped Environments & Incompatible Registries

For airgapped environments or environments using incompatible registries that the above commands don't work for, use the following to package your images locally:

### K3s

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
    img_id_num=$(echo $RANDOM | md5sum | head -c 20)
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

### RKE2

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
    img_id_num=$(echo $RANDOM | md5sum | head -c 20)
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

### Longhorn

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
    img_id_num=$(echo $RANDOM | md5sum | head -c 20)
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

#### Cert Manager


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
for image in $(helm template jetstack/cert-manager --version $CERT_MANAGER_RELEASE | grep 'image:' | sed 's/"//g' | awk '{ print $2 }'); do
    source_image=$(echo $image | sed "s/quay.io/$SOURCE_REGISTRY/g")
    dest_image=$(echo $image | sed "s/quay.io/TARGET_REGISTRY/g")
    
    # Create manifest to use during load
    img_id_num=$(echo $RANDOM | md5sum | head -c 20)
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

#### Rancher

```bash
# Carbide Registry
SOURCE_REGISTRY=rgcrprod.azurecr.us
SOURCE_REGISTRY_USER=YOUR_CARBIDE_USER
SOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS

# Working directories & TAR
DEST_DIRECTORY=/tmp/longhorn-images
DEST_TAR=/tmp/longhorn-images.tar.gz  # Change this to the location you want for your resulting TAR 

# Longhorn Version
RANCHER_RELEASE=v2.6.7

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
    img_id_num=$(echo $RANDOM | md5sum | head -c 20)
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

See [Serving Images](zz-serving-images.md) for information on loading these into your airgapped registry.