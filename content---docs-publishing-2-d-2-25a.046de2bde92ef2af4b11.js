(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{197:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return r})),t.d(n,"default",(function(){return b}));t(58),t(31),t(21),t(22),t(59),t(0);var a=t(217);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={id:"publishing",title:"Publishing",sidebar_label:"Publishing"},r=[{value:"1. Upload and downloading native compiled modules",id:"1-upload-and-downloading-native-compiled-modules",children:[]},{value:"2. Shipping compiling native modules",id:"2-shipping-compiling-native-modules",children:[]}],l={rightToc:r},p="wrapper";function b(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(p,o({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Publishing native modules is a critical part of native modules. The user of a native node module that is compatible with the architecture of their machine. The Node community has devised two solutions for this:"),Object(a.b)("h3",{id:"1-upload-and-downloading-native-compiled-modules"},"1. Upload and downloading native compiled modules"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This method requires you to have a Travis CI account. If you do not have one, ",Object(a.b)("a",o({parentName:"p"},{href:"https://travis-ci.com"}),"please create one"),".")),Object(a.b)("p",null,Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/amilajack/disk-utility"}),"Example")),Object(a.b)("p",null,"Library authors can compile the native module to all multiple targets (windows, macOS, linux) and then upload those targets. Users of the module will then download these targets."),Object(a.b)("p",null,"To implement this solution, add the following ",Object(a.b)("inlineCode",{parentName:"p"},".travis.yml")," to the root directory of your project:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-yaml"}),'os:\n  - osx\n  - linux\n\nlanguage: node_js\n\nnode_js:\n  - node\n  - 10\n  - 9\n  - 8\n\ncache: cargo\n\nbefore_install:\n  # Install Rust and Cargo\n  - curl https://sh.rustup.rs -sSf > /tmp/rustup.sh\n  - sh /tmp/rustup.sh -y\n  - export PATH="$HOME/.cargo/bin:$PATH"\n  - source "$HOME/.cargo/env"\n  # Install NPM packages\n  - node -v\n  - npm -v\n  - npm install\n\nscript:\n  - npm test\n  # Publish when using \'[publish binary]\' keywords\n  - COMMIT_MESSAGE=$(git log --format=%B --no-merges -n 1 | tr -d \'\\n\')\n  - if [[ ${COMMIT_MESSAGE} =~ "[publish binary]" ]]; then yarn upload-binary || exit 0; fi;\n')),Object(a.b)("p",null,"Then add the following lines to your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," to tell NPM to only publish the ",Object(a.b)("inlineCode",{parentName:"p"},"lib")," directory and the ",Object(a.b)("inlineCode",{parentName:"p"},"native/index.node")," file. Make sure to change the ",Object(a.b)("inlineCode",{parentName:"p"},"type")," and ",Object(a.b)("inlineCode",{parentName:"p"},"url")," properties in the ",Object(a.b)("inlineCode",{parentName:"p"},"repository")," object:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-json"}),'  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/your-username-here/your-project-here.git"\n  },\n  "files": [\n    "native/index.node",\n    "lib"\n  ],\n')),Object(a.b)("p",null,"Then install ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/mapbox/node-pre-gyp"}),Object(a.b)("inlineCode",{parentName:"a"},"node-pre-gyp"))," and ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/bchr02/node-pre-gyp-github"}),Object(a.b)("inlineCode",{parentName:"a"},"node-pre-gyp-github")),". Note that the master branch of ",Object(a.b)("inlineCode",{parentName:"p"},"node-pre-gyp")," does not work with Neon so you must use a branch of a fork which adds support for Neon:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"# NPM\nnpm install node-pre-gyp@amilajack/node-pre-gyp#neon-compat\nnpm install node-pre-gyp-github\n# Yarn\nyarn add node-pre-gyp@amilajack/node-pre-gyp#neon-compat\nyarn add node-pre-gyp-github\n")),Object(a.b)("p",null,"Then make the following changes to the ",Object(a.b)("inlineCode",{parentName:"p"},"scripts")," section of your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-diff"}),'- "install": "neon build --release",\n+ "install": "node-pre-gyp install --fallback-to-build=false || neon build --release",\n+ "package": "node-pre-gyp package",\n+ "upload-binary": "node-pre-gyp package && node-pre-gyp-github publish",\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"node-pre-gyp install --fallback-to-build=false")," will attempt to download a binary and not fallback to a building the project with ",Object(a.b)("inlineCode",{parentName:"p"},"node-pre-gyp"),". The following part, ",Object(a.b)("inlineCode",{parentName:"p"}," || neon build --release"),", builds a production relase using Neon if the previous script throws an error."),Object(a.b)("p",null,"Finally, add the following to the root of your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-json"}),'  "binary": {\n    "module_name": "index",\n    "host": "https://github.com/your-username-here/your-repo-here/releases/download/",\n    "remote_path": "{version}",\n    "package_name": "{node_abi}-{platform}-{arch}.tar.gz",\n    "module_path": "./native",\n    "pkg_path": "."\n  },\n')),Object(a.b)("p",null,"This configures ",Object(a.b)("inlineCode",{parentName:"p"},"node-pre-gyp")," by telling it where our ",Object(a.b)("inlineCode",{parentName:"p"},"native/index.node")," lives and where to upload the binaries to. Make sure to replace ",Object(a.b)("inlineCode",{parentName:"p"},"your-username-here")," and ",Object(a.b)("inlineCode",{parentName:"p"},"your-repo-here")," with the actual values."),Object(a.b)("p",null,"Note: DO NOT replace ",Object(a.b)("inlineCode",{parentName:"p"},"{version}")," with actual version."),Object(a.b)("p",null,"GitHub needs permission to publish releases on your behalf so you'll need to create a Personal Access Token:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Go to ",Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/settings/developers"}),"Developer Settings")),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)("inlineCode",{parentName:"li"},"Personal access tokens")),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)("inlineCode",{parentName:"li"},"Generate new token")),Object(a.b)("li",{parentName:"ol"},"Select ",Object(a.b)("inlineCode",{parentName:"li"},'"public_repo"')," and ",Object(a.b)("inlineCode",{parentName:"li"},'"repo_deployment"')),Object(a.b)("li",{parentName:"ol"},"Generate Token"),Object(a.b)("li",{parentName:"ol"},"Copy the key that's generated and set NODE_PRE_GYP_GITHUB_TOKEN environment variable to it. Within your command prompt:")),Object(a.b)("p",null,"Then add the key to the Travis CI settings of your repo."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Open your project on Travis CI"),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)("inlineCode",{parentName:"li"},"More options")," dropdown"),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)("inlineCode",{parentName:"li"},"Settings")),Object(a.b)("li",{parentName:"ol"},"Go to ",Object(a.b)("inlineCode",{parentName:"li"},"Environment Variables")," and add ",Object(a.b)("inlineCode",{parentName:"li"},"NODE_PRE_GYP_GITHUB_TOKEN")," as ",Object(a.b)("inlineCode",{parentName:"li"},"Name")," and your generated token as the ",Object(a.b)("inlineCode",{parentName:"li"},"Value")," of your ENV variables")),Object(a.b)("p",null,"For an ",Object(a.b)("strong",{parentName:"p"},"example of a Neon project with publishing capabilities"),", see ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/amilajack/disk-utility"}),"amilajack/disk-utility"),"\nFor more details on ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/bchr02/node-pre-gyp-github"}),Object(a.b)("inlineCode",{parentName:"a"},"node-pre-gyp-github"),"'s ",Object(a.b)("inlineCode",{parentName:"a"},"README"))," for more details on publishing options"),Object(a.b)("p",null,"Now you can publish binaries only on a specific commit. To do this you could borrow from the Travis CI idea of commit keywords and add special handling for commit messages with ","[publish binary]",":"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),'git commit -a -m "[publish binary]"\n')),Object(a.b)("p",null,"Or, if you don't have any changes to make simply run:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),'git commit --allow-empty -m "[publish binary]"\n')),Object(a.b)("p",null,"Note that these will run the ",Object(a.b)("inlineCode",{parentName:"p"},"upload-binary")," script, which will package and upload binaries for the current version of the package. A typical workflow of publishing a Neon module would include the following the following:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),'git commit -a -m "[publish binary]"\nnpm publish\n')),Object(a.b)("h3",{id:"2-shipping-compiling-native-modules"},"2. Shipping compiling native modules"),Object(a.b)("p",null,"Another solution is shipping all the compiled native code targets with the npm module. In other words, this means publishing the package with the windows, macOS, and linux binaries. This solution is considered more secure that the approach of uploading and download modules because they prevent users of a module from ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.kb.cert.org/vuls/id/319816/"}),"wormhole attacks"),"."),Object(a.b)("p",null,"This feature is still a work in progress as the ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/neon-bindings/rfcs/issues/16"}),Object(a.b)("inlineCode",{parentName:"a"},"neon build --target")," feature")," is a work in progress."))}b.isMDXComponent=!0},217:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return s}));var a=t(0),o=t.n(a),i=o.a.createContext({}),r=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=r(e.components);return o.a.createElement(i.Provider,{value:n},e.children)};var p="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},c=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),c=r(t),s=a,d=c[l+"."+s]||c[s]||b[s]||i;return t?o.a.createElement(d,Object.assign({},{ref:n},p,{components:t})):o.a.createElement(d,Object.assign({},{ref:n},p))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=c;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);