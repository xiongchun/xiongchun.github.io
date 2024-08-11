"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[3733],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,y=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9568:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={title:"\u4f7f\u7528 Caddy \u90e8\u7f72\u76d8\u53e4\u9879\u76ee\u5b98\u7f51",authors:["xiongchun"],tags:["\u6280\u672f\u6742\u6587","\u4e2d\u95f4\u4ef6","\u8fd0\u7ef4","Caddy","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"],date:new Date("2021-02-02T00:00:00.000Z"),hide_table_of_contents:!1,slug:"deploy-pangu-website-by-caddy"},o=void 0,i={permalink:"/blog/deploy-pangu-website-by-caddy",source:"@site/blog/\u4f7f\u7528 Caddy \u90e8\u7f72\u76d8\u53e4\u9879\u76ee\u5b98\u7f51.md",title:"\u4f7f\u7528 Caddy \u90e8\u7f72\u76d8\u53e4\u9879\u76ee\u5b98\u7f51",description:"Caddy 2 is a powerful, enterprise-ready, open source web server with automatic HTTPS written in Go.",date:"2021-02-02T00:00:00.000Z",formattedDate:"2021\u5e742\u67082\u65e5",tags:[{label:"\u6280\u672f\u6742\u6587",permalink:"/blog/tags/\u6280\u672f\u6742\u6587"},{label:"\u4e2d\u95f4\u4ef6",permalink:"/blog/tags/\u4e2d\u95f4\u4ef6"},{label:"\u8fd0\u7ef4",permalink:"/blog/tags/\u8fd0\u7ef4"},{label:"Caddy",permalink:"/blog/tags/caddy"},{label:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6",permalink:"/blog/tags/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"}],readingTime:1.68,hasTruncateMarker:!0,authors:[{name:"\u7a0b\u5e8f\u5458\u8001\u718a",title:"Pangu Framework maintainer",url:"https://xiongchun.pulanit.com",imageURL:"https://xiongchun.github.io/home/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{title:"\u4f7f\u7528 Caddy \u90e8\u7f72\u76d8\u53e4\u9879\u76ee\u5b98\u7f51",authors:["xiongchun"],tags:["\u6280\u672f\u6742\u6587","\u4e2d\u95f4\u4ef6","\u8fd0\u7ef4","Caddy","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"],date:"2021-02-02T00:00:00.000Z",hide_table_of_contents:!1,slug:"deploy-pangu-website-by-caddy"},prevItem:{title:"\u5982\u4f55\u8fdb\u884c\u76d8\u53e4\u5fae\u670d\u52a1\u7f51\u5173\u5f00\u53d1",permalink:"/blog/deploy-pangu-dev-framework-create-microservice-as-webapi"},nextItem:{title:"\u5982\u4f55\u57fa\u4e8e\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u5f00\u53d1\u5fae\u670d\u52a1\u5e94\u7528",permalink:"/blog/pangu-dev-framework-create-microservice"}},c={authorsImageUrls:[void 0]},d=[{value:"Caddy \u7279\u6027",id:"caddy-\u7279\u6027",level:2},{value:"Caddy \u5b9e\u6218",id:"caddy-\u5b9e\u6218",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"Fedora, RHEL/CentOS 8",id:"fedora-rhelcentos-8",level:4},{value:"RHEL/CentOS 7",id:"rhelcentos-7",level:4},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:3},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u57df\u540d\u89e3\u6790",id:"\u57df\u540d\u89e3\u6790",level:3}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Caddy 2 is a powerful, enterprise-ready, open source web server with automatic HTTPS written in Go."),(0,r.kt)("p",null,"\u2014 \u6458\u81ea ",(0,r.kt)("a",{parentName:"p",href:"https://caddyserver.com/"},"Caddy \u5b98\u7f51")),(0,r.kt)("h2",{id:"caddy-\u7279\u6027"},"Caddy \u7279\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7f3a\u7701\u542f\u7528HTTP/2 \u534f\u8bae\uff0c\u65e0\u9700\u4efb\u4f55\u914d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7f3a\u7701\u5168\u7ad9HTTPS\uff0c\u65e0\u9700\u4efb\u4f55\u914d\u7f6e\u3002\uff08\u81ea\u52a8\u7533\u8bf7\u548c\u7eed\u671f\u8bc1\u4e66\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u7b80\u5355\u53cb\u597d\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u652f\u6301\u5728\u7ebf\u914d\u7f6e API\u3002"),(0,r.kt)("li",{parentName:"ul"},"golang \u5f00\u53d1\uff0c\u51e0\u4e4e\u65e0\u4f9d\u8d56\uff0c\u90e8\u7f72\u7b80\u5355\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5145\u5f53 API \u6d41\u91cf\u7f51\u5173, \u53cd\u5411\u4ee3\u7406\u540e\u7aef\u591a\u4e2a Web \u8282\u70b9\uff08\u4e1a\u52a1\u7f51\u5173\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5929\u751f\u63d2\u4ef6\u67b6\u6784\uff0c\u793e\u533a\u63d2\u4ef6\u4e30\u5bcc\uff0c\u4e14\u81ea\u5b9a\u4e49\u63d2\u4ef6\u7b80\u5355\uff08\u5199\u4e2a\u63d2\u4ef6\u987a\u4fbf\u8e6d\u4e00\u4e0b golang \u7684\u70ed\u5ea6\uff09\u3002")),(0,r.kt)("h2",{id:"caddy-\u5b9e\u6218"},"Caddy \u5b9e\u6218"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Web Server \u6258\u7ba1\u9759\u6001\u8d44\u6e90\uff0c\u4ee5\u90e8\u7f72\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u9879\u76ee\u5b98\u7f51\u4e3a\u4f8b\u3002",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xiongchun/pangu-framework"},"https://github.com/xiongchun/pangu-framework"))),(0,r.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("h4",{id:"fedora-rhelcentos-8"},"Fedora, RHEL/CentOS 8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ dnf install 'dnf-command(copr)'\n$ dnf copr enable @caddy/caddy\n$ dnf install caddy\n")),(0,r.kt)("h4",{id:"rhelcentos-7"},"RHEL/CentOS 7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ yum install yum-plugin-copr\n$ yum copr enable @caddy/caddy\n$ yum install caddy\n")),(0,r.kt)("h3",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ systemctl start[stop|restart] caddy\n$ systemctl reload caddy # \u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\n$ systemctl status caddy # \u67e5\u770b\u8fd0\u884c\u72b6\u6001\n")),(0,r.kt)("h3",{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# vi /etc/caddy/Caddyfile\npangu.pulanit.com {\n        # Set this path to your site's directory.\n        root * /var/www/pangu\n        encode gzip\n        # Enable the static file server.\n        file_server\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u4e0a\u4f20\u5230\u76ee\u5f55\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"/var/www/pangu"),"\u3002")),(0,r.kt)("h3",{id:"\u57df\u540d\u89e3\u6790"},"\u57df\u540d\u89e3\u6790"),(0,r.kt)("p",null,"\u57df\u540d\u89e3\u6790\u5730\u5740\u5fc5\u987b\u548c\u4e0a\u8ff0\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u57df\u540d\u4fdd\u6301\u4e00\u81f4\u5373\u53ef\u3002\u5c1d\u8bd5\u8bbf\u95ee\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xiongchun/pangu-framework"},"https://github.com/xiongchun/pangu-framework"),"\u3002\u53ef\u89c1\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u7f51\u7ad9\u81ea\u52a8\u5f00\u542f\u4e86HTTPS"),"\u3002"))}u.isMDXComponent=!0}}]);