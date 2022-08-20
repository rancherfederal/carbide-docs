# Downloading Images
```bash
# To login with the shared credentials
docker login -u internal-tester-read -p <redacted> rgcrprod.azurecr.us

# Pulling an image (upstream equivalent to "rancher/system-agent:v0.1.1-suc")
docker pull rgcrprod.azurecr.us/rancher/system-agent:v0.1.1-suc
```