"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[8393],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),m=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=m(r),c=n,s=k["".concat(o,".").concat(c)]||k[c]||g[c]||l;return r?a.createElement(s,i(i({ref:t},u),{},{components:r})):a.createElement(s,i({ref:t},u))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:n,i[1]=p;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9746:(e,t,r)=>{r.r(t),r.d(t,{Highlight:()=>u,assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const l={title:"\u76d8\u53e4\u6570\u5b57\u5316\u8d4b\u80fd\u5f00\u53d1\u6846\u67b6\u7b80\u4ecb",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"],date:new Date("2021-12-30T00:00:00.000Z"),hide_table_of_contents:!1,slug:"pangu-dev-framework-intro"},i=void 0,p={permalink:"/blog/pangu-dev-framework-intro",source:"@site/blog/\u76d8\u53e4\u6570\u5b57\u5316\u8d4b\u80fd\u5f00\u53d1\u6846\u67b6\u7b80\u4ecb.md",title:"\u76d8\u53e4\u6570\u5b57\u5316\u8d4b\u80fd\u5f00\u53d1\u6846\u67b6\u7b80\u4ecb",description:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 \u662f\u4e00\u5957\u8f7b\u91cf\u7a33\u5065\u7684\u5de5\u4e1a\u7ea7\u524d\u3001\u4e2d\u3001\u540e\u53f0\u4e09\u7ef4\u591a\u7aef\u884c\u4e1a\u6570\u5b57\u5316\u8d4b\u80fd\u5f00\u53d1\u57fa\u5ea7\u3002\u57fa\u4e8e Apache \u534f\u8bae\u514d\u8d39\u5f00\u6e90\u53d1\u5e03\uff0c\u5e0c\u671b\u4e0e\u5f00\u6e90\u793e\u533a\u4e00\u8d77 \u5206\u4eab\u7ecf\u9a8c\u4f20\u9012\u4ef7\u503c\uff0c\u5171\u5efa\u5171\u4eab\u5f00\u6e90\u751f\u6001\u3002",date:"2021-12-30T00:00:00.000Z",formattedDate:"2021\u5e7412\u670830\u65e5",tags:[{label:"\u670d\u52a1\u7aef\u5f00\u53d1",permalink:"/blog/tags/\u670d\u52a1\u7aef\u5f00\u53d1"},{label:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6",permalink:"/blog/tags/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"}],readingTime:4.5,hasTruncateMarker:!0,authors:[{name:"\u7a0b\u5e8f\u5458\u8001\u718a",title:"Pangu Framework maintainer",url:"https://xiongchun.pulanit.com",imageURL:"https://xiongchun.github.io/home/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{title:"\u76d8\u53e4\u6570\u5b57\u5316\u8d4b\u80fd\u5f00\u53d1\u6846\u67b6\u7b80\u4ecb",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"],date:"2021-12-30T00:00:00.000Z",hide_table_of_contents:!1,slug:"pangu-dev-framework-intro"},prevItem:{title:"TLog \u52a9\u529b\u76d8\u53e4\u6846\u67b6\u5b9e\u73b0\u5fae\u670d\u52a1\u94fe\u8def\u65e5\u5fd7\u8ffd\u8e2a",permalink:"/blog/tlog"},nextItem:{title:"\u5982\u4f55\u8fdb\u884c\u76d8\u53e4\u5fae\u670d\u52a1\u7f51\u5173\u5f00\u53d1",permalink:"/blog/deploy-pangu-dev-framework-create-microservice-as-webapi"}},o={authorsImageUrls:[void 0]},m=[{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"\u8bbe\u8ba1\u539f\u5219",id:"\u8bbe\u8ba1\u539f\u5219",level:2},{value:"\u6838\u5fc3\u4ef7\u503c\u94fe",id:"\u6838\u5fc3\u4ef7\u503c\u94fe",level:2},{value:"\u751f\u6001\u67b6\u6784\u793a\u610f\u56fe",id:"\u751f\u6001\u67b6\u6784\u793a\u610f\u56fe",level:2},{value:"\u4ed3\u5e93\u6a21\u5757\u5217\u8868",id:"\u4ed3\u5e93\u6a21\u5757\u5217\u8868",level:2},{value:"\u91cd\u8981\u7684\u4e8b\u60c5\u8bf4\u4e09\u904d",id:"\u91cd\u8981\u7684\u4e8b\u60c5\u8bf4\u4e09\u904d",level:2}],u=e=>{let{children:t,color:r}=e;return(0,n.kt)("span",{style:{backgroundColor:r,borderRadius:"3px",color:"#fff",padding:"0.1rem",margin:"0.2rem"}},t)},k={toc:m,Highlight:u};function g(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6")," \u662f\u4e00\u5957\u8f7b\u91cf\u7a33\u5065\u7684\u5de5\u4e1a\u7ea7\u524d\u3001\u4e2d\u3001\u540e\u53f0\u4e09\u7ef4\u591a\u7aef\u884c\u4e1a\u6570\u5b57\u5316\u8d4b\u80fd\u5f00\u53d1\u57fa\u5ea7\u3002\u57fa\u4e8e ",(0,n.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache")," \u534f\u8bae",(0,n.kt)(u,{color:"#25c2a0",mdxType:"Highlight"},"\u514d\u8d39\u5f00\u6e90"),"\u53d1\u5e03\uff0c\u5e0c\u671b\u4e0e\u5f00\u6e90\u793e\u533a\u4e00\u8d77 ",(0,n.kt)("strong",{parentName:"p"},"\u5206\u4eab\u7ecf\u9a8c\u4f20\u9012\u4ef7\u503c\uff0c\u5171\u5efa\u5171\u4eab\u5f00\u6e90\u751f\u6001"),"\u3002"),(0,n.kt)("p",null,"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u7531\u5982\u4e0b\u4e09\u4e2a\u751f\u6001\u5b50\u9879\u76ee\u7ec4\u6210\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/intro"},(0,n.kt)("strong",{parentName:"a"},"\u76d8\u53e4\u5fae\u670d\u52a1\u5f00\u53d1\u6846\u67b6")),(0,n.kt)("br",{parentName:"p"}),"\n","\u4e00\u5957\u6784\u5efa\u4ee5\u300c\u670d\u52a1\u300d\u4e3a\u4e2d\u5fc3\u7684\u73b0\u4ee3\u5e94\u7528\u67b6\u6784\uff0c\u7528\u6237\u53ef\u4ee5\u5f00\u53d1\u3001\u7ba1\u7406\u81ea\u5df1\u7684\u5fae\u670d\u52a1\u5e94\u7528\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/admin/intro"},(0,n.kt)("strong",{parentName:"a"},"\u76d8\u53e4\u4e2d\u540e\u53f0\u4e1a\u52a1\u7cfb\u7edf\u5f00\u53d1\u811a\u624b\u67b6")),(0,n.kt)("br",{parentName:"p"}),"\n","\u4e00\u5957\u9884\u7f6e\u4e86\u6743\u9650\u7cfb\u7edf\u7684\u4e2d\u540e\u53f0\u7edf\u4e00\u89e3\u51b3\u65b9\u6848\uff0c\u7528\u6237\u53ef\u4ee5\u57fa\u4e8e\u6b64\u5feb\u901f\u642d\u5efa\u4e2d\u540e\u53f0\u4e1a\u52a1\u7cfb\u7edf\u524d\u540e\u7aef\u4e8c\u6b21\u5f00\u53d1\u811a\u624b\u67b6\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/app/intro"},(0,n.kt)("strong",{parentName:"a"},"\u76d8\u53e4\u79fb\u52a8\u7aef\u591a\u5e73\u53f0\u5f00\u53d1\u811a\u624b\u67b6")),(0,n.kt)("br",{parentName:"p"}),"\n","\u4e00\u5957\u79fb\u52a8\u7aef\u591a\u5e73\u53f0\u5feb\u901f\u5f00\u53d1\u811a\u624b\u67b6\uff0c\u7528\u6237\u53ef\u4ee5\u5feb\u901f\u5f00\u53d1 Android / IOS \u5e94\u7528\u3001\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3001H5 \u5e94\u7528\u3002"))),(0,n.kt)("h2",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,n.kt)("p",null,"\u57fa\u4e8e\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u7684\u524d\u3001\u4e2d\u3001\u540e\u53f0\u4e09\u7ef4\u591a\u7aef\u884c\u4e1a\u6570\u5b57\u5316\u8d4b\u80fd\u80fd\u529b\uff0c\u7528\u6237\u65e2\u80fd\u5feb\u901f\u6784\u5efa\u9762\u5411\u4e92\u8054\u7f51\u7684\u7535\u5546\u3001\u91d1\u878d\u3001\u4e91\u7aef SaaS \u7b49\u5927\u5e76\u53d1\u9ad8\u53ef\u7528\u53ef\u6269\u5c55\u7684\u4e92\u8054\u7f51\u5e94\u7528\u573a\u666f\u670d\u52a1\uff0c\u540c\u65f6\u4e5f\u80fd\u6ee1\u8db3\u8bf8\u5982 ERP \u3001CRM \u7b49\u5404\u79cd\u4f01\u4e1a\u6570\u5b57\u5316\u548c\u5404\u7ea7\u7535\u5b50\u653f\u52a1\u7cfb\u7edf\u7684\u4e2d\u5c0f\u89c4\u6a21\u4e1a\u52a1\u5f00\u53d1\u9700\u6c42\u3002"),(0,n.kt)("h2",{id:"\u8bbe\u8ba1\u539f\u5219"},"\u8bbe\u8ba1\u539f\u5219"),(0,n.kt)("p",null,"\u5728\u7c7b\u8bbe\u8ba1\u3001\u6a21\u5757\u7ed3\u6784\u5212\u5206\u3001\u6280\u672f\u7ec4\u4ef6\u9009\u578b\u3001\u6846\u67b6\u4f53\u7cfb\u67b6\u6784\u8bbe\u8ba1\u65f6\u4f1a\u4f18\u5148\u9075\u5faa\u7684\u4e00\u4e9b\u8bbe\u8ba1\u8303\u5f0f\u548c\u6307\u5bfc\u539f\u5219\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6781\u7b80\u539f\u5219"),(0,n.kt)("br",{parentName:"li"}),"\u5927\u9053\u81f3\u7b80\uff0c\u7b80\u5355\u4ee3\u8868\u597d\u7528\u3001\u7a33\u5b9a\u3001\u6613\u534f\u4f5c\u3002\u575a\u6301\u300cKeep it Simple & Stupid\u300d\u8bbe\u8ba1\u7406\u5ff5\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u670d\u52a1\u4f18\u5148\u539f\u5219"),(0,n.kt)("br",{parentName:"li"}),"\u300c\u670d\u52a1\u300d\u662f\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u7684\u4e00\u7b49\u516c\u6c11\uff0c\u65e8\u5728\u5fae\u670d\u52a1\u548c\u4e91\u539f\u751f\u8303\u5f0f\u57fa\u7840\u4e0a\u6784\u5efa\u300c\u4ee5\u670d\u52a1\u4e3a\u4e2d\u5fc3\u300d\u7684\u73b0\u4ee3\u5e94\u7528\u67b6\u6784\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6700\u4f73\u5b9e\u8df5\u539f\u5219"),(0,n.kt)("br",{parentName:"li"}),"\u901a\u8fc7\u5927\u91cf\u7684\u751f\u4ea7\u5b9e\u4f8b\u68c0\u9a8c\uff0c\u6c89\u6dc0\u590d\u7528\u6700\u4f73\u5b9e\u8df5\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u900f\u660e\u539f\u5219"),(0,n.kt)("br",{parentName:"li"}),"\u4e0d\u505a\u65e0\u610f\u4e49\u3001\u6545\u5f04\u7384\u865a\u7684\u5c01\u88c5\uff1b\u575a\u6301\u7ec4\u5408\u4f18\u4e8e\u7ee7\u627f\uff0c\u675c\u7edd\u9ed1\u76d2\u5b50\uff1b\u8df5\u884c\u300cLess is More\u300d\u8bbe\u8ba1\u7406\u5ff5\u3002")),(0,n.kt)("h2",{id:"\u6838\u5fc3\u4ef7\u503c\u94fe"},"\u6838\u5fc3\u4ef7\u503c\u94fe"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u521d\u7ea7\u7a0b\u5e8f\u5458"),(0,n.kt)("br",{parentName:"li"}),"\u76d8\u53e4\u52a9\u4f60\u6210\u957f\u4e3a\u72ec\u6321\u4e00\u9762\u7684\u5168\u6808\u5f00\u53d1\u653b\u57ce\u72ee\uff0c\u6210\u4e3a\u56e2\u961f\u91cc\u6700\u9753\u7684\u90a3\u4e2a\u4ed4\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4e2d\u3001\u9ad8\u7ea7\u7a0b\u5e8f\u5458"),(0,n.kt)("br",{parentName:"li"}),"\u76d8\u53e4\u52a9\u4f60\u6210\u957f\u4e3a\u624b\u6301\u9b54\u6756\u7684\u5168\u80fd\u578b\u67b6\u6784\u5e08 or \u6280\u672f\u7816\u5bb6\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u67b6\u6784\u5e08\u3001\u6280\u672f\u51b3\u7b56\u8005"),(0,n.kt)("br",{parentName:"li"}),"\u76d8\u53e4\u52a9\u4f60\u89c4\u907f\u6280\u672f\u9009\u578b\u8bd5\u9519\u98ce\u9669\uff0c\u4f18\u5316\u81ea\u5df1\u7684\u67b6\u6784\u5de5\u5177\u7bb1\uff0c\u66f4\u597d\u7684\u4e3a\u4e1a\u52a1\u670d\u52a1\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4f01\u4e1a\u3001\u7ec4\u7ec7"),(0,n.kt)("br",{parentName:"li"}),"\u76d8\u53e4\u4e3a\u4f60\u964d\u4f4e\u7528\u4eba\u6210\u672c\uff0c\u592f\u5b9e\u4f01\u4e1a\u6570\u5b57\u5316\u57fa\u5ea7\uff0c\u771f\u6b63\u505a\u5230\u964d\u672c\u589e\u6548\u597d\u5e2e\u624b\uff0c\u6301\u7eed\u52a9\u529b\u4f01\u4e1a\u4e1a\u52a1\u589e\u957f\u3002")),(0,n.kt)("h2",{id:"\u751f\u6001\u67b6\u6784\u793a\u610f\u56fe"},"\u751f\u6001\u67b6\u6784\u793a\u610f\u56fe"),(0,n.kt)("img",{width:"700",src:r(2840).Z,alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u751f\u6001\u67b6\u6784\u56fe"}),(0,n.kt)("h2",{id:"\u4ed3\u5e93\u6a21\u5757\u5217\u8868"},"\u4ed3\u5e93\u6a21\u5757\u5217\u8868"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pangu-dependencies"),(0,n.kt)("br",{parentName:"li"}),"\u76d8\u53e4\u8d44\u6e90\u4f9d\u8d56\u58f0\u660e\u7ba1\u7406\u6a21\u5757\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pangu-spring-boot-starter"),(0,n.kt)("br",{parentName:"li"}),"\u76d8\u53e4\u542f\u52a8\u5668\u3001\u4e2d\u5fc3\u5316\u914d\u7f6e\u3001\u57fa\u7840\u7c7b\u5e93\u7b49\u57fa\u81ea\u52a8\u88c5\u914d\u6a21\u5757"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pangu-generator-maven-plugin"),(0,n.kt)("br",{parentName:"li"}),"\u76d8\u53e4\u4ee3\u7801\u751f\u6210\u5668Maven\u63d2\u4ef6"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pangu-admin"),(0,n.kt)("br",{parentName:"li"}),"\u76d8\u53e4 Admin \u4e2d\u540e\u53f0\u4e1a\u52a1\u7cfb\u7edf\u5f00\u53d1\u811a\u624b\u67b6"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pangu-app-starter"),(0,n.kt)("br",{parentName:"li"}),"\u76d8\u53e4 APP \u79fb\u52a8\u7aef\u591a\u5e73\u53f0\u5f00\u53d1\u811a\u624b\u67b6"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pangu-website"),(0,n.kt)("br",{parentName:"li"}),"\u76d8\u53e4\u6846\u67b6\u5b98\u7f51 & \u6587\u6863\u6559\u7a0b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pangu-examples"),(0,n.kt)("br",{parentName:"li"}),"\u76d8\u53e4\u6846\u67b6\u6a21\u7248\u5316\u53c2\u8003\u8303\u4f8b\u96c6")),(0,n.kt)("h2",{id:"\u91cd\u8981\u7684\u4e8b\u60c5\u8bf4\u4e09\u904d"},"\u91cd\u8981\u7684\u4e8b\u60c5\u8bf4\u4e09\u904d"),(0,n.kt)("p",null,"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u7ec8\u8eab\u6c38\u4e45",(0,n.kt)(u,{color:"#67C23A",mdxType:"Highlight"},"\u514d\u8d39\u5f00\u6e90"),(0,n.kt)(u,{color:"#409EFF",mdxType:"Highlight"},"\u514d\u8d39\u5f00\u6e90"),(0,n.kt)(u,{color:"#F56C6C",mdxType:"Highlight"},"\u514d\u8d39\u5f00\u6e90"),"\uff01 (\u8bf7\u52ff\u518d\u54a8\u8be2\u6b64\u95ee\u9898)"))}g.isMDXComponent=!0},2840:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/34-pangu-framework-0de7df15d6292c72e5ec79f6ee6b2e0b.png"}}]);