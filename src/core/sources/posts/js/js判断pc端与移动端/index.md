---

# 默认为文件名称
title: 

tags:

# 类别中已包含文件夹名称
categories:

description:

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-13 16:15:25
updateTime: 2022-08-14 18:45:10
 
# 默认随机
img: 

# 目录
toc: false

---

## 通过 navigator.userAgent 字段判断

```js
function isMobile(){
    return !!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
}

function isAndroid(){
    return /android/i.test(navigator.userAgent.toLowerCase())
}

function isIOS(){
    const reg = /iPhone|iPad|iPod|iOS|Macintosh/i
    return reg.test(navigator.userAgent.toLowerCase())
}
```

