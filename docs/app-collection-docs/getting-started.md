# Getting Started

### Using the Carbide Secured Registry (CSR)

As with the other products in the Carbide Suite, you can pull artifacts from the Carbide Secured Regsitry to seed your private registry. This can be done in both connected and airgapped environments. 

Please ensure you have the [Prerequisites](/docs/registry-docs/prereqs.md) and follow the [Seeding a Registry](/docs/registry-docs/copying-images.md) steps.

> **Note:** Using the following `hauler store sync` commands, Hauler will automatically pull both the helm chart and the images required for the application. The `hauler store copy` function will copy helm charts into a `/charts` folder and container images into `/containers`.

#### Copy Images in a Connected Environment using `Hauler`

Sync app:

```bash
hauler store sync --store application-store --products apps-<application-name>=0.28.1 --key carbide-key.pub --platform <platform/arch>
```

Copy to registry:

```bash
hauler store copy --store application-store --username <redacted> --password <redacted> registry://<registry-url>
```

#### Transfer Images to an Airgapped Environment using `Hauler`

In your connected environment, download the artifacts:

```bash
hauler store sync --store application-store --products apps-<application-name>=0.28.1 --key carbide-key.pub --platform <platform/arch>

hauler store save --store application-store ---filename application.tar.zst
```

In the airgap, load images and copy to your registry:

```bash
hauler store load --store application-store application.tar.zst

hauler store copy --store application-store --username <redacted> --password <redacted> registry://<registry-url>
```