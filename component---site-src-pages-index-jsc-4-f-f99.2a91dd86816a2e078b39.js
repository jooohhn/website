(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{145:function(e,t,a){"use strict";a.r(t);a(58),a(266);var n=a(0),r=a.n(n),l=a(218),c=a.n(l),s=a(230),o=(a(220),a(219)),i=a(223),u=a(525),m=a(467),d=a(520),g=a(526),E=a(521),f=a(522),p=a(523),h=a(267),x=a.n(h);a(268),a(269);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var b="\n// JS\nfunction hello() {\n  let result = fibonacci(10000);\n  console.log(result);\n  return result;\n}\n",v='\n// Neon\nfn hello(mut cx: FunctionContext) -> JsResult<JsNumber> {\n  let result = cx.number(fibonacci(10000));\n  println!("{}", result);\n  Ok(result)\n}',C=[{name:"Make Array",code:'\n// Create an array and add some values to it\nfn make_an_array(mut cx: FunctionContext) -> JsResult<JsArray> {\n  // Create some values:\n  let n = cx.number(9000);\n  let s = cx.string("hello");\n  let b = cx.boolean(true);\n  // Create a new array:\n  let array: Handle<JsArray> = cx.empty_array();\n  // Push the values into the array:\n  array.set(&mut cx, 0, n)?;\n  array.set(&mut cx, 1, s)?;\n  array.set(&mut cx, 2, b)?;\n  // Return the array:\n  Ok(array)\n}\n'},{name:"Print Function Arguments",code:'\n// Create a function that gets the number of arguments passed to it\nfn get_args_len(mut cx: FunctionContext) -> JsResult<JsNumber> {\n    let args_length = cx.len();\n    println!("{}", args_length);\n    Ok(cx.number(args_length))\n}\n'},{name:"Async Fibonacci",code:"\n// Asynchronously compute fibonacci on another thread\nfn fibonacci_async(mut cx: FunctionContext) -> JsResult<JsUndefined> {\n  let n = cx.argument::<JsNumber>(0)?.value() as usize;\n  let cb = cx.argument::<JsFunction>(1)?;\n\n  let task = FibonacciTask { argument: n };\n  task.schedule(cb);\n\n  Ok(cx.undefined())\n}\n"}],N=function(e){return r.a.createElement("div",{className:"neonProjectLogo"},r.a.createElement("div",{className:"neon-logo"},r.a.createElement("span",{className:"open neon-heading neon-flicker-blink"},e.title),r.a.createElement("span",{className:"hrs neon-subheading"},e.subtitle)))},k=[{title:r.a.createElement(r.a.Fragment,null,"Simple Tooling"),imageUrl:"img/hammer.svg",description:r.a.createElement(r.a.Fragment,null,"No makefiles. No fancy global build requirements. Just Node and Rust")},{title:r.a.createElement(r.a.Fragment,null,"Guaranteed Safety"),description:r.a.createElement(r.a.Fragment,null,"If a neon module compiles, it is guaranteed to be memory safe by the rust compiler"),imageUrl:"img/checkmark.svg"},{title:r.a.createElement(r.a.Fragment,null,"Easy Parallelism"),description:r.a.createElement(r.a.Fragment,null,"Safely run multiple threads without data races"),imageUrl:"img/fork.svg"}],_=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={currentExampleIdx:0,currentCode:C[0].code},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.onButtonClick=function(e){this.setState({currentExampleIdx:e,currentCode:C[e].code})},l.render=function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{className:x.a.Carousel},C.map((function(t,a){return r.a.createElement(g.a,{color:e.state.currentExampleIdx===a?"primary":"secondary",key:t.name,onClick:function(){return e.onButtonClick(a)}},t.name)}))),r.a.createElement(F,{language:"rust"},this.state.currentCode))},n}(r.a.Component),F=function(e){return r.a.createElement(u.a,y({},e,{customStyle:{background:"#08162E",margin:"30px 0",textAlign:"left",color:"white !important"},style:m.a}),e.children)};F.defaultProps={language:"javascript"};var J=function(e){return e.join(" ")};t.default=function(){var e=Object(o.a)().siteConfig,t=void 0===e?{}:e;return r.a.createElement(s.a,{title:t.title+" - "+t.tagline,description:t.tagline},r.a.createElement("header",{className:J([x.a.header,x.a.containerOdd])},r.a.createElement(E.a,null,r.a.createElement(f.a,{xs:"12",className:"text-center"},r.a.createElement(N,{title:t.title,subtitle:t.tagline}),r.a.createElement(p.a,null,r.a.createElement(f.a,{xs:6},r.a.createElement(F,null,b)),r.a.createElement(f.a,{xs:6},r.a.createElement(F,{language:"rust"},v))),r.a.createElement(p.a,{className:x.a.actionButtons},r.a.createElement(d.a,null,r.a.createElement("a",{href:Object(i.a)("docs/getting-started")},r.a.createElement(g.a,{color:"primary"},"Try It Out")),r.a.createElement("a",{href:t.repoUrl},r.a.createElement(g.a,{color:"primary",target:"_blank"},"GitHub")),r.a.createElement("a",{href:"https://neon-bindings.com/api/neon/index.html"},r.a.createElement(g.a,{color:"primary",target:"_blank"},"API"))))))),r.a.createElement("main",null,r.a.createElement("section",{className:J([x.a.featuresContainer,x.a.containerEven])},r.a.createElement(f.a,{xs:"12",className:"text-center"},r.a.createElement("h3",null,"Features")),k&&k.length&&r.a.createElement("section",null,r.a.createElement(E.a,null,r.a.createElement(p.a,null,k.map((function(e,t){var a=e.imageUrl,n=e.title,l=e.description;return r.a.createElement("div",{key:x.a.featuresContainer,className:c()("col col--4",x.a.feature)},r.a.createElement("h4",{className:x.a.featureHeader},r.a.createElement("span",null,r.a.createElement("img",{className:x.a.featureImage,src:Object(i.a)(a),alt:n})),n),r.a.createElement("p",{className:x.a.featureDescription},l))})))))),r.a.createElement("section",{className:J([x.a.featuresContainer,x.a.containerOdd])},r.a.createElement(E.a,null,r.a.createElement(f.a,{xs:"12",className:"text-center"},r.a.createElement("h3",null,"Examples")),r.a.createElement(f.a,{xs:"12",className:"text-center"},r.a.createElement(_,null)))),r.a.createElement("section",{className:J([x.a.featuresContainer,x.a.containerEven])},r.a.createElement(E.a,null,r.a.createElement(f.a,{xs:"12",className:"text-center"},r.a.createElement("h3",null,"Demo")),r.a.createElement(f.a,{xs:"12"},r.a.createElement("iframe",{src:"https://asciinema.org/a/269799/iframe",width:"100%",height:"300px"}))))))}},267:function(e,t,a){e.exports={header:"header_1UBA",heroBanner:"heroBanner_2Ftp",featureDescription:"featureDescription_37Ue",featureHeader:"featureHeader_2vom",containerOdd:"containerOdd_8IvM",containerEven:"containerEven_1C3z",actionButtons:"actionButtons_nmJ6",featuresContainer:"featuresContainer_-qvw",featureImage:"featureImage_3Xqx",Carousel:"Carousel_1jbA"}},268:function(e,t,a){},269:function(e,t,a){}}]);