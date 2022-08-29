"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2639],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(r),d=n,y=g["".concat(o,".").concat(d)]||g[d]||p[d]||i;return r?a.createElement(y,s(s({ref:t},u),{},{components:r})):a.createElement(y,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={},s="Validating Images",l={unversionedId:"registry-docs/validating-images",id:"registry-docs/validating-images",title:"Validating Images",description:"ssf-key.pub",source:"@site/docs/registry-docs/validating-images.md",sourceDirName:"registry-docs",slug:"/registry-docs/validating-images",permalink:"/carbide-docs/docs/registry-docs/validating-images",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/registry-docs/validating-images.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Downloading Release Images",permalink:"/carbide-docs/docs/registry-docs/pulling-images"},next:{title:"RKE2/K3s Configuration",permalink:"/carbide-docs/docs/registry-docs/z-kubernetes-config"}},o={},c=[{value:"ssf-key.pub",id:"ssf-keypub",level:4},{value:"Secure Supply Chain",id:"secure-supply-chain",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Checking the Digital Signature",id:"checking-the-digital-signature",level:3},{value:"Software Bill of Materials",id:"software-bill-of-materials",level:3},{value:"Vulnerability Scan Results",id:"vulnerability-scan-results",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"validating-images"},"Validating Images"),(0,n.kt)("h4",{id:"ssf-keypub"},"ssf-key.pub"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKO\ntCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==\n-----END PUBLIC KEY-----\n")),(0,n.kt)("h2",{id:"secure-supply-chain"},"Secure Supply Chain"),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.sigstore.dev/cosign/installation/"},"Cosign CLI"))),(0,n.kt)("h3",{id:"checking-the-digital-signature"},"Checking the Digital Signature"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# export the public key for the production ssf\nexport KEY=ssf-key.pub\n# Verifying the image's attestation by validating the supplied signature\ncosign verify --key $KEY rgcrprod.azurecr.us/rancher/system-agent:v0.1.1-suc\n")),(0,n.kt)("h3",{id:"software-bill-of-materials"},"Software Bill of Materials"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Verifying the image's SBOM attestation by validating the supplied signature\ncosign verify --key $KEY rgcrprod.azurecr.us/rancher/system-agent:v0.1.1-suc --attachment sbom\n\n# Viewing the image's SBOM\ncosign download sbom rgcrprod.azurecr.us/rancher/system-agent:v0.1.1-suc\n")),(0,n.kt)("h3",{id:"vulnerability-scan-results"},"Vulnerability Scan Results"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Verifying the image's SBOM attestation by validating the supplied signature\ncosign verify-attestation --key $KEY --type vuln rgcrprod.azurecr.us/rancher/system-agent:v0.1.1-suc --type vuln > /dev/null\n\n# Viewing the image's vulnerability scan results\ncosign verify-attestation --key $KEY rgcrprod.azurecr.us/rancher/system-agent:v0.1.1-suc  --type vuln | jq -r '.payload' | base64 -d | jq\n")))}p.isMDXComponent=!0}}]);