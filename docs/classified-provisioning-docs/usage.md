# Usage

## Creating a Carbide Cloud Credential

1. In the Rancher MCM's menu, access Cloud Credentials (`Cluster Management` -> `Cloud Credentials`)

2. Select `Create` and choose `Amazon`.

3. Choose a name, enable the `Carbide Instance Credential`, select the default region for your environment, and click `Create`.

    ![Create Carbide Cloud Credential](/img/classified-provisioning/create-carbide-cloud-creds.png)

## Creating a Classified Cluster

1. In the Rancher MCM's menu, access `Cluster Management` and click `Create`. Ensure the `RKE2/K3s` toggle is enabled and select `Amazon EC2`.

2. Select the Cloud Credentials created in the previous step, then add node pools as you normally would for provisioning a cluster from Rancher.


    **NOTE**: In SC2S/C2S, it is **required** for you to enter an `AMI ID` and the respective `SSH User` for that AMI ID under the `Advanced` settings.

    **NOTE**: In SC2S/C2S, not all Instance Types are available. Ensure you are leverage an Instance Type that is **available in your environment**. This list will be dynamic in the future.

    **NOTE**: If no security group is provided, Rancher will attempt to create a Security Group. If the ability to create Security Groups is limited, have a Security Group created by your Account Manager/Broker that has the [appropriate port configuration](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/installation-requirements/port-requirements) and select that existing Security Group in the `Advanced` settings.

    ![Create RKE2 Cluster in C2S](/img/classified-provisioning/create-carbide-cloud-creds.png)

    For more information on provisioning an RKE2/K3s cluster on Amazon EC2s, see the [Rancher docs](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster).

### Registry Configuration

When using a private registry, downstream clusters must be configured with correct authentication and certificate information to access that registry via the [registries.yaml](https://docs.rke2.io/install/containerd_registry_configuration) file. Rancher provisioned clusters can be configured through the UI to generate.

1. Under the `Cluster Configuration` section when provisioning a cluster, select the `Registries` section.

2. Enter the registry domain in the `Container Registry` box, and either select existing registry credentials or create new credentials for authentication to the registry.

3. If advanced configuration (mirroring, certificates, additional authentication), add those to the advanced settings.

For more information, see the [RKE2 Containerd Registry Configuration](https://docs.rke2.io/install/containerd_registry_configuration) documentation.