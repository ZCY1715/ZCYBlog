---

# 默认为文件名称
title: 

tags:
  - readline

# 类别中已包含文件夹名称
categories:

description: readline 是Node.js里实现标准输入输出的封装好的模块，通过这个模块我们可以以逐行的方式读取数据流。

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-16 14:06:26
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

## 简单使用

从命令行读取：

```js
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin, // 命令行输入流
  output: process.stdout // 命令行输出流
})

rl.on("line", line => {
    // todo
})
```

从文件中读取：

```js
const readline = require('readline')
const fs = require('fs')

const file = fs.createReadStream("./index.html")

const rl = readline.createInterface({
  input: file,
})

rl.on('line', function (line) {

})
```













