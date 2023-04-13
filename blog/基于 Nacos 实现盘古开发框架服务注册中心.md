---
title: 基于 Nacos 实现盘古开发框架服务注册中心
authors: [xiongchun]
tags: [服务端开发,盘古开发框架,Nacos]
date: 2019-7-15
hide_table_of_contents: false
slug: pangu-dev-framework-service-discovery-center
---

注册中心是分布式微服务开发的标配组件，[盘古开发框架](https://pulanos.gitee.io/pangu-framework) 服务注册中心借助 [Nacos](https://nacos.io/en-us/index.html) 提供动态服务注册和服务发现能力。

<!--truncate-->

## 注册中心介绍

服务注册中心是以服务为中心架构，实现服务化管理的核心组件。类似于目录服务的作用，主要用来存储服务实例信息，譬如提供者地址、路由信息等。服务注册中心是微服务架构中必选的标配基础设施之一。

### 相关名词解释
#### 注册中心
存储服务实例和服务负载均衡策略的系统。
#### 服务注册
将服务实例地址和元数据信息写入服务注册中心的过程。
#### 服务发现
在计算机网络上，使用服务名对服务的实例地址和元数据进行探测，并以预先定义的接口提供给客户端进行查询。
#### 健康检查
以指定方式检查服务下挂载实例的健康度，从而确认该实例是否能提供服务。根据检查结果，实例会被判断为健康或不健康。对服务发起解析请求时，不健康的实例不会返回给客户端。

### 注册中心图示
![盘古开发框架注册中心图示](/resources/doc/8-pangu-framework-nacos.png)

## 注册中心实战
请参考 [如何基于盘古开发框架开发微服务应用](pangu-dev-framework-create-microservice) 博文，那里已经详细完整的讲解了服务注册&服务发现的相关内容。