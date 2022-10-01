---

# 默认为文件名称
title: 

tags:
  - MutationObserver

# 类别中已包含文件夹名称
categories:

description: 用js监听dom元素的变化，当发生变化时，执行相对应的处理函数

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-13 00:21:10
updateTime:
 
# 默认随机
img: 

# 目录
toc: true
---





# MutationObserver

**用于监视对Dom树所作出更改的能力**，当发生变化时，执行相对应的处理函数

## MutationRecord 对象

```tsx
interface MutationRecord { 
  readonly attribute DOMString type //变化的类型 attributes | childList | characterData
  [SameObject] readonly attribute Node target //变化的dom
  [SameObject] readonly attribute NodeList addedNodes //如果是新增节点，新增的节点
  [SameObject] readonly attribute NodeList removedNodes //如果是删除节点，删除的节点
  readonly attribute Node? previousSibling //上一个兄弟元素
  readonly attribute Node? nextSibling //下一个兄弟元素
  readonly attribute DOMString? attributeName //属性名
  readonly attribute DOMString? attributeNamespace //属性集合
  readonly attribute DOMString? oldValue //该属性的旧值
}
```

## observerOptions 配置

```tsx
dictionary MutationObserverInit {
  // childList | attributes | characterData | subtree 监听的对象
  // childList : 子节点的删除或者添加
  // attributes : 属性的修改
  // characterData : 文本节点修改字符内容
  // subtree : 是否观察所有后代节点
  boolean childList = false
  boolean attributes
  boolean characterData
  boolean subtree = false
  // attributeOldValue | characterDataOldValue 对输出结果的定义
  // attributeOldValue : 是否记录属性变化之前的值
  // characterDataOldValue : 是否记录文本节点之前的值
  boolean attributeOldValue
  boolean characterDataOldValue
  // 定义属性监听时仅需要监听的属性数组
  sequence<DOMString> attributeFilter
}
```



## 用法

```js
// 选择需要观察变动的节点
const targetNode = document.getElementById('some-id')

// 观察器的配置（需要观察什么变动）
const observerOptions = { 
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true,
    attributeFilter: ['class']
}

// 当观察到变动时执行的回调函数
const callback = function(mutationsList, observer) {
    // mutationsList 产生变化的 MutationRecord 数组
    // observer 观察者实例对象
    mutationsList.forEach((mutation) => {
    	switch(mutation.type) {
      		case 'childList':
                	// 添加的元素在：mutation.addedNodes
                	// 删除的元素在：mutation.removedNodes
                	break
      		case 'attributes':
                	// 改变的元素是：mutation.target
                	// 改变的属性是：mutation.attributeName
                	// 旧的属性值是：mutation.oldValue
                	break
            case 'characterData':
                	// 文本节点内容发生了变化
                	// 旧的内容是：mutation.oldValue
                	break
    	}
  	});
};

// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback)

// 以上述配置开始观察目标节点
observer.observe(targetNode, observerOptions)

// 停止观察
observer.disconnect()
```

## 注意

1. 观察者的回调是**异步触发**的，并且是**微任务**(microtask)
2. 观察者是弱引用，节点删除后观察者会自动清除，并不需要主动 `disconnect`





















