(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return i}));n(58),n(31),n(21),n(22),n(59),n(0);var a=n(217);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={title:"Native JS Classes in Neon",author:"Dave Herman",categories:["Rust","Node","Neon","Classes"]},c=[],s={rightToc:c},l="wrapper";function i(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(l,r({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u26a0\ufe0f This article contains references to an outdated version of neon \u26a0\ufe0f"),Object(a.b)("p",null,"Last weekend I ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/rustbridge/neon/pull/58"}),"landed a PR")," that adds support for defining custom native classes in ","[Neon]","({{ site.baseurl }}{% post_url 2015-12-23-neon-node-rust %}). This means you can create JavaScript objects that internally wrap---and ",Object(a.b)("a",r({parentName:"p"},{href:"https://doc.rust-lang.org/book/ownership.html"}),"own"),"---a Rust data structure, along with methods that can safely access the internal Rust data."),Object(a.b)("p",null,"As a quick demonstration, suppose you have an ",Object(a.b)("inlineCode",{parentName:"p"},"Employee")," struct defined in Rust:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-rust"}),"pub struct Employee {\n    id: i32,\n    name: String,\n    // etc ...\n}\n")),Object(a.b)("p",null,"You can expose this to JS with the new ",Object(a.b)("inlineCode",{parentName:"p"},"declare_types!")," macro:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-rust"}),"declare_types! {\n\n    /// JS class wrapping Employee records.\n    pub class JsEmployee for Employee {\n\n        init(call) {\n            let scope = call.scope;\n            let id = try!(try!(call.arguments.require(scope, 0)).check::<JsInteger>());\n            let name = try!(try!(call.arguments.require(scope, 1)).to_string());\n            // etc ...\n            Ok(Employee {\n                id: id.value() as i32,\n                name: name.value(),\n                // etc ...\n            })\n        }\n\n        method name(call) {\n            let scope = call.scope;\n            let this: Handle<JsEmployee> = call.arguments.this(scope);\n            let name = try!(vm::lock(this, |employee| {\n                employee.name.clone()\n            });\n            Ok(try!(JsString::new_or_throw(scope, &name[..])).upcast())\n        }\n    }\n\n};\n")),Object(a.b)("p",null,"This defines a custom JS class whose instances contain an ",Object(a.b)("inlineCode",{parentName:"p"},"Employee")," record. It binds ",Object(a.b)("inlineCode",{parentName:"p"},"JsEmployee")," to a Rust type that can create the class at runtime (i.e., the constructor function and prototype object). The ",Object(a.b)("inlineCode",{parentName:"p"},"init")," function defines the behavior for allocating the internals during construction of a new instance. The ",Object(a.b)("inlineCode",{parentName:"p"},"name")," method shows an example of how you can use ",Object(a.b)("inlineCode",{parentName:"p"},"vm::lock")," to borrow a reference to the internal Rust data of an instance."),Object(a.b)("p",null,"From there, you can extract the constructor function and expose it to JS, for example by exporting it from a native module:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-rust"}),'register_module!(m, {\n    let scope = m.scope;\n    let class = try!(JsEmployee::class(scope));       // get the class\n    let constructor = try!(class.constructor(scope)); // get the constructor\n    try!(m.exports.set("Employee", constructor));     // export the constructor\n});\n')),Object(a.b)("p",null,"Then you can use instances of this type in JS just like any other object:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const { Employee } = require('./native');\n\nconst lumbergh = new Employee(9001, \"Bill Lumbergh\");\nconsole.log(lumbergh.name()); // Bill Lumbergh\n")),Object(a.b)("p",null,"Since the methods on ",Object(a.b)("inlineCode",{parentName:"p"},"Employee")," expect ",Object(a.b)("inlineCode",{parentName:"p"},"this")," to have the right binary layout, they check to make sure that they aren't being called on an inappropriate object type. This means you can't segfault Node by doing something like:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"Employee.prototype.name.call({});\n")),Object(a.b)("p",null,"This safely throws a TypeError exception just like methods from other native classes like ",Object(a.b)("inlineCode",{parentName:"p"},"Date")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Buffer")," do."),Object(a.b)("p",null,"Anyway, that's a little taste of user-defined native classes. More docs work to do!"))}i.isMDXComponent=!0},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a),o=r.a.createContext({}),c=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=c(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,m=p[s+"."+u]||p[u]||i[u]||o;return n?r.a.createElement(m,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(m,Object.assign({},{ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[l]="string"==typeof e?e:a,c[1]=s;for(var u=2;u<o;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);