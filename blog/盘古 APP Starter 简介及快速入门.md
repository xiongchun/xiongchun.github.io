---
title: 盘古 APP Starter 简介及快速入门
authors: [xiongchun]
tags: [服务端开发,盘古开发框架,客户端开发,APP]
date: 2023-1-2
hide_table_of_contents: false
slug: pangu-app-intro-quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '3px',
      color: '#fff',
      padding: '0.1rem',
      margin: '0.2rem'
    }}>
    {children}
  </span>
);

[盘古 APP Starter](https://pulanos.gitee.io/pangu-framework/app/intro) 是集成了 uni-app 内置组件、官方扩展组件和全面兼容 nvue 的 uni-app 生态框架 uView UI 的移动端多平台快速开发脚手架。用户可以基于此完成Android/IOS App、微信小程序、H5 应用的快速开发。（一次开发，针对不同平台编译发布版本）

<!--truncate-->

- **uni-app 介绍**  
[uni-app](https://uniapp.dcloud.net.cn) 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到 iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。

- **uView UI 介绍**  
[uView UI](https://www.uviewui.com/components/intro.html) 是全面兼容 nvue 的 uni-app 生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水。

- **HBuilderX 介绍**  
[HbuilderX](https://hx.dcloud.net.cn) 是一款免费的前端开发 IDE。uni-app 的多端编译部署能力依赖于它。所以，盘古 APP Starter 的标准开发工具也就是 HBuilderX。

## 搭建开发环境

### 工程结构说明
盘古 App 仓库代码路径：`pangu-framework/pangu-app-starter`。

### 开发环境搭建

由于 uni-app 依赖 HbuilderX，因此，我们开发盘古 APP 的 IDE 选择为 HbuilderX。

#### 导入模版工程

使用 HbuilderX「文件 -> 导入 -> 从本地目录导入」菜单，导入 pangu-app-starter 模版工程。

#### 安装依赖
> 安装依赖和启动需依赖npm。安装方法：[https://nodejs.org/zh-cn](https://nodejs.org/zh-cn/)

```shell
# 进入项目目录
cd pangu-framework/pangu-app-starter
# 安装依赖
npm i
```

#### H5 Web 浏览器调试启动
使用 HbuilderX「运行 -> 运行到浏览器 -> Chrome」菜单，启动工程并通过浏览器访问。如下图所示。

<img width="800"
  src={require('/resources/doc/pangu-app/12.png').default}
  alt="盘古 APP" />

#### 微信小程序模拟器调试启动

- 安装微信开发者工具。
- 使用 HbuilderX 「运行 -> 运行到小程序模拟器 -> 微信开发者工具」菜单，HbuilderX 会编译输出小程序应用并连接微信开发者工具启动调试。如下图所示。

<img width="800"
  src={require('/resources/doc/pangu-app/13.png').default}
  alt="盘古 APP" />

#### Android APP 真机调试启动

- 将 Android 手机用数据线与电脑连接，打开手机开发者调试模式。
- 使用 HbuilderX 「运行 -> 运行到手机或模拟器 -> 运行到 Android App 基座」菜单，HbuilderX 会将 Android 基座壳子安装到目标手机，并启动加载页面。如下图所示。

<img width="350"
  src={require('/resources/doc/pangu-app/1.jpeg').default}
  alt="盘古 APP" />

## 快速入门指南

### 配置底部导航菜单

> 以范例 APP 底部的「组件」导航菜单为例，说明如何配置首页底部的导航菜单。

#### 配置菜单节点信息

打开 pages.json 配置文件，找到 tabBar 节点。如下所示：

```json
"tabBar": {
  "color": "#303133",
  "selectedColor": "#529b2e",
  "borderStyle": "black",
  "backgroundColor": "#f4f4f5",
  "list": [{
   "pagePath": "pages/example/components",
   "iconPath": "static/common/img/nav/component.png",
   "selectedIconPath": "static/common/img/nav/component-selected.png",
   "text": "组件"
   }
   // ...其它菜单配置...
  ]
 }
```
#### 配置菜单路由信息
配置路径 pages/example/components 的路由信息。在 pages.json 配置文件中，找到 pages 节点。如下所示：

```json
	"pages": [ 
    //pages数组中第一项表示应用启动页
		{
			"path": "pages/example/components",
			"style": {
				"navigationBarTitleText": "组件"
			}
		}
    // ...其它路由配置...
  ]
```
该路由配置对应视图文件：pages/example/components.nvue。

### 新增业务模块页面路由
参考 pages.json 相关配置文件即可。

:::tip
更多关于 pages.json 的配置，请查阅 uni-app [相关文档](https://uniapp.dcloud.net.cn/collocation/pages.html)。
:::

## 部署运维参考

### 发布 H5 Web 应用
> 将工程发布为手机 H5 Web 应用部署到静态资源服务器，可通过微信/手机浏览器等访问。

- 使用 HbuilderX「发行 -> 网站 PC-Web 或手机 H5」菜单，编译成功后执行文件将会输出到 unpackage/build/dist/h5 目录下。将该目录下文件直接发布到 Web 服务器即可。
- 如下为发布成功的盘古 APP Starter 模板工程的 H5 Web 应用。 
> 微信或手机浏览器扫码访问
<img width="150" src={require('/resources/doc/pangu-app/18.png').default} alt="盘古 APP Starter" />

  > 电脑端浏览器模拟访问  
[https://pangu-app-starter.pulanit.com/h5.html](https://pangu-app-starter.pulanit.com/h5.html) 

### 发布微信小程序应用
> 请事先安装好微信开发者工具。[下载安装](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

##### 第一步：注册微信小程序账户
在微信 [公众平台](https://mp.weixin.qq.com) 注册小程序账户。（注意：一个邮箱地址注册一个微信小程序账户）。登录后根据提示生成微信小程序 AppID。（后续发布将会使用）

##### 第二步：编译输出小程序文件
- 使用 HbuilderX「发行 -> 小程序-微信」菜单，在弹出的对话框中填入上一步的 AppID。（注意：不要选择自动上传到微信平台选项。）如下图所示：
<img width="500"
  src={require('/resources/doc/pangu-app/14.png').default}
  alt="盘古 APP" />  

- 点击「发行」按钮后会开始编译小程序输出文件并自动打开微信开发者工具导入小程序文件。接着使用微信开发者工具的「上传代码」按钮，将小程序文件上传到微信公众平台。如下图所示：
<img width="600"
  src={require('/resources/doc/pangu-app/15.png').default}
  alt="盘古 APP" /> 

- 最后就是一个微信平台的代码审核、发布上线的流程即可，这里不再赘述。根据后台提示操作即可。
- 如下二维码是发布成功的盘古 APP Starter 模板工程的微信小程序示例。
> 微信扫码体验
<img width="150"
  src={require('/resources/doc/pangu-app/16.jpg').default}
  alt="盘古 APP" /> 

### 发布 Android APP 应用
> 将工程打包发布为原生 Android APP 应用。对于.vue 页面将使用 webview 渲染机制；如果使用 .nvue 页面(native vue 的缩写)，则使用原生渲染。

- 使用 HbuilderX 「运行 -> 原生APP-云打包」菜单，打开打包配置窗口。如下图所示为最便捷的配置窗口。（高级用法：自定义证书、自定义基座等可参考uni-app 和 HbuilderX 相关文档）
<img width="600"
  src={require('/resources/doc/pangu-app/17.png').default}
  alt="盘古 APP" /> 

- 点击「打包」按钮，IDE 将完成云端打包。打包结束后，.apk 安装包将输出到：unpackage/release/apk 目录。
- 如下是发布成功的盘古 APP Starter 模板工程的 Android 原生 APP 示例。 
> 手机浏览器扫码下载安装（微信扫码无效）
<img width="150" src={require('/resources/doc/pangu-app/19.png').default} alt="盘古 APP Starter" /> 

:::tip 提示
更多类型的应用发布方式请参阅 [uni-app](https://uniapp.dcloud.net.cn/) 和 [HbuilderX](https://hx.dcloud.net.cn/) 相关文档。
:::

## 盘古 APP Starter 截屏
如下为盘古 APP Starter 的部分截屏。完整体验请访问：[在线演示](https://pulanos.gitee.io/pangu-framework/online-demo-app)。

<Tabs>
<TabItem value="1" label="1">

<img width="350" src={require('/resources/doc/pangu-app/1.jpeg').default} alt="盘古 APP Starter" />
</TabItem>
<TabItem value="2" label="2">

<img width="350" src={require('/resources/doc/pangu-app/2.jpeg').default} alt="盘古 APP Starter" />
</TabItem>
<TabItem value="3" label="3">

<img width="350" src={require('/resources/doc/pangu-app/3.jpeg').default} alt="盘古 APP Starter" />
</TabItem>
<TabItem value="4" label="4">

<img width="350" src={require('/resources/doc/pangu-app/4.jpeg').default} alt="盘古 APP Starter" />
</TabItem>
<TabItem value="5" label="5">

<img width="350" src={require('/resources/doc/pangu-app/5.jpeg').default} alt="盘古 APP Starter" />
</TabItem>
<TabItem value="6" label="6">

<img width="350" src={require('/resources/doc/pangu-app/6.jpeg').default} alt="盘古 APP Starter" />
</TabItem>
<TabItem value="7" label="7">

<img width="350" src={require('/resources/doc/pangu-app/7.jpeg').default} alt="盘古 APP Starter" />
</TabItem>
<TabItem value="8" label="8">

<img width="350" src={require('/resources/doc/pangu-app/8.jpeg').default} alt="盘古 APP Starter" />
</TabItem>
<TabItem value="9" label="9">

<img width="350" src={require('/resources/doc/pangu-app/9.jpeg').default} alt="盘古 APP Starter" />
</TabItem>
<TabItem value="10" label="10">

<img width="350" src={require('/resources/doc/pangu-app/10.jpeg').default} alt="盘古 APP Starter" />
</TabItem>
<TabItem value="11" label="11">

<img width="350" src={require('/resources/doc/pangu-app/11.jpeg').default} alt="盘古 APP Starter" />
</TabItem>

</Tabs>

