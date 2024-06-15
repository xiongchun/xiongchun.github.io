"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[9436],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),i=a(6010),l=a(2389),o=a(7392),p=a(7094),s=a(2466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:l,values:m,groupId:d,className:k}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,o.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===l?l:l??v.find((e=>e.props.default))?.props.value??v[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,p.U)(),[T,x]=(0,r.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=d){const e=f[d];null!=e&&e!==T&&b.some((t=>t.value===e))&&x(e)}const w=e=>{const t=e.currentTarget,a=O.indexOf(t),n=b[a].value;n!==T&&(j(t),x(n),null!=d&&y(d,String(n)))},Z=e=>{let t=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},k)},b.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:Z,onClick:w},l,{className:(0,i.Z)("tabs__item",u,l?.className,{"tabs__item--active":T===t})}),a??t)}))),t?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},9345:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),i=a(5488),l=a(5162);const o={title:"\u57fa\u4e8e Zipkin \u548c OpenTelemetry Java Agent \u5b9e\u73b0\u7cfb\u7edf\u8c03\u7528\u94fe\u8def\u8ddf\u8e2a",authors:["xiongchun"],tags:["\u53ef\u89c2\u6d4b\u6027","\u670d\u52a1\u7aef\u5f00\u53d1"],date:"2023-7-16",hide_table_of_contents:!1,slug:"observability/zipkin-opentelemetry-java-agent-tracing-quickstart"},p=void 0,s={permalink:"/home/blog/observability/zipkin-opentelemetry-java-agent-tracing-quickstart",source:"@site/blog/observability/\u57fa\u4e8e Zipkin \u548c OpenTelemetry Java Agent \u5b9e\u73b0\u7cfb\u7edf\u8c03\u7528\u94fe\u8def\u8ddf\u8e2a.md",title:"\u57fa\u4e8e Zipkin \u548c OpenTelemetry Java Agent \u5b9e\u73b0\u7cfb\u7edf\u8c03\u7528\u94fe\u8def\u8ddf\u8e2a",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8e Zipkin \u548c OpenTelemetry Java Agent \u642d\u67b6\u4e00\u4e2a\u5206\u5e03\u5f0f\u94fe\u8def\u8c03\u7528\u8ddf\u8e2a\u7684\u7cfb\u7edf\u3002\u5b83\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u6709\u6548\u6536\u96c6\u4e00\u4e2a\u8bf7\u6c42\u8c03\u7528\u94fe\u8def\u8fc7\u7a0b\u5e76\u5bf9\u94fe\u8def\u8282\u70b9\u6570\u636e\u8fdb\u884c\u5206\u6790\u548c\u67e5\u627e\u3002\u53ef\u4ee5\u7ed3\u5408 TraceID \u548c Log \u7cfb\u7edf\u5bf9\u95ee\u9898\u6839\u56e0\u8fdb\u884c\u6eaf\u6e90\u3002\u540c\u7c7b\u7ade\u54c1\u8fd8\u6709 Uber \u5f00\u6e90\u7684 Jaeger\uff0c\u611f\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u81ea\u884c\u7814\u7a76\u3002",date:"2023-07-16T00:00:00.000Z",formattedDate:"2023\u5e747\u670816\u65e5",tags:[{label:"\u53ef\u89c2\u6d4b\u6027",permalink:"/home/blog/tags/\u53ef\u89c2\u6d4b\u6027"},{label:"\u670d\u52a1\u7aef\u5f00\u53d1",permalink:"/home/blog/tags/\u670d\u52a1\u7aef\u5f00\u53d1"}],readingTime:4.515,hasTruncateMarker:!0,authors:[{name:"\u7a0b\u5e8f\u5458\u8001\u718a",title:"Pangu Framework maintainer",url:"https://xiongchun.pulanit.com",imageURL:"https://xiongchun.github.io/home/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{title:"\u57fa\u4e8e Zipkin \u548c OpenTelemetry Java Agent \u5b9e\u73b0\u7cfb\u7edf\u8c03\u7528\u94fe\u8def\u8ddf\u8e2a",authors:["xiongchun"],tags:["\u53ef\u89c2\u6d4b\u6027","\u670d\u52a1\u7aef\u5f00\u53d1"],date:"2023-7-16",hide_table_of_contents:!1,slug:"observability/zipkin-opentelemetry-java-agent-tracing-quickstart"},prevItem:{title:"\u57fa\u4e8e Dubbo3 \u7684 Triple \u534f\u8bae\u5b9e\u73b0\u6d88\u606f\u7684\u6d41\u5f0f\u901a\u4fe1",permalink:"/home/blog/dubbo/triple/stream_push"},nextItem:{title:"\u57fa\u4e8e Seata AT \u6a21\u5f0f\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u843d\u5730\u65b9\u6848",permalink:"/home/blog/pangu-dev-framework-distributed-transaction"}},c={authorsImageUrls:[void 0]},u=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"Zipkin \u7cfb\u7edf\u67b6\u6784\u56fe",id:"zipkin-\u7cfb\u7edf\u67b6\u6784\u56fe",level:2},{value:"Exporter",id:"exporter",level:4},{value:"Transport",id:"transport",level:4},{value:"Collector",id:"collector",level:4},{value:"Storage",id:"storage",level:4},{value:"API\uff08Query Service\uff09",id:"apiquery-service",level:4},{value:"WebUI",id:"webui",level:4},{value:"\u5b89\u88c5 Zipkin \u670d\u52a1\u7aef",id:"\u5b89\u88c5-zipkin-\u670d\u52a1\u7aef",level:2},{value:"\u5b89\u88c5 Exporter",id:"\u5b89\u88c5-exporter",level:2},{value:"\u4e0b\u8f7d Agent \u5b89\u88c5\u5305",id:"\u4e0b\u8f7d-agent-\u5b89\u88c5\u5305",level:4},{value:"\u5c06 Agent \u6302\u8f7d\u7684\u4e1a\u52a1\u5e94\u7528\u4e0a\u5e76\u542f\u52a8",id:"\u5c06-agent-\u6302\u8f7d\u7684\u4e1a\u52a1\u5e94\u7528\u4e0a\u5e76\u542f\u52a8",level:4},{value:"\u65e0\u56fe\u65e0\u771f\u76f8",id:"\u65e0\u56fe\u65e0\u771f\u76f8",level:2}],m={toc:u};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openzipkin/zipkin"},"Zipkin")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-java-instrumentation"},"OpenTelemetry Java Agent")," \u642d\u67b6\u4e00\u4e2a\u5206\u5e03\u5f0f\u94fe\u8def\u8c03\u7528\u8ddf\u8e2a\u7684\u7cfb\u7edf\u3002\u5b83\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u6709\u6548\u6536\u96c6\u4e00\u4e2a\u8bf7\u6c42\u8c03\u7528\u94fe\u8def\u8fc7\u7a0b\u5e76\u5bf9\u94fe\u8def\u8282\u70b9\u6570\u636e\u8fdb\u884c\u5206\u6790\u548c\u67e5\u627e\u3002\u53ef\u4ee5\u7ed3\u5408 TraceID \u548c Log \u7cfb\u7edf\u5bf9\u95ee\u9898\u6839\u56e0\u8fdb\u884c\u6eaf\u6e90\u3002\u540c\u7c7b\u7ade\u54c1\u8fd8\u6709 Uber \u5f00\u6e90\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/"},"Jaeger"),"\uff0c\u611f\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u81ea\u884c\u7814\u7a76\u3002"),(0,r.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,r.kt)("p",null,"\u5f53\u524d\u5927\u90e8\u5206\u7cfb\u7edf\u90fd\u57fa\u4e8e\u5fae\u670d\u52a1\u6a21\u5f0f\u5f00\u53d1\uff0c\u8c03\u7528\u5173\u7cfb\u590d\u6742\u591a\u53d8\uff0cObservability\uff08\u53ef\u89c2\u6d4b\u6027\uff09\u5c31\u663e\u5f97\u5c24\u4e3a\u91cd\u8981\u3002Observabilit \u80fd\u8ba9\u6211\u4eec\u6e05\u6670\u7684\u611f\u77e5\u5230\u7cfb\u7edf\u5f53\u524d\u7684\u8fd0\u884c\u72b6\u6001\u4ee5\u53ca\u5b83\u66fe\u7ecf\u53d1\u751f\u4e86\u4ec0\u4e48\u3002\u5f53\u6709\u6545\u969c\u53d1\u751f\u65f6\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u501f\u52a9 Observabilit \u7cfb\u7edf\u6709\u6548\u7684\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898\u6839\u56e0\u5e76\u5b8c\u6210\u4fee\u590d\uff08\u8fd9\u70b9\u5c24\u5176\u91cd\u8981\uff09\u3002Observabilit \u4e3b\u8981\u5305\u62ec traces\u3001metrics \u548c logs\u3002\u4eca\u5929\uff0c\u6211\u4eec\u4e3b\u8981\u8ba8\u8bba ",(0,r.kt)("strong",{parentName:"p"},"traces"),"\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e1a\u754c\u628a Observability \u7ffb\u8bd1\u4e3a \u201c\u53ef\u89c2\u6d4b\u6027\u201d\uff0c\u672c\u4eba\u7565\u611f\u751f\u786c\u3002\u672c\u7ad9\u76f8\u5173\u6587\u6863\u5c06\u76f4\u63a5\u4f7f\u7528 Observability \u5355\u8bcd\uff0c\u4e0d\u518d\u505a\u4e2d\u6587\u5bf9\u7167\u7ffb\u8bd1\u3002")),(0,r.kt)("h2",{id:"zipkin-\u7cfb\u7edf\u67b6\u6784\u56fe"},"Zipkin \u7cfb\u7edf\u67b6\u6784\u56fe"),(0,r.kt)("p",null,"\u60f3\u8981\u770b\u660e\u767d Zipkin \u7684\u5168\u8c8c\u548c\u5de5\u4f5c\u539f\u7406\uff0c\u6211\u4eec\u5fc5\u987b\u641e\u4e00\u4e2a\u67b6\u6784\u56fe\u51fa\u6765\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.kt)("img",{width:"600",src:a(6954).Z,alt:"Zipkin\u7cfb\u7edf\u67b6\u6784\u56fe"}),(0,r.kt)("admonition",{title:"\u770b\u56fe\u8bf4\u8bdd",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The component in an instrumented app that sends data to Zipkin is called a Exporter. Exporter send trace data via one of several transports to Zipkin collectors, which persist trace data to storage. Later, storage is queried by the API to provide data to the UI.")),(0,r.kt)("h4",{id:"exporter"},"Exporter"),(0,r.kt)("p",null,"\u6307\u901a\u8fc7Agent\u6216\u8005SDK\u65b9\u5f0f\u5d4c\u5165\u5230\u4e86\u5e94\u7528\u4e2d\u91c7\u96c6\u5e76\u5411 Collector \u53d1\u9001 Telemetry \u6570\u636e\u80fd\u529b\u7684\u7ec4\u4ef6\u3002Telemetry Data (traces\u3001metrics \u548c logs) \u6570\u636e\u901a\u8fc7\u8fd9\u4e2a Exporter \u53d1\u9001\u51fa\u53bb\u3002"),(0,r.kt)("h4",{id:"transport"},"Transport"),(0,r.kt)("p",null,"\u4e3b\u8981\u652f\u6301\u4e09\u79cd\u9065\u6d4b\u6570\u636e\u4f20\u8f93\u6a21\u5f0f\u3002HTTP\u3001MQ\uff08ActiveMQ\u3001Kafka\u3001RabbitMQ\uff09\u3001Scribe\uff08NettyScribeServer\uff09\u3002"),(0,r.kt)("h4",{id:"collector"},"Collector"),(0,r.kt)("p",null,"Once the trace data arrives at the Zipkin collector daemon, it is validated, stored, and indexed for lookups by the Zipkin collector."),(0,r.kt)("h4",{id:"storage"},"Storage"),(0,r.kt)("p",null,"\u6570\u636e\u5b58\u50a8\u65b9\u6848\u3002\u76ee\u524d\u652f\u6301 4 \u79cd\u3002\u5185\u5b58\u6a21\u5f0f\u3001MySQL\u3001ElasticSearch\u3001Cassandra\u3002\u540e\u671f\u6709\u53ef\u80fd\u4f1a\u652f\u6301 ClickHouse\u3002\u5185\u5b58\u6a21\u5f0f\u53ea\u80fd\u7528\u4e8e\u5f00\u53d1\u6d4b\u8bd5\u3001MySQL\u6a21\u5f0f\u4e5f\u53ea\u80fd\u7528\u4e8e\u5f00\u53d1\u6d4b\u8bd5\u548c\u5c0f\u89c4\u6a21\u751f\u4ea7\u4f53\u9a8c\u3002"),(0,r.kt)("h4",{id:"apiquery-service"},"API\uff08Query Service\uff09"),(0,r.kt)("p",null,"Once the data is stored and indexed, we need a way to extract it. The query daemon provides a simple JSON API for finding and retrieving traces. The primary consumer of this API is the Web UI."),(0,r.kt)("h4",{id:"webui"},"WebUI"),(0,r.kt)("p",null,"The web UI provides a method for viewing traces based on service, time, and annotations."),(0,r.kt)("h2",{id:"\u5b89\u88c5-zipkin-\u670d\u52a1\u7aef"},"\u5b89\u88c5 Zipkin \u670d\u52a1\u7aef"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sSL https://zipkin.io/quickstart.sh | bash -s\njava -jar zipkin.jar\n"))),(0,r.kt)(l.Z,{value:"Docker",label:"Docker",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 9411:9411 openzipkin/zipkin\n"))),(0,r.kt)(l.Z,{value:"Running from Source",label:"Running from Source",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# get the latest source\ngit clone https://github.com/openzipkin/zipkin\ncd zipkin\n# Build the server and also make its dependencies\n./mvnw -DskipTests --also-make -pl zipkin-server clean install\n# Run the server\njava -jar ./zipkin-server/target/zipkin-server-*exec.jar\n")))),(0,r.kt)("p",null,"\u4e3a\u4e86\u5feb\u901f\u4f53\u9a8c\uff0c\u6211\u4eec\u4f7f\u7528\u7b2c\u4e00\u79cd\u5b89\u88c5\u65b9\u5f0f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"java -jar zipkin.jar")," \u76f4\u63a5\u542f\u52a8\u3002\u8fd9\u79cd\u6a21\u5f0f\u662f\u4ee5\u5185\u5b58\u5b58\u50a8\u4f60\u662f\u542f\u52a8\u7684\uff0c\u4e0d\u9700\u8981\u914d\u7f6e\u540e\u7aef\u5b58\u50a8\u65b9\u6848\u3002\u542f\u52a8\u540e\u8bbf\u95ee\uff1a",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:9411/zipkin"},"http://127.0.0.1:9411/zipkin"),"\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5-exporter"},"\u5b89\u88c5 Exporter"),(0,r.kt)("p",null,"\u57fa\u4e8e OpenTelemetry Automatic Instrumentation \u6a21\u5f0f\u4e3a\u4f8b\u5b9e\u73b0\u4e1a\u52a1\u7cfb\u7edf\u7684\u6570\u636e\u9065\u6d4b\u6570\u636e\u91c7\u96c6\u3002"),(0,r.kt)("h4",{id:"\u4e0b\u8f7d-agent-\u5b89\u88c5\u5305"},"\u4e0b\u8f7d Agent \u5b89\u88c5\u5305"),(0,r.kt)("p",null,"\u4ece opentelemetry-java-instrumentation \u5b98\u65b9\u7248\u672c\u53d1\u5e03\u9875\u9762\u627e\u5230\u6700\u65b0\u7684\u5b89\u88c5\u5305\u4e0b\u8f7d\u3002",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases"},"opentelemetry-javaagent.jar\n")),(0,r.kt)("h4",{id:"\u5c06-agent-\u6302\u8f7d\u7684\u4e1a\u52a1\u5e94\u7528\u4e0a\u5e76\u542f\u52a8"},"\u5c06 Agent \u6302\u8f7d\u7684\u4e1a\u52a1\u5e94\u7528\u4e0a\u5e76\u542f\u52a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"java -javaagent:/Users/xc/apps/agent/opentelemetry-javaagent.jar \\\n     -Dotel.service.name=your-service-name \\\n     -Dotel.traces.exporter=zipkin \\\n     -Dotel.exporter.zipkin.endpoint=http://127.0.0.1:9411/api/v2/spans \\\n     -jar myapp.jar\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0a\u8ff0\u914d\u7f6e\u662f\u901a\u8fc7 http \u534f\u8bae\u7684\u65b9\u5f0f\u6765\u91c7\u96c6 Trace \u6570\u636e\uff0c\u4f46\u5b9e\u9645\u751f\u4ea7\u73af\u5883\u5efa\u8bae\u4f7f\u7528 MQ \u65b9\u5f0f\u6765\u91c7\u96c6\u3002\u76f8\u5173\u914d\u7f6e\u67e5\u9605 Zipkin \u6587\u6863\u3002")),(0,r.kt)("h2",{id:"\u65e0\u56fe\u65e0\u771f\u76f8"},"\u65e0\u56fe\u65e0\u771f\u76f8"),(0,r.kt)("p",null,"\u5b8c\u6210\u5982\u4e0a\u914d\u7f6e\u540e\uff0c\u5f53\u6211\u4eec\u64cd\u4f5c\u4e1a\u52a1\u7cfb\u7edf\u5c31\u4f1a\u6709\u76f8\u5e94\u7684\u94fe\u8def\u8ddf\u8e2a\u6570\u636e\u8fdb\u5165\u5230Zipkin\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Zipkin\u5206\u5e03\u5f0f\u94fe\u8def\u8ddf\u8e2a\u56fe",src:a(3568).Z,width:"2874",height:"1576"})))}d.isMDXComponent=!0},6954:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/54-zipkin-c6f5eb7a22f8ee8c0f9b7a15c4bdd3d3.png"},3568:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/55-zipkin-4a1aec117444e8d522765fef3506fd52.png"}}]);