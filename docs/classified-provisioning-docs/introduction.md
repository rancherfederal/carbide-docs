# Introduction

> **DISCLAIMER**: IC Cloud Support is currently in **Tech Preview**, and is not recommended for production workloads. We are actively working towards full support (GA) for this functionality. 

**Rancher Government Solutions** now enables the native deployment, provisioning, and management of clusters on Intelligence Community Cloud Regions. This added functionality is unique to the `Rancher Government` product. 

## What does this mean? 

**Rancher Government** enables Carbide customers to use the Rancher Manager User Interface (UI), a Helm Chart, and/or Fleet (GitOps) to deploy, provision, and manage RKE2 and K3S clusters in IC cloud regions. The tech preview currently supports AWS EC2 Instances, in classified region C2S.

Rancher Government Solutions actively tests and validates this configuration through regions in [**AWS GovCloud**](https://aws.amazon.com/govcloud-us/) and [**Sequoia Combine**](https://www.sequoiainc.com/combine) (Classified Cloud Region Emulator).

By supporting the provisioning of clusters onto the same AWS account that Rancher is running in, Day 2 Operations such as identity and access management (IAM) are greatly simplified. This allows for a seamless experience in any environment. 

## Challenges

At a high level, the IC Cloud Regions introduce significant complexities and challenges to deploy, provision, manage, and maintain infrastructure.

- **Temporary Credentials:** Short Lived Credentials, typically valid for less than an hour (STS Tokens)
- **Additional Requirements:** such as providing CA Bundles, HTTP Proxies, etc…
- **Controlled Security Access:** Limited IAM Roles/Policies/Permissions and IAM Permission Boundaries
- **Limited Service Availability:** Subset of AWS Services are available and have limited features
- **Unique Regions and Service Endpoints:** Regions and Service Endpoints are unique per environment
- **Separation of Duties:** Unknown requirements and each customer imposes various changes to the above list of challenges and require human in the loop procedures and processes

`Rancher Government` reduces these complexities by utilizing assumed IAM roles, providing compatibility with tools such as load balancers and EBS volumes, and enhancing Day 2 operations for managing your Kubernetes infrastructure. 

## Comparing Imported & Rancher-Provisioned Clusters

Utilizing Rancher provisioning in IC Cloud Regions allows you to take advantage of additional cluster management features.

| Feature/Functionality | Imported Cluster | Rancher-Provisioned Cluster |
|-|-|-|
| Cluster Access with `kubectl` or `kubeconfig` | &#x2713; | &#x2713; |
| Cluster Access Management (RBAC) | &#x2713; | &#x2713; |
| Managing Projects, Namespaces, & Workloads | &#x2713; | &#x2713; |
| Managing Persistent Volumes & Storage Classes | &#x2713; | &#x2713; |
| Use of Rancher App Catalog(s) | &#x2713; | &#x2713; |
| Configuring Infrastructure Tools (Monitoring, Logging, Istio, etc.) | &#x2713; | &#x2713; |
| Managing & Running Security Scans | &#x2713; | &#x2713; |
| Modifying Cluster Configuration | | &#x2713; |
| Automated Cluster Kubernetes Version Upgrades | | &#x2713; |
| Cluster Node Management (Adding/Removing/Scaling) | | &#x2713; |
| Cluster Node Access via Shell (SSH) | | &#x2713; |
| Automated Cluster Certificate Rotation | | &#x2713; |
| Automated Cluster Encryption Key Rotation | | &#x2713; |
| Ability to Snapshot, Backup, & Restore | | &#x2713; |
| Configuring PSS/PSA/PSP | | &#x2713; |

## Future State

As **Rancher Government Solutions** works towards general availability (GA) of IC Cloud Support, we seek to achieve parity between commercial and IC cloud regions. We plan to augment the current state in the following ways:

- **Principle of Least Privileged Access:** Pod Level Permissions vs Node Level Permissions
- **Reducing Implementation/Migration Burden:** Utilizing Rancher Manager UI Extensions (i.e STIGATRON)
- **Additional Functionality:** Carbide Provisioning for all supported drivers (i.e. AWS EKS)

If you have additional feedback, please submit issues to our [GitHub](https://github.com/ranchergovernment/carbide) or [contact support](https://support.rancherfederal.com/). 