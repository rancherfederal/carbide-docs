# Installation

>:warning: **DISCLAIMER**: Due to upstream changes outside RGS control, development of STIGATRON has been temporarily paused. STIGATRON will not be available in the Carbide Secured Registry and current users may experience issues. We are working with the necessary parties to identify a solution as soon as possible. Thank you for your patience. 

## Local Cluster

### Enabling UI Extensions

On the `local` cluster running Rancher, you'll need to first enable Extensions.

1. Log into Rancher as an administrator.
2. Click the menu in the upper-left of the main dashboard and click the `Extensions` link near the bottom.
3. Click the `Enable` button on the Extensions screen.
4. Click `Ok`, when prompted to Enable Extension Support.

![Enable Extensions](/img/stigatron/enable-extensions.png)

### Installing STIGATRON UI Plugin

Next, on the same `local` cluster, run the following Helm commands to install the UI Plugin for STIGATRON (see the `tgz` method above for airgap with no Helm repository) and ensure to substitute your registry:

```bash
helm install -n carbide-stigatron-system --create-namespace \
  --set "global.cattle.systemDefaultRegistry=<registry-url>" \
  stigatron-ui carbide-charts/stigatron-ui
```

Check the status of the rollout:

```bash
helm status -n carbide-stigatron-system stigatron-ui
```

## Downstream Clusters

### Installing CIS Benchmark Operator

On downstream clusters, you'll need to first install Rancher's CIS Benchmark Operator:

1. Navigate to your cluster in the `Explore Cluster` menu.
2. On the left, select `Apps` and click `Charts`.
3. In the `Filter` box on the right, type `CIS Benchmark`.
4. Review the `Chart Information` and when ready click `Install`.
5. Leave all default values, select `Next`, and then click `Install`.
6. Wait for the installation to complete and feel free to close the kubectl shell.

### Creating the License Secret

Next, you'll need to create the `carbide-stigatron-system` namespace and create a secret named `stigatron-license` containing your Carbide License. _This step is **critical**, as STIGATRON operator will not start without this secret present:_

```bash
# Create the namespace
kubectl create namespace carbide-stigatron-system

# Now create the secret, substituting your license
kubectl create secret generic stigatron-license -n carbide-stigatron-system --from-literal=license=YOUR_LICENSE_HERE
```

### Installing STIGATRON Operator

Next, you'll need to run the following Helm command to install the STIGATRON Operator (**NOTE:** Using carbide-stigatron-system as the namespace is required):

```bash
helm install -n carbide-stigatron-system \
  --set "global.cattle.systemDefaultRegistry=<registry-url>" \
  --set "heimdall2.global.cattle.systemDefaultRegistry=<registry-url>" \
  stigatron carbide-charts/stigatron
```

Check the status of the rollout:

```bash
helm status -n carbide-stigatron-system stigatron
```

You should now see `STIGATRON` on the left menu of your Explore Cluster.
