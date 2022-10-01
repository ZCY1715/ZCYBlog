---

# 默认为文件名称
title: 

tags:

# 类别中已包含文件夹名称
categories:

description: 全双工通信协议 websocket 怎么使用，后端主动向前端发送数据

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-12 14:54:12
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

# WebSocket

## 构造函数

```js
const webSocket = new WebSocket(url [, protocols]);
```

`url`：要连接的 URL；这应该是 WebSocket 服务器将响应的 URL

`protocols`：一个协议字符串或者一个包含协议字符串的数组。这些字符串用于指定子协议，这样单个服务器可以实现多个 WebSocket 子协议（可能希望一台服务器能够根据指定的协议（`protocol`）处理不同类型的交互）。如果不指定协议字符串，则假定为空字符串



## 属性

`binaryType`：返回 websocket 连接所传输二进制数据的类型

- "blob"
- "arraybuffer"

`bufferedAmount`：是一个**只读**属性，用于返回已经被 send() 方法放入队列中但还没有被发送到网络中的数据的字节数。一旦队列中的所有数据被发送至网络，则该属性值将被重置为 0。但是，若在发送过程中连接被关闭，则属性值不会重置为 0。如果你不断地调用 send()，则该属性值会持续增长

`onClose` | `onmessage` | `onopen` | `onerror`：回调函数

也可以使用 `addEventListener` 添加

`readyState`：当前连接的状态，返回值为上述常量

- `CONNECTING`：1
- `OPEN`：2
- `CLOSING`：3
- `CLOSED`：4

`url`：返回值为当构造函数创建 WebSocket 实例对象时 URL 的**绝对路径**



## 方法

`close()`：关闭当前链接

`send()`：对要传输的数据进行排队



























