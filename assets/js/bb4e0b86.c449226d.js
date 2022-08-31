"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[470],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>p});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),d=l(r),p=i,m=d["".concat(c,".").concat(p)]||d[p]||u[p]||a;return r?n.createElement(m,o(o({ref:t},g),{},{components:r})):n.createElement(m,o({ref:t},g))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},795:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={},o="Serving Container Images",s={unversionedId:"registry-docs/zz-serving-images",id:"registry-docs/zz-serving-images",title:"Serving Container Images",description:"Requirements",source:"@site/docs/registry-docs/zz-serving-images.md",sourceDirName:"registry-docs",slug:"/registry-docs/zz-serving-images",permalink:"/carbide-docs/docs/registry-docs/zz-serving-images",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/registry-docs/zz-serving-images.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Enforcement",permalink:"/carbide-docs/docs/registry-docs/za-enforcement"},next:{title:"STIGATRON Security Operator",permalink:"/carbide-docs/docs/category/stigatron-security-operator"}},c={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Pulling images",id:"pulling-images",level:2},{value:"Copying a Local Image to a Registry",id:"copying-a-local-image-to-a-registry",level:2}],g={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"serving-container-images"},"Serving Container Images"),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.sigstore.dev/cosign/installation/"},"Cosign"))),(0,i.kt)("h2",{id:"pulling-images"},"Pulling images"),(0,i.kt)("p",null,"Make sure you've checked out the section on ",(0,i.kt)("a",{parentName:"p",href:"/carbide-docs/docs/registry-docs/pulling-images"},"Pulling Images")," and that you've saved your images using the save script on that page. It is required to collect the manifest that the load script will use."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"cosign")," requires that your target registry is secured with a valid certificate. If necessary, you may need to set-up/add the CA to your host's CA chain so it interprets the secured."),(0,i.kt)("h2",{id:"copying-a-local-image-to-a-registry"},"Copying a Local Image to a Registry"),(0,i.kt)("p",null,"Update/run the following script to load your images from the generated TAR (will work for any component TAR):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Remote Registry\nTARGET_REGISTRY=YOUR_REGISTRY_HERE\nTARGET_REGISTRY_USER=YOUR_REGISTRY_USER_HERE\nTARGET_REGISTRY_PASSWORD=YOUR_REGISTRY_PASSWORD_HERE\n\n# Source and Working Files\nSOURCE_TAR=IMAGE_TAR_PATH\nWORKING_DIR=/tmp/images  # Change this if desired/necessary\n\nif [[ ! -f "$SOURCE_TAR" ]]; then\n    echo "ERROR: Tarball \'$SOURCE_TAR\' not found."\n    exit 1\nfi\n\nif [[ -d "$WORKING_DIR" ]]; then\n    echo "ERROR: Working directory \'$WORKING_DIR\' exists."\n    echo "Remove it or change the value."\n    exit 1\nfi\n\ncosign login -u $TARGET_REGISTRY_USER -p $TARGET_REGISTRY_PASSWORD $TARGET_REGISTRY\n\nmkdir -p "$WORKING_DIR"\ntar zxf "$SOURCE_TAR" -C "$WORKING_DIR"\n\nfor image in $(cat $WORKING_DIR/manifest.txt); do\n    IFS="|" read -r img_id source_image <<< $image\n    dest_image=$(echo $source_image | sed "s|TARGET_REGISTRY|$TARGET_REGISTRY|g")\n    cosign load --dir "$WORKING_DIR/$img_id" $dest_image\ndone\n\nrm -rf $WORKING_DIR\n')))}u.isMDXComponent=!0}}]);