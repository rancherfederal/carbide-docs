# Installation

> **DISCLAIMER**:  The options presented here are not exhaustive of the ways Rancher installation can be configured. For all installation options, visit the [upstream documentation](https://documentation.suse.com/cloudnative/rancher-manager/latest/en/installation-and-upgrade/installation-and-upgrade.html).

The following steps assume you have [seeded a registry](https://rancherfederal.github.io/carbide-docs/docs/registry-docs/copying-images) with the Carbide artifacts for Rancher and Cert Manager.

## Install Rancher on a Kubernetes Cluster

We recommend installing Rancher on a multi-node Kubernetes cluster to ensure high availability in production environments. High availability configuration helps maintain consistent access to the downstream Kubernetes clusters that Rancher will manage.

### Prerequisites

#### Kubernetes Cluster

Set up the kubernetes cluster where Rancher will run. This could be upstream Kubernetes, [RKE2](https://documentation.suse.com/cloudnative/rancher-manager/latest/en/installation-and-upgrade/infrastructure-setup/ha-rke2-kubernetes-cluster.html), [k3s](https://documentation.suse.com/cloudnative/rancher-manager/latest/en/installation-and-upgrade/infrastructure-setup/ha-k3s-kubernetes-cluster.html), or a managed cluster from a cloud provider. 

#### Ingress Controller

The Rancher UI and API are exposed through an ingress. This means the Kubernetes cluster that you install Rancher on must contain an ingress controller.

For RKE2 and K3s clusters, an ingress controller is installed by default, so you don’t have to install one manually.

#### CLI Tools

The following CLI tools are required for setting up the Kubernetes cluster. Please make sure these tools are installed and available in your `$PATH`.

- [kubectl](https://kubernetes.io/docs/tasks/tools/#install-kubectl) - Kubernetes command line tool
- [helm](https://helm.sh/docs/intro/install/) - package management for Kubernetes

### Install the Rancher Helm Chart

**1. Add the helm chart repository.**

#clarifying carbide steps

**2. Create a namespace for Rancher.**

We’ll need to define a Kubernetes namespace where the resources created by the Chart should be installed. This should always be `cattle-system`:

```bash
kubectl create namespace cattle-system
```

**3. Choose your SSL/TLS configuration.**

The Rancher management server is designed to be secure by default and requires SSL/TLS configuration.

There are three recommended options for the source of the certificate used for TLS termination at the Rancher server:

- **Rancher-generated TLS certificate:** In this case, you will need to install cert-manager into the cluster. Rancher utilizes cert-manager to issue and maintain its certificates. Rancher will generate a CA certificate of its own, and sign a cert using that CA. cert-manager is then responsible for managing that certificate. No extra action is needed when agent-tls-mode is set to strict. Set `ingress.tls.source=rancher` in the helm chart. 

- **Let’s Encrypt:** The Let’s Encrypt option also uses cert-manager. However, in this case, cert-manager is combined with a special Issuer for Let’s Encrypt that performs all actions (including request and validation) necessary for getting a Let’s Encrypt issued cert. This configuration uses HTTP validation (HTTP-01), so the load balancer must have a public DNS record and be accessible from the internet. When setting agent-tls-mode to strict, you must also specify --privateCA=true and upload the Let’s Encrypt CA. Set `ingress.tls.source=letsEncrypt` in the helm chart.

- **Bring your own certificate:** This option allows you to bring your own public- or private-CA signed certificate. Rancher will use that certificate to secure websocket and HTTPS traffic. In this case, you must upload this certificate (and associated key) as PEM-encoded files with the name tls.crt and tls.key. If you are using a private CA, you must also upload that certificate. This is due to the fact that this private CA may not be trusted by your nodes. Rancher will take that CA certificate, and generate a checksum from it, which the various Rancher components will use to validate their connection to Rancher. If agent-tls-mode is set to strict, the CA must be uploaded, so that downstream clusters can successfully connect. Set `ingress.tls.source=secret` in the helm chart.

**4. Install cert-manager.**

Skip this step if you are bringing your own certificate files.

#carbide steps for helm install cert manager

**5. Install Rancher with Helm and your chosen certificate.**

