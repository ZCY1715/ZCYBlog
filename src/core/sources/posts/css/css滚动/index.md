---

# 默认为文件名称
title: 

tags:
  - scroll
  - overflow

# 类别中已包含文件夹名称
categories:

description: scroll 设置集合,全局添加class很方便控制

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-01 12:38:20
updateTime:
 
# 默认随机
img: 

# 目录
toc: false

# 评论
comment: true
---

```css
:root {
    /* 白昼 */
    --z-scrollbar-background: #eee;
    --z-scrollbar-thumb-background: #aaa;
	
    /* 黑夜 */
    --z-scrollbar-background: #ddd;
    --z-scrollbar-thumb-background: #666;
}


* {
    overflow: hidden;
    scroll-behavior: smooth;
}

::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    background: var(--z-scrollbar-background);
    border-radius: 4px;
    transition: .3s;
}

::-webkit-scrollbar-thumb {
    background: var(--z-scrollbar-thumb-background);
}

.scrollX {
    overflow: visible !important;
    overflow-x: visible !important;
    overflow-y: hidden !important;
}

.scrollY {
    overflow: visible !important;
    overflow-x: hidden !important;
    overflow-y: visible !important;
}

.scrollXY {
    overflow: visible !important;
}

.hideScrollbar::-webkit-scrollbar {
    display: none;
}

```

























