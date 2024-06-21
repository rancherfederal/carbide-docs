# Prerequisites

In order to utilize Airgapped Docs, you will need the following prerequisites:

- **Rancher v2.7.0 or higher:** https://ranchermanager.docs.rancher.com/integrations-in-rancher/rancher-extensions
- **Hauler:** https://github.com/rancherfederal/hauler
- **Helm:** https://helm.sh/docs/intro/install
- Access to the `local` cluster, to be able to install and deploy the app(s).
- Access to the `downstream` cluster(s), to be able to install and deploy the app(s).

# Getting Started

This will guide you through getting started with Airgapped Docs.

## Airgapped Docs Images

The images for Airgapped Docs can be found [here](https://rancherfederal.github.io/carbide-docs/docs/registry-docs/downloading-images). You'll need to pull these images using `hauler`.

### Internet-Connected Environment

If you're working in a connected environment, look [here](../registry-docs/copying-images.md) for instructions on pulling the images into your registry.

### Airgapped Environment

If you're working in an airgapped environment, look [here](../registry-docs/downloading-images.md) for instructions on pulling the images locally.

On the airgap, look [here](../registry-docs/loading-images.md) for loading the localized images into the airgapped registry.

## Airgapped Docs Helm Chart

The chart for Airgapped Docs can be found [here](../carbide-charts.md). You'll need to pull the chart using `hauler`.
