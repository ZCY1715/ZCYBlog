---

# 默认为文件名称
title: 

tags:
  - IntersectionObserver

# 类别中已包含文件夹名称
categories:

description: 当在做标题导航时经常会用到，判断一系列元素是否手动滑到可视范围内，进而将导航栏调整到对应的选项

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-18 14:19:18
updateTime: 2022-08-26 1:30:50
 
# 默认随机
img: 

# 目录
toc: true

# 评论
comment: true
---

# IntersectionObserver

Intersection Observer API 提供了一种**异步检测目标元素与祖先元素或 viewport 相交情况变化**的方法，当元素的可视范围变化时执行相对应的回调函数，做出对应改变

## ObserverOption 配置

```tsx
interface IntersectionObserverInit {
    // 滑动对象 默认是浏览器可视窗口
    root?: Element | Document | null;
    // 用于使 root 对象与目标对象之间有一定的间距，可以控制 root 元素每一边的收缩或者扩张
    rootMargin?: string;
    // 当目标对象与 root 对象相交达到一定的比例时，执行回调函数
    threshold?: number | number[];
}
```

## IntersectionObserverEntry 对象

```tsx
interface IntersectionObserverEntryInit {
    // target.getBoundingClientRect() 对象
    boundingClientRect: DOMRectInit;
    // root 元素与 target 元素的交叉比例
    intersectionRatio: number;
    // root 与 target 对象交叉部分的 getBoundingClientRect() 对象
    intersectionRect: DOMRectInit;
    // root 与 target 是否相交， 用于判断状态转变
    isIntersecting: boolean;
    // root.getBoundingClientRect() 对象
    rootBounds: DOMRectInit | null;
    // 目标元素
    target: Element;
    // 从触发时刻到时间原点(time Origin)的时间戳
    time: DOMHighResTimeStamp;
}
```

其中 `getBoundingClientRect()`对象 类型如下：

```tsx
interface DOMRectReadOnly {
    readonly bottom: number;
    readonly height: number;
    readonly left: number;
    readonly right: number;
    readonly top: number;
    readonly width: number;
    readonly x: number;
    readonly y: number;
    toJSON(): any;
}
```

**时间原点**是指**创建浏览器上下文的时间**

## 用法

```js
// 目标元素
const target = document.querySelector("#target")

// 配置对象
const options = {
  threshold: [0,1]
}

// 回调函数
const callback = (entries , observer) => {
  // entries 是 IntersectionObserverEntry 数组
  // observer 是监听器对象
  entries.forEach(entry => {
    // todo

  })
}

// 使用相应的回调和配置实例化监听器
const observer = new IntersectionObserver(callback, options)

// 开始监听目标元素：是否出现在可视窗口范围内
observer.observe(target)

// 取消监听
observer.disconnect()
```



















