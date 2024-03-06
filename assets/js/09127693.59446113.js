"use strict";(self.webpackChunkcarbide_docs=self.webpackChunkcarbide_docs||[]).push([[620],{5786:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=n(4848),t=n(8453);const a={},i="Rancher Manager Uninstall",l={id:"registry-docs/uninstall-rancher",title:"Rancher Manager Uninstall",description:"This page will walk you through how to uninstall Carbide Registry Images from Rancher Manager both for its own components and downstream Rancher Kubernetes clusters (RKE2/K3s).",source:"@site/docs/registry-docs/uninstall-rancher.md",sourceDirName:"registry-docs",slug:"/registry-docs/uninstall-rancher",permalink:"/carbide-docs/docs/registry-docs/uninstall-rancher",draft:!1,unlisted:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/registry-docs/uninstall-rancher.md",tags:[],version:"current",frontMatter:{},sidebar:"carbideSidebar",previous:{title:"RKE2/K3s Uninstall",permalink:"/carbide-docs/docs/registry-docs/uninstall-kubernetes"},next:{title:"Carbide Helm Charts",permalink:"/carbide-docs/docs/carbide-charts"}},o={},c=[{value:"Reverting Cert Manager",id:"reverting-cert-manager",level:2},{value:"Using Your Own Registry",id:"using-your-own-registry",level:3},{value:"Using Docker Hub Images",id:"using-docker-hub-images",level:3},{value:"Registry Auth Scenarios",id:"registry-auth-scenarios",level:2},{value:"Global Registry",id:"global-registry",level:3},{value:"Uninstall Carbide Images on Rancher (Private Registry)",id:"uninstall-carbide-images-on-rancher-private-registry",level:4},{value:"Uninstall Carbide Images on Rancher (Docker Hub)",id:"uninstall-carbide-images-on-rancher-docker-hub",level:4},{value:"Reverting Downstream Clusters to use DockerHub Images",id:"reverting-downstream-clusters-to-use-dockerhub-images",level:4},{value:"Manual <code>registries.yaml</code> configuration (<code>RKE2</code>/<code>k3s</code>)",id:"manual-registriesyaml-configuration-rke2k3s",level:3},{value:"Reverting <code>Rancher</code> Chart",id:"reverting-rancher-chart",level:3}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"rancher-manager-uninstall",children:"Rancher Manager Uninstall"}),"\n",(0,s.jsx)(r.p,{children:"This page will walk you through how to uninstall Carbide Registry Images from Rancher Manager both for its own components and downstream Rancher Kubernetes clusters (RKE2/K3s)."}),"\n",(0,s.jsx)(r.h2,{id:"reverting-cert-manager",children:"Reverting Cert Manager"}),"\n",(0,s.jsx)(r.p,{children:"As Rancher has a dependency on Cert Manager, you'll need to update your Helm install of Cert Manager to use the default images."}),"\n",(0,s.jsx)(r.h3,{id:"using-your-own-registry",children:"Using Your Own Registry"}),"\n",(0,s.jsxs)(r.p,{children:["If using your own registry, you simply need to ",(0,s.jsx)(r.a,{href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images#2-collect-the-cert-manager-image",children:"collect"})," the necessary images for cert-manager and overwrite those images in your registry."]}),"\n",(0,s.jsx)(r.p,{children:"As pods cycle, the new image should propagate across the cluster."}),"\n",(0,s.jsx)(r.h3,{id:"using-docker-hub-images",children:"Using Docker Hub Images"}),"\n",(0,s.jsx)(r.p,{children:"If you want to go back to using Docker Hub images directly, you'll need to upgrade the cert-manager installation to revert pointing to the private registry hosting the Carbide images:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"helm install cert-manager jetstack/cert-manager \\\n  --namespace cert-manager \\\n  --create-namespace \\\n  --version v1.7.1\n"})}),"\n",(0,s.jsx)(r.h2,{id:"registry-auth-scenarios",children:"Registry Auth Scenarios"}),"\n",(0,s.jsx)(r.h3,{id:"global-registry",children:"Global Registry"}),"\n",(0,s.jsx)(r.h4,{id:"uninstall-carbide-images-on-rancher-private-registry",children:"Uninstall Carbide Images on Rancher (Private Registry)"}),"\n",(0,s.jsx)(r.p,{children:"If using your own registry, you simply need to collect the necessary images for Rancher and overwrite those images in your registry."}),"\n",(0,s.jsx)(r.p,{children:"As pods cycle, the new image should propagate across the cluster."}),"\n",(0,s.jsx)(r.h4,{id:"uninstall-carbide-images-on-rancher-docker-hub",children:"Uninstall Carbide Images on Rancher (Docker Hub)"}),"\n",(0,s.jsx)(r.p,{children:"If wanting to use upgrade Docker Hub images for Rancher:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"Log into Rancher and configure the default administrator password."}),"\n",(0,s.jsxs)(r.li,{children:["Click ",(0,s.jsx)(r.strong,{children:"\u2630 > Global Settings"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["Go to the setting called ",(0,s.jsx)(r.code,{children:"system-default-registry"})," and choose ",(0,s.jsx)(r.strong,{children:"\u22ee > Edit Setting"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["Click the ",(0,s.jsx)(r.code,{children:"Use the default value"})," button."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Result:"})," Rancher will use your private registry to pull system images."]}),"\n",(0,s.jsx)(r.h4,{id:"reverting-downstream-clusters-to-use-dockerhub-images",children:"Reverting Downstream Clusters to use DockerHub Images"}),"\n",(0,s.jsx)(r.p,{children:"If you want to revert downstream RKE2/K3s clusters to use DockerHub images:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["Click ",(0,s.jsx)(r.strong,{children:"\u2630 > Cluster Management"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["On the ",(0,s.jsx)(r.strong,{children:"Clusters"})," page, select the 3-dot button to the right for downstream cluster you'd like to revert, and select ",(0,s.jsx)(r.strong,{children:"Edit Config"}),"."]}),"\n",(0,s.jsx)(r.li,{children:"."}),"\n",(0,s.jsxs)(r.li,{children:["In the ",(0,s.jsx)(r.strong,{children:"Cluster Configuration"})," go to the ",(0,s.jsx)(r.strong,{children:"Registries"})," tab and click ",(0,s.jsx)(r.strong,{children:"Use default global registry for Rancher System Container Images"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["Click ",(0,s.jsx)(r.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Result:"})," The cluster will update nodepools to use DockerHub images."]}),"\n",(0,s.jsxs)(r.h3,{id:"manual-registriesyaml-configuration-rke2k3s",children:["Manual ",(0,s.jsx)(r.code,{children:"registries.yaml"})," configuration (",(0,s.jsx)(r.code,{children:"RKE2"}),"/",(0,s.jsx)(r.code,{children:"k3s"}),")"]}),"\n",(0,s.jsxs)(r.p,{children:["See the ",(0,s.jsx)(r.a,{href:"/carbide-docs/docs/registry-docs/uninstall-kubernetes",children:"RKE2/K3s Uninstall"})," documentation."]}),"\n",(0,s.jsxs)(r.h3,{id:"reverting-rancher-chart",children:["Reverting ",(0,s.jsx)(r.code,{children:"Rancher"})," Chart"]}),"\n",(0,s.jsxs)(r.p,{children:["Follow Rancher's ",(0,s.jsx)(r.a,{href:"https://rancher.com/docs/rancher/v2.7/en/installation/install-rancher-on-k8s",children:"Installation Guide"}),", you can revert to using DockerHub images by removing values from the Helm upgrade command."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"helm upgrade rancher rancher-latest/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org \\\n  --set replicas=3\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>l});var s=n(6540);const t={},a=s.createContext(t);function i(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);