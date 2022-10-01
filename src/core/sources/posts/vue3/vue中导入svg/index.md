---

# 默认为文件名称
title: 

tags:
  - svg
  - rollup-plugin-svg-sprites

# 类别中已包含文件夹名称
categories:
  - vite

description: svg 是不能直接像图片一样 import 的

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-16 23:22:27
updateTime:
 
# 默认随机
img: 

# 目录
toc: false
---

**在 vite + vue3 项目中向组件一样导入 svg 图标**

1. 安装 `rollup-plugin-svg-sprites`

```shell
npm i -D rollup-plugin-svg-sprites
```

2. 在 `vite.config.js` 中

```js
import svgSprites from 'rollup-plugin-svg-sprites'

export default defineConfig({
    plugins: [
        svgSprites({
            vueComponent: true,
            exclude: ['node_modules/**']
    	}),
    ]
})
```

3. 在组件中使用

```js
<script setup>
import Tag from './Tag.svg'

</script>

<template>
	<Tag />
</template>
```



   

