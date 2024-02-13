"use strict";(self.webpackChunkcarbide_docs=self.webpackChunkcarbide_docs||[]).push([[451],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=s,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},264:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),s=(r(7294),r(4137));const a={},o="Prerequisites",i={unversionedId:"registry-docs/prereqs",id:"registry-docs/prereqs",title:"Prerequisites",description:"Below are all the things you need to get started with the Hardened Container Registry. As we improve and streamline the process, this list could evolve.",source:"@site/docs/registry-docs/prereqs.md",sourceDirName:"registry-docs",slug:"/registry-docs/prereqs",permalink:"/carbide-docs/docs/registry-docs/prereqs",draft:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/registry-docs/prereqs.md",tags:[],version:"current",frontMatter:{},sidebar:"carbideSidebar",previous:{title:"Release Cadence",permalink:"/carbide-docs/docs/registry-docs/release-cadence"},next:{title:"Validating Images",permalink:"/carbide-docs/docs/registry-docs/validating-images"}},l={},c=[{value:"Registry Disclaimer",id:"registry-disclaimer",level:2},{value:"Required Tools",id:"required-tools",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"Below are all the things you need to get started with the Hardened Container Registry. As we improve and streamline the process, this list could evolve."),(0,s.kt)("h2",{id:"registry-disclaimer"},"Registry Disclaimer"),(0,s.kt)("p",null,"The Carbide Secured Registry (rgcrprod.azurecr.us) is ",(0,s.kt)("em",{parentName:"p"},"not")," intended to be used as the primary registry for running Kubernetes clusters. It is only intended as the acquisition point to obtain the Carbide images. Customers should seed their own private registries, and use that registry for their Kubernetes clusters."),(0,s.kt)("h2",{id:"required-tools"},"Required Tools"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Packaging/Airgapping Tool: ",(0,s.kt)("a",{parentName:"strong",href:"https://hauler.dev"},"hauler"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# example installation steps\n# please see the docs: https://rancherfederal.github.io/hauler-docs/docs/introduction/install\n\ncurl -sfL https://get.hauler.dev | bash\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Supply Chain Tool: ",(0,s.kt)("a",{parentName:"strong",href:"https://docs.sigstore.dev/"},"cosign"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# example installation steps\n# please see the docs: https://docs.sigstore.dev/system_config/installation\n\ncurl -O -L "https://github.com/sigstore/cosign/releases/latest/download/cosign-linux-amd64"\nsudo mv cosign-linux-amd64 /usr/local/bin/cosign\nsudo chmod 755 /usr/local/bin/cosign\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Container Tool: ",(0,s.kt)("a",{parentName:"strong",href:"https://helm.sh/docs/"},"helm"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# example installation steps\n# please see the docs: https://helm.sh/docs/intro/install\n\ncurl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3\nsudo chmod 755 get_helm.sh && sudo ./get_helm.sh\n")))}p.isMDXComponent=!0}}]);