---

# 默认为文件名称
title: 

tags:
  - 防抖
  - 节流
  - debounce
  - throttle

# 类别中已包含文件夹名称
categories:

description: 在频繁触发的事件中使用防抖或节流能有效提高性能，还提供取消的能力

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-14 19:04:50
updateTime: 2022-09-29 20:51:40
 
# 默认随机
img: 

# 目录
toc: false

---

```js
// 防抖
function debounce(fn, delay) {
  let timer = null
  let isAbort = false
  function _debounce(...args) {
    if (isAbort) return
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
  _debounce.abort = () => {
    isAbort = true
    timer && clearTimeout(timer)
  }
  return _debounce
}



// 节流
function throttle(fn, delay) {
  let timer = null
  let isAbort = false
  function _throttle(...args) {
    if (isAbort || timer) return
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
  _throttle.abort = () => {
    isAbort = true
    timer && clearTimeout(timer)
  }
  return _throttle
}
```