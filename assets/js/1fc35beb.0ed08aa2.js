"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3693],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(r),h=i,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||c;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,a=new Array(c);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2436:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const c={},a="Architecture",o={unversionedId:"registry-docs/architecture",id:"registry-docs/architecture",title:"Architecture",description:"This page will walk through the architecture of the SSF, including both the pipelines as well as typical usage of the SSF images.",source:"@site/docs/registry-docs/architecture.md",sourceDirName:"registry-docs",slug:"/registry-docs/architecture",permalink:"/carbide-docs/docs/registry-docs/architecture",draft:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/registry-docs/architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"carbideSidebar",previous:{title:"Rancher Manager Uninstall",permalink:"/carbide-docs/docs/registry-docs/uninstall-rancher"},next:{title:"Introduction",permalink:"/carbide-docs/docs/stigatron-docs/introduction"}},s={},l=[{value:"Pipeline Architecture",id:"pipeline-architecture",level:2},{value:"Usage Architecture",id:"usage-architecture",level:2}],u={toc:l};function p(e){let{components:t,...c}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"This page will walk through the architecture of the SSF, including both the pipelines as well as typical usage of the SSF images."),(0,i.kt)("h2",{id:"pipeline-architecture"},"Pipeline Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pipeline Architecture",src:r(2967).Z,width:"1102",height:"532"})),(0,i.kt)("h2",{id:"usage-architecture"},"Usage Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Usage Architecture",src:r(5553).Z,width:"1162",height:"497"})))}p.isMDXComponent=!0},2967:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ssf-pipelines-arch-diagram-9cf585297128e1ee0460f709459cb077.svg"},5553:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ssf-usage-arch-diagram-9b1be857a76bbfdc57e68373b531400a.svg"}}]);