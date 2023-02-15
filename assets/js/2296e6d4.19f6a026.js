"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9451],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={},a="Prerequisites",l={unversionedId:"registry-docs/prereqs",id:"registry-docs/prereqs",title:"Prerequisites",description:"Below are all the things you need to get started with the Hardened Container Registry. As we improve and streamline the process, this list could evolve.",source:"@site/docs/registry-docs/prereqs.md",sourceDirName:"registry-docs",slug:"/registry-docs/prereqs",permalink:"/carbide-docs/docs/registry-docs/prereqs",draft:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/registry-docs/prereqs.md",tags:[],version:"current",frontMatter:{},sidebar:"carbideSidebar",previous:{title:"Introduction",permalink:"/carbide-docs/docs/registry-docs/introduction"},next:{title:"Validating Images",permalink:"/carbide-docs/docs/registry-docs/validating-images"}},s={},c=[{value:"Required Tools",id:"required-tools",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Below are all the things you need to get started with the Hardened Container Registry. As we improve and streamline the process, this list could evolve."),(0,o.kt)("h3",{id:"required-tools"},"Required Tools"),(0,o.kt)("p",null,"To explore what's available, you'll need some common tooling:"),(0,o.kt)("p",null,"Supply Chain Validation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/sigstore/cosign"},"cosign"))),(0,o.kt)("p",null,"Container Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/0"},"docker")," (just the cli, but it comes as a package)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/docs/"},"helm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hauler.dev"},"hauler")," (Not currently required, but will be in the near future)")),(0,o.kt)("p",null,"Other Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/tar/"},"tar")," (required for airgap packaging/serving)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.gzip.org/"},"gzip")," (required for airgap packaging/serving)")))}u.isMDXComponent=!0}}]);