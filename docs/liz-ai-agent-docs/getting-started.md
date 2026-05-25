# Getting Started

:::note
Liz provides the flexibility to utilize external LLMs. For air-gapped or self-hosted use-cases, we recommend using [Ollama](https://portal.ranchercarbide.dev/apps/ollama), available from the Application Collection (AppCo) in the Carbide Portal.

Liz is tested and supported using the following models:

| LLM Model | Requirements | GPU Requirements |
|---|---|---|
| gpt-oss:20b | Ollama installed | NVIDIA RTX A5000, NVIDIA RTX 4090 or similar (Minimum 24Gb VRAM) |
| gpt-oss:120b | Ollama installed | NVIDIA A100 or similar (Minimum 80Gb VRAM) |
| Gemini | Google Workplace Account | N/A |
| ChatGPT | OpenAI account | N/A |
| AWS Bedrock | AWS account | N/A |
| OpenAI Like provider | Azure Account, Evroc Think, etc. | N/A |
:::

## Local Cluster

### Installing Liz UI Plugin

1. Open the Rancher Manager UI and navigate to the 'Extensions' page.

<Image src="/img/liz-ai-agent/ui-extensions-button.png" className="indented-image" title="Extensions" />

2. Click on the "Available" tab to show available UI extensions.

3. Find and click the AI Assistant card, then click 'Install'.

<Image src="/img/liz-ai-agent/ui-plugin-install.png" className="indented-image box-shadow" title="Install UI Plugin" />

4. Once the extension has finished installing, click the 'Reload' button that appears at the top of the page.

<Image src="/img/liz-ai-agent/reload-ui.png" className="indented-image" title="Reload UI" />

### Installing the Liz MCP Server & Agent on the Local Cluster

1. Create a values.yaml file setting (for Ollama):

```yaml
ollamaLlmModel: "gpt-oss:20b"
ollamaUrl: "http://ollama:11434"
activeLlm: "ollama"
```
:::note
You can change later those settings and providers in Rancher’s “Global Settings → AI Assistant tabs”
:::

2. Make sure your context is pointing to your Local cluster and install the `rancher-ai-agent` chart

```bash
helm install rancher-ai-agent \
  --namespace cattle-ai-agent-system \
  --create-namespace \
  -f values.yaml oci://rgcrprod.azurecr.us/rancher/charts/rancher-ai-agent
```

## Using Liz in Rancher

Liz includes a persistent AI assistant named Liz. You can open the assistant at any time by clicking the Liz icon Liz button in the UI.

<Image src="/img/liz-ai-agent/liz-button.png" className="box-shadow indented-image" title="Liz Button" />

When you open the side panel, Liz greets you with suggestions based on your current page context.

<Image src="/img/liz-ai-agent/liz-window.png" className="box-shadow indented-image small-image" title="Liz Window" />

<p />
During a conversation, Liz provides:

* Two suggested actions to continue the current workflow.
* One exploratory action to learn more about related topics.

For more information on configuring and using Liz, please see the [Liz Documentation](https://documentation.suse.com/cloudnative/rancher-ai/latest/en/introduction.html).