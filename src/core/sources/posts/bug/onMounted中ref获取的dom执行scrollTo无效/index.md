---

# 默认为文件名称
title: 

tags:

# 类别中已包含文件夹名称
categories:
  - vue3

description: 通过ref获取dom是可行的，打印显示的确是目标dom,但是使用dom执行dom原生方法(scrollTo)时无效了，为什么呢？

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-31 15:16:20
updateTime:
 
# 默认随机
img: 

# 目录
toc: false

# 评论
comment: true
---

### bug 描述

在 onMounted 中使用ref获取的dom执行dom原生方法(scrollTo)无效

```js
const main = ref(null)
onMounted(() => {
  main.value.scrollTo({top: 100})
})

<div ref="main"></div>

```
高度是没有问题的。而且在开发模式下数据更新后再执行一遍 onMounted 恢复正常，刷新后出现又相同的问题

### bug 原因

**不太清楚**！初步猜测是该 dom 的子树没有加载完毕导致的

### 临时方法

使用 setTimeout 延时执行，恢复正常
```js

onMounted(() => {
  setTimeout(() => {
    main.value.scrollTo({top: 100})
  }, 500);
})

```
