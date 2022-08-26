# Downloading Release Images
```bash
# To login with the shared credentials
docker login -u internal-tester-read -p <redacted> rgcrprod.azurecr.us

# Pulling an image (upstream equivalent to "rancher/system-agent:v0.1.1-suc")
docker pull rgcrprod.azurecr.us/rancher/system-agent:v0.1.1-suc
```

# Downloading Cert Manager Images (If Installing Rancher)

To download the necessary cert manager images from the SSF, do the following:

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