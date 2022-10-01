---

# 默认为文件名称
title: 

tags:
  - focus
  - blur

# 类别中已包含文件夹名称
categories:

description: 直接在div上添加获得焦点focus和失去焦点blur事件无效,怎么才行呢?

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-31 13:14:15
updateTime:
 
# 默认随机
img: 

# 目录
toc: false

# 评论
comment: true
---

需要在 div 上添加以下属性:

```html
<div tabindex="0" hidefocus="true" onblur="" onfocus=""></div>
```

