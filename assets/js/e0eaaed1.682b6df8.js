"use strict";(self.webpackChunkcarbide_docs=self.webpackChunkcarbide_docs||[]).push([[353],{814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var s=t(4848),l=t(8453);const i={},o="Uninstall",r={id:"stigatron-docs/uninstall",title:"Uninstall",description:"Local Cluster",source:"@site/docs/stigatron-docs/uninstall.md",sourceDirName:"stigatron-docs",slug:"/stigatron-docs/uninstall",permalink:"/carbide-docs/docs/stigatron-docs/uninstall",draft:!1,unlisted:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/stigatron-docs/uninstall.md",tags:[],version:"current",frontMatter:{},sidebar:"carbideSidebar",previous:{title:"Using MITRE Heimdall",permalink:"/carbide-docs/docs/stigatron-docs/using-heimdall"},next:{title:"Introduction",permalink:"/carbide-docs/docs/airgapped-docs/introduction"}},c={},a=[{value:"Local Cluster",id:"local-cluster",level:2},{value:"Downstream Clusters",id:"downstream-clusters",level:2},{value:"Uninstalling CIS Benchmark (Optional)",id:"uninstalling-cis-benchmark-optional",level:2},{value:"Disable UI Extensions (Optional)",id:"disable-ui-extensions-optional",level:2},{value:"TODO: List",id:"todo-list",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"uninstall",children:"Uninstall"}),"\n",(0,s.jsx)(n.h2,{id:"local-cluster",children:"Local Cluster"}),"\n",(0,s.jsxs)(n.p,{children:["On the ",(0,s.jsx)(n.code,{children:"local"})," cluster running Rancher MCM, run the following Helm command to remove the UI Extension."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"helm uninstall -n carbide-stigatron-system stigatron-ui carbide-charts/stigatron-ui\n"})}),"\n",(0,s.jsx)(n.h2,{id:"downstream-clusters",children:"Downstream Clusters"}),"\n",(0,s.jsx)(n.p,{children:"On each downstream cluster, run the following command to uninstall STIGATRON:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"helm uninstall -n carbide-stigatron-system stigatron\n"})}),"\n",(0,s.jsx)(n.h2,{id:"uninstalling-cis-benchmark-optional",children:"Uninstalling CIS Benchmark (Optional)"}),"\n",(0,s.jsx)(n.p,{children:"If you want to uninstall CIS Benchmark, after uninstall STIGATRON, perform the following:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Log into the Rancher MCM."}),"\n",(0,s.jsx)(n.li,{children:"In the UI, navigate to each downstream cluster in the Cluster Explorer."}),"\n",(0,s.jsxs)(n.li,{children:["On the left menu, select ",(0,s.jsx)(n.code,{children:"Apps"}),", then select ",(0,s.jsx)(n.code,{children:"Installed Apps"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Find the app named ",(0,s.jsx)(n.code,{children:"rancher-cis-benchmark"}),", select the 3-dot menu on the right, and select ",(0,s.jsx)(n.code,{children:"Delete"}),". (IMPORTANT: Delete this before the CRD application)"]}),"\n",(0,s.jsxs)(n.li,{children:["Find the app named ",(0,s.jsx)(n.code,{children:"rancher-cis-benchmark-crd"}),", select the 3-dot menu on the right, and select ",(0,s.jsx)(n.code,{children:"Delete"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"disable-ui-extensions-optional",children:"Disable UI Extensions (Optional)"}),"\n",(0,s.jsx)(n.p,{children:"If you want to disable UI Extensions, after uninstall STIGATRON UI, perform the following:"}),"\n",(0,s.jsx)(n.h3,{id:"todo-list",children:"TODO: List"})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(6540);const l={},i=s.createContext(l);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);