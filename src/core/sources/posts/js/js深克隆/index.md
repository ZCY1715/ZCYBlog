---

# 默认为文件名称
title: 

tags:
  - deepClone

# 类别中已包含文件夹名称
categories:

description: 对象深克隆的实现，解决函数的复制，属性的循环引用等

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-14 18:48:40
updateTime: 2022-09-22 22:27:30
 
# 默认随机
img: 

# 目录
toc: false

---

```js
function deepClone(obj, cache = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Function) return new Function('return ' + obj.toString())()

  if (cache.has(obj)) return cache.get(obj)
  const cloneObj = Object.create(Object.getPrototypeOf(obj))
  cache.set(obj, cloneObj)

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], cache)
    }
  }

  return cloneObj
}
```

