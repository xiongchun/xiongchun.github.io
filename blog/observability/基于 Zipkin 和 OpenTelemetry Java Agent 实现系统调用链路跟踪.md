---
title: 基于 Zipkin 和 OpenTelemetry Java Agent 实现系统调用链路跟踪
authors: [xiongchun]
tags: [可观测性, 服务端开发]
date: 2023-7-16
hide_table_of_contents: false
slug: observability/zipkin-opentelemetry-java-agent-tracing-quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

本文介绍如何基于 [Zipkin](https://github.com/openzipkin/zipkin) 和 [OpenTelemetry Java Agent](https://github.com/open-telemetry/opentelemetry-java-instrumentation) 搭架一个分布式链路调用跟踪的系统。它可以帮助我们有效收集一个请求调用链路过程并对链路节点数据进行分析和查找。可以结合 TraceID 和 Log 系统对问题根因进行溯源。同类竞品还有 Uber 开源的 [Jaeger](https://www.jaegertracing.io/)，感兴趣的同学可以自行研究。

<!--truncate-->

## 背景

当前大部分系统都基于微服务模式开发，调用关系复杂多变，Observability（可观测性）就显得尤为重要。Observabilit 能让我们清晰的感知到系统当前的运行状态以及它曾经发生了什么。当有故障发生时，我们也可以借助 Observabilit 系统有效的快速定位问题根因并完成修复（这点尤其重要）。Observabilit 主要包括 traces、metrics 和 logs。今天，我们主要讨论 **traces**。

> 业界把 Observability 翻译为 “可观测性”，本人略感生硬。本站相关文档将直接使用 Observability 单词，不再做中文对照翻译。

## Zipkin 系统架构图

想要看明白 Zipkin 的全貌和工作原理，我们必须搞一个架构图出来。如下图所示。

<img width="600"
  src={require('/resources/doc/54-zipkin.png').default}
  alt="Zipkin系统架构图" />

:::info 看图说话
The component in an instrumented app that sends data to Zipkin is called a Exporter. Exporter send trace data via one of several transports to Zipkin collectors, which persist trace data to storage. Later, storage is queried by the API to provide data to the UI.
:::

#### Exporter

指通过Agent或者SDK方式嵌入到了应用中采集并向 Collector 发送 Telemetry 数据能力的组件。Telemetry Data (traces、metrics 和 logs) 数据通过这个 Exporter 发送出去。

#### Transport

主要支持三种遥测数据传输模式。HTTP、MQ（ActiveMQ、Kafka、RabbitMQ）、Scribe（NettyScribeServer）。

#### Collector

Once the trace data arrives at the Zipkin collector daemon, it is validated, stored, and indexed for lookups by the Zipkin collector.

#### Storage

数据存储方案。目前支持 4 种。内存模式、MySQL、ElasticSearch、Cassandra。后期有可能会支持 ClickHouse。内存模式只能用于开发测试、MySQL模式也只能用于开发测试和小规模生产体验。

#### API（Query Service）

Once the data is stored and indexed, we need a way to extract it. The query daemon provides a simple JSON API for finding and retrieving traces. The primary consumer of this API is the Web UI.

#### WebUI

The web UI provides a method for viewing traces based on service, time, and annotations.

## 安装 Zipkin 服务端

<Tabs>
<TabItem value="Java" label="Java">

```shell
curl -sSL https://zipkin.io/quickstart.sh | bash -s
java -jar zipkin.jar
```
</TabItem>

<TabItem value="Docker" label="Docker">

```shell
docker run -d -p 9411:9411 openzipkin/zipkin
```

</TabItem>

<TabItem value="Running from Source" label="Running from Source">

```shell
# get the latest source
git clone https://github.com/openzipkin/zipkin
cd zipkin
# Build the server and also make its dependencies
./mvnw -DskipTests --also-make -pl zipkin-server clean install
# Run the server
java -jar ./zipkin-server/target/zipkin-server-*exec.jar
```
</TabItem>
</Tabs>

为了快速体验，我们使用第一种安装方式：`java -jar zipkin.jar` 直接启动。这种模式是以内存存储你是启动的，不需要配置后端存储方案。启动后访问：[http://127.0.0.1:9411/zipkin](http://127.0.0.1:9411/zipkin)。

## 安装 Exporter

基于 OpenTelemetry Automatic Instrumentation 模式为例实现业务系统的数据遥测数据采集。

#### 下载 Agent 安装包

从 opentelemetry-java-instrumentation 官方版本发布页面找到最新的安装包下载。[opentelemetry-javaagent.jar
](https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases)

#### 将 Agent 挂载的业务应用上并启动

```jsx
java -javaagent:/Users/xc/apps/agent/opentelemetry-javaagent.jar \
     -Dotel.service.name=your-service-name \
     -Dotel.traces.exporter=zipkin \
     -Dotel.exporter.zipkin.endpoint=http://127.0.0.1:9411/api/v2/spans \
     -jar myapp.jar
```

> 上述配置是通过 http 协议的方式来采集 Trace 数据，但实际生产环境建议使用 MQ 方式来采集。相关配置查阅 Zipkin 文档。

## 无图无真相

完成如上配置后，当我们操作业务系统就会有相应的链路跟踪数据进入到Zipkin。如下图所示：

![Zipkin分布式链路跟踪图](/resources/doc/55-zipkin.png)