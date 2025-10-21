# RKE2 STIG Scanning with the Rancher Compliance Operator

### Rancher Compliance Operator for RKE2 STIG Cluster Scanning

The Rancher Compliance Operator provides a tightly integrated way to run RKE2 STIG checks against downstream clusters. The operator is easy to install in a few clicks through the Rancher UI, and RGS provides a STIG profile to run checcks against RKE2 clusters. This returns visual results and direct remediation steps for any findings, simplifying STIG compliance management. 

### Pre-requisites
- Rancher 2.12+
- RKE2 1.31+
- CLI access to local cluster
- RKE2 STIG profile 

### Install Rancher Compliance

1. On the cluster manangement page, select the cluster where you want to install the Compliance Operator and click **Explore**.

2. In the navigation bar, click **Apps > Charts**.

3. Select **Rancher Compliance**.

4. Click **Install**.

### Add STIG Profile

1. If needed, request the STIG profile from [RGS Support](https://support.rancherfederal.com/).

2. From the local Rancher cluster, run:

```bash
kubectl apply -f rke2-stig-1.31.yaml
```

3. Confirm the `rke2-stig-1.31` profile and benchmark appear under **Compliance > Profile** in the sidebar. 

### Launch a Scan

Once installed, the RKE2 STIG profile will appear in the Rancher Compliance application dropdown list. The profile can be selected when running scans on clusters running RKE2 1.31 and above. 

1. To create a new scan, navigate to **Compliance > Scans**.

2. Select the RKE2 STIG profile from the dropdown.

**insert screenshot dropdown**

3. Once executed, the scan results will be returned on the `Scans` page. 

**insert scan result screenshot**