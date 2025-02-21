"use strict";(self.webpackChunkcarbide_docs=self.webpackChunkcarbide_docs||[]).push([[7977],{1975:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=r(4848),a=r(8453);const s={},t="Installation",c={id:"classified-provisioning-docs/installation",title:"Installation",description:"Bundle Artifacts in Connected Environment",source:"@site/docs/classified-provisioning-docs/installation.md",sourceDirName:"classified-provisioning-docs",slug:"/classified-provisioning-docs/installation",permalink:"/carbide-docs/docs/classified-provisioning-docs/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/classified-provisioning-docs/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"carbideSidebar",previous:{title:"Prerequisites",permalink:"/carbide-docs/docs/classified-provisioning-docs/prereqs"},next:{title:"Provisioning Clusters",permalink:"/carbide-docs/docs/classified-provisioning-docs/usage"}},o={},l=[{value:"Bundle Artifacts in Connected Environment",id:"bundle-artifacts-in-connected-environment",level:2},{value:"Copy Files to Your Classified Registry",id:"copy-files-to-your-classified-registry",level:2},{value:"Update Your Rancher Installation",id:"update-your-rancher-installation",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,i.jsx)(n.h2,{id:"bundle-artifacts-in-connected-environment",children:"Bundle Artifacts in Connected Environment"}),"\n",(0,i.jsxs)(n.p,{children:["In a connected environment, utilize the ",(0,i.jsx)(n.code,{children:"hauler"})," CLI to verify and collect the Classified Provisioning images from the Carbide registry."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Download the Carbide public key."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# download the public key for carbide\ncurl -sfL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-key.pub -o /tmp/carbide-key.pub\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create the Hauler manifest file."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"cat <<EOF > /tmp/carbide-provisioning-manifest.yaml\napiVersion: content.hauler.cattle.io/v1alpha1\nkind: Images\nmetadata:\n  name: carbide-provisioning-images\n  annotations:\n    hauler.dev/key: /tmp/carbide-key.pub\n    # hauler.dev/platform: linux/amd64 # only fetch specific platform/architecture\nspec:\n  images:\n    - name: rgcrprod.azurecr.us/rancher/machine:v0.15.0-rancher118-carbide-1\n    - name: rgcrprod.azurecr.us/rancher/rancher:v2.9.3-carbide-1\n    - name: rgcrprod.azurecr.us/rancher/rancher-agent:v2.9.3-carbide-1\n---\napiVersion: content.hauler.cattle.io/v1alpha1\nkind: Charts\nmetadata:\n  name: carbide-provisioning-charts\nspec:\n  charts:\n    - name: rancher\n      repoURL: https://rancherfederal.github.io/carbide-charts\n      version: 2.9.3\nEOF\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Login into the Carbide registry with your Carbide Credentials, and then validate and fetch the images to the local ",(0,i.jsx)(n.code,{children:"hauler"})," store."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"hauler login rgcrprod.azurecr.us -u <redacted> -p <redacted>\nhauler store sync --files /tmp/carbide-provisioning-manifest.yaml\nhauler store save --filename carbide-provisioning-images.tar.zst\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Move the resulting ",(0,i.jsx)(n.code,{children:"carbide-provisioning-images.tar.zst"})," file into your airgapped/classified environment."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"copy-files-to-your-classified-registry",children:"Copy Files to Your Classified Registry"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy the ",(0,i.jsx)(n.code,{children:"carbide-provisioning-images.tar.zst"})," and the ",(0,i.jsx)(n.code,{children:"hauler"})," binary to a server in your airgapped/classified environment. Please ensure ",(0,i.jsx)(n.code,{children:"hauler"})," is added to your PATH."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Load the bundle to the local store and copy the images to your registry."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"hauler login <registry-url> -u <redacted> -p <redacted>\nhauler store load carbide-provisioning-images.tar.zst\nhauler store copy registry://<registry-url>\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"update-your-rancher-installation",children:"Update Your Rancher Installation"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Extract the Carbide Rancher chart from the local ",(0,i.jsx)(n.code,{children:"hauler"})," store and upgrade your existing Rancher installation with the new rancher image tag..."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"hauler store extract hauler/rancher:2.9.3\nhelm upgrade -i rancher rancher-2.9.3.tgz -n cattle-system --reuse-values --set rancherImageTag=v2.9.3-carbide-1\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more information about airgapped installation of Rancher, see the docs ",(0,i.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/airgapped-helm-cli-install",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var i=r(6540);const a={},s=i.createContext(a);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);