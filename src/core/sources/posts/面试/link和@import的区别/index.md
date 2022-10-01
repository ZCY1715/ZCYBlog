---

# 默认为文件名称
title: 

tags:

# 类别中已包含文件夹名称
categories:
  - css

description: 使用 link 导入 css 与 @import 导入有什么区别?

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-11 13:37:50
updateTime:
 
# 默认随机
img: 

# 目录
toc: false

# 评论
comment: true

# 发布
publish: true

---

1. link属于html标签，而@import是css提供的。link 不光可以用来加载 css， 也可以用来加载其他的资源
2. 页面被加载时，link 会同时被加载，而 @import 引用的 css 会等到页面被加载完再加载的
3. 兼容性问题：@import 只在 IE5 以上才能识别，而 link 是 html 标签，无兼容性问题
4. 权重问题：@import 的权重要高于 link
5. DOM操作：DOM 可以操作 link 中的样式，而不可以操作 @import 中的样式