# Downloading Release Images

## Requirements

* [Cosign](https://docs.sigstore.dev/cosign/installation/)

## Connected Environment

### K3s

```bash
# To login with the shared credentials
docker login -u internal-tester-read -p <redacted> rgcrprod.azurecr.us

# Your target registry (and login if it requires authentication)
TARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE
# docker login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY  

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
docker login -u internal-tester-read -p <redacted> rgcrprod.azurecr.us

# Your target registry (and login if it requires authentication)
TARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE
# docker login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY  

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
docker login -u internal-tester-read -p <redacted> rgcrprod.azurecr.us

# Add the cert manager repo (required Helm)
helm repo add jetstack https://charts.jetstack.io
helm repo update

# Grab the list of images and download them (requires docker, grep, sed, and awk)
for img in $(helm template jetstack/cert-manager --version v1.9.1 | grep 'image:' | sed 's/"//g' | awk '{ print $2 }'); do
    img=$(echo $img | sed 's/quay.io/rgcrprod.azurecr.us/g')
    docker pull $img
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
for image in $RKE2_IMAGES; do
    source_image="rgcrprod.azurecr.us/$image"
    dest_image="$TARGET_REGISTRY/$image"
    cosign copy $source_image $dest_image
done
```

## Airgapped Environments

For airgapped environments, the above logic remains the same, with one minor change.

1. Create a local directory for downloading the image, SBOM, vulnerability scans, and attestations to.

```bash
mkdir -p ~/local-images/
```

2. Change the following line in each of the above commands:

```bash
cosign copy $source_image $dest_image
```

to:

```bash
cosign save $source_image ~/local-images/
```

See [Serving Images](zz-serving-images.md) for information on loading these into your airgapped registry.