# Getting Started

This will guide you through getting started with STIGATRON.

## STIGATRON Images

* The images for STIGATRON can be found [here](https://github.com/rancherfederal/carbide-images/releases/). You'll need to pull these images using `cosign` (we intend to improve the packaging/management of these images in an upcoming release):

```bash
# Carbide Registry
SOURCE_REGISTRY=rgcrprod.azurecr.us
SOURCE_REGISTRY_USER=YOUR_CARBIDE_USER
SOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS

# Working directories & TAR
DEST_DIRECTORY=/tmp/stigatron-images
DEST_TAR=/tmp/stigatron-images.tar.gz  # Change this to the location you want for your resulting TAR 

# STIGATRON Version
STIGATRON_RELEASE=0.1.0

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

STIGATRON_IMAGES=$(curl --silent -L https://github.com/rancherfederal/carbide-images/releases/download/stigatron-$STIGATRON_RELEASE/stigatron-images.txt)
for image in $STIGATRON_IMAGES; do
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

## Configuring Registry Credentials

### Local Cluster

On the local cluster running Rancher Multi-cluster Manager, you'll need to configure credentials for the registry you've copied the STIGATRON images to. See the [Rancher Configuration](/rancher-config) on how to set up those credentials.

### Downstream RKE2 Clusters

For downstream RKE2 clusters, you'll need to also configure registry credentials. Depending on how RKE2 was configured and set up, there are a few ways to do this.

### Rancher-Provisioned RKE2 Cluster (TODO SCREENSHOTS)

If you provisioned or are provisioning RKE2 directly from the Rancher UI, you can configure/update that cluster with credentials.

1. Click the upper-left menu and navigate to `Cluster Management`.
2. If updating an existing cluster, select that cluster, click the 3-dot menu in the upper-right, and select `Edit Config`. If creating a new cluster, just click `Create` in the upper-left.
3. Once you get to the screen to update/create the cluster's node pools, scroll to the bottom under `Cluster Configuration` and find the `Registries` tab.
4. Select the second option (`Use specified private registry for Rancher System Container Images`).
5. Enter your registry hostname in the first box.
6. In the `Authentication` box, select `Create a HTTP Basic Auth Secret` and enter your credentials.
  * For future clusters using the same registry, you can just select existing secret.
7. Click `Save`.

  ![Rancher Registry Configuration](/static/img/stigatron/registry-configuration.png)

8. Wait for cluster to reconcile.

### Imported RKE2 Cluster

If you're working with a cluster that was imported or is to be imported into the Rancher MCM, you'll need to update the containerd `registries.yaml` file on every node, substituting your registry hostname and credentials:

```bash
# /etc/rancher/rke2/registries.yaml
configs:
  "YOUR_REGISTRY_HOSTNAME":
    auth:
      username: YOUR_REGISTRY_USERNAME
      password: YOUR_REGISTRY_PASSWORD
```

## Configuring the Carbide Helm Repo

### Internet-Connected
```
helm repo add carbide-charts https://rancherfederal.github.io/carbide-charts
helm repo update
helm search repo carbide-charts
helm install example-release carbide-charts/<chart>
```

### Air-Gap
```
helm repo add carbide-charts https://rancherfederal.github.io/carbide-charts
helm repo update
helm search repo carbide-charts
helm pull carbide-charts/<chart>
```

Take the resulting `tgz` file over the airgap, then on the airgapped device:
```
helm install example-release <chart-x.y.z>.tgz
```

