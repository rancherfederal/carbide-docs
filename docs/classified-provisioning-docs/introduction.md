# Introduction

**Rancher** has had the ability and functionality to limitedly provision and manage clusters in the Classified Cloud Regions, but it has not been validated, documented, supported, or treated as a first class citizen.

**Rancher Government** has invested the time and engineering resources to provide full enterprise support for the native deployment, provisioning, and management of clusters on the Classified Cloud Regions.

### What Does that Mean for Customers Today?

**Rancher Government Carbide** enables supported customers to use the Rancher Manager User Interface (UI) or through a Helm Chart and/or Fleet (GitOps) to deploy, provision, and manage RKE2 Clusters and K3S Clusters on AWS EC2 Instances, in the Classified Cloud Regions such as AWS C2S/SC2S.

Additionally, **Rancher Government** actively tests and validates this configuration through regions in [AWS GovCloud](https://aws.amazon.com/govcloud-us/) and through regions in [Sequoia Combine](https://www.sequoiainc.com/combine) (Classified Cloud Region Emulator).

## Challenges

At a high level, the Classified Cloud Regions, such as AWS, introduce significant complexities and challenges for engineering solutions to deploy, provision, manage, and maintain infrastructure.

- **Temporary Credentials:** Short Lived Credentials, typically valid for less than an hour (STS Tokens)
  Additional requirements such as providing CA Bundles, HTTP Proxies, etc…
- **Controlled Security Access:** Limited IAM Roles/Policies/Permissions and IAM Permission Boundaries
- **Limited Service Availability:** Subset of AWS Services are available and have limited features
- **Unique Regions and Service Endpoints:** Regions and Service Endpoints are unique per environment
- **Separation of Duties:** Unknown requirements and each customer imposes various changes to the above list of challenges and require human in the loop procedures and processes

## Future State

**Rancher Government** is working to execute a strategy to bring parity to the provisioning experience in the Classified Cloud Regions in comparison to the mainstream commercial clouds. It is imperative that Rancher provides a homogeneous user experience regardless of region or classification level. In order to achieve this, we plan to augment the current state...

- **Principle of Least Privileged Access:** Pod Level Permissions vs Node Level Permissions
- **Reducing Implementation/Migration Burden:** Utilizing Rancher Manager UI Extensions (i.e STIGATRON)
- **Additional Functionality:** Carbide Provisioning for all supported drivers (i.e. AWS EKS)

## Comparing Imported & Native-Provisioned Clusters

| Feature/Functionality | Imported Cluster | Native Provisioned Cluster |
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
