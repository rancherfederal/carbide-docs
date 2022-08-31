"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3602],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7001:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="Enforcement",s={unversionedId:"registry-docs/za-enforcement",id:"registry-docs/za-enforcement",title:"Enforcement",description:"Kubewarden Enforcement",source:"@site/docs/registry-docs/za-enforcement.md",sourceDirName:"registry-docs",slug:"/registry-docs/za-enforcement",permalink:"/carbide-docs/docs/registry-docs/za-enforcement",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/registry-docs/za-enforcement.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rancher Manager Configuration",permalink:"/carbide-docs/docs/registry-docs/z-rancher-config"},next:{title:"Serving Container Images",permalink:"/carbide-docs/docs/registry-docs/zz-serving-images"}},c={},l=[{value:"Kubewarden Enforcement",id:"kubewarden-enforcement",level:2},{value:"Installation",id:"installation",level:3},{value:"Private Registry",id:"private-registry",level:3},{value:"Creating the Policy",id:"creating-the-policy",level:3},{value:"OPA Gatekeeper Enforcement",id:"opa-gatekeeper-enforcement",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"enforcement"},"Enforcement"),(0,a.kt)("h2",{id:"kubewarden-enforcement"},"Kubewarden Enforcement"),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"See the docs on how to install ",(0,a.kt)("a",{parentName:"p",href:"https://docs.kubewarden.io/quick-start#installation"},"Kubewarden")," onto your cluster."),(0,a.kt)("h3",{id:"private-registry"},"Private Registry"),(0,a.kt)("p",null,"If your Rancher system images are in a private registry requiring authentication, you'll need to configure your Kubewarden policy-server with a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.kubewarden.io/operator-manual/policy-servers/private-registry"},"Pull Secret")," in order for it to validate the signature."),(0,a.kt)("h3",{id:"creating-the-policy"},"Creating the Policy"),(0,a.kt)("p",null,"After installing/configuring Kubewarden, apply the following ClusterAdmissionPolicy (substituting ",(0,a.kt)("inlineCode",{parentName:"p"},"YOUR_REGISTRY_HERE")," with your registry domain):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: verify-image-signatures\nspec:\n  module: ghcr.io/kubewarden/policies/verify-image-signatures:v0.1.7\n  rules:\n  - apiGroups: ["", "apps", "batch"]\n    apiVersions: ["v1"]\n    resources: ["pods", "deployments", "statefulsets", "replicationcontrollers", "jobs", "cronjobs"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: true\n  settings:\n    signatures:\n    - image: "YOUR_REGISTRY_HERE/rancher/*"\n      pubKeys: \n        - |\n          -----BEGIN PUBLIC KEY-----\n          MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKO\n          tCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==\n          -----END PUBLIC KEY-----\n    - image: "YOUR_REGISTRY_HERE/longhornio/*"\n      pubKeys: \n        - |\n          -----BEGIN PUBLIC KEY-----\n          MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKO\n          tCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==\n          -----END PUBLIC KEY-----\n')),(0,a.kt)("h2",{id:"opa-gatekeeper-enforcement"},"OPA Gatekeeper Enforcement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"coming soon\n")))}p.isMDXComponent=!0}}]);