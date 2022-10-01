---

# 默认为文件名称
title: 

tags:

# 类别中已包含文件夹名称
categories:

description: Web worker 另开一个线程加载或计算数据，防止 js 线程阻塞而是页面渲染堵塞

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-12 00:55:33
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

# Web Worker

JS 引擎线程超负荷运作的时候，可以通过 Web Worker 提供的 API 开辟一个新的线程，用于独立的运行脚本程序，**避免 JS 引擎线程阻塞 GUI 线程渲染视图**。

## 使用须知

1. 同源限制

worker 脚本与主进程的脚本必须遵守同源限制。他们所在的路径协议、域名、端口号三者需要相同

2. 接口限制

window作用域下的部分方法不可使用，如DOM对象、window.alert和window.confirm等方法

3. 文件限制

无法加载本地 js 文件，必须使用线上

4. 记得关闭

worker 会占用一定的系统资源，在相关的功能执行完之后，一定要记得关闭 worker



## 创建 worker

1. 使用指定文件路径的方式创建

```js
//传入脚本文件名作为参数,例如：
const myWorker1 = new Worker("./calcBox.js")
```

2. 使用Blob创建

```js
<script id="worker" type="text/js-worker" />
// 获取id为worker的scripr标签下的文字内容，创建Blob对象   
const blob = new Blob([document.querySelector('#worker').textContent])
const url = window.URL.createObjectURL(blob)
const worker = new Worker(url)
```

在同一个页面中既有主进程的代码，又有worker脚本的内容时，可以使用创建 Blob 的方式生成 worker。

此时一般需要 worker 的内容放在 script 标签中，但是如果 script 的类型是 "text/javascript" 就会直接被浏览器解析了，我们并不想这样，而是需要用这些文本内容生成一个 URL 作为创建 worker 的参数，所以这时可以把保存这部分内容的 script 标签的 **type 声明为一个浏览器不认识的类型**

## 关闭 worker

1. 在父进程中关闭

```js
//worker 线程会立即被终结，不会有任何机会让它完成自己的操作或清理工作
worker.terminate()
```

2. 在 worker 进程内部关闭

```js
self.close()
```



## 消息传递

主进程和 worker 之间通过发送消息的机制进行通信。对于主进程和 worker 自身：

- 都使用 postMessage 发送消息
- 都使用 onmessage 接收消息
- 都使用 onerror 监听错误事件

**在主进程中 onmessage、onerror 和 postMessage 必须挂在 worker 对象上。在 worker 中使用时 self.onmessage 、 self.postMessage 、 self.onerror 就行，或者不写 self，因为在 worker 内部， self 指向 worker 自己**



## 共享 worker(SharedWorker)

上面创建 worker 的方式在 MDN 中被归类为专用 worker 的用法。另一类 worker 是共享 worker，其实际用途与专用 worker 差异并不大，对于一些公用的方法可以放在共享 Worker 中供不用的场景使用

使用场景：

- 在不同的 html 页面之间使用共享 worker
- 在主窗口和 iframe 之间使用共享 worker
- 不同的 worker 同时访问共享 worker 中定义的数据或方法



**创建方法：**

```js
// 在同源的两个页面中都创建 SharedWorker,使用同一个脚本
var myWorker = new SharedWorker("xxx.js")
```



**与专用worker的主要区别：**

1. 在共享 worker 的使用环境下，主进程和 worker 的监听和发送消息都要在 port 端口下进行

```js
myWorker.port.postMessage()
```

2. 共享 worker 端口启动后时，两个页面的主进程都会向 worker 发送消息。在 worker 中使用事件监听需要放在 **onconnect** 事件中进行

```js
onconnect = function(e) {
  // ports 中保存着所有使用该 worker 的页面

  e.ports.forEach(port => {
  	port.onmessage = function(e) {
        // 逻辑
        port.postMessage()
  	}
  	port.start()
  })
}
```

3. 如果使用 addEventListener 方式监听 worker 消息事件，需要在主进程中使用`myWorker.port.start()`方法主动启动端口，使用 onmessage 监听则不用调用启动的方法

```js
myWorker.port.addEventListener('message', function(e) {
    // xxx
    console.log('Message received from worker')
});
myWorker.port.start()
```



## worker 内部加载脚本

worker 环境下存在一个全局方法 `importScript`，可以使用这个方法在 worker 内部加载脚本，**加载时按照传入的参数顺序同步加载**

> 脚本的**下载顺序不固定**，但执行时会按照传入 `importScripts()` 中的文件名顺序进行。这个过程是同步完成的；直到所有脚本都下载并运行完毕，`importScripts()` 才会返回。

```js
importScript("xxxa.js", "xxxb.js")
```



## 转让数据

主进程中通过 postMessage 方法传递数据给 worker 时可以传递任何类型的数据，但是这种方式不利于传递大量数数据。因为：

在主页面与 worker 之间传递的数据是通过**拷贝**，而不是共享来完成的。传递给 worker 的对象需要经过序列化，接下来在另一端还需要反序列化。页面与 worker **不会共享同一个实例**，最终的结果就是在每次通信结束时生成了数据的**一个副本。**

正确的做法是使用可转让对象：

```js
// 将需要传递的参数在后面将参数用[]再写一遍
worker.postMessage(arrayBuffer, [arrayBuffer])
```

但是只支持：`ArrayBuffer`、`MessagePort`、`ImageBitmap` 类型数据

























