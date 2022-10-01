---

# 默认为文件名称
title: 

tags:

# 类别中已包含文件夹名称
categories:
  - vue3

description: ref 和 v-if 不能放在一起用，否则 this.$refs 一直为 undefined，怎么兼顾呢？

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-23 18:00:50
updateTime: 2022-08-26 21:35:40
 
# 默认随机
img: 

# 目录
toc: false

# 评论
comment: true
---

### bug 描述

当上层使用了 v-if 后，下层的 ref 将获取不到 dom 元素

### bug 原因

因为 $ref 加载是在 mounted 之前，如果一开始的状态为 v-if = false，则 v-if 下面的元素不会被加载，只有当 v-if 首次为 true 时才会加载 ，但这时 $ref 已确定

### bug 解决

有两种解决方法：

1. 采用 css 控制可见性

template 中不使用 v-if ：

```html
<v-chart ref="chart" :class="$style.chart" :loading="isLoading" :option="option" />
```

使用下面的方法切换可见性，display 属性：

```js
computed: {
    chart() {
        return this.$refs.chart
    }
},
methods: {
    hideCanvas() {
        this.chart.style.display = "none"
    },
    showCanvas() {
        this.chart.style.display = "block"
    },
}
```

2. 使用 v-show, 起始状态为 true, 在 mounted 中切换成 false

```js
data(){
	return {
		showChart: true
	}
}
mounted(){
	this.showChart = false
}
```

```html
<v-chart ref="chart" :class="$style.chart" v-show="showChart" :loading="isLoading" :option="option" />
```



