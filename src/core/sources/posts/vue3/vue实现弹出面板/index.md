---

# 默认为文件名称
title: 

tags:
  - Popup

# 类别中已包含文件夹名称
categories:

description: 快速实现Popup组件，自定义开启与关闭

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-15 14:24:41
updateTime: 2022-08-26 21:33:30
 
# 默认随机
img: 

# 目录
toc: false

---

## popup.vue 组件中

```vue
<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: {
    showPanel: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit("update:modelValue", value)
      }
    },
  },
  watch: {
    $route() {
      this.showPanel = false
    }
  }
}
</script>

<template>
	<Teleport to="body">
  		<div :class="$style.container" @click.self="() => showPanel = false" v-if="showPanel">
    			<div :class="$style.wrap">
				<!-- content -->
    			</div>
  		</div>
	</Teleport>
</template>

<style module>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: showAnimation 1s;
}

@keyframes showAnimation {
  from {
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
  }

  to {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }
}

.wrap {}
</style>
```



## 父组件中

```vue
<script>
import Popup from './Popup.vue'

export default {
  data() {
    return {
      showPopup: false,
    }
  },
  components: { Popup },
}

</script>

<template>
  <!-- you can put this anywhere -->
  <Popup v-model="showPopup" />
  <!-- click to show Popup -->
  <button @click="() => showPopup = true" />
</template>
```

