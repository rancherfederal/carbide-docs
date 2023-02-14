"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1083],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),p=i,y=d["".concat(o,".").concat(p)]||d[p]||g[p]||n;return r?a.createElement(y,s(s({ref:t},u),{},{components:r})):a.createElement(y,s({ref:t},u))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9358:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(7462),i=(r(7294),r(3905));const n={},s="Validating Images",l={unversionedId:"registry-docs/validating-images",id:"registry-docs/validating-images",title:"Validating Images",description:"This will guide you through validating the signatures and attestations of each image in the secured registry, as well as how to download artifacts about the image (SBOM, Trivy Vulnerability Scan).",source:"@site/docs/registry-docs/6-validating-images.md",sourceDirName:"registry-docs",slug:"/registry-docs/validating-images",permalink:"/carbide-docs/docs/registry-docs/validating-images",draft:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/registry-docs/6-validating-images.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"carbideSidebar",previous:{title:"Downloading Release Images",permalink:"/carbide-docs/docs/registry-docs/pulling-images"},next:{title:"RKE2/K3s Configuration",permalink:"/carbide-docs/docs/registry-docs/kubernetes-config"}},o={},c=[{value:"ssf-key.pub",id:"ssf-keypub",level:4},{value:"Secure Supply Chain",id:"secure-supply-chain",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Checking the Digital Signature",id:"checking-the-digital-signature",level:3},{value:"Software Bill of Materials",id:"software-bill-of-materials",level:3},{value:"Vulnerability Scan Results",id:"vulnerability-scan-results",level:3}],u={toc:c};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"validating-images"},"Validating Images"),(0,i.kt)("p",null,"This will guide you through validating the signatures and attestations of each image in the secured registry, as well as how to download artifacts about the image (SBOM, Trivy Vulnerability Scan)."),(0,i.kt)("h4",{id:"ssf-keypub"},"ssf-key.pub"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5zlXeLmRxBHbVmDRZpnCFdzKhyKO\ntCAZva7CLlk/6gxvCM0QkIKznfaGTRMMYTaHMdQSau6yulDLlpokA++i8Q==\n-----END PUBLIC KEY-----\n")),(0,i.kt)("h2",{id:"secure-supply-chain"},"Secure Supply Chain"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.sigstore.dev/cosign/installation/"},"Cosign CLI"))),(0,i.kt)("h3",{id:"checking-the-digital-signature"},"Checking the Digital Signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# export the public key for the production ssf\nexport KEY=ssf-key.pub\n# Verifying the image's attestation by validating the supplied signature\ncosign verify --key $KEY rgcrprod.azurecr.us/rancher/rancher:v2.7.1\n")),(0,i.kt)("h3",{id:"software-bill-of-materials"},"Software Bill of Materials"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Verifying the image's SBOM attestation by validating the supplied signature\ncosign verify --key $KEY rgcrprod.azurecr.us/rancher/rancher:v2.7.1 --attachment sbom\n\n# Viewing the image's SBOM\ncosign download sbom rgcrprod.azurecr.us/rancher/rancher:v2.7.1\n")),(0,i.kt)("h3",{id:"vulnerability-scan-results"},"Vulnerability Scan Results"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Verifying the image's SBOM attestation by validating the supplied signature\ncosign verify-attestation --key $KEY --type vuln rgcrprod.azurecr.us/rancher/rancher:v2.7.1 --type vuln > /dev/null\n\n# Viewing the image's vulnerability scan results\ncosign verify-attestation --key $KEY rgcrprod.azurecr.us/rancher/rancher:v2.7.1 --type vuln | jq -r '.payload' | base64 -d | jq\n")))}g.isMDXComponent=!0}}]);