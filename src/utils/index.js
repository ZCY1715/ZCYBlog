// 对象克隆
export function clone(obj, cache = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)

  if (cache.has(obj)) return cache.get(obj)
  let cloneObj = new obj.constructor()
  cache.set(obj, cloneObj)

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = clone(obj[key], cache)
    }
  }

  return cloneObj
}

// 字符串数组去重
export function distinct(arr) {
  arr = arr.map(item => item.trim())
  return Array.from(new Set(arr))
}

// 防抖
export function debounce(fn, delay) {
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
export function throttle(fn, delay) {
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

const getUTCTime = date => new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds())


// 时间格式化
export function formateTime(date = new Date()) {
  const today = new Date()
  date = getUTCTime(date)
  let diff = today.getTime() - date.getTime()

  diff = Math.ceil(diff / 1000)
  if (diff < 60)
    return diff + '秒前'

  diff = Math.floor(diff / 60)
  if (diff < 60)
    return diff + '分钟前'

  diff = Math.floor(diff / 60)
  if (diff < 24) {
    return diff + '小时前'
  }

  diff = Math.floor(diff / 24)
  if (diff < 30) {
    return diff + '天前'
  }

  const YYYY = date.getUTCFullYear()
  const MM = date.getUTCMonth() + 1
  const DD = date.getUTCDate()

  if (YYYY === today.getFullYear())
    return `${MM}月${DD}日`
  else {
    return `${YYYY}年${MM}月${DD}日`
  }
}

// 判断是否为 PC 端
export function IsPC() {
  return !navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
}
