---

# 默认为文件名称
title: 

tags:
  - html2canvas

# 类别中已包含文件夹名称
categories:

description: 使用 html2canvas 将 html 中的部分转成图片并保存到本地，同时清晰度比较高的做法

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-23 16:08:20
updateTime:
 
# 默认随机
img: 

# 目录
toc: false

# 评论
comment: true
---



## 安装

```shell
npm i html2canvas
```

## 使用

```js
function saveAsImage(node) {
  html2Canvas(node, {
    dpi: 350,
    width: node.offsetWidth,
    height: node.offsetHeight
  }).then((canvas) => {
    const context = canvas.getContext('2d')
    context.mozImageSmoothingEnabled = false
    context.webkitImageSmoothingEnabled = false
    context.msImageSmoothingEnabled = false
    context.imageSmoothingEnabled = false
    const dataURL = canvas.toDataURL()
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.download = `image-${Date.now().toString()}.png`
    a.href = dataURL
    a.click()
    a.remove()
  })
}
```

