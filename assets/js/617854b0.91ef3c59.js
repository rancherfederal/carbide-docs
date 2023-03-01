"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2698],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=i,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5994:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(4137));const a={},o="Introduction",s={unversionedId:"registry-docs/introduction",id:"registry-docs/introduction",title:"Introduction",description:"This page will walk through IOC expectations of the hardened registry and what exactly the hardened registry provides.",source:"@site/docs/registry-docs/introduction.md",sourceDirName:"registry-docs",slug:"/registry-docs/introduction",permalink:"/carbide-docs/docs/registry-docs/introduction",draft:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/registry-docs/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"carbideSidebar",previous:{title:"Carbide",permalink:"/carbide-docs/docs/intro"},next:{title:"Known Limitations & Caveats",permalink:"/carbide-docs/docs/registry-docs/known-limits"}},l={},c=[{value:"IOC Expectations",id:"ioc-expectations",level:2},{value:"What is this?",id:"what-is-this",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This page will walk through IOC expectations of the hardened registry and what exactly the hardened registry provides."),(0,i.kt)("h2",{id:"ioc-expectations"},"IOC Expectations"),(0,i.kt)("p",null,"As our product is still in the IOC phase, there are some expectations to level-set:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IOC users can expect tooling and processes to be changed, improved and streamlined continuously as we strive to improve the Carbide offering.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DISCLAIMER"),":  The Secured Registry (rgcrprod.azurecr.us) is ",(0,i.kt)("em",{parentName:"p"},"not")," intended to be used as the primary registry for running Kubernetes clusters. It is only intended as the acquisition point to obtain the Carbide secured images. Customers should seed their own private OCI registries, and use that registry for their Kubernetes clusters."),(0,i.kt)("p",null,"If you see issues and areas for improvement, please submit Github issues ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancherfederal/carbide-docs/issues/"},"here"),"."),(0,i.kt)("h2",{id:"what-is-this"},"What is this?"),(0,i.kt)("p",null,"Here at Rancher Government Solutions, we take the security of our products seriously.  Products like ",(0,i.kt)("inlineCode",{parentName:"p"},"rke2"),' are tailor built to address the "secure by default" needs of the federal government, while still maintaining the same ease of deployments that our users have come to love from Rancher products.'),(0,i.kt)("p",null,"The introduction of RGS' SSF marks the next big step we are taking to continually enhance our products emphasis on security, this time by directly addressing the supply chain."),(0,i.kt)("p",null,'Now, as an alternative to the "upstream" hosted images from Docker Hub, securely built images can now be sourced from RGS\' SSF, and come with the following enhancements:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attested build artifacts for core Rancher products (images, sbom's, and vulnerability reports)"),(0,i.kt)("li",{parentName:"ul"},"Securely built on RGS' internally hosted Secure Software Factory (conforming to the ",(0,i.kt)("a",{parentName:"li",href:"https://dodcio.defense.gov/Portals/0/Documents/Library/DoD%20Enterprise%20DevSecOps%20Reference%20Design%20-%20CNCF%20Kubernetes%20w-DD1910_cleared_20211022.pdf"},"DoD Reference Architecture")," and ",(0,i.kt)("a",{parentName:"li",href:"https://project.linuxfoundation.org/hubfs/CNCF_SSCP_v1.pdf"},"CNCF Best Practices"),")")),(0,i.kt)("p",null,"Quantifiably measuring the improvements that RGS' SSF provides is difficult considering the early stage of standards around supply chain security.  However, initial measurements can be gleaned from the Linux Foundation's ",(0,i.kt)("a",{parentName:"p",href:"https://slsa.dev"},"SLSA")," levels."),(0,i.kt)("p",null,"RGS' SSF was designed from the ground up to build the foundation for the eventual achievement of SLSA 4, or in other words, the most guarantee in a secure software supply chain.  Specifically, this means introducing the following capabilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fully defined as code build/release process ",(0,i.kt)("em",{parentName:"li"},"with signed, non-falsifiable provenance")),(0,i.kt)("li",{parentName:"ul"},"Custom built, isolated build infrastructure, conforming to best practices such as those defined in the ",(0,i.kt)("a",{parentName:"li",href:"https://dodcio.defense.gov/Portals/0/Documents/Library/DoD%20Enterprise%20DevSecOps%20Reference%20Design%20-%20CNCF%20Kubernetes%20w-DD1910_cleared_20211022.pdf"},"DoD Reference Architecture"),", and ",(0,i.kt)("a",{parentName:"li",href:"https://project.linuxfoundation.org/hubfs/CNCF_SSCP_v1.pdf"},"CNCF Best Practices")),(0,i.kt)("li",{parentName:"ul"},"Verifiable SBOMs and dependency vulnerability reports")),(0,i.kt)("p",null,'If we follow the SLSA level requirements using the enhancements introduced with RGS\' SSF, it currently puts us firmly at a SLSA level 2 (up from SLSA 0).  However, the astute readers will recognize that with the current verbatim implementation of SLSA levels, level 3 and 4 are currently unobtainable due to requirements such as "accredited build platforms".'),(0,i.kt)("p",null,"As stated earlier, the foundation for ultimately achieving SLSA 4 have been put in place to allow us to mature alongside software supply chain best practices, and standards.  On that note, it's important to recognize that RGS' SSF is an ever evolving set of capabilities.  Just as the standards and best practices around software supply chain security evolve, so will RGS' SSF."))}d.isMDXComponent=!0}}]);