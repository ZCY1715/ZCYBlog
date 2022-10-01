---

# 默认为文件名称
title: 

tags:
  - 元素插入
  - insert

# 类别中已包含文件夹名称
categories:

description: 三种方法，用于插入元素到指定节点的不同位置，这不比 appendChild 好？

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-12 17:20:55
updateTime:
 
# 默认随机
img: 

# 目录
toc: false
---

## 方法

1. `insertAdjacentElement`
2. `insertAdjacentHTML`
3. `insertAdjacentTEXT`

用于将 `Element | HTML | TEXT` 插入到指定元素的指定位置

## 用法

```js
Element.insertAdjacentElement(position, element)
Element.insertAdjacentHTML(position, html)
Element.insertAdjacentTEXT(position, text)
```

`position` 可取值：

- beforebegin：在该元素本身的前面
- afterbegin：只在该元素当中，在该元素第一个子孩子前面
- beforeend：只在该元素当中，在该元素最后一个子孩子后面
- afterend： 在该元素本身的后面

`element`是一个node节点元素，`html`是要被解析为 HTML 或 XML 元素，`text` 是文本文字

