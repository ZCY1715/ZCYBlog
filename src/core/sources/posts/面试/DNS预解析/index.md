---

# 默认为文件名称
title: 

tags:

# 类别中已包含文件夹名称
categories:

description: 网页开启DNS预解析功能，提高点击页面跳转之后的加载速度

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-10 18:30:38
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

> 引自：https://zhuanlan.zhihu.com/p/548174121

# DNS预解析

## 是什么

DNS预解析就是让浏览器在用户访问链接之前解析域名，其范围包括文档的所有链接，无论是图片的，CSS 的，还是 JavaScript 等其他用户能够点击的 URL

域名解析后，如果用户确实访问该域名，那么DNS解析时间将不会有延迟。因为预读取会在后台执行，所以DNS很可能在链接对应的东西出现之前就已经解析完毕，这能够减少用户点击链接时的延迟



## 如何开启

X-DNS-Prefetch-Control 头控制着浏览器的DNS预解析功能

- on：启用DNS预解析。在浏览器支持DNS预解析的特性时，及时不适用该标签浏览器依然会进行预解析。
- off：关闭DNS预解析。这个属性在页面上的链接并不是由你控制的或是你根本不想向这些域名引导数据时非常有用。

对于某个域名：

```html
<!-- DNS 预解析 -->
<link rel="dns-prefetch" href="https://xxx.com">
```

## 注意

1. Chrome 会记住最近使用的10个 domain，并且在开启浏览器时自动解析，因此在打开这些常用页面的时候，并不会有DNS Lookup的延迟情况
2. HTTP请求，浏览器会对 a 标签的 href 自动启用 DNS Prefetching，所以a标签里包含的域名不需要在 head 中手动设置
3. HTTPS下面的 a 标签的 href 不会自动启动 DNS Prefetching，需要 meta 来强制开启功能。这个限制的原因是防止窃听者根据 DNS Prefetching 推断显示在HTTPS页面中超链接的主机名

```html
<meta http-equiv="x-dns-prefetch-control" content="on">
```

# 更多

```html
<!-- 预连接 -->
<link rel="preconnect" href="https://xxx.com">

<!-- 预获取文件，其他页面用到的 -->
<link rel="prefetch" href="/library.js" as="script">

<!-- 预获取文件，本页面用到的 -->
<link rel="preload" href="/library.js" as="script">

<!-- 预渲染 -->
<link rel="prerender" href="//example.com/next-page.html">
```

如果 prefetch 还没下载完之前，浏览器发现 script 标签也引用了同样的资源，浏览器会再次发起请求，这样会严重影响性能的，加载了两次，所以不要在当前页面马上就要用的资源上用 prefetch，要用 preload





















