"use strict";(self.webpackChunkcarbide_docs=self.webpackChunkcarbide_docs||[]).push([[748],{3303:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var s=r(4848),i=r(8453);const n={},o="Introduction",a={id:"registry-docs/introduction",title:"Introduction",description:"This page will walk through IOC expectations of the hardened registry and what exactly the hardened registry provides.",source:"@site/docs/registry-docs/introduction.md",sourceDirName:"registry-docs",slug:"/registry-docs/introduction",permalink:"/carbide-docs/docs/registry-docs/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/registry-docs/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"carbideSidebar",previous:{title:"Introduction",permalink:"/carbide-docs/docs/intro"},next:{title:"Architecture",permalink:"/carbide-docs/docs/registry-docs/architecture"}},c={},d=[{value:"IOC Expectations",id:"ioc-expectations",level:2},{value:"What is this?",id:"what-is-this",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,s.jsx)(t.p,{children:"This page will walk through IOC expectations of the hardened registry and what exactly the hardened registry provides."}),"\n",(0,s.jsx)(t.h2,{id:"ioc-expectations",children:"IOC Expectations"}),"\n",(0,s.jsx)(t.p,{children:"As our product is still in the IOC phase, there are some expectations to level-set:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"IOC users can expect tooling and processes to be changed, improved and streamlined continuously as we strive to improve the Carbide offering."}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"DISCLAIMER"}),":  The Secured Registry (rgcrprod.azurecr.us) is ",(0,s.jsx)(t.em,{children:"not"})," intended to be used as the primary registry for running Kubernetes clusters. It is only intended as the acquisition point to obtain the Carbide secured images. Customers should seed their own private OCI registries, and use that registry for their Kubernetes clusters."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["If you see issues and areas for improvement, please submit Github issues ",(0,s.jsx)(t.a,{href:"https://github.com/rancherfederal/carbide-docs/issues",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"what-is-this",children:"What is this?"}),"\n",(0,s.jsxs)(t.p,{children:["Here at Rancher Government Solutions, we take the security of our products seriously.  Products like ",(0,s.jsx)(t.code,{children:"rke2"}),' are tailor built to address the "secure by default" needs of the federal government, while still maintaining the same ease of deployments that our users have come to love from Rancher products.']}),"\n",(0,s.jsx)(t.p,{children:"The introduction of Carbide Secured Registry (CSR) marks the next big step we are taking to continually enhance our products emphasis on security, this time by directly addressing the supply chain."}),"\n",(0,s.jsx)(t.p,{children:'Now, as an alternative to the "upstream" hosted images from Docker Hub, securely built images can now be sourced from the Carbide Secured Registry (CSR), and come with the following enhancements:'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Attested build artifacts for core Rancher products (images, sbom's, and vulnerability reports)"}),"\n",(0,s.jsxs)(t.li,{children:["Securely built on Rancher Government's internally hosted Secure Software Factory (conforming to the ",(0,s.jsx)(t.a,{href:"https://dodcio.defense.gov/Portals/0/Documents/Library/DoD%20Enterprise%20DevSecOps%20Reference%20Design%20-%20CNCF%20Kubernetes%20w-DD1910_cleared_20211022.pdf",children:"DoD Reference Architecture"})," and ",(0,s.jsx)(t.a,{href:"https://project.linuxfoundation.org/hubfs/CNCF_SSCP_v1.pdf",children:"CNCF Best Practices"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Quantifiably measuring the improvements that Carbide Secured Registry (CSR) provides is difficult considering the early stage of standards around supply chain security.  However, initial measurements can be gleaned from the Linux Foundation's ",(0,s.jsx)(t.a,{href:"https://slsa.dev",children:"SLSA"})," levels."]}),"\n",(0,s.jsx)(t.p,{children:"The Carbide Secured Registry (CSR)  was designed from the ground up to build the foundation for the eventual achievement of SLSA 4, or in other words, the most guarantee in a secure software supply chain. Specifically, this means introducing the following capabilities:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Fully defined as code build/release process ",(0,s.jsx)(t.em,{children:"with signed, non-falsifiable provenance"})]}),"\n",(0,s.jsxs)(t.li,{children:["Custom built, isolated build infrastructure, conforming to best practices such as those defined in the ",(0,s.jsx)(t.a,{href:"https://dodcio.defense.gov/Portals/0/Documents/Library/DoD%20Enterprise%20DevSecOps%20Reference%20Design%20-%20CNCF%20Kubernetes%20w-DD1910_cleared_20211022.pdf",children:"DoD Reference Architecture"}),", and ",(0,s.jsx)(t.a,{href:"https://project.linuxfoundation.org/hubfs/CNCF_SSCP_v1.pdf",children:"CNCF Best Practices"})]}),"\n",(0,s.jsx)(t.li,{children:"Verifiable SBOMs and dependency vulnerability reports"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:'If we follow the SLSA level requirements using the enhancements introduced with Carbide Secured Registry (CSR), it currently puts us firmly at a SLSA level 2 (up from SLSA 0).  However, the astute readers will recognize that with the current verbatim implementation of SLSA levels, level 3 and 4 are currently unobtainable due to requirements such as "accredited build platforms".'}),"\n",(0,s.jsx)(t.p,{children:"As stated earlier, the foundation for ultimately achieving SLSA 4 have been put in place to allow us to mature alongside software supply chain best practices, and standards. On that note, it's important to recognize that Carbide Secured Registry (CSR) is an ever evolving set of capabilities. Just as the standards and best practices around software supply chain security evolve, so will Carbide Secured Registry (CSR)."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var s=r(6540);const i={},n=s.createContext(i);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);