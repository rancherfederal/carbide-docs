# Installation

## Downstream Clusters

Run the following Helm command to install the `airgapped-docs` chart, substituting your registry in:

```bash
helm install -n carbide-docs-system --create-namespace \
    --set "global.cattle.systemDefaultRegistry=<registry-url>" \
    airgapped-docs carbide-charts/airgapped-docs
```

Check the status of the rollout:

```bash
helm status -n carbide-docs-system airgapped-docs
```

You should now see `Airgapped Docs` on the left menu of your cluster.

## Selecting Documentation for Low-Compute Environments

There may be situations where you are running in a low-compute, low-resource environment or are not using specific products and do not want to utilize specific offline documentation. For those situations, you can disable specific products during installation, such as:

```bash
# Disable neuvector docs
helm install -n carbide-docs-system --create-namespace \
  --set "global.cattle.systemDefaultRegistry=<registry-url>" \
  --set "docs.neuvector.enabled=false" \
  airgapped-docs carbide-charts/airgapped-docs
```

For a full list of products that can be disabled, see [here](https://github.com/rancherfederal/carbide-charts/blob/main/charts/airgapped-docs/values.yaml).