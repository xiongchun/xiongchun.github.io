"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[6395],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),o=a(6010),l=a(2389),i=a(7392),s=a(7094),p=a(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:l,values:d,groupId:m,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,i.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===l?l:l??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:h}=(0,s.U)(),[x,N]=(0,r.useState)(k),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=m){const e=y[m];null!=e&&e!==x&&v.some((t=>t.value===e))&&N(e)}const I=e=>{const t=e.currentTarget,a=w.indexOf(t),n=v[a].value;n!==x&&(E(t),N(n),null!=m&&h(m,String(n)))},T=e=>{let t=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},g)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>w.push(e),onKeyDown:T,onClick:I},l,{className:(0,o.Z)("tabs__item",c,l?.className,{"tabs__item--active":x===t})}),a??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},6182:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),l=a(5162);const i={title:"\u5982\u4f55\u57fa\u4e8e\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u5f00\u53d1\u5fae\u670d\u52a1\u5e94\u7528",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"],date:"2021-1-20",hide_table_of_contents:!1,slug:"pangu-dev-framework-create-microservice"},s=void 0,p={permalink:"/home/blog/pangu-dev-framework-create-microservice",source:"@site/blog/\u5982\u4f55\u57fa\u4e8e\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u5f00\u53d1\u5fae\u670d\u52a1\u5e94\u7528.md",title:"\u5982\u4f55\u57fa\u4e8e\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u5f00\u53d1\u5fae\u670d\u52a1\u5e94\u7528",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8e\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 \u5f00\u53d1\u4e00\u4e2a\u5fae\u670d\u52a1\u5e94\u7528\u3002\u6587\u4e2d\u6240\u8ff0\u4ec5\u4e3a\u642d\u5efa\u4e00\u4e2a\u5fae\u670d\u52a1\u5e94\u7528\u7684\u57fa\u672c\u6846\u67b6\uff08\u670d\u52a1\u6ce8\u518c&\u670d\u52a1\u53d1\u73b0\uff09\uff0c\u5982\u8981\u589e\u52a0\u914d\u7f6e\u4e2d\u5fc3\u3001\u7f51\u5173\u4ee3\u7406\u3001\u6570\u636e\u6301\u4e45\u5316\u3001\u7f13\u5b58\u7b49\u80fd\u529b\u8bf7\u53c2\u8003\u4f7f\u7528\u6307\u5357\u7684\u76f8\u5173\u7ae0\u8282\u3002",date:"2021-01-20T00:00:00.000Z",formattedDate:"2021\u5e741\u670820\u65e5",tags:[{label:"\u670d\u52a1\u7aef\u5f00\u53d1",permalink:"/home/blog/tags/\u670d\u52a1\u7aef\u5f00\u53d1"},{label:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6",permalink:"/home/blog/tags/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"}],readingTime:3.975,hasTruncateMarker:!0,authors:[{name:"\u7a0b\u5e8f\u5458\u8001\u718a",title:"Pangu Framework maintainer",url:"https://xiongchun.pulanit.com",imageURL:"https://xiongchun.github.io/home/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{title:"\u5982\u4f55\u57fa\u4e8e\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u5f00\u53d1\u5fae\u670d\u52a1\u5e94\u7528",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"],date:"2021-1-20",hide_table_of_contents:!1,slug:"pangu-dev-framework-create-microservice"},prevItem:{title:"\u4f7f\u7528 Caddy \u90e8\u7f72\u76d8\u53e4\u9879\u76ee\u5b98\u7f51",permalink:"/home/blog/deploy-pangu-website-by-caddy"},nextItem:{title:"\u5982\u4f55\u57fa\u4e8e\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u5f00\u53d1\u5355\u4f53\u5e94\u7528",permalink:"/home/blog/pangu-dev-framework-create-standalone-app"}},u={authorsImageUrls:[void 0]},c=[{value:"\u670d\u52a1\u63d0\u4f9b\u8005",id:"\u670d\u52a1\u63d0\u4f9b\u8005",level:2},{value:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",level:3},{value:"\u672c\u5730\u914d\u7f6e",id:"\u672c\u5730\u914d\u7f6e",level:3},{value:"\u5b9e\u73b0\u670d\u52a1\u63a5\u53e3",id:"\u5b9e\u73b0\u670d\u52a1\u63a5\u53e3",level:3},{value:"\u542f\u52a8\u5165\u53e3",id:"\u542f\u52a8\u5165\u53e3",level:3},{value:"\u670d\u52a1\u6ce8\u518c",id:"\u670d\u52a1\u6ce8\u518c",level:3},{value:"\u670d\u52a1\u6d88\u8d39\u8005",id:"\u670d\u52a1\u6d88\u8d39\u8005",level:2},{value:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801",id:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801",level:2}],d={toc:c};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8e",(0,r.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework"},"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6")," \u5f00\u53d1\u4e00\u4e2a\u5fae\u670d\u52a1\u5e94\u7528\u3002\u6587\u4e2d\u6240\u8ff0\u4ec5\u4e3a\u642d\u5efa\u4e00\u4e2a\u5fae\u670d\u52a1\u5e94\u7528\u7684\u57fa\u672c\u6846\u67b6\uff08\u670d\u52a1\u6ce8\u518c&\u670d\u52a1\u53d1\u73b0\uff09\uff0c\u5982\u8981\u589e\u52a0\u914d\u7f6e\u4e2d\u5fc3\u3001\u7f51\u5173\u4ee3\u7406\u3001\u6570\u636e\u6301\u4e45\u5316\u3001\u7f13\u5b58\u7b49\u80fd\u529b\u8bf7\u53c2\u8003\u4f7f\u7528\u6307\u5357\u7684\u76f8\u5173\u7ae0\u8282\u3002"),(0,r.kt)("h2",{id:"\u670d\u52a1\u63d0\u4f9b\u8005"},"\u670d\u52a1\u63d0\u4f9b\u8005"),(0,r.kt)("h3",{id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"},"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"parent",label:"\u76d8\u53e4 Parent",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<parent>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-parent</artifactId>\n    <version>latest.version.xxx</version>\n    <relativePath/>\n</parent>\n"))),(0,r.kt)(l.Z,{value:"dependency1",label:"\u57fa\u7840\u6a21\u5757",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,r.kt)(l.Z,{value:"dependency2",label:"Dubbo \u6a21\u5757",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-dubbo-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,r.kt)(l.Z,{value:"dependency3",label:"\u670d\u52a1\u63a5\u53e3\u5305",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-examples-dubbo-api</artifactId>\n    <version>1.0.0</version>\n</dependency>\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u76d8\u53e4\u6846\u67b6\u5fae\u670d\u52a1\u4ea4\u4e92\u57fa\u4e8e Dubbo \u63d0\u4f9b\u7684\u9762\u5411\u63a5\u53e3\u4ee3\u7406\u7684\u9ad8\u6027\u80fd RPC \u8c03\u7528\u80fd\u529b\u3002\u6240\u4ee5\uff0c\u5bf9\u4e8e\u5185\u90e8\u670d\u52a1\u6a21\u5757\u4e4b\u95f4\u7684\u4ea4\u4e92\u8c03\u7528\u90fd\u9700\u8981\u4f9d\u8d56\u670d\u52a1\u63a5\u53e3\u5305\u3002")))),(0,r.kt)("h3",{id:"\u672c\u5730\u914d\u7f6e"},"\u672c\u5730\u914d\u7f6e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e3a\u4fbf\u4e8e\u7406\u89e3\uff0c\u672c\u6587\u57fa\u4e8e\u672c\u5730\u914d\u7f6e\u7684\u65b9\u5f0f\u7f16\u5199\u3002\u82e5\u6539\u4e3a\u6807\u51c6\u7684 Nacos \u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f\uff0c\u8bf7\u53c2\u9605\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework/docs/advanced-guide/nacos-config-center"},"\u914d\u7f6e\u4e2d\u5fc3")," \u7ae0\u8282\u3002")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"application",label:"application.properties",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.profiles.active=${spring.profiles.active:dev}\n"))),(0,r.kt)(l.Z,{value:"application-dev",label:"application-dev.properties",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.application.name=pangu-examples-dubbo-service\n\ndubbo.protocol.name=dubbo\ndubbo.protocol.port=20880\ndubbo.consumer.timeout=5000\n# \u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740\ndubbo.registry.address=nacos://${nacos.server-addr}?namespace=${nacos.namespace}\ndubbo.consumer.check=false\n# \u7981\u7528 Dubbo \u7f3a\u7701\u7684\u5f02\u5e38\u8fc7\u6ee4\u5668\uff0c\u76d8\u53e4\u6846\u67b6\u4e2d\u542f\u7528\u4e86\u4fee\u6539\u8fc7\u7684\u5f02\u5e38\u8fc7\u6ee4\u5668\u4ee5\u652f\u6301\u76f4\u63a5\u629b\u51fa\u81ea\u5b9a\u4e49\u7684\u4e1a\u52a1\u5f02\u5e38\u3002\ndubbo.provider.filter=-exception\n\nlogging.level.root=INFO\nlogging.level.com.gitee.pulanos.pangu=INFO\n")))),(0,r.kt)("h3",{id:"\u5b9e\u73b0\u670d\u52a1\u63a5\u53e3"},"\u5b9e\u73b0\u670d\u52a1\u63a5\u53e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u58f0\u660e\u63a5\u53e3 UserService.java"',title:'"\u58f0\u660e\u63a5\u53e3','UserService.java"':!0},"UserEntity findUserEntity(Long id);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u5b9e\u73b0\u63a5\u53e3 UserServiceImpl.java"',title:'"\u5b9e\u73b0\u63a5\u53e3','UserServiceImpl.java"':!0},'@Service(version = "1.0.0", group = "pangu-showcases-dubbo-service")\npublic class UserServiceImpl implements UserService {\n    @Override\n    public UserEntity findUserEntity(Long id) {\n        log.info("\u53c2\u6570ID\uff1a{}", id);\n        UserEntity userEntity = new UserEntity();\n        userEntity.setId(id);\n        userEntity.setName("\u4e91\u5357\u7a0b\u5e8f\u5458\u8001\u718a");\n        return userEntity;\n    }\n}\n')),(0,r.kt)("h3",{id:"\u542f\u52a8\u5165\u53e3"},"\u542f\u52a8\u5165\u53e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"@EnableDubbo\n@SpringBootApplication\npublic class DubboProviderApplication {\n    public static void main(String[] args) {\n        PanGuApplicationBuilder.init(DubboProviderApplication.class).run(args);\n    }\n}\n// \u542f\u52a8\u53c2\u6570\u8bbe\u7f6e\uff08\u5982\u4e0b\u793a\u4f8b\uff09\n// -Dnacos.server-addr=127.0.0.1:8848 -Dnacos.namespace=pangu-dev\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableDubbo")," \u6ce8\u89e3\u5f00\u542f Dubbo \u652f\u6301\u3002\u7531\u4e8e Dubbo \u7684\u4f7f\u7528 netty \u4f5c\u4e3a\u5e95\u5c42\u7f51\u7edc\u901a\u4fe1\uff0c\u6240\u4ee5\u7f3a\u7701\u60c5\u51b5\u4e0b\u5fae\u670d\u52a1\u542f\u52a8\u6210\u529f\u540e\u89c2\u5bdf\u63a7\u5236\u53f0\u53ef\u77e5\u5e76\u6ca1\u6709 Tomcat \u4e00\u7c7b Servlet \u5bb9\u5668\u968f\u4e4b\u542f\u52a8\u3002")),(0,r.kt)("h3",{id:"\u670d\u52a1\u6ce8\u518c"},"\u670d\u52a1\u6ce8\u518c"),(0,r.kt)("p",null,"\u6210\u529f\u542f\u52a8\u5e94\u7528\u4f1a\u81ea\u52a8\u50cf Nacos \u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u6ce8\u518c\u670d\u52a1\u3002\u767b\u5f55 Nacos \u63a7\u5236\u53f0\u5373\u53ef\u5728\u3010\u670d\u52a1\u7ba1\u7406->\u670d\u52a1\u5217\u8868\u3011\u9875\u67e5\u770b\u6548\u679c\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1Dubbo\u670d\u52a1",src:a(8129).Z,width:"2872",height:"642"})),(0,r.kt)("h2",{id:"\u670d\u52a1\u6d88\u8d39\u8005"},"\u670d\u52a1\u6d88\u8d39\u8005"),(0,r.kt)("p",null,"\u4e0a\u8ff0\u670d\u52a1\u6ce8\u518c\u5230 Nacos \u670d\u52a1\u4e2d\u5fc3\u4ee5\u540e\u5c31\u53ef\u4ee5\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u4e86\u3002\u53ef\u4ee5\u5728\u4efb\u4f55\u4e00\u4e2a SpringBean \u7ec4\u4ef6\u4e2d\uff08\u4e00\u822c\u662f Service\u3001Manager \u7b49\uff09\uff0c\u5f15\u5165\u670d\u52a1\u63a5\u53e3\u540e\u5c31\u50cf\u672c\u5730\u63a5\u53e3\u8c03\u7528\u4e00\u6837\u8c03\u7528\u8fdc\u7a0b\u670d\u52a1\u3002Dubbo \u5c06\u63d0\u4f9b\u9ad8\u6027\u80fd\u7684\u57fa\u4e8e\u4ee3\u7406\u7684\u8fdc\u7a0b\u8c03\u7528\u80fd\u529b\uff0c\u4e3a\u5f00\u53d1\u8005\u5c4f\u853d\u8fdc\u7a0b\u8c03\u7528\u5e95\u5c42\u7ec6\u8282\u3002\u670d\u52a1\u6d88\u8d39\u7aef\u6240\u9700\u8981\u7684\u4f9d\u8d56\u548c\u63d0\u4f9b\u7aef\u662f\u4e00\u6837\u7684\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002\u4ec5\u7ed9\u51fa\u6d88\u8d39\u76f8\u5173\u4ee3\u7801\u3002\u5982\u4e0b\u6240\u793a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u670d\u52a1\u6d88\u8d39\u7aef\uff0c\u8c03\u7528\u8fdc\u7a0b\u670d\u52a1\u4ee3\u7801 UserAdminManager.java"',title:'"\u670d\u52a1\u6d88\u8d39\u7aef\uff0c\u8c03\u7528\u8fdc\u7a0b\u670d\u52a1\u4ee3\u7801','UserAdminManager.java"':!0},'@Component\npublic class UserAdminManager {\n    @Reference(version = "1.0.0", group = "pangu-examples-dubbo-service")\n    private UserService userService;\n\n    public void findUserEntityById(Long id){\n        log.info("\u5f00\u59cbDubbo\u8fdc\u7a0b\u8c03\u7528...");\n        UserEntity userEntity = userService.findUserEntity(id);\n        log.info("[OK] \u8c03\u7528\u6210\u529f {}", userEntity);\n    }\n}\n')),(0,r.kt)("h2",{id:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801"},"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-dubbo-api"},"pangu-examples-dubbo-api"),"\uff1a\u670d\u52a1\u63a5\u53e3\u5305"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-dubbo-service"},"pangu-examples-dubbo-service"),"\uff1a\u670d\u52a1\u63d0\u4f9b\u8005"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-dubbo-consumer"},"pangu-examples-dubbo-consumer"),"\uff1a\u670d\u52a1\u6d88\u8d39\u8005")))}m.isMDXComponent=!0},8129:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1-pangu-framework-nacos-service-regist-b8f879309f74a0ff44299f8d889ad6e8.png"}}]);