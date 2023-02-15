"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1512],{3905:(e,a,i)=>{i.d(a,{Zo:()=>c,kt:()=>m});var t=i(7294);function n(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function r(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?r(Object(i),!0).forEach((function(a){n(e,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))}))}return e}function s(e,a){if(null==e)return{};var i,t,n=function(e,a){if(null==e)return{};var i,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],a.indexOf(i)>=0||(n[i]=e[i]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],a.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=t.createContext({}),g=function(e){var a=t.useContext(l),i=a;return e&&(i="function"==typeof e?e(a):o(o({},a),e)),i},c=function(e){var a=g(e.components);return t.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=g(i),m=n,u=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return i?t.createElement(u,o(o({ref:a},c),{},{components:i})):t.createElement(u,o({ref:a},c))}));function m(e,a){var i=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var g=2;g<r;g++)o[g]=i[g];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}p.displayName="MDXCreateElement"},1581:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>g});var t=i(7462),n=(i(7294),i(3905));const r={},o="Validating Images in an Airgap",s={unversionedId:"registry-docs/validating-airgap-images",id:"registry-docs/validating-airgap-images",title:"Validating Images in an Airgap",description:"This will guide you through validating the signatures and attestations of each image within an airgapped environments.",source:"@site/docs/registry-docs/validating-airgap-images.md",sourceDirName:"registry-docs",slug:"/registry-docs/validating-airgap-images",permalink:"/carbide-docs/docs/registry-docs/validating-airgap-images",draft:!1,editUrl:"https://github.com/rancherfederal/carbide-docs/edit/main/docs/registry-docs/validating-airgap-images.md",tags:[],version:"current",frontMatter:{},sidebar:"carbideSidebar",previous:{title:"Downloading Release Images",permalink:"/carbide-docs/docs/registry-docs/downloading-images"},next:{title:"Loading Local Images to Registry",permalink:"/carbide-docs/docs/registry-docs/loading-images"}},l={},g=[{value:"Validating Local Images",id:"validating-local-images",level:2},{value:"Individual Image",id:"individual-image",level:3},{value:"Compressed Package of Images",id:"compressed-package-of-images",level:3},{value:"Validating Images in Airgapped Registry",id:"validating-images-in-airgapped-registry",level:2}],c={toc:g};function d(e){let{components:a,...i}=e;return(0,n.kt)("wrapper",(0,t.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"validating-images-in-an-airgap"},"Validating Images in an Airgap"),(0,n.kt)("p",null,"This will guide you through validating the signatures and attestations of each image within an airgapped environments."),(0,n.kt)("h2",{id:"validating-local-images"},"Validating Local Images"),(0,n.kt)("h3",{id:"individual-image"},"Individual Image"),(0,n.kt)("p",null,"To validate a single image that was packaged and brought over the airgap utilizing ",(0,n.kt)("inlineCode",{parentName:"p"},"cosign save"),", you can use the following, substituting the directory containing the saved image:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"IMAGE=UPDATE_TO_LOCAL_IMAGE_DIRECTORY\n\n# Verify the image\ncosign verify --key $KEY --local-image $IMAGE\n\n# Verify the SBOM\ncosign verify --key $KEY --local-image $IMAGE --attachment sbom\n\n# Verify Vulnerability Scan\ncosign verify-attestation --key $KEY --local-image $IMAGE --type vuln > /dev/null\n")),(0,n.kt)("h3",{id:"compressed-package-of-images"},"Compressed Package of Images"),(0,n.kt)("p",null,"If using the ",(0,n.kt)("a",{parentName:"p",href:"/carbide-docs/docs/registry-docs/downloading-images#downloading-release-images"},"download script")," to download packages of images, you can use the following script to validate all images of the package. It might be best to output to a file for further inspection, especially with a package containing a lot of images like Rancher:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# SSF Public Key\nKEY=/tmp/ssf-key.pub\n\n# Source and Working Files\nSOURCE_TAR=IMAGE_TAR_PATH\nWORKING_DIR=/tmp/images  # Change this if desired/necessary\n\nif [[ ! -f "$SOURCE_TAR" ]]; then\n    echo "ERROR: Tarball \'$SOURCE_TAR\' not found."\n    exit 1\nfi\n\nif [[ -d "$WORKING_DIR" ]]; then\n    echo "ERROR: Working directory \'$WORKING_DIR\' exists."\n    echo "Remove it or change the value."\n    exit 1\nfi\n\nmkdir -p "$WORKING_DIR"\ntar zxf "$SOURCE_TAR" -C "$WORKING_DIR"\n\nfor image in $WORKING_DIR/*; do\n    if [ -d "$image" ]; then\n        echo "---"\n        echo "Image Verification:"\n        cosign verify --key $KEY --local-image $image\n        echo ""\n        echo "SBOM Verification:"\n        cosign verify --key $KEY --local-image $image --attachment sbom\n        echo ""\n        echo "Vulnerability Scan Verification:"\n        cosign verify-attestation --key $KEY --local-image $image --type vuln > /dev/null\n    fi\ndone\n\nrm -rf $WORKING_DIR\n')),(0,n.kt)("p",null,"Example usage, assuming you've saved the above into a script file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sh /tmp/verify-local-images.sh > /tmp/results.txt\ncat /tmp/results.txt\n")),(0,n.kt)("h2",{id:"validating-images-in-airgapped-registry"},"Validating Images in Airgapped Registry"),(0,n.kt)("p",null,"You should be able to validate images in an airgapped registry using the normal ",(0,n.kt)("a",{parentName:"p",href:"/carbide-docs/docs/registry-docs/validating-images"},"Validating Images")," documentation, just substituting your local registry and credentials."))}d.isMDXComponent=!0}}]);