---

# 默认为文件名称
title: 

tags:

# 类别中已包含文件夹名称
categories:

description: 浏览器包括了哪些进程呢，分别是做什么的呢？对于一个页签中，又有哪些线程在运行呢？

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-11 23:58:36
updateTime:
 
# 默认随机
img: 

# 目录
toc: false

# 评论
comment: true

# 发布
publish: true

---

## 多进程的浏览器

- **Browser 进程**：浏览器的主进程（负责协调、主控），只有一个。
- **第三方插件进程**：每种类型的插件对应一个进程，仅当使用该插件时才创建。
- **GPU 进程**：最多一个，用于 3D 绘制。
- **渲染进程（内核（Renderer 进程））**：默认每个 Tab 页面一个进程，互不影响，控制页面渲染，脚本执行，事件处理等（有时候会优化，如多个空白 tab 会合并成一个进程）。



## 多线程的浏览器内核进程

1. GUI渲染线程

负责渲染页面，解析html、css等构成DOM树，当页面需要**重绘**（Repaint）或由于某种操作引发**回流**（reflow）时，该线程就会执行。

**GUI 渲染线程和 js 引擎线程互斥，当 JS 引擎线程在工作的时候，GUI 渲染线程会被挂起，GUI 更新被放入 js 任务队列中，等待 js 引擎线程空闲的时候继续执行。**

2. js 引擎线程

**单线程**工作，负责解析 JavaScript 脚本，处理用户交互、操作 DOM 树和 CSS 样式树来呈现动态交互和与服务器交互等。

**js 为什么是单线程的？**

如果JS是多线程的方式来操作这些UI DOM，则可能出现UI操作的冲突；如果JS是多线程的话，在多线程的交互下，处于UI中的DOM节点就可能成为一个临界资源，假设存在两个线程同时操作一个DOM，一个负责修改一个负责删除，那么这个时候就需要浏览器来裁决如何生效哪个线程的执行结果，我们可以通过锁来解决上面的问题，但是为了避免因为引入了锁而带来更大的复杂性，JS在最初就选择了单线程执行。

GUI渲染线程与JS引擎线程互斥，是由于JavaScript是可操纵DOM的，如果在修改这些元素属性的同时渲染界面（即JavaScript线程和UI线程同时运行），那么渲染线程前后获得的元素数据就有可能不一致。

由于GUI渲染线程和JS执行线程互斥，当浏览器在执行JS程序的时候，GUI渲染线程会被保存在一个队列中，知道JS程序执行完成，才会接着执行。因此如果JS执行时间过长，就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。

3. 定时触发器线程

浏览器定时计数器并不是由JS引擎计数的，因为JS引擎是单线程的，如果JS引擎线程处于阻塞线程状态就会影响计数的准确。因此通过另外独立的线程来计时并触发定时是更为合理的方案。

4. 事件触发线程

当事件符合触发条件被触发时，该线程会把对应的事件回调函数添加到**消息队列**的队尾，等待JS引擎的处理。

虽然 js 引擎只维护一个主线程用来解释执行JS代码，但实际上浏览器环境中还存在其他的线程，例如处理AJAX，DOM，定时器等，我们可以称他们为工作线程。同时浏览器中还维护了其他任务队列，主线程会将执行过程中遇到的异步请求发送给这个规定的任务队列，等到主线程（js引擎线程）空闲时再来执行任务队列中的任务。


5. 异步 http 请求线程

http 请求是在 XMLHttpRequest 连接后通过浏览器新开一个线程请求。

请求完成有结果之后，将检测到状态变更，如果设置有回调函数，异步http请求线程就会将该请求的回调函数添加到消息队列中，等待JS引擎处理。















