(window.webpackJsonp=window.webpackJsonp||[]).push([[12,51],{151:function(e,t,a){"use strict";a.r(t);a(14);var n=a(0),l=a.n(n),r=a(154),o=a(156),c=a(46),s=a(163),i=a(1),m=a(155),u=a.n(m),d=a(189),f=a(190),b=a(157),p=a(164),g=a(110),h=a.n(g);function E({item:e,onItemClick:t,collapsible:a,...r}){const{items:o,href:c,label:s,type:m}=e,[d,f]=Object(n.useState)(e.collapsed),[g,h]=Object(n.useState)(null);e.collapsed!==g&&(h(e.collapsed),f(e.collapsed));const k=Object(n.useCallback)(e=>{e.preventDefault(),e.target.blur(),f(e=>!e)});switch(m){case"category":return o.length>0&&l.a.createElement("li",{className:u()("menu__list-item",{"menu__list-item--collapsed":d}),key:s},l.a.createElement("a",Object(i.a)({className:u()("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&!e.collapsed}),href:"#!",onClick:a?k:void 0},r),s),l.a.createElement("ul",{className:"menu__list"},o.map(e=>l.a.createElement(E,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:s},l.a.createElement(b.a,Object(i.a)({className:"menu__link",to:c},Object(p.a)(c)?{isNavLink:!0,activeClassName:"menu__link--active",exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},r),s))}}var k=function(e){const[t,a]=Object(n.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:r,hideOnScroll:c=!1}={}}}={},isClient:s}=Object(o.a)(),{logoLink:m,logoLinkProps:p,logoImageUrl:g,logoAlt:k}=Object(f.a)(),{docsSidebars:v,path:N,sidebar:_,sidebarCollapsible:y}=e;if(Object(d.a)(t),!_)return null;const w=v[_];if(!w)throw new Error(`Cannot find the sidebar "${_}" in the sidebar config!`);return y&&w.forEach(e=>function e(t,a){const{items:n,href:l,type:r}=t;switch(r){case"category":{const l=n.map(t=>e(t,a)).filter(e=>e).length>0;return t.collapsed=!l,l}case"link":default:return l===a}}(e,N)),l.a.createElement("div",{className:h.a.sidebar},c&&l.a.createElement(b.a,Object(i.a)({tabIndex:"-1",className:h.a.sidebarLogo,to:m},p),null!=g&&l.a.createElement("img",{key:s,src:g,alt:k}),null!=r&&l.a.createElement("strong",null,r)),l.a.createElement("div",{className:u()("menu","menu--responsive",h.a.menu,{"menu--show":t})},l.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{a(!t)}},t?l.a.createElement("span",{className:u()(h.a.sidebarMenuIcon,h.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:h.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},w.map(e=>l.a.createElement(E,{key:e.label,item:e,onItemClick:e=>{e.target.blur(),a(!1)},collapsible:y})))))},v=a(183),N=a(185),_=a(173),y=a(114),w=a.n(y);t.default=function(e){const{route:t,docsMetadata:a,location:n}=e,i=t.routes.find(e=>Object(_.a)(n.pathname,e))||{},{permalinkToSidebar:m,docsSidebars:u,version:d}=a,f=m[i.path],{siteConfig:{themeConfig:b={}}={},isClient:p}=Object(o.a)(),{sidebarCollapsible:g=!0}=b;return 0===Object.keys(i).length?l.a.createElement(N.default,e):l.a.createElement(s.a,{version:d,key:p},l.a.createElement("div",{className:w.a.docPage},f&&l.a.createElement("div",{className:w.a.docSidebarContainer},l.a.createElement(k,{docsSidebars:u,path:i.path,sidebar:f,sidebarCollapsible:g})),l.a.createElement("main",{className:w.a.docMainContainer},l.a.createElement(r.a,{components:v.a},Object(c.a)(t.routes)))))}},165:function(e,t,a){"use strict";var n=a(1),l=a(0),r=a.n(l),o=a(155),c=a.n(o),s=a(157),i=a(156),m=a(158),u=a(94),d=a.n(u);function f(e){var t=e.item,a=Object(m.a)(t.to);return r.a.createElement(s.a,Object(n.a)({className:"footer__link-item"},t,t.href?{target:"_blank",rel:"noopener noreferrer",href:t.href}:{to:a}),t.label)}t.a=function(){var e=Object(i.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},l=n.copyright,o=n.links,s=void 0===o?[]:o,u=n.logo,b=void 0===u?{}:u,p=Object(m.a)(b.src);return a?r.a.createElement("footer",{className:c()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:e.title,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e){return r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(f,{item:e}))}))):null)}))),(b||l)&&r.a.createElement("div",{className:["text--center",d.a.logoContainer].join(" ")},b&&b.src&&r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("img",{className:"footer__logo",alt:b.alt,src:p})),r.a.createElement("div",{className:d.a.sponsor},r.a.createElement("a",{href:"https://www.netlify.com"},r.a.createElement("img",{src:"https://www.netlify.com/img/global/badges/netlify-color-accent.svg",alt:"netlify sponsor"}))),l))):null}},174:function(e,t,a){"use strict";(function(e){var n=a(1),l=(a(175),a(0)),r=a.n(l),o=a(155),c=a.n(o),s=a(184),i=a(179),m=a(176),u=a.n(m),d=a(156),f=a(35),b=a(95),p=a.n(b);(void 0!==e?e:window).Prism=f.a,a(177),a(178),t.a=function(e){var t=e.children,a=e.className,o=Object(d.a)().siteConfig.themeConfig.prismTheme,m=Object(l.useState)(!1),f=m[0],b=m[1],g=Object(l.useRef)(null),h=Object(l.useRef)(null);Object(l.useEffect)((function(){var e;return h.current&&(e=new u.a(h.current,{target:function(){return g.current}})),function(){e&&e.destroy()}}),[h.current,g.current]);var E=a&&a.replace(/language-/,""),k=function(){window.getSelection().empty(),b(!0),setTimeout((function(){return b(!1)}),2e3)};return r.a.createElement(s.a,Object(n.a)({},s.b,{theme:o||i.a,code:t.trim(),language:E}),(function(e){var t=e.className,a=e.style,n=e.tokens,l=e.getLineProps,o=e.getTokenProps;return r.a.createElement("div",{className:p.a.codeBlockWrapper},r.a.createElement("pre",{ref:g,className:c()(t,p.a.codeBlock),style:a},n.map((function(e,t){return r.a.createElement("div",l({line:e,key:t}),e.map((function(e,t){return r.a.createElement("span",o({token:e,key:t}))})))}))),r.a.createElement("button",{ref:h,type:"button","aria-label":"Copy code to clipboard",className:p.a.copyButton,onClick:k},f?"Copied":"Copy"))}))}}).call(this,a(55))},185:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(163);t.default=function(){return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);