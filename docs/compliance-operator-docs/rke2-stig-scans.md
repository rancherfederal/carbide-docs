# RKE2 STIG Scanning

### Rancher Compliance Operator for RKE2 STIG Cluster Scanning

The Rancher Compliance Operator provides a tightly integrated way to run RKE2 STIG checks against downstream clusters. The operator is easy to install in a few clicks through the Rancher UI, and RGS provides a STIG profile to run checks against RKE2 clusters. This returns visual results and direct remediation steps for any findings, simplifying STIG compliance management. 

### Pre-requisites
- Rancher 2.12+
- RKE2 1.31+
- CLI access to local cluster
- RKE2 STIG profile (file) OR `rgs-stig-profiles` helm chart

### Install Rancher Compliance

1. On the cluster manangement page, select the cluster where you want to install the Compliance Operator and click **Explore**.

2. In the navigation bar, click **Apps > Charts**.

3. Select **Rancher Compliance**.

![Install Rancher Compliance](/img/compliance-operator/rancher-compliance.png)

4. Click **Install**.

### Add STIG Profile

1. Navigate to the Carbide portal and copy the helm command for the version of Rancher you're using. For example: 

```bash
helm pull oci://rgcrprod.azurecr.us/carbide-charts/rgs-stig-profiles --version 2.12.4
```

![STIG Profile Chart](/img/compliance-operator/stig-profile-chart.png)

2. From the Rancher local cluster, run: 

```bash
helm install rgs-stig-profile -n compliance-operator-system oci://rgcrprod.azurecr.us/carbide-charts/rgs-stig-profiles:2.12.4
```

3. Confirm the `rke2-stig-1.31` profile and benchmark appear under **Compliance > Profile** in the sidebar. 

Alternatively, you can apply the STIG profile file directly using the following steps. 

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

![Profile Dropdown](/img/compliance-operator/scan-dropdown.png)

3. Once executed, the scan results will be returned on the `Scans` page, including Pass/Fail status and any remediations. 

![Passing Result](/img/compliance-operator/rke2-scan-pass.png)

![Remediation Result](/img/compliance-operator/scan-result-remediation.png)