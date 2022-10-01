---

# 默认为文件名称
title: 

tags:
  - 美化

# 类别中已包含文件夹名称
categories: 

description: script src 引入点击效果，使用简单

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-13 17:57:15
updateTime: 2022-09-02 14:57:06
 
# 默认随机
img: 

# 目录
toc: true
---

## 点击爱心

效果：

👉[点击预览](/resources/Click_effect/heart/index.html)

下载文件：

- [heart.js](/resources/Click_effect/heart/heart.js)

使用：

```html
<head>
    <!-- 在 head 中引入即可 -->
    <script src="./heart.js"></script>
</head>
```

## 点击爆炸

效果：

👉[点击预览](/resources/Click_effect/boom/index.html)

下载文件：

- [boom.js](/resources/Click_effect/boom/boom.js)
- [anime.js](/resources/Click_effect/boom/anime.js)

使用：

```html
<body>
  <!-- 在 body 中引入 -->
	<canvas class="fireworks" style="z-index: 9999;position: fixed;left: 0;top: 0; pointer-events: none;"></canvas>
  <script src="./anime.js"></script>
  <script src="./boom.js"></script>
</body>
```

## 点击粒子

效果：

👉[点击预览](/resources/Click_effect/grain/index.html)

下载文件：

- [grain.js](/resources/Click_effect/grain/grain.js)

使用：

```html
<body>
  <!-- 在 body 中引入 -->
	<script src="./grain.js"></script>
</body>
```