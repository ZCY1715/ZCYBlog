---

# 默认为文件名称
title: 

tags:

# 类别中已包含文件夹名称
categories:

description: 当获取到用户权限后，网站中事件发生时主动在桌面显示网站的通知!

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-12 14:33:13
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

# Notification

**Notifications API 的通知接口用于向用户配置和显示桌面通知**

<AlertBar message="备注：此特性在 Web Worker 中可用" />

<AlertBar message="安全上下文: 此项功能仅在一些支持的浏览器的安全上下文（HTTPS）中可用" />

**谨慎使用，兼容性堪忧**

## 构造函数

```js
const notification = new Notification(title, options)
```

**title**：一定会被显示的通知标题

**options**：一个被允许用来设置通知的对象

- `dir` : 文字的方向；它的值可以是 `auto（自动）`, `ltr（从左到右）`, or `rtl`（从右到左）
- `body`: 通知中额外显示的字符串
- `tag`: 赋予通知一个 ID
- `icon`: 一个图片的 URL，将被用于显示通知的图标
- `renotify`：相同 tag 的通知出现时，是否替换之前的，默认 true
- `requireInteraction`：通知不自动关闭，默认为 true



## 属性

### 静态属性

这些属性仅在 Notification 对象上有效

`permission`：一个用于表明当前通知显示授权状态的字符串

- `denied`：用户拒绝了通知的显示
- `granted`：用户允许了通知的显示
- `default`：因为不知道用户的选择，所以浏览器的行为与 denied 时相同



### 实例属性

这些属性仅在 Notification 的实例中有效

dir | body | tag | icon

**可以手动动态替换原来的字段！**



## 事件处理

`onclick`：每当用户点击通知时被触发

`onshow`：当通知显示的时候被触发

`onerror`：每当通知遇到错误时被触发

`onclose`：当用户关闭通知时被触发



## 方法

### 静态方法

`requestPermission()`：用于当前页面向用户申请显示通知的权限。这个方法只能被用户行为调用（比如：onclick 事件），并且不能被其他的方式调用

```js
Notification.requestPermission().then(permision => {
    // permission = "denied" | "granted"
})
```



### 实例方法

`close()`：关闭通知

`addEventListener()` | `removeEventListener()`：只有上述事件支持



















