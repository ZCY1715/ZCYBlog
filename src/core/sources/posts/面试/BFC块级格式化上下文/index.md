---

# 默认为文件名称
title: 

tags:
  - 盒模型
  - BFC

# 类别中已包含文件夹名称
categories:

description: 标准盒模型与怪异盒模型，BFC有什么作用，怎么实现BFC

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-07 17:20:50
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

## 盒模型

- 标准盒模型：盒子总宽度/高度 =width/height + padding + border + margin
- IE盒子模型：盒子总宽度/高度 =width/height + margin = (内容区宽度/高度 + padding + border) + margin

JS如何获取盒模型对应的宽和高：

- window.getComputedStyle(dom).width/height
- dom.getBoundingClientRect().width/height
- dom.offsetWidth/offsetHeight

## BFC

**块级格式化上下文**

一个BFC区域包含创建该上下文元素的**所有子元素**，但是不包括创建了**新的BFC的子元素的内部元素**，BFC是一块块独立的渲染区域，可以将BFC看成是元素的一种属性，拥有了这种属性的元素就会使他的子元素**与世隔绝**，不会影响到外部其他元素

### BFC规则

1. BFC 内部的 Box 会在垂直方向，从顶部开始一个接着一个地放置
2. BFC 内部的 Box 垂直方向的距离由**margin(外边距)**决定，属于同一个BFC的两个相邻Box的margin会发生**重叠**
3. BFC 内部的 Box margin 与包含它的父元素块的 border 相接触（从左到右时，从右到左相反）。即使存在浮动也是如此。
4. BFC 本身在页面上是一个隔离的独立容器，外面的元素不会影响里面的元素，反之亦然。
5. BFC 的区域不会与float Box重叠（清浮动）
6. 计算BFC的高度时，浮动元素也参与计算。

### 创建BFC

即脱离文档流

1. body：最大的 BFC
2. 绝对定位：position 的值为 absolute 或 fixed
3. 行内块：display 为 inline-block
4. 表格单元格：display 为 table、table-cell
5. overflow：不为 visible
6. 弹性盒：display 为 flex 或 inline-flex

### 使用场景

1.  自适应两（三）栏布局（避免多列布局由于宽度计算四舍五入而自动换行）

   浮动 box 为侧栏设置宽度，BFC box 为主要内容不设置宽度，则BFC的宽度自适应

2.  避免元素被浮动元素覆盖

   BFC box 会阻止标准流元素被浮动元素覆盖

3.  可以让父元素的高度包含子浮动元素，清除内部浮动（原理：触发父div的BFC属性，使下面的子div都处在父div的同一个BFC区域之内）

   子元素浮动时，正常情况下父元素不会计算它的高度，也就是说可能浮动的元素会超出父元素的范围，甚至父元素只剩下一条线，可以设置父元素 **overflow: hidden**

4.  去除边距重叠现象，分属于不同的BFC时，可以阻止margin重叠





















