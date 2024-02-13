# Introduction

This page will walk through Installation and Usage of the STIGATRON component of Rancher Government Carbide.

## IOC Expectations

As our product is still at Initial Operation Capability (IOC), there are some expectations to level-set:

- Installation and packaging is still in progress and improving.

If you see issues and areas for improvement, please submit Github issues [here](https://github.com/rancherfederal/carbide-charts/issues/).

## What is this?

With our Federal/Government driven Kubernetes Distribution RKE2, we worked dilligently to provide the first Kubernetes distribution outside of the upstream project to obtain full DISA STIG Certification.

While having the STIG provides immense benefits to our customers, we also wanted to improve the UX around working with that STIG. That is why we developed STIGATRON. STIGATRON will give our users capabilities that alleviate a lot of the pain points that go with traditional management of maintaining and assessing compliance of your systems:

1. STIGATRON provides the ability to perform a real-time scan against all downstream clusters being managed by the Rancher Multi-cluster Manager.
2. These scans will provide a mapping of the current state of the cluster against the controls with the RKE2 DISA STIG.
3. Users can visualize the results of these scans from the Rancher UI by access the MITRE Heimdall2 interface. This provides current compliance status, tree maps mapping to NIST 800-53 controls, and a detailed breakdown of each check performed, including the commands executed, the output of those commands, and what steps can be performed to mitigate any failures.
4. Users can also export the scan results into the common formats required by Cyber Systems within the federal space. This includes `XCCDF` and `results.json`.
