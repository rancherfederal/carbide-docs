"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[887],{4137:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>m});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),g=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=g(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=g(n),m=a,p=l["".concat(c,".").concat(m)]||l[m]||u[m]||o;return n?t.createElement(p,i(i({ref:r},d),{},{components:n})):t.createElement(p,i({ref:r},d))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var g=2;g<o;g++)i[g]=n[g];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},9377:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var t=n(7462),a=(n(7294),n(4137));const o={},i="Copy Release Images to Registry",s={unversionedId:"registry-docs/copying-images",id:"registry-docs/copying-images",title:"Copy Release Images to Registry",description:"This page will walk you through how you can copy the secured images from the hardened registry into another registry within a connected environment.",source:"@site/docs/registry-docs/copying-images.md",sourceDirName:"registry-docs",slug:"/registry-docs/copying-images",permalink:"/carbide-docs/docs/registry-docs/copying-images",draft:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/registry-docs/copying-images.md",tags:[],version:"current",frontMatter:{},sidebar:"carbideSidebar",previous:{title:"Validating Images",permalink:"/carbide-docs/docs/registry-docs/validating-images"},next:{title:"Downloading Release Images",permalink:"/carbide-docs/docs/registry-docs/downloading-images"}},c={},g=[{value:"Requirements",id:"requirements",level:2},{value:"Carbide",id:"carbide",level:2},{value:"K3s",id:"k3s",level:2},{value:"RKE2",id:"rke2",level:2},{value:"Longhorn",id:"longhorn",level:2},{value:"NeuVector",id:"neuvector",level:2},{value:"Kubewarden",id:"kubewarden",level:2},{value:"Rancher",id:"rancher",level:2},{value:"Cert Manager",id:"cert-manager",level:3},{value:"Rancher",id:"rancher-1",level:3}],d={toc:g};function u(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"copy-release-images-to-registry"},"Copy Release Images to Registry"),(0,a.kt)("p",null,"This page will walk you through how you can copy the secured images from the hardened registry into another registry within a connected environment."),(0,a.kt)("p",null,"If you're copying images into an airgap, check the documents ",(0,a.kt)("a",{parentName:"p",href:"/carbide-docs/docs/registry-docs/downloading-images"},"here"),"."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.sigstore.dev/cosign/installation/"},"Cosign")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm"))),(0,a.kt)("h2",{id:"carbide"},"Carbide"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Log into the registry\ncosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us\n\n# Your target registry (and login if it requires authentication)\nTARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE\n# cosign login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY\n\n# Set the specific release of Carbide you\'re targeting: https://github.com/rancherfederal/carbide-releases/releases\nCARBIDE_RELEASE=0.1.1\n\nCARBIDE_IMAGES=$(curl --silent -L https://github.com/rancherfederal/carbide-releases/releases/download/$CARBIDE_RELEASE/carbide-images.txt)\nfor image in $CARBIDE_IMAGES; do\n    source_image=$(echo $image)\n    dest_image=$(echo $image | sed "s/rgcrprod.azurecr.us/$TARGET_REGISTRY/g")\n    cosign copy $source_image $dest_image\ndone\n')),(0,a.kt)("h2",{id:"k3s"},"K3s"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Log into the registry\ncosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us\n\n# Your target registry (and login if it requires authentication)\nTARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE\n# cosign login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY\n\n# Set the specific release of K3s you\'re targeting: https://github.com/k3s-io/k3s/releases\nK3S_RELEASE=v1.24.4+k3s1\n\nK3S_IMAGES=$(curl --silent -L https://github.com/k3s-io/k3s/releases/download/$K3S_RELEASE/k3s-images.txt)\nfor image in $K3S_IMAGES; do\n    source_image=$(echo $image | sed "s/docker.io/rgcrprod.azurecr.us/g")\n    dest_image=$(echo $image | sed "s/docker.io/$TARGET_REGISTRY/g")\n    cosign copy $source_image $dest_image\ndone\n')),(0,a.kt)("h2",{id:"rke2"},"RKE2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Log into the registry\ncosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us\n\n# Your target registry (and login if it requires authentication)\nTARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE\n# cosign login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY\n\n# Set the specific release of RKE2 you\'re targeting: https://github.com/rancher/rke2/releases\nRKE2_RELEASE=v1.24.3+rke2r1\n\nRKE2_IMAGES=$(curl --silent -L https://github.com/rancher/rke2/releases/download/$RKE2_RELEASE/rke2-images-all.linux-amd64.txt)\nfor image in $RKE2_IMAGES; do\n    source_image=$(echo $image | sed "s/docker.io/rgcrprod.azurecr.us/g")\n    dest_image=$(echo $image | sed "s/docker.io/$TARGET_REGISTRY/g")\n    cosign copy $source_image $dest_image\ndone\n')),(0,a.kt)("h2",{id:"longhorn"},"Longhorn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Log into the registry\ncosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us\n\n# Your target registry (and login if it requires authentication)\nTARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE\n# cosign login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY\n\n# Set the specific release of Longhorn you\'re targeting: https://github.com/longhorn/longhorn/releases\nLONGHORN_RELEASE=v1.3.1\n\nLONGHORN_IMAGES=$(curl --silent -L https://raw.githubusercontent.com/longhorn/longhorn/$LONGHORN_RELEASE/deploy/longhorn-images.txt)\nfor image in $LONGHORN_IMAGES; do\n    source_image="rgcrprod.azurecr.us/$image"\n    dest_image="$TARGET_REGISTRY/$image"\n    cosign copy $source_image $dest_image\ndone\n')),(0,a.kt)("h2",{id:"neuvector"},"NeuVector"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Log into the registry\ncosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us\n\n# Your target registry (and login if it requires authentication)\nTARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE\n# cosign login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY\n\n# NeuVector Chart Version\nNEUVECTOR_RELEASE=v2.4.2\n\n# Add the neuvector repo (required Helm)\nhelm repo add neuvector https://neuvector.github.io/neuvector-helm\nhelm repo update\n\n# Grab the list of images and download them (requires docker, grep, sed, and awk)\nfor image in $(helm template neuvector neuvector/core --version $NEUVECTOR_RELEASE | grep 'image:' | sed 's/\"//g' | awk '{ print $2 }'); do\n    source_image=$(echo $image | sed 's/docker.io/rgcrprod.azurecr.us/g')\n    dest_image=$(echo $image | sed \"s/docker.io/$TARGET_REGISTRY/g\")\n    cosign copy $source_image $dest_image\ndone\n")),(0,a.kt)("h2",{id:"kubewarden"},"Kubewarden"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Log into the registry\ncosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us\n\n# Your target registry (and login if it requires authentication)\nTARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE\n# cosign login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY\n\n# Add the Kubewarden repo (required Helm)\nhelm repo add kubewarden https://charts.kubewarden.io\nhelm repo update\n\n# Grab the list of images and download them (requires docker, grep, sed, and awk)\nfor image in $(helm template kubewarden/kubewarden-controller | grep 'image:' | sed 's/\"//g' | sed \"s/'//g\" | awk '{ print $2 }'); do\n    source_image=$(echo $image | sed 's/quay.io/rgcrprod.azurecr.us/g')\n    dest_image=$(echo $image | sed \"s/quay.io/$TARGET_REGISTRY/g\")\n    cosign copy $source_image $dest_image\ndone\n\nfor image in $(helm template kubewarden/kubewarden-defaults | grep 'image:' | sed 's/\"//g' | sed \"s/'//g\" | awk '{ print $2 }'); do\n    source_image=$(echo $image | sed 's/quay.io/rgcrprod.azurecr.us/g')\n    dest_image=$(echo $image | sed \"s/quay.io/$TARGET_REGISTRY/g\")\n    cosign copy $source_image $dest_image\ndone\n")),(0,a.kt)("h2",{id:"rancher"},"Rancher"),(0,a.kt)("h3",{id:"cert-manager"},"Cert Manager"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Log into the registry\ncosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us\n\n# Your target registry (and login if it requires authentication)\nTARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE\n# cosign login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY\n\n# Rancher supports v1.7.1 currently. See here for more info:\n# https://ranchermanager.docs.rancher.com/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#4-install-cert-manager\nCERT_MANAGER_RELEASE=\"v1.7.1\"\n\n# Add the cert manager repo (required Helm)\nhelm repo add jetstack https://charts.jetstack.io\nhelm repo update\n\n# Grab the list of images and download them (requires docker, grep, sed, and awk)\nfor image in $(helm template jetstack/cert-manager --version $CERT_MANAGER_RELEASE | grep 'image:' | sed 's/\"//g' | awk '{ print $2 }'); do\n    source_image=$(echo $image | sed 's/quay.io/rgcrprod.azurecr.us/g')\n    dest_image=$(echo $image | sed \"s/quay.io/$TARGET_REGISTRY/g\")\n    cosign copy $source_image $dest_image\ndone\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/carbide-docs/docs/registry-docs/rancher-config"},"Rancher Manager Configuration")," for configuring the Cert Manager chart to use these images."),(0,a.kt)("h3",{id:"rancher-1"},"Rancher"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Log into the registry\ncosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us\n\n# Your target registry (and login if it requires authentication)\nTARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE\n# cosign login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY\n\n# Set the specific release of Rancher you\'re targeting: https://github.com/rancher/rancher/releases\nRANCHER_RELEASE=v2.7.1\n\nRANCHER_IMAGES=$(curl --silent -L https://github.com/rancher/rancher/releases/download/$RANCHER_RELEASE/rancher-images.txt)\nfor image in $RANCHER_IMAGES; do\n    source_image="rgcrprod.azurecr.us/$image"\n    dest_image="$TARGET_REGISTRY/$image"\n    cosign copy $source_image $dest_image\ndone\n')))}u.isMDXComponent=!0}}]);