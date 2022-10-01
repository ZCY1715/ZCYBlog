---

# 默认为文件名称
title: 

tags:
  - 路由跳转
  - router

# 类别中已包含文件夹名称
categories:

description: 由于 vue 的复用机制，当携带不同的参数跳转至相同路由时，生命周期函数不会重新运行，以往的做法是采用 watch 监听参数的变化，再根据参数获取数据更新，但这样显然麻烦，怎么使路由直接更新呢？

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-15 15:58:05
updateTime:
 
# 默认随机
img: 

# 目录
toc: false
---

为 `router-view` 添加变化的 key 值，由于当路由跳转时由于携带的参数不同，`$route` 变化导致 `randomKey` 变化，所以路由会重新更新渲染，这样就可以避免 vue 的路由复用了。

```vue
<script>
	export default {
        computed: {
    		randomKey() {
      			return this.$route.path + new Date().getTime()
    		}
  		}
    }
</script>
<template>
	<router-view :key="randomKey" />
</template>
```

但这会付出性能的代价，谨慎使用！



