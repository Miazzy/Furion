(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{135:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},b=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=d(r),p=n,f=b["".concat(o,".").concat(p)]||b[p]||s[p]||c;return r?i.a.createElement(f,a(a({ref:t},l),{},{components:r})):i.a.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var l=2;l<c;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},136:function(e,t,r){"use strict";var n=r(0),i=r(19);t.a=function(){const e=Object(n.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},137:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o}));var n=r(136),i=r(138);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:c=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=c();return r(e,t)}},138:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2),i=r(6),c=(r(0),r(135)),o=r(137),a={id:"dbcontext-read-write",title:"8.25 \u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u590d\u5236",sidebar_label:"8.25 \u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u590d\u5236"},u={unversionedId:"dbcontext-read-write",id:"dbcontext-read-write",isDocsHomePage:!1,title:"8.25 \u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u590d\u5236",description:"8.25.1 \u8bfb\u5199\u5206\u79bb",source:"@site/docs\\dbcontext-read-write.mdx",slug:"/dbcontext-read-write",permalink:"/fur/docs/dbcontext-read-write",editUrl:"https://gitee.com/monksoul/Fur/tree/main/handbook/docs/dbcontext-read-write.mdx",version:"current",sidebar_label:"8.25 \u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u590d\u5236",sidebar:"docs",previous:{title:"8.24 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143",permalink:"/fur/docs/tran"},next:{title:"8.26 \u5206\u8868\u5206\u5e93",permalink:"/fur/docs/split-db"}},l=[{value:"8.25.1 \u8bfb\u5199\u5206\u79bb",id:"8251-\u8bfb\u5199\u5206\u79bb",children:[{value:"8.25.1.1 \u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898",id:"82511-\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898",children:[]},{value:"8.25.1.2 \u6ce8\u610f\u4e8b\u9879",id:"82512-\u6ce8\u610f\u4e8b\u9879",children:[]}]},{value:"8.25.2 \u5982\u4f55\u5b9e\u73b0",id:"8252-\u5982\u4f55\u5b9e\u73b0",children:[]},{value:"8.25.3 \u4e3b\u4ece\u590d\u5236",id:"8253-\u4e3b\u4ece\u590d\u5236",children:[{value:"8.25.3.1 <code>SqlServer</code> \u914d\u7f6e",id:"82531-sqlserver-\u914d\u7f6e",children:[]}]}],d={rightToc:l};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"8251-\u8bfb\u5199\u5206\u79bb"},"8.25.1 \u8bfb\u5199\u5206\u79bb"),Object(c.b)("p",null,"\u5176\u5b9e\u5c31\u662f\u5c06\u6570\u636e\u5e93\u5206\u4e3a\u4e86\u4e3b\u4ece\u5e93\uff0c\u4e00\u4e2a\u4e3b\u5e93\u7528\u4e8e\u5199\u6570\u636e\uff0c\u591a\u4e2a\u4ece\u5e93\u5b8c\u6210\u8bfb\u6570\u636e\u7684\u64cd\u4f5c\uff0c\u4e3b\u4ece\u5e93\u4e4b\u95f4\u901a\u8fc7\u67d0\u79cd\u673a\u5236\u8fdb\u884c\u6570\u636e\u7684\u540c\u6b65\uff0c\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u6570\u636e\u5e93\u67b6\u6784\u3002"),Object(c.b)("img",{src:Object(o.a)("img/readwrite.png"),style:{height:300}}),Object(c.b)("h3",{id:"82511-\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898"},"8.25.1.1 \u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898"),Object(c.b)("p",null,"\u5927\u591a\u6570\u4e92\u8054\u7f51\u4e1a\u52a1\uff0c\u5f80\u5f80\u8bfb\u591a\u5199\u5c11\uff0c\u8fd9\u65f6\u5019\uff0c\u6570\u636e\u5e93\u7684\u8bfb\u4f1a\u9996\u5148\u79f0\u4e3a\u6570\u636e\u5e93\u7684\u74f6\u9888\uff0c\u8fd9\u65f6\uff0c\u5982\u679c\u6211\u4eec\u5e0c\u671b\u80fd\u591f\u7ebf\u6027\u7684\u63d0\u5347\u6570\u636e\u5e93\u7684\u8bfb\u6027\u80fd\uff0c\u6d88\u9664\u8bfb\u5199\u9501\u51b2\u7a81\u4ece\u800c\u63d0\u5347\u6570\u636e\u5e93\u7684\u5199\u6027\u80fd\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u4f7f\u7528\u201c\u5206\u7ec4\u67b6\u6784\u201d\uff08\u8bfb\u5199\u5206\u79bb\u67b6\u6784\uff09\u3002"),Object(c.b)("p",null,"\u7528\u4e00\u53e5\u8bdd\u6982\u62ec\uff0c\u8bfb\u5199\u5206\u79bb\u662f\u7528\u6765\u89e3\u51b3\u6570\u636e\u5e93\u7684\u8bfb\u6027\u80fd\u74f6\u9888\u7684\u3002"),Object(c.b)("h3",{id:"82512-\u6ce8\u610f\u4e8b\u9879"},"8.25.1.2 \u6ce8\u610f\u4e8b\u9879"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u8981\u8fdb\u884c\u533a\u5206\uff0c\u54ea\u4e9b\u662f\u8bfb\u8fde\u63a5\u6c60\uff0c\u54ea\u4e2a\u662f\u5199\u8fde\u63a5\u6c60\uff0c\u7814\u53d1\u7684\u96be\u5ea6\u4f1a\u589e\u52a0\uff1b"),Object(c.b)("li",{parentName:"ul"},"\u4e3a\u4e86\u4fdd\u8bc1\u9ad8\u53ef\u7528\uff0c\u8bfb\u8fde\u63a5\u6c60\u8981\u80fd\u591f\u5b9e\u73b0\u6545\u969c\u81ea\u52a8\u8f6c\u79fb\uff1b"),Object(c.b)("li",{parentName:"ul"},"\u4e3b\u4ece\u7684\u4e00\u81f4\u6027\u95ee\u9898\u9700\u8981\u8003\u8651\u3002")),Object(c.b)("h2",{id:"8252-\u5982\u4f55\u5b9e\u73b0"},"8.25.2 \u5982\u4f55\u5b9e\u73b0"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Fur")," \u5728\u6570\u636e\u5e93\u6a21\u5757\u8bbe\u8ba1\u4e4b\u521d\uff0c\u5c31\u8003\u8651\u4e86\u8bfb\u5199\u5206\u79bb\u8fd9\u79cd\u60c5\u51b5\uff0c\u6240\u4ee5\u4ece\u5e95\u5c42\u5c31\u652f\u6301\u52a8\u6001\u5207\u6362\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u53ca\u8bfb\u5199\u64cd\u4f5c\u65b9\u6cd5\u7ea6\u675f\u3002"),Object(c.b)("h2",{id:"8253-\u4e3b\u4ece\u590d\u5236"},"8.25.3 \u4e3b\u4ece\u590d\u5236"),Object(c.b)("h3",{id:"82531-sqlserver-\u914d\u7f6e"},"8.25.3.1 ",Object(c.b)("inlineCode",{parentName:"h3"},"SqlServer")," \u914d\u7f6e"))}b.isMDXComponent=!0}}]);