# Introduction

This page will walk through Installation and Usage of the STIGATRON component of Rancher Government Carbide.

## What is Classified Provisioning from Carbide?

In classified regions of AWS, the ability to natively provision RKE2 clusters through the Rancher MCM provides a lot of benefits in comparison to importing clusters.

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


Classified Provisioning provides the ability to natively provision clusters through Rancher onto the same AWS account that Rancher is running in through the use of IAM roles attached to the instances running Rancher. This greatly simplifies Day 2 Operations and enables a seamless experience in any environment.
