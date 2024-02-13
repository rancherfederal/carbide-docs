# Known Limitations & Caveats

While we continue to improve Carbide from the feedback and requirements from our customers, we strive to remain agile in our development. With that, below are the known limitations and caveats with the Secured Registry. We intend to work diligently to address these as Carbide continues to evolve.

### Rancher Managing Cloud-Hosted Kubernetes

- Currently, Rancher managing Cloud-Hosted Kubernetes (EKS, AKS, GKE, etc.) does not support private, secured registries for the agent that gets installed onto EKS for Rancher to manage it.
- Rancher Cluster Manager currently does not support managing Cloud-Hosted solutions in an airgap, to include serving images from a private registry.
- If you are managing Cloud-Hosted Kubernetes from Rancher in any capacity, **do not update your Rancher's `systemDefaultRegistry` to point to a private registry holding the securing images**. It will break Rancher's ability to manage those downstream clusters.
