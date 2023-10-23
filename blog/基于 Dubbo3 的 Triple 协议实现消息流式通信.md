---
title: 基于 Dubbo3 的 Triple 协议实现消息的流式通信
authors: [xiongchun]
tags: [Dubbo3, Triple, 消息推送, 服务端开发]
date: 2023-7-20
hide_table_of_contents: false
slug: dubbo/triple/stream_push
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Apache Dubbo](https://cn.dubbo.apache.org/en/) 的大版本 Dubbo3 发布有一段时间了。最近花时间看了一下，最为亮眼的就是推出了全新的基于 HTTP/2 且完全兼容 gRPC 的 Triple 通信协议。 Triple 协议使用 Protocol Buffers 作为序列化格式，但 Triple 实现并不绑定 IDL，比如你可以直接使用 Java Interface 定义和发布 Triple 服务。这想必是习惯了面向 Java 接口编程的用户的福音啊，否则每个服务都得去定义一个 IDL 的话就太繁琐了。Triple 协议完全兼容 gRPC 的意思就是说，Triple 消费端可以直接调用注册到 Dubbo 服务中心的 gRPC 提供者，gRPC的消费端也可以直接调用 Triple 提供者。（注意：Triple 协议自身并不依赖 gRPC, 只是协议实现上兼容了 gRPC 规范，Triple 仅依赖 protobuf-java 做序列化）
<!--truncate-->

> 目前，Dubbo3 官方支持的通信协议有：基于 HTTP/2 的 Triple 协议 和 基于 TCP 的 Dubbo2 协议。除此之外，Dubbo 框架支持任意第三方通信协议，如官方支持的 gRPC、Thrift、REST、JsonRPC、Hessian2 等。更多协议可以通过自定义扩展实现。这对于微服务实践中经常要处理的多协议通信场景非常有用。


## Triple 请求模型

- UNARY：传统的 Request/Response 一元调用。
- SERVER_STREAM：服务端流推送。（服务端像客户端使用流的方式推送数据）
- CLIENT_STREAM：客户端流推送。（客户端像服务端使用流的方式推送数据）
- BIDIRECTIONAL_STREAM：双向流推送。（客户端和服务端互相使用流的方式推送数据）

> 注：CLIENT_STREAM 和 BIDIRECTIONAL_STREAM 是同一个实现方式，从后面的示例代码可以看出来。

## Stream 流式通信应用场景

- 接口需要发送大量数据。这些数据无法被放在一个 RPC 的请求或响应中，需要分批发送，但应用层如果按照传统的多次 RPC 方式无法解决顺序和性能的问题。
- 流式场景。数据需要按照发送顺序处理, 数据本身是没有确定边界的。
- 推送类场景，多个消息在同一个调用的上下文中被发送和处理。

## 示例代码

> 本实例使用接口声明的方式来定义服务，不使用 .proto IDL 文件。

### 相关组件依赖版本

- SpringBoot: 2.7.16 或 3.X
- Nacos Server: 2.2.3
- nacos-config-spring-boot-starter: 2.2.3
- dubbo-spring-boot-starter: 3.2.7

### 关键配置信息

<Tabs>
<TabItem value="Provider 配置" label="Provider 配置">

```jsx
dubbo:
  registry:
    address: nacos://10.141.17.143:8848?namespace=dev
    username: nacos
    password: nacos
  protocol:
    name: tri
    port: -1
```
</TabItem>

<TabItem value="Consumer 配置" label="Consumer 配置">

```jsx
dubbo:
  registry:
    address: nacos://10.141.17.143:8848?namespace=dev
    username: nacos
    password: nacos
  protocol:
    name: tri
    port: -1
  application:
    qos-port: 22224
  consumer:
    check: false
```
</TabItem>
</Tabs>

### 服务接口定义

```jsx
// UNARY 传统一元调用（request / response）
String greet(String request);

//SERVER_STREAM 服务端推送
void greetServerStream(String request, StreamObserver<String> response);

// BIDIRECTIONAL_STREAM / CLIENT_STREAM 客户端流推送和双向流推送
// !注意 入参为响应流 response；出参为请求流 request
StreamObserver<String> greetStream(StreamObserver<String> response);
```

### 服务接口实现（Provider端）

```jsx
@DubboService(version = "1.0", group = "temp_group")
public class GreetServiceImpl implements GreetService {
    //public static Map<String, StreamObserver<String>> observerMap = Maps.newHashMap();

    // UNARY调用 REQUEST/RESPONSE
    @Override
    public String greet(String request) {
        return "Hi, " + request;
    }

    // 服务器端响应流推送
    @Override
    public void greetServerStream(String request, StreamObserver<String> response) {
        for (int i = 0; i < 10; i++) {
            response.onNext("响应流：hello, " + request);
        }
        // 如果想持续的对客户端推送，则别关闭这个response流，把response保存下来，在需要推送数据的时候触发response.onNext(）方法即可。
        response.onCompleted();
    }

    // 请求流或双向流推送
    @Override
    public StreamObserver<String> greetStream(StreamObserver<String> response) {
        // 这里 new 的这个是请求流
        return new StreamObserver<String>() {
            @Override
            public void onNext(String data) {
                response.onNext("响应流: " + data);
            }
            @Override
            public void onError(Throwable throwable) {
                throwable.printStackTrace();
            }
            @Override
            public void onCompleted() {
                // 检测到 Request 关闭则把 Response 也关闭，BI 双向流结束。
                response.onCompleted();
            }
        };
    }
}
```

### 服务接口调用（Consumer端）

```jsx
@DubboReference(version = "1.0", group = "temp_provider")
private GreetService tempService;

// 传统一元调用
@RequestMapping ("/greet")
public void greet(HttpServletRequest request) {
    String response = tempService.greet("HY");
    log.info(response);
}

// 服务端推送
@PostMapping("/greetServerStream")
public void greetServerStream(HttpServletRequest request) {
    String clientId = System.getProperty("clientId", "N/A");
    tempService.greetServerStream(clientId, new StdoutStreamObserver<>("greetServerStream"));

}

// 客户端推送 & 双向推送
@PostMapping("/greetStream")
public void greetStream() {
    final StreamObserver<String> request = tempService.greetStream(new StdoutStreamObserver<>("greetStream"));
    for (int i = 0; i < 10; i++) {
        request.onNext("请求流消息：" +  "Data From Client");
    }
    request.onCompleted();
}

@Slf4j
static class StdoutStreamObserver<T> implements StreamObserver<T>{

    private final String name;

    public StdoutStreamObserver(String name){
        this.name = name;
    }
    @Override
    public void onNext(T data) {
        log.info("客户端收到来自服务端的推送信息:{}", data);
    }
    @Override
    public void onError(Throwable throwable) {
        log.error(throwable.getMessage(), throwable);
    }
    @Override
    public void onCompleted() {
        log.info("{} stream completed", name);
    }
}
```

## 总结 Q&A

#### 1.Triple 协议使用 protobuf 进行序列化，发布服务需要定义 .proto IDL 文件吗？
答：可以这么做，但是没必要。这样比较繁琐也不符合我们Java面向接口的开发习惯。事实上，Dubbo框架已经做了包装，我们可以直接定义 Java 接口使用 POJO 的方式来发布服务。那什么时候才需要定义 .proto IDL 文件呢？当需要异构跨语言交互调用的时候才需要。（上述说法同时适用 Unary 调用和 Stream 调用）

#### 2.上述实例中的流式推送都是使用 for 迭代输出模拟流式数据的推送，迭代结束直接关闭流。如何实现实际业务场景中的无边界、定期等的流式推送功能？
答：只需要保存请求流或响应流对象，不调用 onComplete() 方法，然后就可以在想推送数据的时候调用其对应的onNext()方法来实现请求流或响应流的数据推送功能。（比如：当某个事件发生时，某个定时任务执行时等）

## 源代码获取

本实例为 [盘古开发框架](https://pangu.pulanit.com) 范例集合中的一组范例。您可以通过如下链接获取全部范例源代码。  
[https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-dubbo-triple](https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-dubbo-triple)
