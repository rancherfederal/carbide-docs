"use strict";(self.webpackChunkcarbide_docs=self.webpackChunkcarbide_docs||[]).push([[875],{9688:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=t(4848),i=t(8453);const s={},a="Rancher Manager Configuration",l={id:"registry-docs/configuration/rancher",title:"Rancher Manager Configuration",description:"This page will walk you through how to configure Rancher Manager to use images from the CSR instead of the upstream Docker Hub images. This will apply to both its own components and downstream Rancher Kubernetes clusters (RKE2/K3s).",source:"@site/docs/registry-docs/configuration/rancher.md",sourceDirName:"registry-docs/configuration",slug:"/registry-docs/configuration/rancher",permalink:"/carbide-docs/docs/registry-docs/configuration/rancher",draft:!1,unlisted:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/registry-docs/configuration/rancher.md",tags:[],version:"current",frontMatter:{},sidebar:"carbideSidebar",previous:{title:"RKE2/K3s Configuration",permalink:"/carbide-docs/docs/registry-docs/configuration/kubernetes"},next:{title:"Enforcement",permalink:"/carbide-docs/docs/registry-docs/enforcement"}},o={},c=[{value:"Compatibility Matrix",id:"compatibility-matrix",level:2},{value:"Preliminary Setup",id:"preliminary-setup",level:3},{value:"Configuring Cert Manager",id:"configuring-cert-manager",level:4},{value:"Registry Auth Strategies",id:"registry-auth-strategies",level:2},{value:"Global Registry (Rancher)",id:"global-registry-rancher",level:3},{value:"Existing Rancher Installations",id:"existing-rancher-installations",level:4},{value:"Setting a Private Registry with No Credentials as the Default Registry",id:"setting-a-private-registry-with-no-credentials-as-the-default-registry",level:5},{value:"Setting a Private Registry with Credentials when Deploying a Cluster",id:"setting-a-private-registry-with-credentials-when-deploying-a-cluster",level:5},{value:"New Rancher Installations",id:"new-rancher-installations",level:4},{value:"Authenticated Registry (Manual registries.yaml)",id:"authenticated-registry-manual-registriesyaml",level:3}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"rancher-manager-configuration",children:"Rancher Manager Configuration"}),"\n",(0,n.jsx)(r.p,{children:"This page will walk you through how to configure Rancher Manager to use images from the CSR instead of the upstream Docker Hub images. This will apply to both its own components and downstream Rancher Kubernetes clusters (RKE2/K3s)."}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"NOTE"}),": Due to current limitations of cloud providers, this project will not work for managing Cloud Provider clusters (AKS, EKS, GKE). If you're currently using Rancher to manage those workloads, do not use this project. We intend to improve this experience in the future."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"compatibility-matrix",children:"Compatibility Matrix"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Infra"}),(0,n.jsx)(r.th,{children:"Provisioner"}),(0,n.jsx)(r.th,{children:"Registry Auth Strategy"}),(0,n.jsx)(r.th,{children:"Test Status"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Any"}),(0,n.jsx)(r.td,{children:"Rancher (Cloud provisioner)"}),(0,n.jsx)(r.td,{children:"Global Registry (Rancher)"}),(0,n.jsx)(r.td,{children:"Validated"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Any"}),(0,n.jsx)(r.td,{children:"Rancher (Custom provisioner)"}),(0,n.jsx)(r.td,{children:"Authenticated Registry (Manual registries.yaml)"}),(0,n.jsx)(r.td,{children:"Validated"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Any"}),(0,n.jsx)(r.td,{children:"Self Installation"}),(0,n.jsx)(r.td,{children:"Global Registry (Rancher)"}),(0,n.jsx)(r.td,{children:"Validated"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Any"}),(0,n.jsx)(r.td,{children:"Imported Cluster"}),(0,n.jsx)(r.td,{children:"Unknown"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"AWS-EKS"}),(0,n.jsx)(r.td,{children:"Rancher"}),(0,n.jsx)(r.td,{children:"ECR (public or private)"}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"preliminary-setup",children:"Preliminary Setup"}),"\n",(0,n.jsx)(r.p,{children:"As Rancher has a dependency on Cert Manager, you'll need to update/install Cert Manager with the images provided by the CSR."}),"\n",(0,n.jsxs)(r.p,{children:["If you're following Rancher's ",(0,n.jsx)(r.a,{href:"https://rancher.com/docs/rancher/v2.6/en/installation/install-rancher-on-k8s/#4-install-cert-manager",children:"Connected"})," installation instructions, you'll need to follow the next steps to use the Carbide Secured Registry (CSR) images for cert-manager."]}),"\n",(0,n.jsxs)(r.p,{children:["If using the ",(0,n.jsx)(r.a,{href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/air-gap/install-rancher/#1-add-the-cert-manager-repo",children:"Airgapped"})," installation instructions, make sure you've pulled the images to your local/airgapped registry."]}),"\n",(0,n.jsx)(r.h4,{id:"configuring-cert-manager",children:"Configuring Cert Manager"}),"\n",(0,n.jsxs)(r.p,{children:["Follow Rancher's ",(0,n.jsx)(r.a,{href:"https://rancher.com/docs/rancher/v2.6/en/installation/install-rancher-on-k8s/#4-install-cert-manager",children:"Connected"})," installation instructions, but using the following steps instead of the ",(0,n.jsx)(r.code,{children:"helm install"})," command from the docs."]}),"\n",(0,n.jsxs)(r.p,{children:["After adding the Cert Manager repo and installing the CRDs, use the following to create a temporary ",(0,n.jsx)(r.code,{children:"values.yaml"})," for your chart, subsituting your registry domain:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"cat <<EOT > /tmp/values.yaml\nimage:\n  registry: <registry-url>\n  repository: jetstack/cert-manager-controller\n\nwebhook:\n  image:\n    registry: <registry-url>\n    repository: jetstack/cert-manager-webhook\n\ncainjector:\n  image:\n    registry: <registry-url>\n    repository: jetstack/cert-manager-cainjector\n\nstartupapicheck:\n  image:\n    registry: <registry-url>\n    repository: jetstack/cert-manager-startupapicheck\n\nacmesolver:\n  image:\n    registry: <registry-url>\n    repository: jetstack/cert-manager-acmesolver\nEOT\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Then use the following ",(0,n.jsx)(r.code,{children:"helm install"})," command to use the images:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"helm install cert-manager jetstack/cert-manager \\\n  --namespace cert-manager \\\n  --create-namespace \\\n  --version v1.14.4 \\\n  -f /tmp/values.yaml\n"})}),"\n",(0,n.jsx)(r.h2,{id:"registry-auth-strategies",children:"Registry Auth Strategies"}),"\n",(0,n.jsx)(r.h3,{id:"global-registry-rancher",children:"Global Registry (Rancher)"}),"\n",(0,n.jsx)(r.h4,{id:"existing-rancher-installations",children:"Existing Rancher Installations"}),"\n",(0,n.jsx)(r.h5,{id:"setting-a-private-registry-with-no-credentials-as-the-default-registry",children:"Setting a Private Registry with No Credentials as the Default Registry"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Log into Rancher and configure the default administrator password."}),"\n",(0,n.jsxs)(r.li,{children:["Click ",(0,n.jsx)(r.strong,{children:"\u2630 > Global Settings"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Go to the setting called ",(0,n.jsx)(r.code,{children:"system-default-registry"})," and choose ",(0,n.jsx)(r.strong,{children:"\u22ee > Edit Setting"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Change the value to your registry (e.g. ",(0,n.jsx)(r.code,{children:"registry.yourdomain.com:port"}),"). Do not prefix the registry with ",(0,n.jsx)(r.code,{children:"http://"})," or ",(0,n.jsx)(r.code,{children:"https://"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Result:"})," Rancher will use your private registry to pull system images."]}),"\n",(0,n.jsx)(r.h5,{id:"setting-a-private-registry-with-credentials-when-deploying-a-cluster",children:"Setting a Private Registry with Credentials when Deploying a Cluster"}),"\n",(0,n.jsx)(r.p,{children:"You can follow these steps to configure a private registry when you create a cluster:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["Click ",(0,n.jsx)(r.strong,{children:"\u2630 > Cluster Management"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["On the ",(0,n.jsx)(r.strong,{children:"Clusters"})," page, click ",(0,n.jsx)(r.strong,{children:"Create"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"Choose a cluster type."}),"\n",(0,n.jsxs)(r.li,{children:["In the ",(0,n.jsx)(r.strong,{children:"Cluster Configuration"})," go to the ",(0,n.jsx)(r.strong,{children:"Registries"})," tab and click ",(0,n.jsx)(r.strong,{children:"Pull images for Rancher from a private registry"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"Enter the registry hostname and credentials."}),"\n",(0,n.jsxs)(r.li,{children:["Click ",(0,n.jsx)(r.strong,{children:"Create"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Result:"})," The new cluster will be able to pull images from the private registry."]}),"\n",(0,n.jsx)(r.h4,{id:"new-rancher-installations",children:"New Rancher Installations"}),"\n",(0,n.jsxs)(r.p,{children:["Follow Rancher's ",(0,n.jsx)(r.a,{href:"https://rancher.com/docs/rancher/v2.5/en/installation/install-rancher-on-k8s",children:"Installation Guide"}),", making sure to use the carbide chart obtained in the previous ",(0,n.jsx)(r.a,{href:"/carbide-docs/docs/registry-docs/carbide-charts",children:"helm chart"})," section."]}),"\n",(0,n.jsx)(r.p,{children:"When installing Rancher, to utilize the private registry, you'll need to set the following values in your helm values:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"helm install rancher carbide-charts/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org \\\n  --set replicas=3 \\\n  --set rancherImage=<registry-url>/rancher/rancher\n  --set systemDefaultRegistry=<registry-url>\n"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"NOTE:"})," This requires configuring RKE2/K3s ",(0,n.jsx)(r.code,{children:"registries.yaml"})," to work. See the ",(0,n.jsx)(r.a,{href:"/carbide-docs/docs/registry-docs/configuration/kubernetes",children:"RKE2/K3s configuration"})," section for more details."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"authenticated-registry-manual-registriesyaml",children:"Authenticated Registry (Manual registries.yaml)"}),"\n",(0,n.jsxs)(r.p,{children:["See the ",(0,n.jsx)(r.a,{href:"/carbide-docs/docs/registry-docs/configuration/kubernetes",children:"RKE2/K3s configuration"})," section for more details."]})]})}function d(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var n=t(6540);const i={},s=n.createContext(i);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);