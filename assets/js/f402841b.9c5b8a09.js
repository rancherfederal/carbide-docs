"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8906],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="Using STIGATRON",s={unversionedId:"stigatron-docs/usage",id:"stigatron-docs/usage",title:"Using STIGATRON",description:"1. After installing STIGATRON on your downstream cluster, when you navigate to that downstream cluster, you should see STIGATRON on the left navigation menu. Click there.",source:"@site/docs/stigatron-docs/5-usage.md",sourceDirName:"stigatron-docs",slug:"/stigatron-docs/usage",permalink:"/carbide-docs/docs/stigatron-docs/usage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/stigatron-docs/5-usage.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/carbide-docs/docs/stigatron-docs/installation"}},c={},l=[],p={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-stigatron"},"Using STIGATRON"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After installing STIGATRON on your downstream cluster, when you navigate to that downstream cluster, you should see STIGATRON on the left navigation menu. Click there."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"STIGATRON Menu Selection",src:r(4215).Z,width:"458",height:"902"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To trigger a scan, click Create in the upper left, create a name, select a profile, and click Create"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Create A Scan",src:r(8475).Z,width:"3114",height:"480"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the scan runs (should only take a few minutes at most), click the 3-dot menu next to the scan and go to Open Visualizer. This will give you insight into the current state of your cluster in relation to the RKE2 STIG."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Open Visualizer",src:r(1633).Z,width:"3102",height:"852"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To export scan results to common formats, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Export")," button in the upper-left."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Select Export",src:r(3348).Z,width:"1913",height:"669"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the desired export format."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Select Export",src:r(395).Z,width:"1917",height:"670"})))))}u.isMDXComponent=!0},8475:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-scan-8080b44da62de12f965a953c6f548dbf.png"},395:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/heimdall-export-0c8108f96a639ccbd089b6fe24ad24c7.png"},3348:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/heimdall-ui-export-6be34574163c6df2c8ec1c58d0017445.png"},1633:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/open-visualizer-6621238f1e5c716220f4a3cd89896747.png"},4215:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/stigatron-menu-9e72b6aa0faa42095c880c7e17bdd68c.png"}}]);