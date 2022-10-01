---

# 默认为文件名称
title: 

tags:
  - lazyload
  - 图片懒加载

# 类别中已包含文件夹名称
categories:

description: 图片加载过程中显示加载样式，加载成功显示成功的图片，加载失败显示默认的图片

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime:  2022-08-17 0:10:35
updateTime: 2022-08-26 1:34:40
 
# 默认随机
img: 

# 目录
toc: true
---

## 准备

1.  `Loading` 组件
2. 当加载失败时显示的图片  `picError.jpg`

## 需求

**支持控制是否懒加载，可以传入一个或多个`src`地址，依次尝试加载，成功后不再继续加载后面的，当均不能加载时使用默认的图片，同时也可以手动传入默认的图片**

## 实现

主要逻辑采用 Image 加载的形式：

```js
/**
 * 
 * @param {Array} srcs 图片链接数组
 * @return {Promise}
 */
function trySrcs(srcs) {
  const promises = srcs.map(src => {
      return new Promise((resolve, reject) => {
          // 通过 Image 加载
          const img = new Image()
          img.src = src
          img.onload = () => {
              resolve(src)
          }
          img.onerror = () => {
              reject()
          }
      })
  })
  return Promise.any(promises)
}
```

<br>

在自定义的 `Picture.vue` 中：

```js
<script>
import Loading from './Loading.vue'
import picError from '../../assets/picError.jpg'

export default {
  data() {
    return {
      isLoading: true,
      srcs: [],
      imgSrc: ''
    }
  },
  props: {
    lazy: {
      type: Boolean,
      default: false
    },
    src: {
      type: [String, Array],
    },
    defaultSrc: {
      type: String,
      default: picError
    }
  },
  components: { Loading },
   methods: {
    loadImg() {
      trySrcs(this.srcs).then(src => {
          this.imgSrc = result
      }).catch(() => {
          this.imgSrc = this.defaultSrc
      }).finally(() => {
          this.isLoading = false
      })
    },
  },
  created() {
    const srcs = clone(this.src)
    this.srcs = srcs instanceof Array ? srcs : [srcs]
  },
  mounted() {
    if (!this.lazy) {
      return this.loadImg()
    }
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entery => {
        if (entery.isIntersecting) {
          this.loadImg()
          observer.disconnect()
        }
      }
      )
    }, {
      threshold: 0.1,
    })
    observer.observe(this.$el)
  }
}
</script>

<template>
  <div :class="$style.container">
    <Loading v-if="isLoading" />
    <img :src="imgSrc" v-else />
  </div>
</template>

<style module>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.container img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
```



