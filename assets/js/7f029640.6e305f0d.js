"use strict";(self.webpackChunkcarbide_docs=self.webpackChunkcarbide_docs||[]).push([[791],{265:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var t=n(4848),a=n(8453);const s={},i="Carbide Helm Charts",c={id:"registry-docs/carbide-charts",title:"Carbide Helm Charts",description:"Along with our secured images, we also provide helm charts through the CSR to install various components of the Carbide product suite. These charts include the necessary components to run STIGATRON, an airgapped copy of all Rancher product docs, and a custom build of Rancher with our white-labeling.",source:"@site/docs/registry-docs/carbide-charts.md",sourceDirName:"registry-docs",slug:"/registry-docs/carbide-charts",permalink:"/carbide-docs/docs/registry-docs/carbide-charts",draft:!1,unlisted:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/registry-docs/carbide-charts.md",tags:[],version:"current",frontMatter:{},sidebar:"carbideSidebar",previous:{title:"Loading Images to a Registry",permalink:"/carbide-docs/docs/registry-docs/loading-images"},next:{title:"RKE2/K3s Configuration",permalink:"/carbide-docs/docs/registry-docs/configuration/kubernetes"}},o={},h=[{value:"Obtaining Chart Manifests",id:"obtaining-chart-manifests",level:2},{value:"Connected Environments",id:"connected-environments",level:3},{value:"Airgapped Environments",id:"airgapped-environments",level:3},{value:"In Connected Environment",id:"in-connected-environment",level:4},{value:"In Airgapped Environment",id:"in-airgapped-environment",level:4}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"carbide-helm-charts",children:"Carbide Helm Charts"})}),"\n",(0,t.jsxs)(r.p,{children:["Along with our secured images, we also provide helm charts through the CSR to install various components of the Carbide product suite. These charts include the necessary components to run ",(0,t.jsx)(r.a,{href:"https://rancherfederal.github.io/carbide-docs/docs/stigatron-docs/introduction",children:"STIGATRON"}),", an airgapped copy of all Rancher product docs, and a custom build of Rancher with our white-labeling."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Available Helm Charts"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"NAME                            CHART VERSION   APP VERSION     DESCRIPTION\ncarbide-charts/airgapped-docs   0.1.49          0.1.4           Rancher Government Airgapped Docs\ncarbide-charts/heimdall2        0.1.45          0.1.1           Rancher Government Heimdall2 Tool\ncarbide-charts/rancher          2.8.3           v2.8.3          Install Rancher Server to manage Kubernetes...\ncarbide-charts/stigatron        0.2.5           0.2.2           Rancher Government Stigatron Extension\ncarbide-charts/stigatron-ui     0.2.3           0.2.0           Rancher Government Stigatron UI Extension\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The charts are available at ",(0,t.jsx)(r.a,{href:"https://rancherfederal.github.io/carbide-charts",children:"https://rancherfederal.github.io/carbide-charts"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"obtaining-chart-manifests",children:"Obtaining Chart Manifests"}),"\n",(0,t.jsx)(r.h3,{id:"connected-environments",children:"Connected Environments"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"# add and update the helm chart repository\nhelm repo add carbide-charts https://rancherfederal.github.io/carbide-charts\nhelm repo update\n\n# view the charts in the helm chart repository\nhelm search repo carbide-charts\n\n# example install of a helm chart\nhelm install <release-name> carbide-charts/<chart>\n"})}),"\n",(0,t.jsxs)(r.p,{children:["If you would like to add the Carbide Helm Charts to the Rancher Chart Catalog (so you can use the user interface to install them) please follow the steps in the ",(0,t.jsx)(r.a,{href:"https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/helm-charts-in-rancher",children:"Rancher Docs"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"airgapped-environments",children:"Airgapped Environments"}),"\n",(0,t.jsx)(r.h4,{id:"in-connected-environment",children:"In Connected Environment"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"# generate the hauler manfiest for the carbide charts\ncat <<EOF > carbide-charts.yaml\napiVersion: content.hauler.cattle.io/v1alpha1\nkind: Charts\nmetadata:\n  name: carbide-charts\nspec:\n  charts:\n    - name: rancher\n      repoURL: https://rancherfederal.github.io/carbide-charts\n      version: 2.8.3\n    - name: airgapped-docs\n      repoURL: https://rancherfederal.github.io/carbide-charts\n      version: 0.1.49\n    - name: stigatron\n      repoURL: https://rancherfederal.github.io/carbide-charts\n      version: 0.2.5\n    - name: stigatron-ui\n      repoURL: https://rancherfederal.github.io/carbide-charts\n      version: 0.2.3\n---\napiVersion: content.hauler.cattle.io/v1alpha1\nkind: Charts\nmetadata:\n  name: carbide-dependency-charts\nspec:\n  charts:\n    - name: heimdall2\n      repoURL: https://rancherfederal.github.io/carbide-charts\n      version: 0.1.45\n    - name: nats\n      repoURL: https://nats-io.github.io/k8s/helm/charts\n      version: 1.1.5\nEOF\n\n# fetch the content from generated hauler manifest\n# verify the version and the platform/architecture\nhauler store sync --store carbide-store --files carbide-charts.yaml --platform <platform/arch>\n\n# save and output the content from the hauler store to tarball\nhauler store save --store carbide-store --filename carbide-charts.tar.zst\n"})}),"\n",(0,t.jsx)(r.h4,{id:"in-airgapped-environment",children:"In Airgapped Environment"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"# load the content from the tarball to the hauler store\nhauler store load --store carbide-store carbide-charts.tar.zst\n\n# server the content from the hauler store\nhauler store serve fileserver --store carbide-store\n\n# example install of a helm chart\nhelm install <release-name> http://<FQDN or IP>:<PORT>/<chart>.tgz\n"})})]})}function l(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var t=n(6540);const a={},s=t.createContext(a);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);