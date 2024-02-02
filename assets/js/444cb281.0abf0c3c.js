"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1515],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>N});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(r),s=l,N=c["".concat(p,".").concat(s)]||c[s]||k[s]||n;return r?a.createElement(N,i(i({ref:t},m),{},{components:r})):a.createElement(N,i({ref:t},m))}));function N(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var a=r(7462),l=(r(7294),r(3905));const n={sidebar_position:3},i="\u5faa\u73af\u8bed\u53e5",o={unversionedId:"js/4process-control/3for",id:"js/4process-control/3for",title:"\u5faa\u73af\u8bed\u53e5",description:"- \u901a\u8fc7\u5faa\u73af\u8bed\u53e5\u53ef\u4ee5\u4f7f\u6307\u5b9a\u7684\u4ee3\u7801\u53cd\u590d\u6267\u884c",source:"@site/docs/js/4process-control/3for.md",sourceDirName:"js/4process-control",slug:"/js/4process-control/3for",permalink:"/docs/js/4process-control/3for",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u6761\u4ef6\u5206\u652f\u8bed\u53e5\uff08switch\u8bed\u53e5\uff09",permalink:"/docs/js/4process-control/2switch"},next:{title:"\u5bf9\u8c61",permalink:"/docs/js/5object/1object"}},p={},u=[{value:"while\u8bed\u53e5",id:"while\u8bed\u53e5",level:2},{value:"do-while\u5faa\u73af",id:"do-while\u5faa\u73af",level:2},{value:"for\u5faa\u73af",id:"for\u5faa\u73af",level:2},{value:"break\u548ccontinue",id:"break\u548ccontinue",level:2}],m={toc:u},c="wrapper";function k(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5faa\u73af\u8bed\u53e5"},"\u5faa\u73af\u8bed\u53e5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5faa\u73af\u8bed\u53e5\u53ef\u4ee5\u4f7f\u6307\u5b9a\u7684\u4ee3\u7801\u53cd\u590d\u6267\u884c"),(0,l.kt)("li",{parentName:"ul"},"JS\u4e2d\u4e00\u5171\u6709\u4e09\u79cd\u5faa\u73af\u8bed\u53e5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"while\u8bed\u53e5"),(0,l.kt)("li",{parentName:"ul"},"do-while\u8bed\u53e5"),(0,l.kt)("li",{parentName:"ul"},"for\u8bed\u53e5")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"while\u8bed\u53e5"},"while\u8bed\u53e5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"while(\u6761\u4ef6\u8868\u8fbe\u5f0f){\n    \u8bed\u53e5...\n}\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6267\u884c\u6d41\u7a0b\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"while\u8bed\u53e5\u5728\u6267\u884c\u65f6\uff0c\u4f1a\u5148\u5bf9\u6761\u4ef6\u8868\u8fbe\u5f0f\u8fdb\u884c\u5224\u65ad",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u7ed3\u679c\u4e3atrue\uff0c\u5219\u6267\u884c\u5faa\u73af\u4f53\uff0c\u6267\u884c\u5b8c\u6bd5\uff0c\u7ee7\u7eed\u5224\u65ad"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e3atrue\uff0c\u5219\u518d\u6b21\u6267\u884c\u5faa\u73af\u4f53\uff0c\u6267\u884c\u5b8c\u6bd5\uff0c\u7ee7\u7eed\u5224\u65ad\uff0c\u5982\u6b64\u53cd\u590d"),(0,l.kt)("li",{parentName:"ul"},"\u76f4\u5230\u6761\u4ef6\u8868\u8fbe\u5f0f\u7ed3\u679c\u4e3afalse\u65f6\uff0c\u5faa\u73af\u7ed3\u675f"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u901a\u5e38\u7f16\u5199\u4e00\u4e2a\u5faa\u73af\uff0c\u8981\u6709\u4e09\u4e2a\u6761\u4ef6"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316\u8868\u8fbe\u5f0f\uff08\u521d\u59cb\u5316\u53d8\u91cf\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u6761\u4ef6\u8868\u8fbe\u5f0f\uff08\u8bbe\u7f6e\u5faa\u73af\u8fd0\u884c\u7684\u6761\u4ef6\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u8868\u8fbe\u5f0f\uff08\u4fee\u6539\u521d\u59cb\u5316\u53d8\u91cf\uff09")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"let i = 0;\nwhile (1) {\n    console.log(i);\n    i++;\n    if (i >= 5) {\n        break;\n    }\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"do-while\u5faa\u73af"},"do-while\u5faa\u73af"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"do{\n    \u8bed\u53e5...\n}while(\u6761\u4ef6\u8868\u8fbe\u5f0f)\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6267\u884c\u987a\u5e8f\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"do-while\u8bed\u53e5\u5728\u6267\u884c\u65f6\uff0c\u4f1a\u5148\u6267\u884cdo\u540e\u7684\u5faa\u73af\u4f53\uff0c\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u4f1a\u5bf9while\u540e\u7684\u6761\u4ef6\u8868\u8fbe\u5f0f\u8fdb\u884c\u5224\u65ad",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e3afalse\uff0c\u5219\u5faa\u73af\u7ec8\u6b62"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e3atrue\uff0c\u5219\u7ee7\u7eed\u6267\u884c\u5faa\u73af\u4f53\uff0c\u4ee5\u6b64\u7c7b\u63a8"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u548cwhile\u7684\u533a\u522b\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"while\u8bed\u53e5\u662f\u5148\u5224\u65ad\u518d\u6267\u884c"),(0,l.kt)("li",{parentName:"ul"},"do-while\u8bed\u53e5\u662f\u5148\u6267\u884c\u518d\u5224\u65ad"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u8d28\u7684\u533a\u522b\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"do-while\u8bed\u53e5\u53ef\u4ee5\u786e\u4fdd\u5faa\u73af\u81f3\u5c11\u6267\u884c\u4e00\u6b21")))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"for\u5faa\u73af"},"for\u5faa\u73af"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"for\u5faa\u73af\u548cwhile\u6ca1\u6709\u672c\u8d28\u533a\u522b\uff0c\u90fd\u662f\u7528\u6765\u53cd\u590d\u6267\u884c\u4ee3\u7801")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u540c\u70b9\u5c31\u662f\u8bed\u6cd5\u7ed3\u6784\uff0cfor\u5faa\u73af\u66f4\u52a0\u6e05\u6670")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"for(\u521d\u59cb\u5316\u8868\u8fbe\u5f0f; \u6761\u4ef6\u8868\u8fbe\u5f0f; \u66f4\u65b0\u8868\u8fbe\u5f0f){\n    \u8bed\u53e5...\n}\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6267\u884c\u6d41\u7a0b\uff1a"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c\u521d\u59cb\u5316\u8868\u8fbe\u5f0f\uff0c\u521d\u59cb\u5316\u53d8\u91cf"),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c\u6761\u4ef6\u8868\u8fbe\u5f0f\uff0c\u5224\u65ad\u5faa\u73af\u662f\u5426\u6267\u884c\uff08true\u6267\u884c\uff0cfalse\u7ec8\u6b62\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u5224\u65ad\u7ed3\u679c\u4e3atrue\uff0c\u5219\u6267\u884c\u5faa\u73af\u4f53"),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c\u66f4\u65b0\u8868\u8fbe\u5f0f\uff0c\u5bf9\u521d\u59cb\u5316\u53d8\u91cf\u8fdb\u884c\u4fee\u6539"),(0,l.kt)("li",{parentName:"ol"},"\u91cd\u590d\u7b2c\u4e8c\u90e8\uff0c\u76f4\u5230\u5224\u65ad\u4e3afalse\u4e3a\u6b62"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521d\u59cb\u5316\u8868\u8fbe\u5f0f\uff0c\u5728\u5faa\u73af\u7684\u6574\u4e2a\u7684\u751f\u547d\u5468\u671f\u4e2d\u53ea\u4f1a\u6267\u884c1\u6b21")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"for\u5faa\u73af\u4e2d\u7684\u4e09\u4e2a\u8868\u8fbe\u5f0f\u90fd\u53ef\u4ee5\u7701\u7565\uff0c\u7701\u7565\u540e\u5c31\u53d8\u4e3a\u6b7b\u5faa\u73af\u4e86")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528let\u5728for\u5faa\u73af\u7684()\u4e2d\u58f0\u660e\u7684\u53d8\u91cf\u662f\u5c40\u90e8\u53d8\u91cf\uff0c\u53ea\u80fd\u5728for\u5faa\u73af\u5185\u90e8\u8bbf\u95ee\uff0c\u4f7f\u7528var\u5728for\u5faa\u73af()\u4e2d\u58f0\u660e\u7684\u53d8\u91cf\u53ef\u4ee5\u5728for\u5faa\u73af\u7684\u5916\u90e8\u8bbf\u95ee")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u6b7b\u5faa\u73af\u7684\u65b9\u5f0f\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"while(1){}"),(0,l.kt)("li",{parentName:"ul"},"for(;;){}")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"break\u548ccontinue"},"break\u548ccontinue"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"break",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"break\u7528\u6765\u7ec8\u6b62switch\u548c\u5faa\u73af\u8bed\u53e5"),(0,l.kt)("li",{parentName:"ul"},"break\u6267\u884c\u540e\uff0c\u5f53\u524d\u7684switch\u6216\u5faa\u73af\u4f1a\u7acb\u523b\u505c\u6b62"),(0,l.kt)("li",{parentName:"ul"},"break\u4f1a\u7ec8\u6b62\u79bb\u4ed6\u6700\u8fd1\u7684\u5faa\u73af"))),(0,l.kt)("li",{parentName:"ul"},"continue",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"continue\u7528\u6765\u8df3\u8fc7\u5f53\u6b21\u5faa\u73af")))))}k.isMDXComponent=!0}}]);