(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{169:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));t(58),t(31),t(21),t(22),t(59),t(0);var a=t(217);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var o={id:"electron-apps",title:"Electron Apps",sidebar_label:"Electron Apps"},l=[{value:"Setup Electron",id:"setup-electron",children:[]},{value:"Adding a Neon Dependency",id:"adding-a-neon-dependency",children:[]},{value:"Adding the Build Dependencies",id:"adding-the-build-dependencies",children:[]},{value:"Creating a Build Script",id:"creating-a-build-script",children:[]},{value:"That's It!",id:"thats-it",children:[]}],i={rightToc:l},c="wrapper";function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(c,r({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/neon-bindings/examples/tree/master/electron-app"}),"Examples")),Object(a.b)("p",null,"Neon can be great for adding native functionality to Electron apps. This guide will walk you through a simple example of adding a Neon dependency to an Electron app. To see the whole example you can look at the ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/neon-bindings/examples/tree/master/guides/electron-apps/simple-app"}),"full demo"),"."),Object(a.b)("p",null,"For the most part, using a Neon package in Electron is as straightforward as adding it to the ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," dependencies. However, Electron does bring its own requirements with it for building native modules."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"We are working on adding Neon support to ",Object(a.b)("a",r({parentName:"strong"},{href:"https://github.com/electron/electron-rebuild"}),"electron-rebuild")),", so you'll be able to just drop Neon dependencies into your app like any other. For now, there's a tool called ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/dherman/electron-build-env"}),"electron-build-env")," that you can use for building any Neon dependencies of your Electron app."),Object(a.b)("p",null,"In the meantime, we can use Neon modules in an Electron app with just a few lines of configuration in our ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(a.b)("h2",{id:"setup-electron"},"Setup Electron"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"# Clone the Quick Start repository\ngit clone https://github.com/electron/electron-quick-start\n\n# Go into the repository\ncd electron-quick-start\n")),Object(a.b)("h2",{id:"adding-a-neon-dependency"},"Adding a Neon Dependency"),Object(a.b)("p",null,"First let's add a dependency on a simple Neon module, ",Object(a.b)("inlineCode",{parentName:"p"},"neon-hello"),", which is already published in npm:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"npm install neon-hello\n")),Object(a.b)("h2",{id:"adding-the-build-dependencies"},"Adding the Build Dependencies"),Object(a.b)("p",null,"Next, we need the ",Object(a.b)("inlineCode",{parentName:"p"},"neon-cli")," and ",Object(a.b)("inlineCode",{parentName:"p"},"electron-build-env")," packages in order to build ",Object(a.b)("inlineCode",{parentName:"p"},"neon-hello"),". Since they're only needed for building, we can add them as development dependencies:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"npm install electron-build-env neon-cli --save-dev\n")),Object(a.b)("h2",{id:"creating-a-build-script"},"Creating a Build Script"),Object(a.b)("p",null,"Finally, we'll add a script to build the Neon dependency:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsonc"}),'"scripts": {\n    // ...\n    "build": "electron-build-env neon build neon-hello --release"\n    // ...\n}\n')),Object(a.b)("p",null,"This step uses the ",Object(a.b)("inlineCode",{parentName:"p"},"electron-build-env")," tool to configure the environment properly to build for Electron."),Object(a.b)("h2",{id:"thats-it"},"That's It!"),Object(a.b)("p",null,"We can then build a production release of the ",Object(a.b)("inlineCode",{parentName:"p"},"neon-hello")," module:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"npm run build\n")),Object(a.b)("p",null,"we should have a working Electron app. You can try out the ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/neon-bindings/examples/tree/master/electron-app"}),"full working demo")," by building it and running:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-shell"}),"npm start\n")))}p.isMDXComponent=!0},217:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a),o=r.a.createContext({}),l=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=l(e.components);return r.a.createElement(o.Provider,{value:n},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,s=d[i+"."+u]||d[u]||p[u]||o;return t?r.a.createElement(s,Object.assign({},{ref:n},c,{components:t})):r.a.createElement(s,Object.assign({},{ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);