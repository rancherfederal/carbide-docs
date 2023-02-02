# Installation

## Local Cluster

On the `local` cluster running Rancher MCM, run the following Helm commands to install the UI Plugin for STIGATRON (see the `tgz` method above for airgap with no Helm repository):

```bash
helm install -n carbide-stigatron-system --create-namespace stigatron-ui carbide-charts/stigatron-ui
```

Check the status of the rollout:

```bash
helm status -n carbide-stigatron-system stigatron-ui
```

## Downstream RKE2 Clusters

On downstream RKE2 clusters, you'll need to first install Rancher's CIS Benchmark Operator:

1. Navigate to your cluster in the `Explore Cluster` menu.
2. On the left, select `Apps` and click `Charts`.
3. In the `Filter` box on the right, type `CIS Benchmark`.
4. Leave the default values and continue selecting `Next`, then click `Install`.
5. Wait for the installation to complete.

Next, you'll need to run the following Helm command to install the STIGATRON Operator (**NOTE**: Using carbide-stigatron-system as the namespace is required):

```bash
helm install -n carbide-stigatron-system --create-namespace stigatron-ui carbide-charts/stigatron-ui
```

Check the status of the rollout:

```bash
helm status -n carbide-stigatron-system stigatron
```

You should now see `STIGATRON` on the left menu of your Explore Cluster.

