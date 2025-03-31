# Creating STIGATRON Scans

>:warning: **DISCLAIMER**: Due to upstream changes outside RGS control, development of STIGATRON has been temporarily paused. STIGATRON will not be available in the Carbide Secured Registry and current users may experience issues. We are working with the necessary parties to identify a solution as soon as possible. Thank you for your patience. 

1. After installing STIGATRON on your downstream cluster, when you navigate to that downstream cluster, you should see `STIGATRON` on the left navigation menu. Click there.

  ![STIGATRON Menu Selection](/img/stigatron/stigatron-menu.png)

2. To trigger a scan, click `Create` in the upper left, enter a name, select a profile, and click `Create`.

  ![Create A Scan](/img/stigatron/create-scan.png)

3. After the scan runs (should only take a few minutes at most), click the 3-dot menu next to the scan and go to `Open Visualizer`. This will give you insight into the current state of your cluster in relation to the RKE2 STIG.

  ![Open Visualizer](/img/stigatron/open-visualizer.png)

## Profile Selection

When selecting a STIGATRON Scan Profile, there are 2 options for each support Kubernetes version:

* Official: This is the officially certified version from DISA. While fully certified, it may be missing the latest security requirements currently in process for STIG reevaluations and fixes.
* Preview: This is the latest version currently being worked and submitted to DISA from Rancher Government. This will contain the latest STIG fixes and reevaluations, even before being fully certified.

It is useful to leverage both versions when scanning to understand your cluster's current state against both of the current and future STIGs.