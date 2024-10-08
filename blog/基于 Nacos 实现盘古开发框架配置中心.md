---
title: 基于 Nacos 实现盘古开发框架配置中心
authors: [xiongchun]
tags: [服务端开发,盘古开发框架,Nacos]
date: 2019-8-18
hide_table_of_contents: false
slug: pangu-dev-framework-configuration-center
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

配置中心作为分布式微服务开发的标配组件，业界已有很多成功的典型应用，如：携程 Apollo 分布式配置中心、百度 Disconf 分布式配置中心等。[盘古开发框架](https://github.com/xiongchun/pangu-framework) 配置中心基于阿里的 [Nacos](https://nacos.io/en-us/index.html) 提供动态配置服务。

<!--truncate-->

:::tip
鉴于文档可读性，盘古教程和参考范例都使用的本地配置的方式。本文将介绍如何基于配置中心让盘古应用获得动态配置服务的能力。在实际应用中，如无特殊需求我们一般都建议采用配置中心的方式来开发。
:::

## 配置中心介绍

Nacos 动态配置服务可以让你以中心化、外部化和动态化的方式管理所有环境的应用配置和服务配置。动态配置消除了配置变更时重新部署应用和服务的需要，让配置管理变得更加高效和敏捷。配置中心化管理让实现无状态服务变得更简单，让服务按需弹性扩展变得更容易。它还提供了一个简洁易用的 UI 帮助你管理所有的服务和应用的配置，包括配置版本跟踪、金丝雀发布、一键回滚配置等一系列开箱即用的配置管理特性，帮助你更安全地在生产环境中管理配置变更和降低配置变更带来的风险。

<details>
  <summary><b>快速 QA：</b>前文中 Nacos 用于服务注册，为什么配置中心也是它？</summary>
  <div>
Nacos 是构建以“服务”为中心的现代应用架构 (例如微服务范式、云原生范式) 的服务基础设施。致力于发现、配置和管理微服务，完美的整合了配置中心和服务注册中心。因此，Nacos 不仅是服务注册中心也是功能完善的分布式配置中心。
  </div>
</details>

<details>
  <summary><b>快速 QA：</b>单体分层架构的开发模式也可以使用配置中心进行配置吗？</summary>
  <div>
  配置中心是分布式微服务架构开发环境下强烈建议的必选标配组件。但如果你是基于单体分层架构开发，配置中心也是一样可以使用的。对于这些基础能力，无论是微服务还是单体，盘古框架都做了完美适配，只需要依赖 `pangu-spring-boot-starter` 就可以实现开箱即用。
  </div>
</details>

### 相关名词解释
#### 命名空间
用于进行租户粒度的配置隔离。不同的命名空间下，可以存在相同的 Group 或 Data ID 的配置。Namespace 的常用场景之一是不同环境的配置的区分隔离，例如开发测试环境和生产环境的资源（如配置、服务）隔离等。
#### 配置管理
系统配置的编辑、存储、分发、变更管理、历史版本管理、变更审计等所有与配置相关的活动。
#### 配置项
一个具体的可配置的参数与其值域，通常以 param-key=param-value 的形式存在。例如我们常配置系统的日志输出级别（ logLevel=INFO|WARN|ERROR ）就是一个配置项。
#### 配置集
一组相关或者不相关的配置项的集合称为配置集。在系统中，一个配置文件通常就是一个配置集，包含了系统各个方面的配置。例如，一个配置集可能包含了数据源、线程池、日志级别等配置项。
#### 配置集ID
Nacos 中的某个配置集的 ID。配置集 ID 是组织划分配置的维度之一。一个系统或者应用可以包含多个配置集，每个配置集都可以被一个有意义的名称标识。（比如：使用应用名称作为 Data ID）
#### 配置快照
Nacos 的客户端 SDK 会在本地生成配置的快照。当客户端无法连接到 Nacos Server 时，可以使用配置快照显示系统的整体容灾能力。配置快照类似于 Git 中的本地 commit，也类似于缓存，会在适当的时机更新，但是并没有缓存过期（ expiration ）的概念。

### 本地配置与配置中心对比
- **本地配置（配置文件）**
  -  配置分散、与应用耦合、静态配置 
  - 无环境隔离无版本支持，容易引发生产事故 
  - 无安全审计 
- **配置中心**
  - 配置集中、外部化、动态化实时生效
  - 多环境隔离多版本支持，较安全
  - 配置权限控制、操作变更审计

## 配置中心实战
下面介绍一个使用配置中心的例子。其它基于本地配置的范例都可以参考这个例子改为基于配置中心的动态配置。

### 安装相关盘古模块

<Tabs>
<TabItem value="parent" label="盘古 Parent">

```jsx
<parent>
	<groupId>com.gitee.pulanos.pangu</groupId>
	<artifactId>pangu-parent</artifactId>
	<version>latest.version.xxx</version>
	<relativePath/>
</parent>
```
</TabItem>
<TabItem value="dependency1" label="基础模块">

```jsx
<dependency>
    <groupId>com.gitee.pulanos.pangu</groupId>
    <artifactId>pangu-spring-boot-starter</artifactId>
</dependency>
```
</TabItem>

</Tabs>

### 本地配置
基于配置中心的配置也是需要一个本地配置文件的，但这个配置文件是固定的模版格式。用于配置一些与配置中心进行数据通信相关的基础类参数。如下所示。

```jsx
spring.application.name=pangu-examples-config-remote-nacos
spring.profiles.active=${spring.profiles.active:dev}
nacos.config.bootstrap.enable=true
nacos.config.bootstrap.log-enable=true
nacos.config.auto-refresh=true
nacos.config.namespace=${nacos.namespace:pangu-dev}
nacos.config.server-addr=${nacos.server-addr:127.0.0.1:8848}
#nacos.config.type=yaml
nacos.config.type=properties
nacos.config.data-id=${spring.application.name}
```
#### 关键配置项说明
- nacos.config.auto-refresh  
配置中心的配置变更后自动刷新到配置客户端 
- nacos.config.namespace   
命名空间（注意是对应命名空间的 ID 值），建议使用命名空间来区分部署环境 
- nacos.config.server-addr  
配置中心通信地址 
- nacos.config.type  
配置中心使用的配置格式（ properties、yaml 等）   
- nacos.config.data-id   
配置中心某配置集的唯一标识 

### 配置中心配置
在进行完上述本地配置后，我们的应用就能和配置中心进行数据同步了。现在根据本地配置信息在配置中心创建相对应的命名空间和同名 data-id 的配置集。
<details>
  <summary><b>快速 QA：</b>客户端是如何与 Nacos 配置中心进行数据同步的？</summary>
  <div>
  客户端通过 http 长轮询机制拉取 nacos server 端的配置数据，并会在本地创建配置快照（容灾）。在长轮询的超时等待过程中，nacos server 端如果配置发生改变，会主动将配置写入 response 并返回，模拟了“推送”效果。所以客户端能实时感知配置中心的配置变化。
  </div>
</details>

#### 创建命名空间
在 Nacos 管理系统的『命名空间』菜单新建 ID 为 `pangu-dev` 的命名空间（此 ID 即为上述配置项 nacos.config.namespace 的值）。如下图所示。

![创建命名空间](/resources/doc/5-pangu-framework-nacos.png)

#### 创建配置集
一个命名空间下可以创建多组配置集，每个配置集由 data-id 来唯一标识。在 Nacos 管理系统的『配置管理-配置列表』菜单新建 data-id 值为 `pangu-examples-config-remote-nacos` 的配置集。如下图所示。
<Tabs>
<TabItem value="img1" label="配置集列表">

![创建配置集](/resources/doc/6-pangu-framework-nacos.png)
</TabItem>
<TabItem value="img2" label="新增/编辑配置集">

![创建配置集](/resources/doc/7-pangu-framework-nacos.png)
</TabItem>

</Tabs>

### 启动入口

```jsx
@SpringBootApplication
public class NacosConfigurationApplication {
	public static void main(String[] args) {
		PanGuApplicationBuilder.init(NacosConfigurationApplication.class).run(args);
	}
}
```

### 使用配置
至此，我们就可以在应用中使用 `@NacosValue` 注解来获取配置项了。如下代码所示。

```jsx
/**
 * 开启 autoRefreshed配置项, 可以实现参数的动态刷新
 */
@NacosValue(value = "${demo.app.id}")
private String appId;
@NacosValue(value = "${demo.app.name}", autoRefreshed = true)
private String appName;
@NacosValue(value = "${demo.app.author}", autoRefreshed = true)
private String appAuthor;
```

<details>
  <summary><b>快速 QA：</b>范例只演示了几个简单的变量参数，数据库等中间件的连接配置信息可以放配置中心吗？</summary>
  <div>
当然是可以的，干就完了。
  </div>
</details>

## 本文相关范例源码
- [pangu-examples-config-remote-nacos](https://gitee.com/xiong-chun/pangu-framework/tree/master/pangu-examples/pangu-examples-config-remote-nacos)：配置中心参考范例
- [pangu-examples-log-dynamic](https://gitee.com/xiong-chun/pangu-framework/tree/master/pangu-examples/pangu-examples-log-dynamic)：基于配置中心的日志级别热切换参考范例