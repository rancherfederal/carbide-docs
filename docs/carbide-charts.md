# Carbide Helm Charts

### Available Helm Charts

```bash
NAME                            CHART VERSION   APP VERSION     DESCRIPTION
carbide-charts/airgapped-docs   0.1.47          0.1.2           Rancher Government Airgapped Docs
carbide-charts/heimdall2        0.1.45          0.1.1           Rancher Government Heimdall2 Tool
carbide-charts/rancher          2.8.2           v2.8.2          Install Rancher Server to manage Kubernetes...
carbide-charts/stigatron        0.2.5           0.2.2           Rancher Government Stigatron Extension
carbide-charts/stigatron-ui     0.2.3           0.2.0           Rancher Government Stigatron UI Extension
```

## How To Use (Connected Environments)

### For Helm Chart Repositories

```bash
# add and update the helm chart repository
helm repo add carbide-charts https://rancherfederal.github.io/carbide-charts
helm repo update

# view the charts in the helm chart repository
helm search repo carbide-charts

# example install of a helm chart
helm install <release-name> carbide-charts/<chart>
```

If you would like to do add the Carbide Helm Charts to the Rancher Manager Chart Catalog, so you are able to use the user interface to install them, please follow the steps in the [Rancher Manager Docs](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/helm-charts-in-rancher).

### For Helm Chart OCI Artifacts

```bash
# example install of a helm chart
helm install <release-name> oci://ghcr.io/rancherfederal/<chart>
```

## How to Use (Airgaped Environments)

### For Helm Chart Repositories

#### On Connected Environment

```bash
# add and update the helm chart repository
helm repo add carbide-charts https://rancherfederal.github.io/carbide-charts
helm repo update

# view the charts in the helm chart repository
helm search repo carbide-charts

# save and output the helm chart to tarball
helm pull carbide-charts/<chart>
```

#### On Airgapped Environment

```bash
# example install of a helm chart
helm install <release-name> <chart>.tgz
```

### For Helm Chart OCI Artifacts

#### On Connected Environment

```bash
# authenticate into carbide secured registry
cosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us

# fetch the content from the carbide secured registry
# verify the version, location of the key, and the platform/architecture
hauler store sync --products carbide-charts=v0.1.1 --key carbide-key.pub --platform linux/amd64

# save and output the content from the hauler store to tarball
hauler store save --filename carbide-charts.tar.zst
```

#### On Airgapped Environment

```bash
# load the content from the tarball to the hauler store
hauler store load carbide-charts.tar.zst

# copy the content from the hauler store to your registry
hauler store copy --username <redacted> --password <redacted> registry://<registry-url>

# save and output the helm chart to tarball
helm install <release-name> oci://ghcr.io/rancherfederal/<chart>
```
