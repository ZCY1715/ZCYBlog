<script setup>
import useStore from './store'
import useScroll from './hooks/useScroll'
import live2dInit from './utils/live2DwImport'
import { onMounted, nextTick, ref } from 'vue'
import Nav from './components/Nav.vue'
import ToolBar from './components/ToolBar/index.vue'
import Effects from './components/Effects.vue'

const store = useStore()

onMounted(() => {
  const websiteTitle = store.config.websiteTitle || "ZCYBlog"
  document.querySelector("title").innerText = websiteTitle
  nextTick(() => {
    store.themeColor.initThemeColor()
    live2dInit()
  })
})


const [scrollNode, scrollTop] = useScroll()
const main = ref(null)
onMounted(() => {
  scrollNode.value = main.value
  main.value.addEventListener("scroll", () => {
    scrollTop.value = main.value.scrollTop
  })
})

</script>

<template>
  <Nav />
  <div :class="[$style.container, 'scrollY']" ref="main">
    <router-view />
  </div>
  <ToolBar />
  <Effects />
</template>

<style module>
.container {
  width: 100vw;
  height: 100vh;
  background-color: var(--z-layout-background);
  position: relative;
}
</style>