"use strict";(self.webpackChunkcarbide_docs=self.webpackChunkcarbide_docs||[]).push([[490],{7188:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var n=s(4848),i=s(8453);const t={},c="RKE2/K3s Configuration",o={id:"registry-docs/configuration/kubernetes",title:"RKE2/K3s Configuration",description:"This page will walk you through how to configure Rancher Kubernetes distributions (K3s, RKE2) to utilize the secured images instead of the upstream Docker hub images.",source:"@site/docs/registry-docs/configuration/kubernetes.md",sourceDirName:"registry-docs/configuration",slug:"/registry-docs/configuration/kubernetes",permalink:"/carbide-docs/docs/registry-docs/configuration/kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/registry-docs/configuration/kubernetes.md",tags:[],version:"current",frontMatter:{},sidebar:"carbideSidebar",previous:{title:"Helm Charts",permalink:"/carbide-docs/docs/registry-docs/carbide-charts"},next:{title:"Rancher Configuration",permalink:"/carbide-docs/docs/registry-docs/configuration/rancher"}},a={},d=[{value:"Usage with <code>k3s</code>",id:"usage-with-k3s",level:3},{value:"Usage with <code>rke2</code>",id:"usage-with-rke2",level:3},{value:"<code>registries.yaml</code> Strategy Approaches",id:"registriesyaml-strategy-approaches",level:4},{value:"Example <code>cloud-init</code> (<code>RKE2</code>)",id:"example-cloud-init-rke2",level:4}];function l(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"rke2k3s-configuration",children:"RKE2/K3s Configuration"})}),"\n",(0,n.jsx)(r.p,{children:"This page will walk you through how to configure Rancher Kubernetes distributions (K3s, RKE2) to utilize the secured images instead of the upstream Docker hub images."}),"\n",(0,n.jsxs)(r.h3,{id:"usage-with-k3s",children:["Usage with ",(0,n.jsx)(r.code,{children:"k3s"})]}),"\n",(0,n.jsxs)(r.p,{children:["To modify the system images that ",(0,n.jsx)(r.code,{children:"k3s"})," uses upon bootstrapping, configure k3s' mirror settings as described ",(0,n.jsx)(r.a,{href:"https://rancher.com/docs/k3s/latest/en/installation/private-registry/#mirrors",children:"here"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"The full configuration using your authenticated registry is below:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:'# /etc/rancher/k3s/registries.yaml\nmirrors:\n  docker.io:\n      endpoint:\n      - "https://<registry-url>"\n\nconfigs:\n  "<registry-url>":\n    auth:\n      username: <redacted>\n      password: <redacted>\n'})}),"\n",(0,n.jsxs)(r.p,{children:["You will also need to utilize the ",(0,n.jsx)(r.code,{children:"system-default-registry"})," flag when installing K3s to ensure it uses the registry. For instance:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | sh -s - --system-default-registry=<registry-url>\n"})}),"\n",(0,n.jsxs)(r.h3,{id:"usage-with-rke2",children:["Usage with ",(0,n.jsx)(r.code,{children:"rke2"})]}),"\n",(0,n.jsxs)(r.p,{children:["Similar to ",(0,n.jsx)(r.code,{children:"k3s"}),", the Carbide Secured Registry (CSR) images are pulled upon bootstrapping by configuring ",(0,n.jsx)(r.code,{children:"rke2"}),"'s mirroring configuration as described ",(0,n.jsx)(r.a,{href:"https://rke2.io",children:"here"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"The full configuration using the shared alpha account is below:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:'# /etc/rancher/rke2/registries.yaml\nmirrors:\n  docker.io:\n      endpoint:\n      - "https://<registry-url>"\n\nconfigs:\n  "<registry-url>":\n    auth:\n      username: <redacted>\n      password: <redacted>\n'})}),"\n",(0,n.jsxs)(r.p,{children:["You will also need to utilize the ",(0,n.jsx)(r.code,{children:"system-default-registry"})," flag when installing RKE2 to ensure it uses the registry. For instance, if using the configuration file:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# /etc/rancher/rke2/config.yaml\nnode-name: controlplane1\nwrite-kubeconfig-mode: 0640\nsystem-default-registry: <registry-url>\n...\n"})}),"\n",(0,n.jsxs)(r.h4,{id:"registriesyaml-strategy-approaches",children:[(0,n.jsx)(r.code,{children:"registries.yaml"})," Strategy Approaches"]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Scenario"}),(0,n.jsx)(r.th,{children:"Best practice"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Use of a 'golden machine image'"}),(0,n.jsxs)(r.td,{children:["Pre-configure ",(0,n.jsx)(r.code,{children:"registries.yaml"})," on golden machine image before host provisioning"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Rancher provisioned cluster"}),(0,n.jsxs)(r.td,{children:["Embed a ",(0,n.jsx)(r.code,{children:"cloud-init"})," file into cluster provisioning (Example below)"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ansible/Saltstack/Manual"}),(0,n.jsxs)(r.td,{children:["Pre-configure ",(0,n.jsx)(r.code,{children:"registries.yaml"})," on host before cluster provisioning"]})]})]})]}),"\n",(0,n.jsxs)(r.h4,{id:"example-cloud-init-rke2",children:["Example ",(0,n.jsx)(r.code,{children:"cloud-init"})," (",(0,n.jsx)(r.code,{children:"RKE2"}),")"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:'# cloud-init\n\nruncmd:\n  - mkdir /etc/rancher/rke2\nwrite_files:\n  - path: /etc/rancher/rke2/registries.yaml\n    content: |\n      mirrors:\n        docker.io:\n            endpoint:\n            - "https://<registry-url>"\n\n        configs:\n        "<registry-url>":\n            auth:\n            username: <redacted>\n            password: <redacted>\n    permissions: \'0644\'\n'})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>o});var n=s(6540);const i={},t=n.createContext(i);function c(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);