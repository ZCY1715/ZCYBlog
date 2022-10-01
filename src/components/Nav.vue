<script setup>
import useStore from '../store'
import { computed, ref } from 'vue'
import Arrow from '../assets/svgs/Arrow.svg?vueComponent'
import { useRouter } from 'vue-router'

const store = useStore()
const pagesInfo = computed(() => store.pagesInfo)

const isShow = ref(false)
const styleStr = computed(() => {
  return `
    --x: ${isShow.value ? 0 : -120}px;
    --d: ${isShow.value ? 90 : -90}deg;
  `
})

const router = useRouter()
function toPage(pageName) {
  isShow.value = false
  router.push({ name: pageName })
}

</script>

<template>
  <div :class="$style.container" :style="styleStr" tabindex="0" hidefocus="true" @blur="() => isShow = false">
    <div :class="$style.main">
      <div v-for="item of pagesInfo" @click="() => toPage(item.pageName)" :key="item.title" :class="$style.navItem">
        {{ item.title }}
      </div>
    </div>
    <span :class="$style.control" @click="() => isShow = !isShow" title="导航菜单">
      <Arrow />
    </span>
  </div>
</template>

<style module>
.container {
  position: fixed;
  width: 150px;
  left: 0;
  top: 50px;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 0;
  transform: translateX(var(--x));
}

.main {
  flex: 1;
  background-color: var(--z-nav-background);
  box-shadow: 3px 3px 3px var(--z-nav-shadow);
  border-radius: 0 5px 5px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 20px 0;
}

.navItem {
  height: 30px;
  width: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  transition: 0ms;
  position: relative;
  cursor: var(--pointer);
}

.navItem::before {
  content: "*";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 20px;
  display: flex;
  align-items: center;
  animation: hideAndShow 1s infinite;
}

@keyframes hideAndShow {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.navItem:hover {
  font-weight: bold;
  color: var(--theme-color);
  text-decoration: underline;
  background-color: var(--z-nav-hover);
}

.control {
  width: 30px;
  height: 30px;
  background-color: var(--z-nav-background);
  box-shadow: 3px 3px 3px var(--z-nav-shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 5px 5px 0;
}

.control * {
  cursor: var(--pointer);
}

.control svg {
  width: 18px;
  height: 18px;
  transform: rotate(var(--d));
}
</style>