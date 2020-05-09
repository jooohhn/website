(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(7),o=(n(0),n(154)),i={id:"hello-world",title:"Hello World!",sidebar_label:"Hello World!"},l={id:"hello-world",title:"Hello World!",description:"[Examples](https://github.com/neon-bindings/examples/tree/master/thread-count)",source:"@site/docs/hello-world.md",permalink:"/docs/hello-world",sidebar_label:"Hello World!",sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Command Line Interface (CLI)",permalink:"/docs/cli"}},c=[],b={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/neon-bindings/examples/tree/master/thread-count"}),"Examples")),Object(o.b)("p",null,"This guide will walk you through writing, building, and running your first Neon project. We'll try to walk you through each step carefully, but if you want to skip ahead, you can always go straight to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/neon-bindings/examples/tree/master/thread-count"}),"full demo")," in the examples repository."),Object(o.b)("p",null,"Our first project will be a tiny module that returns a number indicating how much hardware multithreading the current machine supports. If you're not familiar with multithreading, don't panic! We'll be using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://seanmonstar.com/"}),"Sean McArthur"),"'s ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://crates.io/crates/num_cpus"}),"num_cpus")," library to do all the heavy lifting for us, and we'll just return the number it gives us."),Object(o.b)("p",null,"But even this simple example already demonstrates some of Neon's usefulness: Rust's ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://crates.io/"}),"crate ecosystem")," is younger than npm but growing quickly and already full of useful and unique libraries. A library like ",Object(o.b)("inlineCode",{parentName:"p"},"num_cpus")," could be useful, for example, as a hint for tuning the size of a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"}),"Web Worker")," pool in an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../electron-apps/"}),"Electron app"),"."),Object(o.b)("h1",{id:"creating-a-new-project"},"Creating a New Project"),Object(o.b)("p",null,"The first thing we have to do is create our new ",Object(o.b)("inlineCode",{parentName:"p"},"thread-count")," Neon project:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"neon new thread-count\n")),Object(o.b)("p",null,"This will ask us a series of questions similar to the ones asked by ",Object(o.b)("inlineCode",{parentName:"p"},"npm new"),". When it completes, the tool will have created a ",Object(o.b)("inlineCode",{parentName:"p"},"thread-count")," directory with the following layout:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"thread-count/\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 lib/\n\u2502   \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 native/\n\u2502   \u251c\u2500\u2500 Cargo.toml\n\u2502   \u2514\u2500\u2500 src/\n\u2502       \u2514\u2500\u2500 lib.rs\n\u2514\u2500\u2500 package.json\n")),Object(o.b)("p",null,"The first thing to notice about this layout is that ",Object(o.b)("strong",{parentName:"p"},"a Neon project is a Node package"),". In other words, the way to think of a Neon project is:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Node on the outside, Rust on the inside.")),Object(o.b)("p",null,"The front-end of a Neon package is a pure JavaScript module (",Object(o.b)("inlineCode",{parentName:"p"},"lib/index.js"),", by default), and the back-end is a native library implemented as a Rust crate. The Rust crate lives in the ",Object(o.b)("inlineCode",{parentName:"p"},"native/")," subdirectory of the project."),Object(o.b)("h1",{id:"building-and-running"},"Building and Running"),Object(o.b)("p",null,"We haven't yet implemented anything, but just to see that ",Object(o.b)("inlineCode",{parentName:"p"},"neon new")," produced a complete, minimal Neon project, let's try building it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"cd thread-count\nneon build --release\n")),Object(o.b)("p",null,"The build process generates a handful of files that you don't need to work with directly:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"native/index.node"),": the native module itself, which is loaded by ",Object(o.b)("inlineCode",{parentName:"li"},"lib/index.js"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"native/target")," and ",Object(o.b)("inlineCode",{parentName:"li"},"native/artifacts.json"),": cached build results, which makes rebuilds faster.")),Object(o.b)("p",null,"An easy way to clean up build artifacts is to run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"neon clean\n")),Object(o.b)("p",null,"Once we've built the project, we can try running it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"node\n> require('.')\nhello node\n{}\n")),Object(o.b)("h1",{id:"adding-a-rust-dependency"},"Adding a Rust Dependency"),Object(o.b)("p",null,"Let's add a Rust dependency on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://crates.io/crates/num_cpus"}),"num_cpus")," crate. In ",Object(o.b)("inlineCode",{parentName:"p"},"native/Cargo.toml"),", under the ",Object(o.b)("inlineCode",{parentName:"p"},"[dependencies]")," section, add the following line:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'num_cpus = "1.4.0"\n')),Object(o.b)("p",null,"This tells Cargo, Rust's build tool, to fetch a version of the ",Object(o.b)("inlineCode",{parentName:"p"},"num_cpus")," crate that is semver-compatible with ",Object(o.b)("inlineCode",{parentName:"p"},"1.4.0"),". (The ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," equivalent would be ",Object(o.b)("inlineCode",{parentName:"p"},'"num_cpus": "^1.4.0"'),".)"),Object(o.b)("h1",{id:"implementing-our-function"},"Implementing our Function"),Object(o.b)("p",null,"Now let's edit the Rust code to make use of the new dependency. First we have to declare the use of the the ",Object(o.b)("inlineCode",{parentName:"p"},"num_cpus")," crate:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"extern crate num_cpus;\n")),Object(o.b)("p",null,"Next we can replace the sample ",Object(o.b)("inlineCode",{parentName:"p"},"hello")," function that was generated by ",Object(o.b)("inlineCode",{parentName:"p"},"neon new")," with the function we actually want. Instead of returning a string, our function should return a JavaScript number. So we'll use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.rs/neon/*/neon/types/struct.JsNumber.html"}),Object(o.b)("inlineCode",{parentName:"a"},"cx.number()"))," helper. Since ",Object(o.b)("inlineCode",{parentName:"p"},"cx.number()")," expects a Rust ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.rust-lang.org/std/primitive.f64.html"}),Object(o.b)("inlineCode",{parentName:"a"},"f64"))," (i.e., a 64-bit floating-point number), and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.rs/num_cpus/1.4.0/num_cpus/fn.get.html"}),Object(o.b)("inlineCode",{parentName:"a"},"num_cpus::get()"))," returns a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.rust-lang.org/std/primitive.usize.html"}),Object(o.b)("inlineCode",{parentName:"a"},"usize"))," (i.e., a pointer-sized integer), we'll use Rust's",Object(o.b)("inlineCode",{parentName:"p"},"as")," operator to cast to convert the integer to floating-point:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"use neon::prelude::*;\n\nfn thread_count(mut cx: FunctionContext) -> JsResult<JsNumber> {\n    Ok(cx.number(num_cpus::get() as f64))\n}\n")),Object(o.b)("p",null,"A few more things to note about this code:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"cx")," argument to ",Object(o.b)("inlineCode",{parentName:"li"},"thread_count"),": this contains information about the function call, such as the arguments and the value of ",Object(o.b)("inlineCode",{parentName:"li"},"this"),"."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.rs/neon/*/neon/result/type.JsResult.html"}),Object(o.b)("inlineCode",{parentName:"a"},"JsResult"))," output type: this is a Rust ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://doc.rust-lang.org/std/result/enum.Result.html"}),Object(o.b)("inlineCode",{parentName:"a"},"Result"))," type that indicates whether the function returned (",Object(o.b)("inlineCode",{parentName:"li"},"Ok"),") or threw a JavaScript exception (",Object(o.b)("inlineCode",{parentName:"li"},"Err"),"). You can learn more in the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"../handling-errors"}),"Handling Errors")," guide. It also tracks the lifetime of the returned ",Object(o.b)("em",{parentName:"li"},"handle"),". You can read more about handles in the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"../handles-and-memory/"}),"Handles and Memory")," guide."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"cx.number()")," function tells the JavaScript garbage collector that we need to keep the value we allocate alive long enough to return it to the caller of ",Object(o.b)("inlineCode",{parentName:"li"},"thread_count"),". You can learn more about memory management in the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"../handles-and-memory/"}),"Handles and Memory")," guide.")),Object(o.b)("p",null,"Finally, we'll modify the code that ",Object(o.b)("inlineCode",{parentName:"p"},"neon new"),' created for us to set up the module exports with this function instead of the initial "hello world" function it created for us:'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),'register_module!(mut m, {\n    m.export_function("threadCount", thread_count)\n});\n')),Object(o.b)("p",null,"This tells Neon to initialize the module when it's first loaded by creating a JavaScript function implemented with the ",Object(o.b)("inlineCode",{parentName:"p"},"thread_count")," function we defined above and exporting it as a module property named ",Object(o.b)("inlineCode",{parentName:"p"},'"threadCount"'),"."),Object(o.b)("p",null,"You can see the full ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/neon-bindings/examples/blob/master/thread-count/native/src/lib.rs"}),Object(o.b)("inlineCode",{parentName:"a"},"lib.rs"))," file in the examples repository."),Object(o.b)("h1",{id:"exporting-our-function"},"Exporting our Function"),Object(o.b)("p",null,"Now that the Rust code is implemented, all we have left to do is export it from the project's public module in ",Object(o.b)("inlineCode",{parentName:"p"},"lib/index.js"),". The native module exported a ",Object(o.b)("inlineCode",{parentName:"p"},"threadCount")," property, so we'll just make that function our entire public module:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const addon = require('../native');\n\nmodule.exports = addon.threadCount;\n")),Object(o.b)("h1",{id:"try-it-out"},"Try it Out!"),Object(o.b)("p",null,"Now we should be able to rebuild the project with ",Object(o.b)("inlineCode",{parentName:"p"},"neon build --release")," again:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"neon build --release\n")),Object(o.b)("p",null,"This will create a release build for us. Assuming we didn't make any mistakes, we can test out our new Neon module at the Node console from the root of our project directory:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"node\n> var threadCount = require('.')\n> threadCount()\n4\n")),Object(o.b)("p",null,"Keep in mind that the result of calling ",Object(o.b)("inlineCode",{parentName:"p"},"threadCount()")," will vary based on the machine you run this demo on\u2014by design!"))}u.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||s[d]||o;return n?r.a.createElement(m,l({ref:t},b,{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);