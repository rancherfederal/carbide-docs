# Installation

## Local Cluster

### Enabling UI Extensions

On the `local` cluster running Rancher MCM, you'll need to first enable Extensions.

1. Log into the Rancher MCM as an administrator.
2. Click the menu in the upper-left of the main dashboard and click the `Extensions` link near the bottom.
3. Click the `Enable` button on the Extensions screen.

  ![Enable Extensions](/img/stigatron/enable-extensions.png)

### Installing STIGATRON UI Plugin

Next, on the same `local` cluster, run the following Helm commands to install the UI Plugin for STIGATRON (see the `tgz` method above for airgap with no Helm repository):

```bash
helm install -n carbide-stigatron-system --create-namespace stigatron-ui carbide-charts/stigatron-ui
```

Check the status of the rollout:

```bash
helm status -n carbide-stigatron-system stigatron-ui
```

## Downstream RKE2 Clusters

### Installing CIS Benchmark Operator
On downstream RKE2 clusters, you'll need to first install Rancher's CIS Benchmark Operator:

1. Navigate to your cluster in the `Explore Cluster` menu.
2. On the left, select `Apps` and click `Charts`.
3. In the `Filter` box on the right, type `CIS Benchmark`.
4. Leave the default values and continue selecting `Next`, then click `Install`.
5. Wait for the installation to complete.

### Creating the License Secret

Next, you'll need to create the `carbide-stigatron-system` namespace and create a secret named `stigatron-license` containing your license (this step is **critical**, as STIGATRON operator will not start without this secret present):

```bash
# Create the namespace
kubectl create namespace carbide-stigatron-system

# Now create the secret, substituting your license
kubectl apply -f - <<EOF
apiVersion: v1
kind: Secret
metadata:
  name: stigatron-license
  namespace: carbide-stigatron-system
type: Opaque
stringData:
  license: YOUR_LICENSE_HERE
EOF
```

### Installing STIGATRON Operator

Next, you'll need to run the following Helm command to install the STIGATRON Operator (**NOTE**: Using carbide-stigatron-system as the namespace is required):

```bash
helm install -n carbide-stigatron-system stigatron carbide-charts/stigatron
```

Check the status of the rollout:

```bash
helm status -n carbide-stigatron-system stigatron
```

You should now see `STIGATRON` on the left menu of your Explore Cluster.

