---
title: 快速搭建 Element Plus 开发脚手架
authors: [xiongchun]
tags: [客户端开发,Web, Element Plus]
date: 2020-01-9
hide_table_of_contents: false
slug: element-plus-webpack
---

[Element Plus](https://element-plus.gitee.io/zh-CN) 是基于 Vue 3，面向设计师和开发者的 UI 组件库。

<!--truncate-->

本文介绍搭建其开发脚手架的方式。

- 官方建议的基于 vite 的开发模版。[获取模版代码](https://github.com/element-plus/element-plus-vite-starter)  &nbsp;&nbsp;&nbsp;[在线示例效果](https://vite-starter.element-plus.org/)
- 基于 webpack 的开发模版。我自己习惯用这种，本文也重点介绍这种方式。

### 初始化项目
第一步：需要预先安装 [Node.js®](https://nodejs.org/zh-cn/) 环境。  
(*Node.js® 是一个开源、跨平台的 JavaScript 运行时环境。*) 安装完成后顺便设置淘宝镜像源。
```shell
npm config set registry https://registry.npm.taobao.org
```

第二步：安装 vue-cli，创建工程模版：element-plus-webpack-starter。
```shell
npm install -g @vue/cli
vue create element-plus-webpack-starter
```

### 安装 Element Plus
```shell
npm install element-plus --save
```

### 资源依赖
共有2种资源依赖方式。
- 完整引入  
如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。
- 按需导入  
如果你想控制打包文件大小那就需要使用额外的插件来按需导入要使用的组件。可自动导入或手工导入，[详见官方文档](https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5)。

本文介绍下完整引入的例子。修改 main.js 文件。
```jsx
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```

### 使用验证
为了验证我们安装是否成功，可以将如下 ElButton 组件插入页面 HelloWorld.vue 查看效果。
```jsx
<el-button type="primary">Element Plus 安装成功</el-button>
```

启动工程，查看效果如下图所示。
```shell
npm run serve
```

![element-plus-webpack](/resources/doc/52-elementplus.png)

### 编译打包
```shell
npm run build
```
静态资源文件输出文件夹 dist/ 。
