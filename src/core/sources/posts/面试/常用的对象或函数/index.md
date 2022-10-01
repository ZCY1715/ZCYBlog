---

# 默认为文件名称
title: 

tags:
  - Blob
  - File  
  - ArrayBuffer
  - FileReader
  - TextDecoder
  - URL
  - MessageChannel

# 类别中已包含文件夹名称
categories:

description: 集合了很多常用的，但是又不能完全明白的对象和函数，包括 Blob, ArrayBuffer等等，整合学习一下

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-27 20:41:27
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

# Blob

Blob 对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成 ReadableStream 来用于数据操作

1. 构造

```js
const blob = new Blob( array, { type } )
```

`array`：一个由 **ArrayBuffer**, **ArrayBufferView**, **Blob**, **DOMString** 等对象构成的 Array ，或者其他类似对象的混合体，它将会被放进 Blob。**DOMStrings 会被编码为 UTF-8**

`type`：默认值为 ''，它代表了将会被放入到 blob 中的数组内容的 MIME 类型

2. 属性

`size`：包含数据的大小（字节）

`type`：所包含数据的 MIME 类型，未知为空字符串

3. 方法

`arrayBuffer()`：返回一个 Promise，转成 ArrayBuffer 类型

`text()`：返回一个 Promise，转成 UTF-8 格式的字符串

`stream()`：返回一个能读取 Blob 内容的 ReadableStream

`slice()`：返回截取后的新 Blob

# File

继承自 Blob，能够使用 Blob 的所有属性和方法

1. 构造

```js
const file = new File(array, name[, { type, lastModified }]);
```

`array | type`：同 Blob

`name`：定义文件名称

`lastModified`：所引用文件最后修改日期，默认为 `Date.now()`

2. 属性

`size | type`：同 Blob

`name | lastModified`：同构造函数中的字段

`lastModifiedDate`：lastModified 的 Date 对象

`webkitRelativePath`：文件路径、URL 相关，文件夹上传时会用到

# ArrayBuffer

**`ArrayBuffer`** 对象用来表示通用的、固定长度的原始二进制数据缓冲区

1. 构造

```js
new ArrayBuffer(length)
```

`length`：要创建的 `ArrayBuffer` 的大小，单位为字节

返回一个初始化内容为 0，总长度为 length 的 ArrayBuffer 对象

2. 属性

`length`：总长度

`byteLength`：内容长度

3. 方法

`isView()`：判断传入的参数值是否是一种 ArrayBuffer 视图（view）Int8Array、DataView 等等

`slice()`：截取

# FileReader

FileReader 对象允许 Web 应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据

其中 File 对象可以是来自用户在一个`<input>`元素上选择文件后返回的 FileList 对象，也可以来自拖放操作生成的  DataTransfer 对象，还可以是来自在一个HTMLCanvasElement上执行 mozGetAsFile() 方法后返回结果。

1. 构造

```js
const reader = new FileReader()
```

2. 属性

`readyState`：表示 FileReader 状态的数字。

- EMPTY(0)：还没有加载任何数据
- LOADING(1)：数据正在被加载
- DONE(2)：已完成全部的读取请求

`result`：文件的内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪个方法来启动读取操作

3. 事件

`onabort`：被终止

`onerror`：发生错误

`onload`：读取完成

`onloadstart`：开始读取

`onloadend`：读取操作结束，要么成功，要么失败

`onprogress`：读取进度

```js
reader.onprogress = e => {
    if(e.lengthComputable){
        const progress = e.loaded / e.total
    }
}
```

4. 方法

`abort()`：中断

`readAsArrayBuffer()`：读取格式为 ArrayBuffer

`readAsBinaryString()`：读取文件的原始二进制数据

`readAsDataURL()`：读取格式为 Base64

`readAsText()`：读取格式为 Text

# TextDecoder

TextDecoder 接口表示一个文本解码器，一个解码器只支持一种特定文本编码，例如 utf-8、iso-8859-2、koi8、cp1261，gbk 等等。解码器将字节流作为输入，并提供代码点流作为输出。

```js
const textDecoder = new TextDecoder('utf-8' /* 默认 */)
```

方法：

```js
textDecoder.decode()
// 返回一个DOMString，其中包含使用特定 TextDecoder 对象的方法解码的文本
```

# URL

**URL **接口用于解析，构造，规范化和编码 URL。它通过提供允许您轻松阅读和修改 URL 组件的属性来工作。通常，通过在调用 URL 的构造函数时将 URL 指定为字符串或提供相对 URL 和基本 URL 来创建新的 URL 对象。然后，您可以轻松读取 URL 的已解析组成部分或对 URL 进行更改。

1. 构造

```
const url = new URL(str, base)
```

`str`：绝对 url 时，base 忽略；相对 url 时，基于 base

`base`：基础路径

2. 属性(可修改)

`protocol`：协议，"https:"

`hostname`：域名，"zcyblog.tk"

`port`：端口，"3000"

`host`：hostname + port，"zcyblog.tk:3000"

`origin`：protocol + hostname + port，"https:/ /zcyblog.tk:3000"

`pathname`：query 部分，"/detail/123456"

`search`：param 部分，? 开头，"?id=123456"

`searchParams`：URLSearchParams 对象

`hash`：# 开头，"#init"

`href`：完整 URL

3. 方法

`toString()`：返回 href

`createObjectURL(obj)`：返回一个 url ，指向唯一的 blob 链接。obj 是 `File` 对象、`Blob` 对象或者 `MediaSource` 对象

`revokeObjectURL(url)`：销毁由上方创建的链接对象，传入生成的 url

# MessageChannel

创建一个新的消息通道，并通过它的两个 MessagePort 属性发送数据

```js
const channel = new MessageChannel()

// channel.port1
// channel.port2
// 使用这两个 port 相互发送消息

channel.port1.postMessage() // 发给 port2

channel.port2.onMessage = () => {} // 接收 port1
```

# navigator.sendBeacon()

主要用于将统计数据发送到 Web 服务器，同时避免了用传统技术（如：XMLHttpRequest）发送分析数据的一些问题。

```js
navigator.sendBeacon(url)
navigator.sendBeacon(url, data)
```

`data`：ArrayBuffer | ArrayBufferView | Blob | DOMString | FormData | URLSearchParams

当用户代理成功把数据加入传输队列时，sendBeacon() 方法将会返回 `true`，否则返回 `false`

**监听 `visibilitychange` 事件，在页面卸载或切换Tab标签页时请求**

```js
document.addEventListener('visibilitychange', function logData() {
  if (document.visibilityState === 'hidden') {
    navigator.sendBeacon('/log', analyticsData);
  }
})
```



















