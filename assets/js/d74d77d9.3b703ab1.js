"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9965],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return t?n.createElement(f,s(s({ref:r},d),{},{components:t})):n.createElement(f,s({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9135:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const i={},s="Disclaimers",a={unversionedId:"registry-docs/disclaimers",id:"registry-docs/disclaimers",title:"Disclaimers",description:"Please read the following disclaimers before installing",source:"@site/docs/registry-docs/1-disclaimers.md",sourceDirName:"registry-docs",slug:"/registry-docs/disclaimers",permalink:"/carbide-docs/docs/registry-docs/disclaimers",draft:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/registry-docs/1-disclaimers.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"carbideSidebar",previous:{title:"Introduction",permalink:"/carbide-docs/docs/intro"},next:{title:"Architecture",permalink:"/carbide-docs/docs/registry-docs/architecture"}},c={},l=[],d={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"disclaimers"},"Disclaimers"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please read the following disclaimers before installing")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This project is still in ",(0,o.kt)("strong",{parentName:"li"},"BETA"),". This should not be used for Production workloads."),(0,o.kt)("li",{parentName:"ul"},"Due to current limitations of cloud providers, this project will not work for managing Cloud Provider clusters (AKS, EKS, GKE). If you're currently using Rancher to manage those workloads, do not use this project. We intend to improve this experience in the future."),(0,o.kt)("li",{parentName:"ul"},"Images from this project are not to be distributed to programs/organizations outside of the beta program.")))}u.isMDXComponent=!0}}]);