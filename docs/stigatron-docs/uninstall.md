# Uninstall

>:warning: **DISCLAIMER**: Due to upstream changes outside RGS control, development of STIGATRON has been temporarily paused. STIGATRON will not be available in the Carbide Secured Registry and current users may experience issues. We are working with the necessary parties to identify a solution as soon as possible. Thank you for your patience. 

## Local Cluster

On the `local` cluster running Rancher, run the following Helm command to remove the UI Extension.

```bash
helm uninstall -n carbide-stigatron-system stigatron-ui
```

## Downstream Clusters

On each downstream cluster, run the following command to uninstall STIGATRON:

```bash
helm uninstall -n carbide-stigatron-system stigatron
```

## Uninstalling CIS Benchmark (Optional)

If you want to uninstall CIS Benchmark, after uninstall STIGATRON, perform the following:

1. Log into Rancher.
2. In the UI, navigate to each downstream cluster in the Cluster Explorer.
3. On the left menu, select `Apps`, then select `Installed Apps`.
4. Find the app named `rancher-cis-benchmark`, select the 3-dot menu on the right, and select `Delete`. (IMPORTANT: Delete this before the CRD application)
5. Find the app named `rancher-cis-benchmark-crd`, select the 3-dot menu on the right, and select `Delete`.

## Disable UI Extensions (Optional)

If you want to [disable all UI Extensions](https://ranchermanager.docs.rancher.com/integrations-in-rancher/rancher-extensions#uninstalling-extensions) after uninstalling the STIGATRON UI extension, perform the following:

1. On the extensions management page in Rancher, click the 3-dot menu. 
2. Select `Disable Extension Support`.
