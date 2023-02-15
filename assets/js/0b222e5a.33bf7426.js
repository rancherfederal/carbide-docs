"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={},o="Installation",i={unversionedId:"stigatron-docs/installation",id:"stigatron-docs/installation",title:"Installation",description:"Local Cluster",source:"@site/docs/stigatron-docs/installation.md",sourceDirName:"stigatron-docs",slug:"/stigatron-docs/installation",permalink:"/carbide-docs/docs/stigatron-docs/installation",draft:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/stigatron-docs/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"carbideSidebar",previous:{title:"Getting Started",permalink:"/carbide-docs/docs/stigatron-docs/getting-started"},next:{title:"Creating STIGATRON Scans",permalink:"/carbide-docs/docs/stigatron-docs/create-scan"}},s={},c=[{value:"Local Cluster",id:"local-cluster",level:2},{value:"Downstream RKE2 Clusters",id:"downstream-rke2-clusters",level:2}],p={toc:c};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"local-cluster"},"Local Cluster"),(0,r.kt)("p",null,"On the ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," cluster running Rancher MCM, you'll need to first enable Extensions."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log into the Rancher MCM as an administrator.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the menu in the upper-left of the main dashboard and click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Extensions")," link near the bottom.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Enable")," button on the Extensions screen."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Enable Extensions",src:n(5779).Z,width:"423",height:"283"})))),(0,r.kt)("p",null,"Next, on the same ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," cluster, run the following Helm commands to install the UI Plugin for STIGATRON (see the ",(0,r.kt)("inlineCode",{parentName:"p"},"tgz")," method above for airgap with no Helm repository):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install -n carbide-stigatron-system --create-namespace stigatron-ui carbide-charts/stigatron-ui\n")),(0,r.kt)("p",null,"Check the status of the rollout:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm status -n carbide-stigatron-system stigatron-ui\n")),(0,r.kt)("h2",{id:"downstream-rke2-clusters"},"Downstream RKE2 Clusters"),(0,r.kt)("p",null,"On downstream RKE2 clusters, you'll need to first install Rancher's CIS Benchmark Operator:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to your cluster in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Explore Cluster")," menu."),(0,r.kt)("li",{parentName:"ol"},"On the left, select ",(0,r.kt)("inlineCode",{parentName:"li"},"Apps")," and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Charts"),"."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"Filter")," box on the right, type ",(0,r.kt)("inlineCode",{parentName:"li"},"CIS Benchmark"),"."),(0,r.kt)("li",{parentName:"ol"},"Leave the default values and continue selecting ",(0,r.kt)("inlineCode",{parentName:"li"},"Next"),", then click ",(0,r.kt)("inlineCode",{parentName:"li"},"Install"),"."),(0,r.kt)("li",{parentName:"ol"},"Wait for the installation to complete.")),(0,r.kt)("p",null,"Next, you'll need to run the following Helm command to install the STIGATRON Operator (",(0,r.kt)("strong",{parentName:"p"},"NOTE"),": Using carbide-stigatron-system as the namespace is required):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install -n carbide-stigatron-system --create-namespace stigatron carbide-charts/stigatron\n")),(0,r.kt)("p",null,"Check the status of the rollout:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm status -n carbide-stigatron-system stigatron\n")),(0,r.kt)("p",null,"You should now see ",(0,r.kt)("inlineCode",{parentName:"p"},"STIGATRON")," on the left menu of your Explore Cluster."))}u.isMDXComponent=!0},5779:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/enable-extensions-7fe6a20cc6329308d15909ea129df599.png"}}]);