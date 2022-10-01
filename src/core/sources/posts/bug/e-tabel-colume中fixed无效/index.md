---

# 默认为文件名称
title: 

tags:
  - elementPlus
  - fixed无效

# 类别中已包含文件夹名称
categories:

description: 使用elementPlus的e-tabel时出现bug，fixed列固定在作用属性无效

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-23 17:29:50
updateTime:
 
# 默认随机
img: 

# 目录
toc: false

# 评论
comment: true
---

### bug 描述

使用**elementPlus**的**e-tabel**时出现bug，fixed列固定在作用属性无效

### bug 原因

在全局属性中设置了 `overflow: hidden;`

### bug 解决

```css
.el-table *{
  overflow: visible;
}
```

