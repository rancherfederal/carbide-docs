"use strict";(self.webpackChunkcarbide_docs=self.webpackChunkcarbide_docs||[]).push([[5024],{6625:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(4848),i=t(8453);const r={},l="Installation",a={id:"stigatron-docs/installation",title:"Installation",description:"DISCLAIMER: Due to upstream changes outside RGS control, development of STIGATRON has been temporarily paused. STIGATRON will not be available in the Carbide Secured Registry and current users may experience issues. We are working with the necessary parties to identify a solution as soon as possible. Thank you for your patience.",source:"@site/docs/stigatron-docs/installation.md",sourceDirName:"stigatron-docs",slug:"/stigatron-docs/installation",permalink:"/carbide-docs/docs/stigatron-docs/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/stigatron-docs/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"carbideSidebar",previous:{title:"Prerequisites",permalink:"/carbide-docs/docs/stigatron-docs/prereqs"},next:{title:"Creating STIGATRON Scans",permalink:"/carbide-docs/docs/stigatron-docs/create-scan"}},o={},c=[{value:"Local Cluster",id:"local-cluster",level:2},{value:"Enabling UI Extensions",id:"enabling-ui-extensions",level:3},{value:"Installing STIGATRON UI Plugin",id:"installing-stigatron-ui-plugin",level:3},{value:"Downstream Clusters",id:"downstream-clusters",level:2},{value:"Installing CIS Benchmark Operator",id:"installing-cis-benchmark-operator",level:3},{value:"Creating the License Secret",id:"creating-the-license-secret",level:3},{value:"Installing STIGATRON Operator",id:"installing-stigatron-operator",level:3}];function d(e){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u26a0\ufe0f"," ",(0,s.jsx)(n.strong,{children:"DISCLAIMER"}),": Due to upstream changes outside RGS control, development of STIGATRON has been temporarily paused. STIGATRON will not be available in the Carbide Secured Registry and current users may experience issues. We are working with the necessary parties to identify a solution as soon as possible. Thank you for your patience."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"local-cluster",children:"Local Cluster"}),"\n",(0,s.jsx)(n.h3,{id:"enabling-ui-extensions",children:"Enabling UI Extensions"}),"\n",(0,s.jsxs)(n.p,{children:["On the ",(0,s.jsx)(n.code,{children:"local"})," cluster running Rancher, you'll need to first enable Extensions."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Log into Rancher as an administrator."}),"\n",(0,s.jsxs)(n.li,{children:["Click the menu in the upper-left of the main dashboard and click the ",(0,s.jsx)(n.code,{children:"Extensions"})," link near the bottom."]}),"\n",(0,s.jsxs)(n.li,{children:["Click the ",(0,s.jsx)(n.code,{children:"Enable"})," button on the Extensions screen."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Ok"}),", when prompted to Enable Extension Support."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Enable Extensions",src:t(1417).A+"",width:"423",height:"283"})}),"\n",(0,s.jsx)(n.h3,{id:"installing-stigatron-ui-plugin",children:"Installing STIGATRON UI Plugin"}),"\n",(0,s.jsxs)(n.p,{children:["Next, on the same ",(0,s.jsx)(n.code,{children:"local"})," cluster, run the following Helm commands to install the UI Plugin for STIGATRON (see the ",(0,s.jsx)(n.code,{children:"tgz"})," method above for airgap with no Helm repository) and ensure to substitute your registry:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'helm install -n carbide-stigatron-system --create-namespace \\\n  --set "global.cattle.systemDefaultRegistry=<registry-url>" \\\n  stigatron-ui carbide-charts/stigatron-ui\n'})}),"\n",(0,s.jsx)(n.p,{children:"Check the status of the rollout:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"helm status -n carbide-stigatron-system stigatron-ui\n"})}),"\n",(0,s.jsx)(n.h2,{id:"downstream-clusters",children:"Downstream Clusters"}),"\n",(0,s.jsx)(n.h3,{id:"installing-cis-benchmark-operator",children:"Installing CIS Benchmark Operator"}),"\n",(0,s.jsx)(n.p,{children:"On downstream clusters, you'll need to first install Rancher's CIS Benchmark Operator:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to your cluster in the ",(0,s.jsx)(n.code,{children:"Explore Cluster"})," menu."]}),"\n",(0,s.jsxs)(n.li,{children:["On the left, select ",(0,s.jsx)(n.code,{children:"Apps"})," and click ",(0,s.jsx)(n.code,{children:"Charts"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.code,{children:"Filter"})," box on the right, type ",(0,s.jsx)(n.code,{children:"CIS Benchmark"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Review the ",(0,s.jsx)(n.code,{children:"Chart Information"})," and when ready click ",(0,s.jsx)(n.code,{children:"Install"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Leave all default values, select ",(0,s.jsx)(n.code,{children:"Next"}),", and then click ",(0,s.jsx)(n.code,{children:"Install"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Wait for the installation to complete and feel free to close the kubectl shell."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"creating-the-license-secret",children:"Creating the License Secret"}),"\n",(0,s.jsxs)(n.p,{children:["Next, you'll need to create the ",(0,s.jsx)(n.code,{children:"carbide-stigatron-system"})," namespace and create a secret named ",(0,s.jsx)(n.code,{children:"stigatron-license"})," containing your Carbide License. ",(0,s.jsxs)(n.em,{children:["This step is ",(0,s.jsx)(n.strong,{children:"critical"}),", as STIGATRON operator will not start without this secret present:"]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Create the namespace\nkubectl create namespace carbide-stigatron-system\n\n# Now create the secret, substituting your license\nkubectl create secret generic stigatron-license -n carbide-stigatron-system --from-literal=license=YOUR_LICENSE_HERE\n"})}),"\n",(0,s.jsx)(n.h3,{id:"installing-stigatron-operator",children:"Installing STIGATRON Operator"}),"\n",(0,s.jsxs)(n.p,{children:["Next, you'll need to run the following Helm command to install the STIGATRON Operator (",(0,s.jsx)(n.strong,{children:"NOTE:"})," Using carbide-stigatron-system as the namespace is required):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'helm install -n carbide-stigatron-system \\\n  --set "global.cattle.systemDefaultRegistry=<registry-url>" \\\n  --set "heimdall2.global.cattle.systemDefaultRegistry=<registry-url>" \\\n  stigatron carbide-charts/stigatron\n'})}),"\n",(0,s.jsx)(n.p,{children:"Check the status of the rollout:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"helm status -n carbide-stigatron-system stigatron\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You should now see ",(0,s.jsx)(n.code,{children:"STIGATRON"})," on the left menu of your Explore Cluster."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1417:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/enable-extensions-7fe6a20cc6329308d15909ea129df599.png"},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);