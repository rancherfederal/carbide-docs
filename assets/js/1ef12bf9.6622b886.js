"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7758],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=l(t),d=a,m=g["".concat(c,".").concat(d)]||g[d]||p[d]||s;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=g;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},705:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const s={},i="RKE2/K3s Configuration",o={unversionedId:"registry-docs/z-kubernetes-config",id:"registry-docs/z-kubernetes-config",title:"RKE2/K3s Configuration",description:"Usage with k3s",source:"@site/docs/registry-docs/z-kubernetes-config.md",sourceDirName:"registry-docs",slug:"/registry-docs/z-kubernetes-config",permalink:"/carbide-docs/docs/registry-docs/z-kubernetes-config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/registry-docs/z-kubernetes-config.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Validating Images",permalink:"/carbide-docs/docs/registry-docs/validating-images"},next:{title:"Enforcement",permalink:"/carbide-docs/docs/registry-docs/za-enforcement"}},c={},l=[{value:"Usage with <code>k3s</code>",id:"usage-with-k3s",level:3},{value:"Usage with <code>rke2</code>",id:"usage-with-rke2",level:3},{value:"Usage with <code>Rancher</code>",id:"usage-with-rancher",level:3}],u={toc:l};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rke2k3s-configuration"},"RKE2/K3s Configuration"),(0,a.kt)("h3",{id:"usage-with-k3s"},"Usage with ",(0,a.kt)("inlineCode",{parentName:"h3"},"k3s")),(0,a.kt)("p",null,"To modify the system images that ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s")," uses upon bootstrapping, configure k3s' mirror settings as described ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/private-registry/#mirrors"},"here"),"."),(0,a.kt)("p",null,"The full configuration using the shared alpha account is below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# /etc/rancher/k3s/registries.yaml\nconfigs:\n  "rgcrprod.azurecr.us":\n    auth:\n      username: internal-tester-read\n      password: <redacted>\n')),(0,a.kt)("p",null,"You will also need to utilize the ",(0,a.kt)("inlineCode",{parentName:"p"},"system-default-registry")," flag when installing K3s to ensure it uses the registry. For instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | sh - --system-default-registry rgcrprod.azurecr.us\n")),(0,a.kt)("h3",{id:"usage-with-rke2"},"Usage with ",(0,a.kt)("inlineCode",{parentName:"h3"},"rke2")),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s"),", the SSF images are pulled upon bootstrapping by configuring ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2"),"'s mirroring configuration as described ",(0,a.kt)("a",{parentName:"p",href:"https://rke2.io"},"here"),"."),(0,a.kt)("p",null,"The full configuration using the shared alpha account is below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# /etc/rancher/rke2/registries.yaml\nconfigs:\n  "rgcrprod.azurecr.us":\n    auth:\n      username: internal-tester-read\n      password: <redacted>\n')),(0,a.kt)("p",null,"You will also need to utilize the ",(0,a.kt)("inlineCode",{parentName:"p"},"system-default-registry")," flag when installing RKE2 to ensure it uses the registry. For instance, if using the configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# /etc/rancher/rke2/config.yaml\nnode-name: controlplane1\nwrite-kubeconfig-mode: 0640\nsystem-default-registry: rgcrprod.azurecr.us\n...\n")),(0,a.kt)("h3",{id:"usage-with-rancher"},"Usage with ",(0,a.kt)("inlineCode",{parentName:"h3"},"Rancher")),(0,a.kt)("p",null,"When installing Rancher, to utilize the private registry, you'll need to set the following values in your Helm values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm install rancher rancher-latest/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org \\\n  --set replicas=3 \\\n  --set rancherImage=rgcrprod.azurecr.us/rancher/rancher\n  --set systemDefaultRegistry=rgcrprod.azurecr.us\n")),(0,a.kt)("p",null,"NOTE: This requires configuring your above K3s/RKE2 ",(0,a.kt)("inlineCode",{parentName:"p"},"registries.yaml")," to work."))}p.isMDXComponent=!0}}]);