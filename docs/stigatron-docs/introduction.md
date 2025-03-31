# Introduction

>:warning: **DISCLAIMER**: Due to upstream changes outside RGS control, development of STIGATRON has been temporarily paused. STIGATRON will not be available in the Carbide Secured Registry and current users may experience issues. We are working with the necessary parties to identify a solution as soon as possible. Thank you for your patience. 

This section will walk through installation and usage of the STIGATRON component of Rancher Government Carbide.

## What is STIGATRON?

Our Federal/Government-driven Kubernetes Distribution, RKE2, is the first Kubernetes distribution outside of the upstream project to obtain full DISA STIG Certification.

STIGATRON was developed to alleviate the pain points of traditional management and maintenance of assessing system compliance, with features including:

1. STIGATRON provides the ability to perform a real-time scan against all downstream clusters being managed by Rancher.
2. These scans will provide a mapping of the current state of the cluster against the controls with the RKE2 DISA STIG.
3. Users can visualize the results of these scans from the Rancher UI by accessing the MITRE Heimdall2 interface. This provides current compliance status, tree maps mapping to NIST 800-53 controls, and a detailed breakdown of each check performed, including the commands executed, the output of those commands, and what steps can be performed to mitigate any failures.
4. Users can also export the scan results into the common formats required by Cyber Systems within the federal space. This includes `XCCDF` and `results.json`.

## IOC Expectations

As our product is still at Initial Operation Capability (IOC), there are some expectations to level-set:

- Installation and packaging is still in progress and improving.

If you see issues and areas for improvement, please submit Github issues [here](https://github.com/rancherfederal/carbide-charts/issues).
