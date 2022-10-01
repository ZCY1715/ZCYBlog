---

# 默认为文件名称
title: 

tags:

# 类别中已包含文件夹名称
categories:

description: 为什么setTimeout总是存在 4ms 的时延呢？它是为什么这样设计的

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-07 13:05:50
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

## setTimeout 最低延迟 4ms ?

```js
setTimeout(fn, delay [, ...args])
```



不考虑 event loop 所导致的延迟

原话：

- 正常情况下 setTimeout 的最低延迟是 **1ms**
- 当 setTimeout 的嵌套层级超过 **5** 层，则延迟设置为 **4ms**

setTimeout 为什么会有延迟？

因为浏览器的计时器依赖于操作系统的定时器 timer resolution，早些年，CPU 还没有那么强大时，总会产生延迟，所有浏览器的 setTimeout 才会出现延迟

为什么是 1ms?

不能再低了，如果浏览器允许 `0ms`，会导致 JavaScript 引擎过度循环，event loop 一直循环执行，(直接来个 setTimeout 循环，关都关不掉)，UI 渲染就没有中断过，可能网站很容易无响应。

为什么是 4ms?

浏览器在 1ms 时会导致 CPU spinning，CPU 耗电过快，计算机没有办法进入到休眠状态，所以经过测试，将最低延迟调整到 4ms

## setImmediate()

浏览器都**不支持**，不能用，了解它就行

该方法用来把一些需要长时间运行的操作放在一个回调函数里，在浏览器完成后面的其他语句后，就立刻执行这个回调函数。

```js
var immediateID = setImmediate(func, [param1, param2, ...]);
// immediateID : 用于 window.clearImmediate(id)
// func 异步调用的函数
// 后面全是函数的参数
```

相当于：`setTimeout(fn, 0)`













