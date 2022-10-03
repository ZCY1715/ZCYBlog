---

# 默认为文件名称
title: 

tags:

# 类别中已包含文件夹名称
categories:

description: Process 模块是一个无须使用 require() 就可以从 node.js 应用程序进行访问的全局对象

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-10-03 15:21:44
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

# Process

Process 模块是一个无须使用require()就可以从node.js应用程序进行访问的全局对象、



## I/O 控制

Process 为进程 stdin、stdout、stderr 提供了对标准I/O管道的访问

`stdin`：控制台输入流

`stdout`：控制台输出流

`stderr`：控制台异常输出流



## 信号监听

Node.js 允许注册监听器来处理操作系统发送给一个进程的信号

```js
process.on(event, listener)
```

event 包括很多可以触发的信号



## 进程控制

`abort()`：使当前的 Node.js 应用程序发出 abort 事件，退出，并产生一个内存核心转储文件

`exit([code])`：使当前 Node.js 应用退出，并返回指定的 code

`kill(pid,[signall])`：操作系统会向指定的 pid 的进程发送一个 kill 信号，默认是SIGTERM

`nexttick(callback)`：将回调函数放到 nexttick 调度队列中



## 属性方法

`cwd()`：返回当前的工作目录

`env`：返回进程环境中指定的键/值对

`argv`：启动 Node.js 应用程序的所有命令参数，命令和文件都会转成绝对地址，[node, path, ...args]

`argv0`：第一个参数的值，node

`execPath`：node.js 的绝对地址

`execArgv`：调用 node.js 传入的特殊参数 `node --inspect demo.js`

`version`：node.js 的版本号

`versions`：包含 Node.js 应用程序所需的模块和版本

`config`：用于编译当前节点可执行程序的配置选项

`pid`：当前进程号

`title`：当前进程标题

`platform`：操作系统

`arch`：进程正在运行的处理器体系结构

`memoryUsage()`：node.js 进程的当前内存使用情况可使用 `util.inspect()` 读取





























