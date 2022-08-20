"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7758],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?n.createElement(g,o(o({ref:r},p),{},{components:t})):n.createElement(g,o({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},705:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const i={},o="RKE2/K3s Configuration",s={unversionedId:"registry-docs/z-kubernetes-config",id:"registry-docs/z-kubernetes-config",title:"RKE2/K3s Configuration",description:"Usage with k3s",source:"@site/docs/registry-docs/z-kubernetes-config.md",sourceDirName:"registry-docs",slug:"/registry-docs/z-kubernetes-config",permalink:"/carbide-docs/docs/registry-docs/z-kubernetes-config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/registry-docs/z-kubernetes-config.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Validating Images",permalink:"/carbide-docs/docs/registry-docs/validating-images"},next:{title:"Enforcement",permalink:"/carbide-docs/docs/registry-docs/za-enforcement"}},c={},l=[{value:"Usage with <code>k3s</code>",id:"usage-with-k3s",level:3},{value:"Usage with <code>rke2</code>",id:"usage-with-rke2",level:3}],p={toc:l};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rke2k3s-configuration"},"RKE2/K3s Configuration"),(0,a.kt)("h3",{id:"usage-with-k3s"},"Usage with ",(0,a.kt)("inlineCode",{parentName:"h3"},"k3s")),(0,a.kt)("p",null,"To modify the system images that ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s")," uses upon bootstrapping, configure k3s' mirror settings as described ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/private-registry/#mirrors"},"here"),"."),(0,a.kt)("p",null,"The full configuration using the shared alpha account is below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# /etc/rancher/k3s/registries.yaml\nmirrors:\n  docker.io:\n    endpoint:\n      - "https://rgcrprod.azurecr.us"\n\nconfigs:\n  "rgcrprod.azurecr.us":\n    auth:\n      username: internal-tester-read\n      password: <redacted>\n')),(0,a.kt)("p",null,'NOTE: The above configuration "registers" ',(0,a.kt)("inlineCode",{parentName:"p"},"rgcrprod.azurecr.us")," as a potential mirror for ",(0,a.kt)("em",{parentName:"p"},"all")," images that come from ",(0,a.kt)("inlineCode",{parentName:"p"},"docker.io"),".  For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx:latest")," will also try to mirror from ",(0,a.kt)("inlineCode",{parentName:"p"},"rgcrprod.azurecr.us"),", but since it is not available, it will silently fallback to ",(0,a.kt)("inlineCode",{parentName:"p"},"docker.io/nginx:latest"),"."),(0,a.kt)("p",null,"WARNING: When validating the images with ",(0,a.kt)("inlineCode",{parentName:"p"},"ctr")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"crictl"),", the loaded images will still maintain their pre-mirror naming (",(0,a.kt)("inlineCode",{parentName:"p"},"rancher/system-agent:v0.1.1-suc:"),")."),(0,a.kt)("h3",{id:"usage-with-rke2"},"Usage with ",(0,a.kt)("inlineCode",{parentName:"h3"},"rke2")),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s"),", the SSF images are pulled upon bootstrapping by configuring ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2"),"'s mirroring configuration as described ",(0,a.kt)("a",{parentName:"p",href:"https://rke2.io"},"here"),"."),(0,a.kt)("p",null,"The full configuration using the shared alpha account is below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# /etc/rancher/rke2/registries.yaml\nmirrors:\n  docker.io:\n    endpoint:\n      - "https://rgcrprod.azurecr.us"\n\nconfigs:\n  "rgcrprod.azurecr.us":\n    auth:\n      username: internal-tester-read\n      password: <redacted>\n')))}u.isMDXComponent=!0}}]);