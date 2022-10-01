---

# 默认为文件名称
title: 

tags:
  - Comet
  - EventSource

# 类别中已包含文件夹名称
categories:

description: 短轮询、长轮询的区别，HTTP 流怎么实现 Comet，EventSource 实现服务端推送，它与 WebSocket 有什么区别

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-16 14:35:30
updateTime:
 
# 默认随机
img: 

# 目录
toc: true

# 评论
comment: true

# 发布
publish: true

---

## 短轮询

客户端每隔一段时间向服务器发起一次请求

```js
function request(url, data, callback) {
  const xhr = new XMLHttpRequest()
  xhr.open("get", url)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback && callback(xhr.responseText)
      }
    }
  }
  xhr.send(data)
}

setInterval(() => request(url, data, callback), 1000)
```

## 长轮询

页面向服务器发起一个请求，服务器一直保持 tcp 连接打开，知道有数据可发送。发送完数据后，页面关闭该连接，随即又发起一个新的服务器请求。

服务器如果暂时没有数据跟新时会将本次请求 hold 住，直到有数据跟新时才发送数据，断开连接

```js
function request(url, data, callback) {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback && callback(xhr.responseText)
        xhr.open("get", url) // 处理完本次跟新后再次发送请求
        xhr.send(data)
      }
    }
  }
  xhr.open("get", url)
  xhr.send(data)
}

request(url, data, callback)
```

短轮询和长轮询的区别是：短轮询中服务器对请求立即响应，而长轮询中服务器等待新的数据到来才响应，因此实现了服务器向页面推送实时，并减少了页面的请求次数。

## hTTP 流

HTTP流 在页面整个生命周期内只使用**一个HTTP连接**，即页面向浏览器发送一个请求，而服务器保持 tcp 连接打开，然后不断向浏览器发送数据

```js
function request(url, data, callback) {
  const xhr = new XMLHttpRequest()
  xhr.open("get", url)
  let lastSize = 0
  xhr.onreadystatechange = () => {
    if (xhr.readyState >= 3) {
      const newData = xhr.responseText.slice(lastSize)
      lastSize = xhr.responseText.length
      callback && callback(newData)
    }
    if (xhr.readyState === 4) {
      request(url, data, callback)
    }
  }
  xhr.send(data)
}

request(url, data, callback)
```

服务端不断地向客户端发送数据

## EventSource

EventSource 的官方名称应该是 Server-sent events（缩写SSE）服务端派发事件，EventSource 基于http协议只是简单的单项通信，实现了服务端推的过程，客户端无法通过 EventSource 向服务端发送数据

### 与 webSocket 区别

- webSocket 基于 TCP 协议，EventSource基于 http 协议。
- EventSource 是**单向通信**，而 websocket 是**双向通信**。
- EventSource只能发送**文本**，而websocket支持发送**二进制数据**。
- 在实现上EventSource比websocket更简单。
- EventSource有自动重连接（不借助第三方）以及发送随机事件的能力。
- websocket的资源占用过大EventSource更轻量。
- websocket可以跨域，EventSource基于http跨域需要服务端设置请求头。

### 使用

客户端中：

```js
// 注意同源
const source = new EventSource(url)

source.onopen = function (event) {
  
}

// 监听未命名事件
source.onmessage = function (event) { 
  console.log(event.data)
}

// 监听指定类型的事件（可以监听多个）
source.addEventListener("myEve", function (event) {
  console.log("myEve", event.data)
})

source.onerror = function (error) {

}

```

服务器中：

```js
const fs = require('fs')
const express = require('express') // npm install express
const app = express()
 
app.get( url, (ewq, res) => {
  // 根据 EventSource 规范设置报头
  res.writeHead(200, {
    "Content-Type": "text/event-stream", // 规定把报头设置为 text/event-stream
    "Cache-Control": "no-cache" // 设置不对页面进行缓存
  })
  
  // 用write返回事件流，事件流仅仅是一个简单的文本数据流，每条消息以一个空行(\n)作为分割
  
  // 未命名事件 onmessage
  res.write('data:' + '消息内容1' + '\n\n')
  
  // 命名事件
  res.write(  
    'event: myEve' + '\n' +
    'data:' + '消息内容2' + '\n' +
    'retry:' + '2000' + '\n' +
    'id:' + '12345' + '\n\n'
  )

})
 
// 可以配置 nginx 反向代理
app.listen(6788, () => {
  console.log(`server runing on port 6788 ...`)
})
```



















