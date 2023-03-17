"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1641],{4137:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>c});var i=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function R(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=i.createContext({}),E=function(e){var n=i.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=E(e.components);return i.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,d=R(e,["components","mdxType","originalType","parentName"]),m=E(r),c=t,_=m["".concat(s,".").concat(c)]||m[c]||g[c]||a;return r?i.createElement(_,o(o({ref:n},d),{},{components:r})):i.createElement(_,o({ref:n},d))}));function c(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,o=new Array(a);o[0]=m;var R={};for(var s in n)hasOwnProperty.call(n,s)&&(R[s]=n[s]);R.originalType=e,R.mdxType="string"==typeof e?e:t,o[1]=R;for(var E=2;E<a;E++)o[E]=r[E];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2993:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>R,toc:()=>E});var i=r(7462),t=(r(7294),r(4137));const a={},o="Downloading Release Images",R={unversionedId:"registry-docs/downloading-images",id:"registry-docs/downloading-images",title:"Downloading Release Images",description:"This page will walk you through how you can locally download secured images from the hardened registry and package them to move over an airgap.",source:"@site/docs/registry-docs/downloading-images.md",sourceDirName:"registry-docs",slug:"/registry-docs/downloading-images",permalink:"/carbide-docs/docs/registry-docs/downloading-images",draft:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/registry-docs/downloading-images.md",tags:[],version:"current",frontMatter:{},sidebar:"carbideSidebar",previous:{title:"Copy Release Images to Registry",permalink:"/carbide-docs/docs/registry-docs/copying-images"},next:{title:"Validating Images in an Airgap",permalink:"/carbide-docs/docs/registry-docs/validating-airgap-images"}},s={},E=[{value:"Requirements",id:"requirements",level:2},{value:"Carbide",id:"carbide",level:2},{value:"K3s",id:"k3s",level:2},{value:"RKE2",id:"rke2",level:2},{value:"Longhorn",id:"longhorn",level:2},{value:"Kubewarden",id:"kubewarden",level:2},{value:"Rancher",id:"rancher",level:2},{value:"Cert Manager",id:"cert-manager",level:3},{value:"Rancher",id:"rancher-1",level:3}],d={toc:E};function g(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,i.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"downloading-release-images"},"Downloading Release Images"),(0,t.kt)("p",null,"This page will walk you through how you can locally download secured images from the hardened registry and package them to move over an airgap."),(0,t.kt)("h2",{id:"requirements"},"Requirements"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://docs.sigstore.dev/cosign/installation/"},"Cosign")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm")," (For Cert Manager Only)")),(0,t.kt)("h2",{id:"carbide"},"Carbide"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'# Carbide Registry\nSOURCE_REGISTRY=rgcrprod.azurecr.us\nSOURCE_REGISTRY_USER=YOUR_CARBIDE_USER\nSOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS\n\n# Working directories & TAR\nDEST_DIRECTORY=/tmp/carbide-images\nDEST_TAR=/tmp/carbide-images.tar.gz  # Change this to the location you want for your resulting TAR \n\n# Carbide Version\nCARBIDE_RELEASE=0.1.0\n\nif [[ -d "$DEST_DIRECTORY" ]]; then\n    echo "ERROR: Directory \'$DEST_DIRECTORY\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\nif [[ -d "$DEST_TAR" ]]; then\n    echo "ERROR: Directory \'$DEST_TAR\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\ncosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY\nmkdir -p "$DEST_DIRECTORY"\n\nCARBIDE_IMAGES=$(curl --silent -L https://github.com/rancherfederal/carbide-releases/releases/download/$CARBIDE_RELEASE/carbide-images.txt)\nfor image in $CARBIDE_IMAGES; do\n    source_image=$(echo $image)\n    dest_image=$(echo $image | sed "s|rgcrprod.azurecr.us|TARGET_REGISTRY|g")\n    \n    # Create manifest to use during load\n    img_id_num=$(mktemp -d XXXXXXXXXXXXXXXXXXXX)\n    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt\n    \n    # Save image locally\n    mkdir $DEST_DIRECTORY/$img_id_num\n    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image\ndone\n\n# Compress directory\ntar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .\n\n# Clean up working directory\nrm -rf $DEST_DIRECTORY\n')),(0,t.kt)("h2",{id:"k3s"},"K3s"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'# Carbide Registry\nSOURCE_REGISTRY=rgcrprod.azurecr.us\nSOURCE_REGISTRY_USER=YOUR_CARBIDE_USER\nSOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS\n\n# Working directories & TAR\nDEST_DIRECTORY=/tmp/k3s-images\nDEST_TAR=/tmp/k3s-images.tar.gz  # Change this to the location you want for your resulting TAR \n\n# K3s Version\nK3S_RELEASE=v1.24.4+k3s1\n\nif [[ -d "$DEST_DIRECTORY" ]]; then\n    echo "ERROR: Directory \'$DEST_DIRECTORY\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\nif [[ -d "$DEST_TAR" ]]; then\n    echo "ERROR: Directory \'$DEST_TAR\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\ncosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY\nmkdir -p "$DEST_DIRECTORY"\n\nK3S_IMAGES=$(curl --silent -L https://github.com/k3s-io/k3s/releases/download/$K3S_RELEASE/k3s-images.txt)\nfor image in $K3S_IMAGES; do\n    source_image=$(echo $image | sed "s|docker.io|$SOURCE_REGISTRY|g")\n    dest_image=$(echo $image | sed "s|docker.io|TARGET_REGISTRY|g")\n    \n    # Create manifest to use during load\n    img_id_num=$(mktemp -d XXXXXXXXXXXXXXXXXXXX)\n    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt\n    \n    # Save image locally\n    mkdir $DEST_DIRECTORY/$img_id_num\n    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image\ndone\n\n# Compress directory\ntar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .\n\n# Clean up working directory\nrm -rf $DEST_DIRECTORY\n')),(0,t.kt)("h2",{id:"rke2"},"RKE2"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'# Carbide Registry\nSOURCE_REGISTRY=rgcrprod.azurecr.us\nSOURCE_REGISTRY_USER=YOUR_CARBIDE_USER\nSOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS\n\n# Working directories & TAR\nDEST_DIRECTORY=/tmp/rke2-images\nDEST_TAR=/tmp/rke2-images.tar.gz  # Change this to the location you want for your resulting TAR \n\n# RKE2 Version\nRKE2_RELEASE=v1.24.3+rke2r1\n\nif [[ -d "$DEST_DIRECTORY" ]]; then\n    echo "ERROR: Directory \'$DEST_DIRECTORY\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\nif [[ -d "$DEST_TAR" ]]; then\n    echo "ERROR: Directory \'$DEST_TAR\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\ncosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY\nmkdir -p "$DEST_DIRECTORY"\n\nRKE2_IMAGES=$(curl --silent -L https://github.com/rancher/rke2/releases/download/$RKE2_RELEASE/rke2-images-all.linux-amd64.txt)\nfor image in $RKE2_IMAGES; do\n    source_image=$(echo $image | sed "s|docker.io|$SOURCE_REGISTRY|g")\n    dest_image=$(echo $image | sed "s|docker.io|TARGET_REGISTRY|g")\n    \n    # Create manifest to use during load\n    img_id_num=$(mktemp -d XXXXXXXXXXXXXXXXXXXX)\n    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt\n    \n    # Save image locally\n    mkdir $DEST_DIRECTORY/$img_id_num\n    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image\ndone\n\n# Compress directory\ntar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .\n\n# Clean up working directory\nrm -rf $DEST_DIRECTORY\n')),(0,t.kt)("h2",{id:"longhorn"},"Longhorn"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'# Carbide Registry\nSOURCE_REGISTRY=rgcrprod.azurecr.us\nSOURCE_REGISTRY_USER=YOUR_CARBIDE_USER\nSOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS\n\n# Working directories & TAR\nDEST_DIRECTORY=/tmp/longhorn-images\nDEST_TAR=/tmp/longhorn-images.tar.gz  # Change this to the location you want for your resulting TAR \n\n# Longhorn Version\nLONGHORN_RELEASE=v1.3.1\n\nif [[ -d "$DEST_DIRECTORY" ]]; then\n    echo "ERROR: Directory \'$DEST_DIRECTORY\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\nif [[ -d "$DEST_TAR" ]]; then\n    echo "ERROR: Directory \'$DEST_TAR\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\ncosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY\nmkdir -p "$DEST_DIRECTORY"\n\n\nLONGHORN_IMAGES=$(curl --silent -L https://raw.githubusercontent.com/longhorn/longhorn/$LONGHORN_RELEASE/deploy/longhorn-images.txt)\nfor image in $LONGHORN_IMAGES; do\n    source_image="$SOURCE_REGISTRY/$image"\n    dest_image="TARGET_REGISTRY/$image"\n    \n    # Create manifest to use during load\n    img_id_num=$(mktemp -d XXXXXXXXXXXXXXXXXXXX)\n    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt\n    \n    # Save image locally\n    mkdir $DEST_DIRECTORY/$img_id_num\n    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image\ndone\n\n# Compress directory\ntar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .\n\n# Clean up working directory\nrm -rf $DEST_DIRECTORY\n')),(0,t.kt)("h2",{id:"kubewarden"},"Kubewarden"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'# Carbide Registry\nSOURCE_REGISTRY=rgcrprod.azurecr.us\nSOURCE_REGISTRY_USER=YOUR_CARBIDE_USER\nSOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS\n\n# Working directories & TAR\nDEST_DIRECTORY=/tmp/kubewarden-images\nDEST_TAR=/tmp/kubewarden-images.tar.gz  # Change this to the location you want for your resulting TAR \n\nif [[ -d "$DEST_DIRECTORY" ]]; then\n    echo "ERROR: Directory \'$DEST_DIRECTORY\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\nif [[ -d "$DEST_TAR" ]]; then\n    echo "ERROR: Directory \'$DEST_TAR\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\ncosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY\nmkdir -p "$DEST_DIRECTORY"\n\n# Add the Kubewarden repo (required Helm)\nhelm repo add kubewarden https://charts.kubewarden.io\nhelm repo update\n\n# Grab the list of images and download them (requires docker, grep, sed, and awk)\nfor image in $(helm template kubewarden/kubewarden-controller | grep \'image:\' | sed \'s/"//g\' | sed "s/\'//g" | awk \'{ print $2 }\'); do\n    source_image=$(echo $image | sed "s/ghcr.io/$SOURCE_REGISTRY/g")\n    dest_image=$(echo $image | sed "s/ghcr.io/TARGET_REGISTRY/g")\n    \n    # Create manifest to use during load\n    img_id_num=$(mktemp -d XXXXXXXXXXXXXXXXXXXX)\n    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt\n    \n    # Save image locally\n    mkdir $DEST_DIRECTORY/$img_id_num\n    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image\ndone\n\nfor image in $(helm template kubewarden/kubewarden-defaults | grep \'image:\' | sed \'s/"//g\' | sed "s/\'//g" | awk \'{ print $2 }\'); do\n    source_image=$(echo $image | sed "s/ghcr.io/$SOURCE_REGISTRY/g")\n    dest_image=$(echo $image | sed "s/ghcr.io/TARGET_REGISTRY/g")\n    \n    # Create manifest to use during load\n    img_id_num=$(mktemp -d XXXXXXXXXXXXXXXXXXXX)\n    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt\n    \n    # Save image locally\n    mkdir $DEST_DIRECTORY/$img_id_num\n    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image\ndone\n\n# Compress directory\ntar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .\n\n# Clean up working directory\nrm -rf $DEST_DIRECTORY\n')),(0,t.kt)("h2",{id:"rancher"},"Rancher"),(0,t.kt)("h3",{id:"cert-manager"},"Cert Manager"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'# Carbide Registry\nSOURCE_REGISTRY=rgcrprod.azurecr.us\nSOURCE_REGISTRY_USER=YOUR_CARBIDE_USER\nSOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS\n\n# Working directories & TAR\nDEST_DIRECTORY=/tmp/cert-manager-images\nDEST_TAR=/tmp/cert-manager-images.tar.gz  # Change this to the location you want for your resulting TAR \n\n# Cert Manager Chart Version\nCERT_MANAGER_RELEASE=v1.7.3\n\nif [[ -d "$DEST_DIRECTORY" ]]; then\n    echo "ERROR: Directory \'$DEST_DIRECTORY\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\nif [[ -d "$DEST_TAR" ]]; then\n    echo "ERROR: Directory \'$DEST_TAR\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\ncosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY\nmkdir -p "$DEST_DIRECTORY"\n\n# Add the cert manager repo (required Helm)\nhelm repo add jetstack https://charts.jetstack.io\nhelm repo update\n\n# Grab the list of images and download them (requires docker, grep, sed, and awk)\nfor image in $(helm template jetstack/cert-manager --version $CERT_MANAGER_RELEASE | grep \'image:\' | sed \'s/"//g\' | sed "s/\'//g" | awk \'{ print $2 }\'); do\n    source_image=$(echo $image | sed "s/quay.io/$SOURCE_REGISTRY/g")\n    dest_image=$(echo $image | sed "s/quay.io/TARGET_REGISTRY/g")\n    \n    # Create manifest to use during load\n    img_id_num=$(mktemp -d XXXXXXXXXXXXXXXXXXXX)\n    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt\n    \n    # Save image locally\n    mkdir $DEST_DIRECTORY/$img_id_num\n    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image\ndone\n\n# Compress directory\ntar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .\n\n# Clean up working directory\nrm -rf $DEST_DIRECTORY\n')),(0,t.kt)("h3",{id:"rancher-1"},"Rancher"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'# Carbide Registry\nSOURCE_REGISTRY=rgcrprod.azurecr.us\nSOURCE_REGISTRY_USER=YOUR_CARBIDE_USER\nSOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS\n\n# Working directories & TAR\nDEST_DIRECTORY=/tmp/rancher-images\nDEST_TAR=/tmp/rancher-images.tar.gz  # Change this to the location you want for your resulting TAR \n\n# Rancher Version\nRANCHER_RELEASE=v2.7.1\n\nif [[ -d "$DEST_DIRECTORY" ]]; then\n    echo "ERROR: Directory \'$DEST_DIRECTORY\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\nif [[ -d "$DEST_TAR" ]]; then\n    echo "ERROR: Directory \'$DEST_TAR\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\ncosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY\nmkdir -p "$DEST_DIRECTORY"\n\nRANCHER_IMAGES=$(curl --silent -L https://github.com/rancher/rancher/releases/download/$RANCHER_RELEASE/rancher-images.txt)\nfor image in $RANCHER_IMAGES; do\n    source_image="$SOURCE_REGISTRY/$image"\n    dest_image="TARGET_REGISTRY/$image"\n    \n    # Create manifest to use during load\n    img_id_num=$(mktemp -d XXXXXXXXXXXXXXXXXXXX)\n    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt\n    \n    # Save image locally\n    mkdir $DEST_DIRECTORY/$img_id_num\n    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image\ndone\n\n# Compress directory\ntar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .\n\n# Clean up working directory\nrm -rf $DEST_DIRECTORY\n')),(0,t.kt)("p",null,"See ",(0,t.kt)("a",{parentName:"p",href:"/carbide-docs/docs/registry-docs/validating-airgap-images"},"Validate Images in the Airgap")," and ",(0,t.kt)("a",{parentName:"p",href:"/carbide-docs/docs/registry-docs/loading-images"},"Loading Local Images to Registry")," for information on loading these into your airgapped registry."))}g.isMDXComponent=!0}}]);