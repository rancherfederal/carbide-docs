# Copy Release Images to Registry

This page will walk you through how you can copy the secured images from the hardened registry into another registry within a connected environment.

If you're copying images into an airgap, check the documents [here](downloading-images.md).

**NOTE**: There is currently a Cosign [bug](https://github.com/sigstore/cosign/issues/2208) when using Harbor as your target registry and using the `cosign copy` command. Please utilize the Airgapped instructions if using Harbor. 

## Requirements

* [Cosign](https://docs.sigstore.dev/cosign/installation/)
* [Helm](https://helm.sh/docs/intro/install/) (For Cert Manager Only)

## Carbide

```bash
# To login with the shared credentials
cosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# Your target registry (and login if it requires authentication)
TARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE
# cosign login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY  

# Set the specific release of Carbide you're targeting: https://github.com/rancherfederal/carbide-releases/releases
CARBIDE_RELEASE=0.1.0

CARBIDE_IMAGES=$(curl --silent -L https://github.com/rancherfederal/carbide-releases/releases/download/$CARBIDE_RELEASE/carbide-images.txt)
for image in $CARBIDE_IMAGES; do
    source_image=$(echo $image)
    dest_image=$(echo $image | sed "s/rgcrprod.azurecr.us/$TARGET_REGISTRY/g")
    cosign copy $source_image $dest_image
done
```

## K3s

```bash
# To login with the shared credentials
cosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us

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

## RKE2

```bash
# To login with the shared credentials
cosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us

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

## Longhorn

```bash
# To login with the shared credentials
cosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# Your target registry (and login if it requires authentication)
TARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE
# cosign login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY  

# Set the specific release of Longhorn you're targeting: https://github.com/longhorn/longhorn/releases
LONGHORN_RELEASE=v1.3.1

LONGHORN_IMAGES=$(curl --silent -L https://raw.githubusercontent.com/longhorn/longhorn/$LONGHORN_RELEASE/deploy/longhorn-images.txt)
for image in $LONGHORN_IMAGES; do
    source_image="rgcrprod.azurecr.us/$image"
    dest_image="$TARGET_REGISTRY/$image"
    cosign copy $source_image $dest_image
done
```

## Rancher

### Cert Manager

```bash
# Log into the registry
cosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# Rancher supports v1.7.1 currently. See here for more info:
# https://ranchermanager.docs.rancher.com/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#4-install-cert-manager
CERT_MANAGER_VERSION="v1.7.1"

# Add the cert manager repo (required Helm)
helm repo add jetstack https://charts.jetstack.io
helm repo update

# Grab the list of images and download them (requires docker, grep, sed, and awk)


for image in $(helm template jetstack/cert-manager --version $CERT_MANAGER_VERSION | grep 'image:' | sed 's/"//g' | awk '{ print $2 }'); do
    source_image=$(echo $image | sed 's/quay.io/rgcrprod.azurecr.us/g')
    dest_image=$(echo $image | sed "s/quay.io/$TARGET_REGISTRY/g")
    cosign copy $source_image $dest_image
done
```

See [Rancher Manager Configuration](rancher-config.md) for configuring the Cert Manager chart to use these images.

### Rancher

```bash
# To login with the shared credentials
cosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# Your target registry (and login if it requires authentication)
TARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE
# cosign login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY  

# Set the specific release of Rancher you're targeting: https://github.com/rancher/rancher/releases
RANCHER_RELEASE=v2.7.1

RANCHER_IMAGES=$(curl --silent -L https://github.com/rancher/rancher/releases/download/$RANCHER_RELEASE/rancher-images.txt)
for image in $RANCHER_IMAGES; do
    source_image="rgcrprod.azurecr.us/$image"
    dest_image="$TARGET_REGISTRY/$image"
    cosign copy $source_image $dest_image
done
```
