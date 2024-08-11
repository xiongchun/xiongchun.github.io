"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[8513],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>s});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=l.createContext({}),u=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},k=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),m=u(a),g=n,s=m["".concat(i,".").concat(g)]||m[g]||c[g]||r;return a?l.createElement(s,p(p({ref:t},k),{},{components:a})):l.createElement(s,p({ref:t},k))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,p=new Array(r);p[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:n,p[1]=o;for(var u=2;u<r;u++)p[u]=a[u];return l.createElement.apply(null,p)}return l.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6581:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var l=a(7462),n=(a(7294),a(3905));const r={title:"(AIGC) \u6587\u5fc3\u4e00\u8a00 VS Bard VS ChatGPT",authors:["xiongchun"],tags:["\u5927\u6570\u636e\u5206\u6790","LLM","\u5927\u8bed\u8a00\u6a21\u578b","AIGC"],date:"2022-12-7",hide_table_of_contents:!1,slug:"llm-baidu-yiyan-google-bard-openai-chatgpt"},p=void 0,o={permalink:"/blog/llm-baidu-yiyan-google-bard-openai-chatgpt",source:"@site/blog/AIGC \u6587\u5fc3\u4e00\u8a00 VS Bard VS ChatGPT.md",title:"(AIGC) \u6587\u5fc3\u4e00\u8a00 VS Bard VS ChatGPT",description:"AIGC \u7279\u522b\u6807\u6ce8: \u672c\u6587\u5185\u5bb9\u7531\u5927\u8bed\u8a00\u6a21\u578b\u81ea\u52a8\u751f\u6210\u6216\u4eba\u5de5\u6f14\u7ece\u3002",date:"2022-12-07T00:00:00.000Z",formattedDate:"2022\u5e7412\u67087\u65e5",tags:[{label:"\u5927\u6570\u636e\u5206\u6790",permalink:"/blog/tags/\u5927\u6570\u636e\u5206\u6790"},{label:"LLM",permalink:"/blog/tags/llm"},{label:"\u5927\u8bed\u8a00\u6a21\u578b",permalink:"/blog/tags/\u5927\u8bed\u8a00\u6a21\u578b"},{label:"AIGC",permalink:"/blog/tags/aigc"}],readingTime:10.26,hasTruncateMarker:!0,authors:[{name:"\u7a0b\u5e8f\u5458\u8001\u718a",title:"Pangu Framework maintainer",url:"https://xiongchun.pulanit.com",imageURL:"https://xiongchun.github.io/home/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{title:"(AIGC) \u6587\u5fc3\u4e00\u8a00 VS Bard VS ChatGPT",authors:["xiongchun"],tags:["\u5927\u6570\u636e\u5206\u6790","LLM","\u5927\u8bed\u8a00\u6a21\u578b","AIGC"],date:"2022-12-7",hide_table_of_contents:!1,slug:"llm-baidu-yiyan-google-bard-openai-chatgpt"},prevItem:{title:"(AIGC) Python \u548c\u5927\u6570\u636e\u5206\u6790\u3001\u4eba\u5de5\u667a\u80fd\u662f\u4ec0\u4e48\u5173\u7cfb",permalink:"/blog/aigc-python-bigdata-ai"},nextItem:{title:"\u57fa\u4e8e Caddy \u90e8\u7f72\u76d8\u53e4 Admin",permalink:"/blog/deploy-pangu-admin-by-caddy"}},i={authorsImageUrls:[void 0]},u=[{value:"\u5927\u8bed\u8a00\u6a21\u578b\u751f\u6210\u5185\u5bb9",id:"\u5927\u8bed\u8a00\u6a21\u578b\u751f\u6210\u5185\u5bb9",level:2},{value:"\u767e\u5ea6 \u6587\u5fc3\u4e00\u8a00",id:"\u767e\u5ea6-\u6587\u5fc3\u4e00\u8a00",level:3},{value:"\u6570\u636e\u91c7\u96c6\u548c\u5b58\u50a8\u6280\u672f",id:"\u6570\u636e\u91c7\u96c6\u548c\u5b58\u50a8\u6280\u672f",level:4},{value:"\u6570\u636e\u5904\u7406\u548c\u8ba1\u7b97\u6280\u672f",id:"\u6570\u636e\u5904\u7406\u548c\u8ba1\u7b97\u6280\u672f",level:4},{value:"\u6570\u636e\u7ba1\u7406\u548c\u5b58\u50a8\u6280\u672f",id:"\u6570\u636e\u7ba1\u7406\u548c\u5b58\u50a8\u6280\u672f",level:4},{value:"\u6570\u636e\u5206\u6790\u548c\u6316\u6398\u6280\u672f",id:"\u6570\u636e\u5206\u6790\u548c\u6316\u6398\u6280\u672f",level:4},{value:"\u6570\u636e\u53ef\u89c6\u5316\u6280\u672f",id:"\u6570\u636e\u53ef\u89c6\u5316\u6280\u672f",level:4},{value:"\u6570\u636e\u5b89\u5168\u548c\u9690\u79c1\u4fdd\u62a4\u6280\u672f",id:"\u6570\u636e\u5b89\u5168\u548c\u9690\u79c1\u4fdd\u62a4\u6280\u672f",level:4},{value:"\u6570\u636e\u96c6\u6210\u548c\u6574\u5408\u6280\u672f",id:"\u6570\u636e\u96c6\u6210\u548c\u6574\u5408\u6280\u672f",level:4},{value:"Google Bard",id:"google-bard",level:3},{value:"OpenAI ChatGPT 3.5",id:"openai-chatgpt-35",level:3}],k={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"AIGC \u7279\u522b\u6807\u6ce8"),": \u672c\u6587\u5185\u5bb9\u7531\u5927\u8bed\u8a00\u6a21\u578b\u81ea\u52a8\u751f\u6210\u6216\u4eba\u5de5\u6f14\u7ece\u3002")),(0,n.kt)("p",null,"\u5f53\u4e0b\u5927\u8bed\u8a00\u6a21\u578b\u5982\u706b\u5982\u837c\uff0c\u6211\u4e5f\u5f88\u597d\u5947\u3002\u6240\u4ee5\uff0c\u4eca\u5929\u6211\u4ee5\u300c\u5927\u6570\u636e\u5206\u6790\u751f\u6001\u6709\u54ea\u4e9b\u6280\u672f\u6808\u300d\u4e3a\u9898\uff0c\u7b80\u5355\u4f53\u9a8c\u4e86\u4e00\u4e0b\u5982\u4e0b 3 \u4e2a\u5927\u8bed\u8a00\u6a21\u578b\u3002\u5177\u4f53\u6548\u679c\u5927\u5bb6\u81ea\u5df1\u770b\u5427\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://yiyan.baidu.com"},"\u767e\u5ea6 \u6587\u5fc3\u4e00\u8a00")," (\u4e2d\u56fd\u4e92\u8054\u7f51\u8bbf\u95ee)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://bard.google.com"},"Google Bard")," (\u56fd\u9645\u4e92\u8054\u7f51\u8bbf\u95ee)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://chat.openai.com"},"OpenAI ChatGPT 3.5")," (\u56fd\u9645\u4e92\u8054\u7f51\u8bbf\u95ee)")),(0,n.kt)("p",null,"\u6b64\u573a\u666f\u7b54\u9898\u6548\u679c\uff0c\u4e2a\u4eba\u611f\u89c9 Google Bard \u4f18\u4e8e OpenAI ChatGPT 3.5 \u4f18\u4e8e \u767e\u5ea6\u6587\u5fc3\u4e00\u8a00\u3002"),(0,n.kt)("h2",{id:"\u5927\u8bed\u8a00\u6a21\u578b\u751f\u6210\u5185\u5bb9"},"\u5927\u8bed\u8a00\u6a21\u578b\u751f\u6210\u5185\u5bb9"),(0,n.kt)("h3",{id:"\u767e\u5ea6-\u6587\u5fc3\u4e00\u8a00"},"\u767e\u5ea6 \u6587\u5fc3\u4e00\u8a00"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6-\u767e\u5ea6 \u6587\u5fc3\u4e00\u8a00",src:a(5218).Z,width:"2492",height:"1200"})),(0,n.kt)("p",null,"\u5927\u6570\u636e\u5206\u6790\u751f\u6001\u6db5\u76d6\u4e86\u8bb8\u591a\u6280\u672f\uff0c\u8fd9\u4e9b\u6280\u672f\u534f\u540c\u5de5\u4f5c\uff0c\u4ece\u6570\u636e\u91c7\u96c6\u3001\u5b58\u50a8\u3001\u5904\u7406\u3001\u5206\u6790\u5230\u5e94\u7528\uff0c\u5e2e\u52a9\u4f01\u4e1a\u66f4\u597d\u5730\u7406\u89e3\u548c\u5229\u7528\u6570\u636e\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5173\u952e\u7684\u5927\u6570\u636e\u5206\u6790\u751f\u6001\u6280\u672f."),(0,n.kt)("h4",{id:"\u6570\u636e\u91c7\u96c6\u548c\u5b58\u50a8\u6280\u672f"},"\u6570\u636e\u91c7\u96c6\u548c\u5b58\u50a8\u6280\u672f"),(0,n.kt)("p",null,"\u5927\u6570\u636e\u7684\u591a\u6837\u6027\u8981\u6c42\u4f7f\u7528\u4e0d\u540c\u7684\u6570\u636e\u91c7\u96c6\u5de5\u5177\u548c\u6280\u672f\u3002\u6570\u636e\u91c7\u96c6\u540e\uff0c\u9700\u8981\u6709\u6548\u5730\u5b58\u50a8\u548c\u7ba1\u7406\u8fd9\u4e9b\u6570\u636e\uff0c\u4ee5\u4fbf\u540e\u7eed\u7684\u5904\u7406\u548c\u5206\u6790\u3002\u5e38\u89c1\u7684\u6570\u636e\u5b58\u50a8\u6280\u672f\u5305\u62ec\u5173\u7cfb\u578b\u6570\u636e\u5e93\u3001NoSQL\u6570\u636e\u5e93\u548c\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u7b49\u3002  "),(0,n.kt)("h4",{id:"\u6570\u636e\u5904\u7406\u548c\u8ba1\u7b97\u6280\u672f"},"\u6570\u636e\u5904\u7406\u548c\u8ba1\u7b97\u6280\u672f"),(0,n.kt)("p",null,"\u5904\u7406\u5927\u89c4\u6a21\u6570\u636e\u9700\u8981\u5f3a\u5927\u7684\u8ba1\u7b97\u80fd\u529b\u3002\u5e38\u89c1\u7684\u6280\u672f\u5305\u62ec\u5206\u5e03\u5f0f\u8ba1\u7b97\u3001\u5e76\u884c\u5904\u7406\u3001\u56fe\u8ba1\u7b97\u548c\u6d41\u5f0f\u5904\u7406\u7b49\u3002\u8fd9\u4e9b\u6280\u672f\u80fd\u591f\u6709\u6548\u5730\u5904\u7406\u5927\u89c4\u6a21\u6570\u636e\uff0c\u63d0\u9ad8\u8ba1\u7b97\u6548\u7387\u548c\u51c6\u786e\u6027\u3002  "),(0,n.kt)("h4",{id:"\u6570\u636e\u7ba1\u7406\u548c\u5b58\u50a8\u6280\u672f"},"\u6570\u636e\u7ba1\u7406\u548c\u5b58\u50a8\u6280\u672f"),(0,n.kt)("p",null,"\u5927\u6570\u636e\u7684\u5feb\u901f\u589e\u957f\u8981\u6c42\u4f7f\u7528\u9ad8\u6548\u7684\u6570\u636e\u7ba1\u7406\u548c\u5b58\u50a8\u6280\u672f\u3002\u8fd9\u4e9b\u6280\u672f\u5305\u62ec\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u3001\u5217\u5f0f\u6570\u636e\u5e93\u3001NoSQL\u6570\u636e\u5e93\u7b49\uff0c\u80fd\u591f\u6709\u6548\u5730\u7ba1\u7406\u548c\u5b58\u50a8\u5927\u89c4\u6a21\u6570\u636e\u3002 "),(0,n.kt)("h4",{id:"\u6570\u636e\u5206\u6790\u548c\u6316\u6398\u6280\u672f"},"\u6570\u636e\u5206\u6790\u548c\u6316\u6398\u6280\u672f"),(0,n.kt)("p",null,"\u5927\u6570\u636e\u5206\u6790\u7684\u6838\u5fc3\u662f\u4f7f\u7528\u5404\u79cd\u6280\u672f\u548c\u5de5\u5177\u4ece\u5927\u89c4\u6a21\u6570\u636e\u4e2d\u63d0\u53d6\u6709\u4ef7\u503c\u7684\u4fe1\u606f\u548c\u77e5\u8bc6\u3002\u5e38\u89c1\u7684\u6280\u672f\u5305\u62ec\u7edf\u8ba1\u5206\u6790\u3001\u673a\u5668\u5b66\u4e60\u3001\u6570\u636e\u6316\u6398\u548c\u81ea\u7136\u8bed\u8a00\u5904\u7406\u7b49\u3002\u8fd9\u4e9b\u6280\u672f\u80fd\u591f\u53d1\u73b0\u6570\u636e\u4e2d\u7684\u6a21\u5f0f\u3001\u8d8b\u52bf\u548c\u5173\u8054\uff0c\u4e3a\u4f01\u4e1a\u63d0\u4f9b\u6709\u4ef7\u503c\u7684\u6d1e\u5bdf\u3002"),(0,n.kt)("h4",{id:"\u6570\u636e\u53ef\u89c6\u5316\u6280\u672f"},"\u6570\u636e\u53ef\u89c6\u5316\u6280\u672f"),(0,n.kt)("p",null,"\u5c06\u5206\u6790\u7ed3\u679c\u4ee5\u76f4\u89c2\u3001\u6613\u61c2\u7684\u65b9\u5f0f\u5448\u73b0\u7ed9\u975e\u6280\u672f\u4eba\u5458\u662f\u5927\u6570\u636e\u5206\u6790\u7684\u91cd\u8981\u73af\u8282\u3002\u5e38\u89c1\u7684\u6570\u636e\u53ef\u89c6\u5316\u6280\u672f\u5305\u62ec\u56fe\u8868\u3001\u4eea\u8868\u677f\u3001\u62a5\u544a\u7b49\uff0c\u8fd9\u4e9b\u6280\u672f\u80fd\u591f\u6709\u6548\u5730\u4f20\u8fbe\u6570\u636e\u4e2d\u7684\u4fe1\u606f\u548c\u6d1e\u5bdf\u3002  "),(0,n.kt)("h4",{id:"\u6570\u636e\u5b89\u5168\u548c\u9690\u79c1\u4fdd\u62a4\u6280\u672f"},"\u6570\u636e\u5b89\u5168\u548c\u9690\u79c1\u4fdd\u62a4\u6280\u672f"),(0,n.kt)("p",null,"\u968f\u7740\u5927\u6570\u636e\u7684\u5e7f\u6cdb\u5e94\u7528\uff0c\u6570\u636e\u5b89\u5168\u548c\u9690\u79c1\u4fdd\u62a4\u6210\u4e3a\u8d8a\u6765\u8d8a\u91cd\u8981\u7684\u8bae\u9898\u3002\u8fd9\u4e9b\u6280\u672f\u5305\u62ec\u6570\u636e\u52a0\u5bc6\u3001\u8bbf\u95ee\u63a7\u5236\u3001\u8eab\u4efd\u8ba4\u8bc1\u7b49\uff0c\u80fd\u591f\u4fdd\u62a4\u6570\u636e\u7684\u673a\u5bc6\u6027\u548c\u5b8c\u6574\u6027\uff0c\u9632\u6b62\u6570\u636e\u6cc4\u9732\u548c\u672a\u7ecf\u6388\u6743\u7684\u8bbf\u95ee\u3002  "),(0,n.kt)("h4",{id:"\u6570\u636e\u96c6\u6210\u548c\u6574\u5408\u6280\u672f"},"\u6570\u636e\u96c6\u6210\u548c\u6574\u5408\u6280\u672f"),(0,n.kt)("p",null,"\u5927\u6570\u636e\u7684\u591a\u6837\u6027\u548c\u590d\u6742\u6027\u8981\u6c42\u5c06\u6765\u81ea\u4e0d\u540c\u6765\u6e90\u548c\u5e73\u53f0\u7684\u6570\u636e\u96c6\u6210\u548c\u6574\u5408\u5728\u4e00\u8d77\u3002\u8fd9\u4e9b\u6280\u672f\u5305\u62ec\u6570\u636e\u62bd\u53d6\u3001\u8f6c\u6362\u3001\u52a0\u8f7d\uff08ETL\uff09\u3001\u6570\u636e\u8054\u90a6\u7b49\uff0c\u80fd\u591f\u5c06\u5206\u6563\u7684\u6570\u636e\u6574\u5408\u5230\u4e00\u4e2a\u7edf\u4e00\u7684\u6570\u636e\u4ed3\u5e93\u6216\u6570\u636e\u6e56\u4e2d\uff0c\u65b9\u4fbf\u540e\u7eed\u7684\u5206\u6790\u548c\u5904\u7406\u3002  "),(0,n.kt)("p",null,"\u7efc\u4e0a\u6240\u8ff0\uff0c\u5927\u6570\u636e\u5206\u6790\u751f\u6001\u6db5\u76d6\u4e86\u591a\u4e2a\u9886\u57df\u548c\u6280\u672f\uff0c\u8fd9\u4e9b\u6280\u672f\u534f\u540c\u5de5\u4f5c\uff0c\u5e2e\u52a9\u4f01\u4e1a\u66f4\u597d\u5730\u5229\u7528\u6570\u636e\u3002\u4e86\u89e3\u548c\u638c\u63e1\u8fd9\u4e9b\u6280\u672f\u662f\u8fdb\u884c\u5927\u6570\u636e\u5206\u6790\u548c\u5e94\u7528\u7684\u5173\u952e\u3002"),(0,n.kt)("h3",{id:"google-bard"},"Google Bard"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6-Google Bard",src:a(7015).Z,width:"2810",height:"1494"})),(0,n.kt)("p",null,"\u5927\u6570\u636e\u5206\u6790\u751f\u6001\u662f\u4e00\u4e2a\u5e9e\u5927\u7684\u4f53\u7cfb\uff0c\u6db5\u76d6\u4e86\u6570\u636e\u91c7\u96c6\u3001\u6570\u636e\u5b58\u50a8\u3001\u6570\u636e\u5206\u6790\u3001\u6570\u636e\u53ef\u89c6\u5316\u7b49\u591a\u4e2a\u65b9\u9762\u3002\u5176\u4e2d\uff0c\u6570\u636e\u91c7\u96c6\u3001\u6570\u636e\u5b58\u50a8\u3001\u6570\u636e\u5206\u6790\u662f\u4e09\u5927\u6838\u5fc3\u6280\u672f\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u91c7\u96c6")," \u662f\u6307\u5c06\u6765\u81ea\u4e0d\u540c\u6765\u6e90\u7684\u6570\u636e\u6536\u96c6\u5230\u4e00\u8d77\u7684\u8fc7\u7a0b\u3002\u6570\u636e\u91c7\u96c6\u6280\u672f\u53ef\u4ee5\u5206\u4e3a\u4e24\u7c7b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u6570\u636e\u91c7\u96c6\uff1a\u5c06\u6570\u636e\u5b9e\u65f6\u5730\u4ece\u6e90\u5934\u6536\u96c6\u5230\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u79bb\u7ebf\u6570\u636e\u91c7\u96c6\uff1a\u5c06\u6570\u636e\u4ece\u6e90\u5934\u6536\u96c6\u5230\u540e\uff0c\u5b58\u50a8\u5230\u672c\u5730\u6216\u4e91\u7aef\u3002")),(0,n.kt)("p",null,"\u5e38\u7528\u7684\u5927\u6570\u636e\u91c7\u96c6\u6280\u672f\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u722c\u866b\uff1a\u7528\u4e8e\u6293\u53d6\u7f51\u9875\u4e0a\u7684\u6587\u672c\u3001\u56fe\u7247\u3001\u89c6\u9891\u7b49\u6570\u636e\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u5206\u6790\uff1a\u7528\u4e8e\u5206\u6790\u7cfb\u7edf\u65e5\u5fd7\u3001\u7f51\u7edc\u65e5\u5fd7\u7b49\u6570\u636e\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f20\u611f\u5668\u6570\u636e\u91c7\u96c6\uff1a\u7528\u4e8e\u6536\u96c6\u4f20\u611f\u5668\u4ea7\u751f\u7684\u6570\u636e\u3002")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u5b58\u50a8")," \u662f\u6307\u5c06\u6570\u636e\u4ee5\u4fbf\u4e8e\u7ba1\u7406\u548c\u5206\u6790\u7684\u65b9\u5f0f\u5b58\u50a8\u8d77\u6765\u7684\u8fc7\u7a0b\u3002\u6570\u636e\u5b58\u50a8\u6280\u672f\u53ef\u4ee5\u5206\u4e3a\u4e24\u7c7b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7ed3\u6784\u5316\u6570\u636e\u5b58\u50a8\uff1a\u7528\u4e8e\u5b58\u50a8\u7ed3\u6784\u5316\u6570\u636e\uff0c\u5982\u5173\u7cfb\u6570\u636e\u5e93\u3001NoSQL \u6570\u636e\u5e93\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u975e\u7ed3\u6784\u5316\u6570\u636e\u5b58\u50a8\uff1a\u7528\u4e8e\u5b58\u50a8\u975e\u7ed3\u6784\u5316\u6570\u636e\uff0c\u5982\u6587\u672c\u3001\u56fe\u7247\u3001\u89c6\u9891\u7b49\u3002")),(0,n.kt)("p",null,"\u5e38\u7528\u7684\u5927\u6570\u636e\u5b58\u50a8\u6280\u672f\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5173\u7cfb\u6570\u636e\u5e93\uff1a\u7528\u4e8e\u5b58\u50a8\u7ed3\u6784\u5316\u6570\u636e\uff0c\u5982\u4e1a\u52a1\u6570\u636e\u3001\u7528\u6237\u6570\u636e\u7b49\u3002  "),(0,n.kt)("li",{parentName:"ul"},"NoSQL \u6570\u636e\u5e93\uff1a\u7528\u4e8e\u5b58\u50a8\u975e\u7ed3\u6784\u5316\u6570\u636e\uff0c\u5982\u65e5\u5fd7\u6570\u636e\u3001\u56fe\u7247\u6570\u636e\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\uff1a\u7528\u4e8e\u5b58\u50a8\u5927\u89c4\u6a21\u7684\u6587\u4ef6\u6570\u636e\uff0c\u5982\u56fe\u50cf\u3001\u89c6\u9891\u7b49\u3002")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u5206\u6790")," \u662f\u6307\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u6790\uff0c\u4ee5\u53d1\u73b0\u5176\u4e2d\u7684\u89c4\u5f8b\u548c\u8d8b\u52bf\u7684\u8fc7\u7a0b\u3002\u6570\u636e\u5206\u6790\u6280\u672f\u53ef\u4ee5\u5206\u4e3a\u4e24\u7c7b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f20\u7edf\u6570\u636e\u5206\u6790\uff1a\u4f7f\u7528\u4f20\u7edf\u7684\u7edf\u8ba1\u65b9\u6cd5\u8fdb\u884c\u6570\u636e\u5206\u6790\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u673a\u5668\u5b66\u4e60\uff1a\u4f7f\u7528\u673a\u5668\u5b66\u4e60\u7b97\u6cd5\u8fdb\u884c\u6570\u636e\u5206\u6790\u3002")),(0,n.kt)("p",null,"\u5e38\u7528\u7684\u5927\u6570\u636e\u5206\u6790\u6280\u672f\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7edf\u8ba1\u5206\u6790\uff1a\u7528\u4e8e\u5bf9\u6570\u636e\u8fdb\u884c\u7edf\u8ba1\u5206\u6790\uff0c\u5982\u5e73\u5747\u503c\u3001\u65b9\u5dee\u3001\u6807\u51c6\u5dee\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u673a\u5668\u5b66\u4e60\uff1a\u7528\u4e8e\u5bf9\u6570\u636e\u8fdb\u884c\u673a\u5668\u5b66\u4e60\u5206\u6790\uff0c\u5982\u5206\u7c7b\u3001\u56de\u5f52\u3001\u805a\u7c7b\u7b49\u3002")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u53ef\u89c6\u5316")," \u662f\u6307\u5c06\u6570\u636e\u4ee5\u56fe\u8868\u3001\u56fe\u5f62\u7b49\u65b9\u5f0f\u5448\u73b0\u7684\u8fc7\u7a0b\u3002\u6570\u636e\u53ef\u89c6\u5316\u53ef\u4ee5\u5e2e\u52a9\u4eba\u4eec\u66f4\u76f4\u89c2\u5730\u7406\u89e3\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u5e38\u7528\u7684\u6570\u636e\u53ef\u89c6\u5316\u6280\u672f\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u56fe\u8868\uff1a\u7528\u4e8e\u5c55\u793a\u6570\u636e\u7684\u8d8b\u52bf\u548c\u5206\u5e03\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u56fe\u5f62\uff1a\u7528\u4e8e\u5c55\u793a\u6570\u636e\u4e4b\u95f4\u7684\u5173\u7cfb\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5730\u56fe\uff1a\u7528\u4e8e\u5c55\u793a\u6570\u636e\u7684\u5730\u7406\u5206\u5e03\u3002")),(0,n.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u4e09\u5927\u6838\u5fc3\u6280\u672f\u5916\uff0c\u5927\u6570\u636e\u5206\u6790\u751f\u6001\u8fd8\u5305\u62ec\u4ee5\u4e0b\u6280\u672f\uff1a"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u7ba1\u7406"),"\uff1a\u7528\u4e8e\u7ba1\u7406\u6570\u636e\u7684\u751f\u547d\u5468\u671f\uff0c\u5982\u6570\u636e\u91c7\u96c6\u3001\u5b58\u50a8\u3001\u5206\u6790\u3001\u5e94\u7528\u7b49\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u6cbb\u7406"),"\uff1a\u7528\u4e8e\u786e\u4fdd\u6570\u636e\u7684\u8d28\u91cf\u548c\u5b89\u5168\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u5b89\u5168"),"\uff1a\u7528\u4e8e\u4fdd\u62a4\u6570\u636e\u514d\u53d7\u653b\u51fb\u3002  "),(0,n.kt)("p",null,"\u5927\u6570\u636e\u5206\u6790\u751f\u6001\u662f\u4e00\u4e2a\u4e0d\u65ad\u53d1\u5c55\u7684\u4f53\u7cfb\uff0c\u968f\u7740\u6280\u672f\u7684\u4e0d\u65ad\u8fdb\u6b65\uff0c\u65b0\u7684\u6280\u672f\u4e5f\u5c06\u4e0d\u65ad\u6d8c\u73b0\u3002"),(0,n.kt)("h3",{id:"openai-chatgpt-35"},"OpenAI ChatGPT 3.5"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6-OpenAI ChatGPT 3.5",src:a(947).Z,width:"2468",height:"1510"})),(0,n.kt)("p",null,"\u5927\u6570\u636e\u5206\u6790\u751f\u6001\u7cfb\u7edf\u5305\u62ec\u591a\u79cd\u6280\u672f\u548c\u5de5\u5177\uff0c\u7528\u4e8e\u6536\u96c6\u3001\u5b58\u50a8\u3001\u5904\u7406\u548c\u5206\u6790\u5927\u89c4\u6a21\u6570\u636e\u3002\u4ee5\u4e0b\u662f\u5176\u4e2d\u4e00\u4e9b\u6838\u5fc3\u6280\u672f\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5206\u5e03\u5f0f\u5b58\u50a8\u7cfb\u7edf"),"\uff1a\u7528\u4e8e\u5b58\u50a8\u6d77\u91cf\u6570\u636e\u7684\u7cfb\u7edf\uff0c\u5982Hadoop\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\uff08HDFS\uff09\u3001Amazon S3\u3001Google Cloud Storage \u7b49\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5206\u5e03\u5f0f\u8ba1\u7b97\u6846\u67b6"),"\uff1a\u7528\u4e8e\u5728\u5927\u89c4\u6a21\u6570\u636e\u96c6\u4e0a\u6267\u884c\u8ba1\u7b97\u4efb\u52a1\u7684\u7cfb\u7edf\uff0c\u5982 Apache Hadoop\uff08MapReduce\uff09\u3001Apache Spark \u7b49\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u5904\u7406\u548c\u6e05\u6d17\u5de5\u5177"),"\uff1a\u7528\u4e8e\u6e05\u6d17\u3001\u8f6c\u6362\u548c\u51c6\u5907\u6570\u636e\u7684\u5de5\u5177\uff0c\u5982Apache NiFi\u3001Apache Kafka\u3001Apache Flink \u7b49\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u4ed3\u5e93"),"\uff1a\u7528\u4e8e\u96c6\u6210\u548c\u7ba1\u7406\u6570\u636e\u7684\u5b58\u50a8\u7cfb\u7edf\uff0c\u5982 Apache Hive\u3001Amazon Redshift\u3001Google BigQuery \u7b49\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"NoSQL \u6570\u636e\u5e93"),"\uff1a\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0c\u9002\u7528\u4e8e\u5927\u89c4\u6a21\u3001\u9ad8\u6027\u80fd\u7684\u6570\u636e\u5b58\u50a8\u548c\u68c0\u7d22\uff0c\u5982 MongoDB\u3001Cassandra\u3001Redis \u7b49\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u53ef\u89c6\u5316\u5de5\u5177"),"\uff1a\u5c06\u6570\u636e\u8f6c\u6362\u6210\u53ef\u89c6\u5316\u56fe\u8868\u548c\u62a5\u8868\uff0c\u5982 Tableau\u3001Power BI\u3001Matplotlib \u7b49\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u673a\u5668\u5b66\u4e60\u548c\u4eba\u5de5\u667a\u80fd"),"\uff1a\u7528\u4e8e\u5728\u5927\u6570\u636e\u96c6\u4e0a\u8fdb\u884c\u6a21\u578b\u8bad\u7ec3\u548c\u9884\u6d4b\u7684\u6280\u672f\uff0c\u5982 TensorFlow\u3001PyTorch\u3001Scikit-learn \u7b49\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u6d41\u6570\u636e\u5904\u7406"),"\uff1a\u5904\u7406\u5b9e\u65f6\u6570\u636e\u6d41\u7684\u6280\u672f\uff0c\u5982 Apache Kafka\u3001Apache Flink\u3001Spark Streaming \u7b49\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5bb9\u5668\u5316\u548c\u7f16\u6392\u6280\u672f"),"\uff1a\u7528\u4e8e\u6784\u5efa\u3001\u90e8\u7f72\u548c\u7ba1\u7406\u5927\u6570\u636e\u5e94\u7528\u7a0b\u5e8f\u7684\u5bb9\u5668\u5316\u73af\u5883\uff0c\u5982 Docker\u3001Kubernetes \u7b49\u3002"))),(0,n.kt)("p",null,"\u8fd9\u4e9b\u6280\u672f\u5171\u540c\u6784\u6210\u4e86\u5927\u6570\u636e\u5206\u6790\u751f\u6001\u7cfb\u7edf\uff0c\u4e3a\u4f01\u4e1a\u548c\u7ec4\u7ec7\u63d0\u4f9b\u4e86\u5904\u7406\u548c\u5206\u6790\u5927\u89c4\u6a21\u6570\u636e\u7684\u80fd\u529b\uff0c\u5e2e\u52a9\u4ed6\u4eec\u4ece\u6570\u636e\u4e2d\u83b7\u5f97\u6d1e\u89c1\u548c\u4ef7\u503c\u3002"))}m.isMDXComponent=!0},5218:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/56-llm-7a53bd9432e28a806cef5c7e510029cf.png"},7015:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/57-llm-97aca4e107567ae27fcfb6f89757e595.png"},947:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/58-llm-993b7dadc6843c8b16156ff5cbaa5546.png"}}]);