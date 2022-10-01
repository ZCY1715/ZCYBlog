---

# 默认为文件名称
title: 

tags:
  - F12
  - 右键菜单

# 类别中已包含文件夹名称
categories:

description: 禁用 F12 和右键菜单防止其他人查看控制台和调试

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-02 14:04:50
updateTime:
 
# 默认随机
img: 

# 目录
toc: false

# 评论
comment: true
---

```js

// 禁止右键
document.addEventListener("contextmenu", function () {
  return false;
});
document.oncontextmenu = function () {
  return false;
};

// 禁止打开控制台与查看源代码
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}
```