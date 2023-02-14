"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2107],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>l});var i=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var R=i.createContext({}),g=function(e){var n=i.useContext(R),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=g(e.components);return i.createElement(R.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},E=i.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,R=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),E=g(r),l=t,m=E["".concat(R,".").concat(l)]||E[l]||d[l]||a;return r?i.createElement(m,o(o({ref:n},c),{},{components:r})):i.createElement(m,o({ref:n},c))}));function l(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,o=new Array(a);o[0]=E;var s={};for(var R in n)hasOwnProperty.call(n,R)&&(s[R]=n[R]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var g=2;g<a;g++)o[g]=r[g];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}E.displayName="MDXCreateElement"},2312:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>R,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>g});var i=r(7462),t=(r(7294),r(3905));const a={},o="Downloading Release Images",s={unversionedId:"registry-docs/pulling-images",id:"registry-docs/pulling-images",title:"Downloading Release Images",description:"This page will walk you through how you can pull the secured images from the hardened registry, whether you're working in a connected or airgapped environment.",source:"@site/docs/registry-docs/5-pulling-images.md",sourceDirName:"registry-docs",slug:"/registry-docs/pulling-images",permalink:"/carbide-docs/docs/registry-docs/pulling-images",draft:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/registry-docs/5-pulling-images.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"carbideSidebar",previous:{title:"Getting Started",permalink:"/carbide-docs/docs/registry-docs/getting-started"},next:{title:"Validating Images",permalink:"/carbide-docs/docs/registry-docs/validating-images"}},R={},g=[{value:"Requirements",id:"requirements",level:2},{value:"Connected Environment",id:"connected-environment",level:2},{value:"Carbide",id:"carbide",level:3},{value:"K3s",id:"k3s",level:3},{value:"RKE2",id:"rke2",level:3},{value:"Longhorn",id:"longhorn",level:3},{value:"Rancher",id:"rancher",level:3},{value:"Cert Manager",id:"cert-manager",level:4},{value:"Rancher",id:"rancher-1",level:4},{value:"Airgapped Environments &amp; Incompatible Registries",id:"airgapped-environments--incompatible-registries",level:2},{value:"Carbide",id:"carbide-1",level:3},{value:"K3s",id:"k3s-1",level:3},{value:"RKE2",id:"rke2-1",level:3},{value:"Longhorn",id:"longhorn-1",level:3},{value:"Rancher",id:"rancher-2",level:3},{value:"Cert Manager",id:"cert-manager-1",level:4},{value:"Rancher",id:"rancher-3",level:4}],c={toc:g};function d(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,i.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"downloading-release-images"},"Downloading Release Images"),(0,t.kt)("p",null,"This page will walk you through how you can pull the secured images from the hardened registry, whether you're working in a connected or airgapped environment."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"NOTE"),": There is currently a Cosign ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/sigstore/cosign/issues/2208"},"bug")," when using Harbor as your target registry and using the ",(0,t.kt)("inlineCode",{parentName:"p"},"cosign copy")," command. Please utilize the Airgapped instructions if using Harbor. "),(0,t.kt)("h2",{id:"requirements"},"Requirements"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://docs.sigstore.dev/cosign/installation/"},"Cosign")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm")," (For Cert Manager Only)")),(0,t.kt)("h2",{id:"connected-environment"},"Connected Environment"),(0,t.kt)("h3",{id:"carbide"},"Carbide"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'# To login with the shared credentials\ncosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us\n\n# Your target registry (and login if it requires authentication)\nTARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE\n# cosign login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY  \n\n# Set the specific release of Carbide you\'re targeting: https://github.com/rancherfederal/carbide-releases/releases\nCARBIDE_RELEASE=0.1.0\n\nCARBIDE_IMAGES=$(curl --silent -L https://github.com/rancherfederal/carbide-releases/releases/download/$CARBIDE_RELEASE/carbide-images.txt)\nfor image in $CARBIDE_IMAGES; do\n    source_image=$(echo $image)\n    dest_image=$(echo $image | sed "s/rgcrprod.azurecr.us/$TARGET_REGISTRY/g")\n    cosign copy $source_image $dest_image\ndone\n')),(0,t.kt)("h3",{id:"k3s"},"K3s"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'# To login with the shared credentials\ncosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us\n\n# Your target registry (and login if it requires authentication)\nTARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE\n# cosign login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY  \n\n# Set the specific release of K3s you\'re targeting: https://github.com/k3s-io/k3s/releases\nK3S_RELEASE=v1.24.4+k3s1\n\nK3S_IMAGES=$(curl --silent -L https://github.com/k3s-io/k3s/releases/download/$K3S_RELEASE/k3s-images.txt)\nfor image in $K3S_IMAGES; do\n    source_image=$(echo $image | sed "s/docker.io/rgcrprod.azurecr.us/g")\n    dest_image=$(echo $image | sed "s/docker.io/$TARGET_REGISTRY/g")\n    cosign copy $source_image $dest_image\ndone\n')),(0,t.kt)("h3",{id:"rke2"},"RKE2"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'# To login with the shared credentials\ncosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us\n\n# Your target registry (and login if it requires authentication)\nTARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE\n# cosign login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY  \n\n# Set the specific release of RKE2 you\'re targeting: https://github.com/rancher/rke2/releases\nRKE2_RELEASE=v1.24.3+rke2r1\n\nRKE2_IMAGES=$(curl --silent -L https://github.com/rancher/rke2/releases/download/$RKE2_RELEASE/rke2-images-all.linux-amd64.txt)\nfor image in $RKE2_IMAGES; do\n    source_image=$(echo $image | sed "s/docker.io/rgcrprod.azurecr.us/g")\n    dest_image=$(echo $image | sed "s/docker.io/$TARGET_REGISTRY/g")\n    cosign copy $source_image $dest_image\ndone\n')),(0,t.kt)("h3",{id:"longhorn"},"Longhorn"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'# To login with the shared credentials\ncosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us\n\n# Your target registry (and login if it requires authentication)\nTARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE\n# cosign login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY  \n\n# Set the specific release of Longhorn you\'re targeting: https://github.com/longhorn/longhorn/releases\nLONGHORN_RELEASE=v1.3.1\n\nLONGHORN_IMAGES=$(curl --silent -L https://raw.githubusercontent.com/longhorn/longhorn/$LONGHORN_RELEASE/deploy/longhorn-images.txt)\nfor image in $LONGHORN_IMAGES; do\n    source_image="rgcrprod.azurecr.us/$image"\n    dest_image="$TARGET_REGISTRY/$image"\n    cosign copy $source_image $dest_image\ndone\n')),(0,t.kt)("h3",{id:"rancher"},"Rancher"),(0,t.kt)("h4",{id:"cert-manager"},"Cert Manager"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"# Log into the registry\ncosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us\n\n# Rancher supports v1.7.1 currently. See here for more info:\n# https://ranchermanager.docs.rancher.com/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#4-install-cert-manager\nCERT_MANAGER_VERSION=\"v1.7.1\"\n\n# Add the cert manager repo (required Helm)\nhelm repo add jetstack https://charts.jetstack.io\nhelm repo update\n\n# Grab the list of images and download them (requires docker, grep, sed, and awk)\n\n\nfor image in $(helm template jetstack/cert-manager --version $CERT_MANAGER_VERSION | grep 'image:' | sed 's/\"//g' | awk '{ print $2 }'); do\n    source_image=$(echo $image | sed 's/quay.io/rgcrprod.azurecr.us/g')\n    dest_image=$(echo $image | sed \"s/quay.io/$TARGET_REGISTRY/g\")\n    cosign copy $source_image $dest_image\ndone\n")),(0,t.kt)("p",null,"See ",(0,t.kt)("a",{parentName:"p",href:"/carbide-docs/docs/registry-docs/rancher-config"},"Rancher Manager Configuration")," for configuring the Cert Manager chart to use these images."),(0,t.kt)("h4",{id:"rancher-1"},"Rancher"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'# To login with the shared credentials\ncosign login -u <redacted> -p <redacted> rgcrprod.azurecr.us\n\n# Your target registry (and login if it requires authentication)\nTARGET_REGISTRY=YOUR_REGISTRY_DOMAIN_HERE\n# cosign login -u YOUR_USER -p YOUR_PASSWORD $TARGET_REGISTRY  \n\n# Set the specific release of Rancher you\'re targeting: https://github.com/rancher/rancher/releases\nRANCHER_RELEASE=v2.7.1\n\nRANCHER_IMAGES=$(curl --silent -L https://github.com/rancher/rancher/releases/download/$RANCHER_RELEASE/rancher-images.txt)\nfor image in $RANCHER_IMAGES; do\n    source_image="rgcrprod.azurecr.us/$image"\n    dest_image="$TARGET_REGISTRY/$image"\n    cosign copy $source_image $dest_image\ndone\n')),(0,t.kt)("h2",{id:"airgapped-environments--incompatible-registries"},"Airgapped Environments & Incompatible Registries"),(0,t.kt)("p",null,"For airgapped environments or environments using incompatible registries that the above commands don't work for, use the following to package your images locally:"),(0,t.kt)("h3",{id:"carbide-1"},"Carbide"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'# Carbide Registry\nSOURCE_REGISTRY=rgcrprod.azurecr.us\nSOURCE_REGISTRY_USER=YOUR_CARBIDE_USER\nSOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS\n\n# Working directories & TAR\nDEST_DIRECTORY=/tmp/carbide-images\nDEST_TAR=/tmp/carbide-images.tar.gz  # Change this to the location you want for your resulting TAR \n\n# Carbide Version\nCARBIDE_RELEASE=0.1.0\n\nif [[ -d "$DEST_DIRECTORY" ]]; then\n    echo "ERROR: Directory \'$DEST_DIRECTORY\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\nif [[ -d "$DEST_TAR" ]]; then\n    echo "ERROR: Directory \'$DEST_TAR\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\ncosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY\nmkdir -p "$DEST_DIRECTORY"\n\nCARBIDE_IMAGES=$(curl --silent -L https://github.com/rancherfederal/carbide-releases/releases/download/$CARBIDE_RELEASE/carbide-images.txt)\nfor image in $CARBIDE_IMAGES; do\n    source_image=$(echo $image)\n    dest_image=$(echo $image | sed "s|rgcrprod.azurecr.us|TARGET_REGISTRY|g")\n    \n    # Create manifest to use during load\n    img_id_num=$(echo $RANDOM | md5sum | head -c 20)\n    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt\n    \n    # Save image locally\n    mkdir $DEST_DIRECTORY/$img_id_num\n    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image\ndone\n\n# Compress directory\ntar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .\n\n# Clean up working directory\nrm -rf $DEST_DIRECTORY\n')),(0,t.kt)("h3",{id:"k3s-1"},"K3s"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'# Carbide Registry\nSOURCE_REGISTRY=rgcrprod.azurecr.us\nSOURCE_REGISTRY_USER=YOUR_CARBIDE_USER\nSOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS\n\n# Working directories & TAR\nDEST_DIRECTORY=/tmp/k3s-images\nDEST_TAR=/tmp/k3s-images.tar.gz  # Change this to the location you want for your resulting TAR \n\n# K3s Version\nK3S_RELEASE=v1.24.4+k3s1\n\nif [[ -d "$DEST_DIRECTORY" ]]; then\n    echo "ERROR: Directory \'$DEST_DIRECTORY\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\nif [[ -d "$DEST_TAR" ]]; then\n    echo "ERROR: Directory \'$DEST_TAR\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\ncosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY\nmkdir -p "$DEST_DIRECTORY"\n\nK3S_IMAGES=$(curl --silent -L https://github.com/k3s-io/k3s/releases/download/$K3S_RELEASE/k3s-images.txt)\nfor image in $K3S_IMAGES; do\n    source_image=$(echo $image | sed "s|docker.io|$SOURCE_REGISTRY|g")\n    dest_image=$(echo $image | sed "s|docker.io|TARGET_REGISTRY|g")\n    \n    # Create manifest to use during load\n    img_id_num=$(echo $RANDOM | md5sum | head -c 20)\n    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt\n    \n    # Save image locally\n    mkdir $DEST_DIRECTORY/$img_id_num\n    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image\ndone\n\n# Compress directory\ntar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .\n\n# Clean up working directory\nrm -rf $DEST_DIRECTORY\n')),(0,t.kt)("h3",{id:"rke2-1"},"RKE2"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'# Carbide Registry\nSOURCE_REGISTRY=rgcrprod.azurecr.us\nSOURCE_REGISTRY_USER=YOUR_CARBIDE_USER\nSOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS\n\n# Working directories & TAR\nDEST_DIRECTORY=/tmp/rke2-images\nDEST_TAR=/tmp/rke2-images.tar.gz  # Change this to the location you want for your resulting TAR \n\n# RKE2 Version\nRKE2_RELEASE=v1.24.3+rke2r1\n\nif [[ -d "$DEST_DIRECTORY" ]]; then\n    echo "ERROR: Directory \'$DEST_DIRECTORY\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\nif [[ -d "$DEST_TAR" ]]; then\n    echo "ERROR: Directory \'$DEST_TAR\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\ncosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY\nmkdir -p "$DEST_DIRECTORY"\n\nRKE2_IMAGES=$(curl --silent -L https://github.com/rancher/rke2/releases/download/$RKE2_RELEASE/rke2-images-all.linux-amd64.txt)\nfor image in $RKE2_IMAGES; do\n    source_image=$(echo $image | sed "s|docker.io|$SOURCE_REGISTRY|g")\n    dest_image=$(echo $image | sed "s|docker.io|TARGET_REGISTRY|g")\n    \n    # Create manifest to use during load\n    img_id_num=$(echo $RANDOM | md5sum | head -c 20)\n    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt\n    \n    # Save image locally\n    mkdir $DEST_DIRECTORY/$img_id_num\n    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image\ndone\n\n# Compress directory\ntar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .\n\n# Clean up working directory\nrm -rf $DEST_DIRECTORY\n')),(0,t.kt)("h3",{id:"longhorn-1"},"Longhorn"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'# Carbide Registry\nSOURCE_REGISTRY=rgcrprod.azurecr.us\nSOURCE_REGISTRY_USER=YOUR_CARBIDE_USER\nSOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS\n\n# Working directories & TAR\nDEST_DIRECTORY=/tmp/longhorn-images\nDEST_TAR=/tmp/longhorn-images.tar.gz  # Change this to the location you want for your resulting TAR \n\n# Longhorn Version\nLONGHORN_RELEASE=v1.3.1\n\nif [[ -d "$DEST_DIRECTORY" ]]; then\n    echo "ERROR: Directory \'$DEST_DIRECTORY\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\nif [[ -d "$DEST_TAR" ]]; then\n    echo "ERROR: Directory \'$DEST_TAR\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\ncosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY\nmkdir -p "$DEST_DIRECTORY"\n\n\nLONGHORN_IMAGES=$(curl --silent -L https://raw.githubusercontent.com/longhorn/longhorn/$LONGHORN_RELEASE/deploy/longhorn-images.txt)\nfor image in $LONGHORN_IMAGES; do\n    source_image="$SOURCE_REGISTRY/$image"\n    dest_image="TARGET_REGISTRY/$image"\n    \n    # Create manifest to use during load\n    img_id_num=$(echo $RANDOM | md5sum | head -c 20)\n    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt\n    \n    # Save image locally\n    mkdir $DEST_DIRECTORY/$img_id_num\n    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image\ndone\n\n# Compress directory\ntar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .\n\n# Clean up working directory\nrm -rf $DEST_DIRECTORY\n')),(0,t.kt)("h3",{id:"rancher-2"},"Rancher"),(0,t.kt)("h4",{id:"cert-manager-1"},"Cert Manager"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'# Carbide Registry\nSOURCE_REGISTRY=rgcrprod.azurecr.us\nSOURCE_REGISTRY_USER=YOUR_CARBIDE_USER\nSOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS\n\n# Working directories & TAR\nDEST_DIRECTORY=/tmp/cert-manager-images\nDEST_TAR=/tmp/cert-manager-images.tar.gz  # Change this to the location you want for your resulting TAR \n\n# Cert Manager Chart Version\nCERT_MANAGER_RELEASE=v1.7.3\n\nif [[ -d "$DEST_DIRECTORY" ]]; then\n    echo "ERROR: Directory \'$DEST_DIRECTORY\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\nif [[ -d "$DEST_TAR" ]]; then\n    echo "ERROR: Directory \'$DEST_TAR\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\ncosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY\nmkdir -p "$DEST_DIRECTORY"\n\n# Add the cert manager repo (required Helm)\nhelm repo add jetstack https://charts.jetstack.io\nhelm repo update\n\n# Grab the list of images and download them (requires docker, grep, sed, and awk)\nfor image in $(helm template jetstack/cert-manager --version $CERT_MANAGER_RELEASE | grep \'image:\' | sed \'s/"//g\' | awk \'{ print $2 }\'); do\n    source_image=$(echo $image | sed "s/quay.io/$SOURCE_REGISTRY/g")\n    dest_image=$(echo $image | sed "s/quay.io/TARGET_REGISTRY/g")\n    \n    # Create manifest to use during load\n    img_id_num=$(echo $RANDOM | md5sum | head -c 20)\n    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt\n    \n    # Save image locally\n    mkdir $DEST_DIRECTORY/$img_id_num\n    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image\ndone\n\n# Compress directory\ntar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .\n\n# Clean up working directory\nrm -rf $DEST_DIRECTORY\n')),(0,t.kt)("h4",{id:"rancher-3"},"Rancher"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},'# Carbide Registry\nSOURCE_REGISTRY=rgcrprod.azurecr.us\nSOURCE_REGISTRY_USER=YOUR_CARBIDE_USER\nSOURCE_REGISTRY_PASS=YOUR_CARBIDE_PASS\n\n# Working directories & TAR\nDEST_DIRECTORY=/tmp/rancher-images\nDEST_TAR=/tmp/rancher-images.tar.gz  # Change this to the location you want for your resulting TAR \n\n# Rancher Version\nRANCHER_RELEASE=v2.7.1\n\nif [[ -d "$DEST_DIRECTORY" ]]; then\n    echo "ERROR: Directory \'$DEST_DIRECTORY\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\nif [[ -d "$DEST_TAR" ]]; then\n    echo "ERROR: Directory \'$DEST_TAR\' exists."\n    echo "Change or delete it before running."\n    exit 1\nfi\n\ncosign login -u $SOURCE_REGISTRY_USER -p $SOURCE_REGISTRY_PASS $SOURCE_REGISTRY\nmkdir -p "$DEST_DIRECTORY"\n\nRANCHER_IMAGES=$(curl --silent -L https://github.com/rancher/rancher/releases/download/$RANCHER_RELEASE/rancher-images.txt)\nfor image in $RANCHER_IMAGES; do\n    source_image="$SOURCE_REGISTRY/$image"\n    dest_image="TARGET_REGISTRY/$image"\n    \n    # Create manifest to use during load\n    img_id_num=$(echo $RANDOM | md5sum | head -c 20)\n    echo "$img_id_num|$dest_image" >> $DEST_DIRECTORY/manifest.txt\n    \n    # Save image locally\n    mkdir $DEST_DIRECTORY/$img_id_num\n    cosign save --dir "$DEST_DIRECTORY/$img_id_num" $source_image\ndone\n\n# Compress directory\ntar zcf "$DEST_TAR" -C "$DEST_DIRECTORY" .\n\n# Clean up working directory\nrm -rf $DEST_DIRECTORY\n')),(0,t.kt)("p",null,"See ",(0,t.kt)("a",{parentName:"p",href:"/carbide-docs/docs/registry-docs/x1-serving-images"},"Serving Images")," for information on loading these into your airgapped registry."))}d.isMDXComponent=!0}}]);