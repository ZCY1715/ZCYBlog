---

# 默认为文件名称
title: 

tags:

# 类别中已包含文件夹名称
categories:

description: 使用 canvas 实现简单的手写签名，类似于牛客网的那种，后面可以转 Blob, 或保存到本地

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-28 01:53:25
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

## 效果

👉[点击预览](/resources/Canvas_Signature/index.html)

## 实现

index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body {
      margin: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: red;
    }
  </style>
</head>

<body>
  <canvas id="canvas" style="position: fixed; background-color: #fff;" width="700" height="250"></canvas>
  <script src="./index.js" />
</body>

</html>
```

index.js

```js
/**
  * @type {HTMLCanvasElement}
*/
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
ctx.lineWidth = 2

function getPoint(x, y) {
  const canvasRect = canvas.getBoundingClientRect()
  return [x - canvasRect.x, y - canvasRect.y]
}

let isDrawing = false
canvas.addEventListener("mousedown", e => {
  isDrawing = true
  ctx.moveTo(...getPoint(e.x, e.y))
})

canvas.addEventListener("mousemove", e => {
  if (isDrawing) {
    ctx.lineTo(...getPoint(e.x, e.y))
    ctx.stroke()
  }
})

canvas.addEventListener("mouseup", e => {
  isDrawing = false
})

```





