"use strict";(self.webpackChunkcarbide_docs=self.webpackChunkcarbide_docs||[]).push([[978],{2394:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=t(4848),a=t(8453);const o={},s="Copying Images to a Registry",c={id:"registry-docs/copying-images",title:"Copying Images to a Registry",description:"This page will walk you through copying our secured images into your own registry for later use.",source:"@site/docs/registry-docs/copying-images.md",sourceDirName:"registry-docs",slug:"/registry-docs/copying-images",permalink:"/carbide-docs/docs/registry-docs/copying-images",draft:!1,unlisted:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/registry-docs/copying-images.md",tags:[],version:"current",frontMatter:{},sidebar:"carbideSidebar",previous:{title:"Validating Images",permalink:"/carbide-docs/docs/registry-docs/validating-images"},next:{title:"Downloading the Images",permalink:"/carbide-docs/docs/registry-docs/downloading-images"}},i={},d=[{value:"Copying Secured Images",id:"copying-secured-images",level:2},{value:"Carbide",id:"carbide",level:3},{value:"K3s",id:"k3s",level:3},{value:"RKE2",id:"rke2",level:3},{value:"Rancher",id:"rancher",level:3},{value:"Cert Manager",id:"cert-manager",level:4},{value:"Rancher",id:"rancher-1",level:4},{value:"Longhorn",id:"longhorn",level:3},{value:"NeuVector",id:"neuvector",level:3},{value:"Kubewarden",id:"kubewarden",level:3}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"copying-images-to-a-registry",children:"Copying Images to a Registry"}),"\n",(0,n.jsx)(r.p,{children:"This page will walk you through copying our secured images into your own registry for later use."}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["This demonstration will be using ",(0,n.jsx)(r.code,{children:"hauler"}),", but any tool with the ability to push/pull an oci image will be adequate."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["If you're copying images into an airgapped registry, check the documentation ",(0,n.jsx)(r.a,{href:"/carbide-docs/docs/registry-docs/downloading-images",children:"here"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"copying-secured-images",children:"Copying Secured Images"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"NOTE:"})," We are actively working to improve the collection and formatting of the below procceses. Additionally, please see the ",(0,n.jsx)(r.a,{href:"https://rancherfederal.github.io/hauler-docs/docs/guides-references/hauler-content/images",children:"Hauler Docs"})," for how to specify a specific platform."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"carbide",children:"Carbide"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# generate the hauler manifest for carbide\ncat <<EOF > carbide-images.yaml\napiVersion: content.hauler.cattle.io/v1alpha1\nkind: Images\nmetadata:\n  name: carbide-images\n  annotations:\n    hauler.dev/key: carbide-key.pub\nspec:\n  images:\n$(curl -sfL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-images.txt | sed '/nats/d' | sed 's/^/    - name: /')\n---\napiVersion: content.hauler.cattle.io/v1alpha1\nkind: Images\nmetadata:\n  name: carbide-dependency-images\nspec:\n  images:\n$(curl -sfL https://raw.githubusercontent.com/rancherfederal/carbide-releases/main/carbide-images.txt | sed '/rgcr/d' | sed 's/^/    - name: /')\nEOF\n\n# fetch the content from generated hauler manifest\n# verify the location of the key and the platform/architecture\n# key verification is not used here due to natsio images not being signed\nhauler store sync --store carbide-store --files carbide-images.yaml --platform <platform/arch>\n\n# copy the content from the hauler store to your registry\nhauler store copy --store carbide-store --username <redacted> --password <redacted> registry://<registry-url>\n"})}),"\n",(0,n.jsx)(r.h3,{id:"k3s",children:"K3s"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# fetch the content from the carbide secured registry\n# verify the version, location of the key, and the platform/architecture\nhauler store sync --store k3s-store --products k3s=v1.27.12-k3s1 --key carbide-key.pub --platform <platform/arch>\n\n# copy the content from the hauler store to your registry\nhauler store copy --store k3s-store --username <redacted> --password <redacted> registry://<registry-url>\n"})}),"\n",(0,n.jsx)(r.h3,{id:"rke2",children:"RKE2"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# fetch the content from the carbide secured registry\n# verify the version, location of the key, and the platform/architecture\nhauler store sync --store rke2-store --products rke2=v1.27.12+rke2r1 --key carbide-key.pub --platform <platform/arch>\n\n# copy the content from the hauler store to your registry\nhauler store copy --store rke2-store --username <redacted> --password <redacted> registry://<registry-url>\n"})}),"\n",(0,n.jsx)(r.h3,{id:"rancher",children:"Rancher"}),"\n",(0,n.jsx)(r.h4,{id:"cert-manager",children:"Cert Manager"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# fetch the content from the carbide secured registry\n# verify the version, location of the key, and the platform/architecture\nhauler store sync --store certmanager-store --products cert-manager=v1.14.4 --key carbide-key.pub --platform <platform/arch>\n\n# copy the content from the hauler store to your registry\nhauler store copy --store certmanager-store --username <redacted> --password <redacted> registry://<registry-url>\n"})}),"\n",(0,n.jsx)(r.h4,{id:"rancher-1",children:"Rancher"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# fetch the content from the carbide secured registry\n# verify the version, location of the key, and the platform/architecture\nhauler store sync --store rancher-store --products rancher=v2.8.3 --key carbide-key.pub --platform <platform/arch>\n\n# copy the content from the hauler store to your registry\nhauler store copy --store rancher-store --username <redacted> --password <redacted> registry://<registry-url>\n"})}),"\n",(0,n.jsx)(r.h3,{id:"longhorn",children:"Longhorn"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# fetch the content from the carbide secured registry\n# verify the version, location of the key, and the platform/architecture\nhauler store sync --store longhorn-store --products longhorn=v1.6.1 --key carbide-key.pub --platform <platform/arch>\n\n# copy the content from the hauler store to your registry\nhauler store copy --store longhorn-store --username <redacted> --password <redacted> registry://<registry-url>\n"})}),"\n",(0,n.jsx)(r.h3,{id:"neuvector",children:"NeuVector"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# fetch the content from the carbide secured registry\n# verify the version, location of the key, and the platform/architecture\nhauler store sync --store neuvector-store --products neuvector=v5.3.2 --key carbide-key.pub --platform <platform/arch>\n\n# copy the content from the hauler store to your registry\nhauler store copy --store neuvector-store --username <redacted> --password <redacted> registry://<registry-url>\n"})}),"\n",(0,n.jsx)(r.h3,{id:"kubewarden",children:"Kubewarden"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# fetch the content from the carbide secured registry\n# verify the version, location of the key, and the platform/architecture\nhauler store sync --store kubewarden-store --products kubewarden=kubewarden-controller-2.0.11 --key carbide-key.pub --platform <platform/arch>\n\n# copy the content from the hauler store to your registry\nhauler store copy --store kubewarden-store --username <redacted> --password <redacted> registry://<registry-url>\n"})})]})}function l(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>c});var n=t(6540);const a={},o=n.createContext(a);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);