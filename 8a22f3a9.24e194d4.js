(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{126:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(1),a=t(7),o=(t(0),t(154)),i={id:"errors",title:"Errors",sidebar_label:"Errors"},c={id:"errors",title:"Errors",description:"[Examples](https://github.com/neon-bindings/examples/tree/master/errors)",source:"@site/docs/errors.md",permalink:"/docs/errors",sidebar_label:"Errors",sidebar:"docs",previous:{title:"JSON",permalink:"/docs/json"},next:{title:"Async Tasks",permalink:"/docs/async"}},p=[{value:"Creating Errors",id:"creating-errors",children:[]},{value:"Catching Errors",id:"catching-errors",children:[]}],s={rightToc:p};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/neon-bindings/examples/tree/master/errors"}),"Examples")),Object(o.b)("p",null,"Neon supports creating and throwing all Error objects in JS. These objects include ",Object(o.b)("inlineCode",{parentName:"p"},"Error"),", ",Object(o.b)("inlineCode",{parentName:"p"},"TypeError"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"RangeError"),". Calling ",Object(o.b)("inlineCode",{parentName:"p"},"panic!()")," in Neon will throw an ",Object(o.b)("inlineCode",{parentName:"p"},"Error")," in Node. So ",Object(o.b)("inlineCode",{parentName:"p"},'panic!("program errored!")')," is equivalent to ",Object(o.b)("inlineCode",{parentName:"p"},"throw new Error('program errored!')"),". "),Object(o.b)("h2",{id:"creating-errors"},"Creating Errors"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"FunctionContext")," trait is used to create and throw Errors."),Object(o.b)("h2",{id:"catching-errors"},"Catching Errors"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This section is a work in progress."))))}l.isMDXComponent=!0},154:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},b=function(e){var r=l(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},u=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(t),u=n,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return t?a.a.createElement(m,c({ref:r},s,{components:t})):a.a.createElement(m,c({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);