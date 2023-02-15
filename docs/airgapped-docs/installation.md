# Installation

## Downstream RKE2 Clusters

On downstream RKE2 clusters, you'll need to first install Rancher's CIS Benchmark Operator:

1. Run the following Helm command to install Airgapped Docs chart:

```bash
helm install -n carbide-docs-system --create-namespace carbide-docs carbide-charts/carbide-docs
```

Check the status of the rollout:

```bash
helm status -n carbide-docs-system carbide-docs
```

You should now see `Airgapped Docs` on the left menu of your Explore Cluster.

## Selecting Documentation for Low-Compute Environments

There may be situations where you are running in a low-compute, low-resource environment or are not using specific products and do not want to utilize specific documentation from Airgapped Docs. For those situations, you can disable specific products during installation, such as:

```bash
# Disable neuvector docs
helm install -n carbide-docs-system --create-namespace --set "docs.neuvector.enabled=false" carbide-docs carbide-charts/carbide-docs
```

For a full list of products that can be disabled, see [here](https://github.com/rancherfederal/carbide-charts/blob/main/charts/offline-docs/values.yaml).