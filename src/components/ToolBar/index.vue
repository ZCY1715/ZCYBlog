<script setup>
import { ref, computed } from 'vue'
import Setup from './../../assets/svgs/Setup.svg?vueComponent'
import ThemeSwitcher from './ThemeSwitcher.vue'
import Home from '../../assets/svgs/Home.svg?vueComponent'
import TurnBack from '../../assets/svgs/TurnBack.svg?vueComponent'
import Search from '../../assets/svgs/Search.svg?vueComponent'
import GoTop from './GoTop.vue'
import SearchPanel from '../SearchPanel.vue'
import GoBottom from './GoBottom.vue'
import { IsPC } from '../../utils'


const showTool = ref(IsPC())
const ArrowUpStyle = computed(() => {
  const rotateDeg = showTool.value ? '180deg' : '0deg'
  return `transform: rotate(${rotateDeg});`
})

const showSearchPanel = ref(false)


</script>

<template>
  <div :class="$style.container">
    <template v-if="showTool">
      <GoTop />
      <Home @click="() => $router.push({ name: 'HomePage' })" />
      <TurnBack @click="() => $router.go(-1)" />
      <GoBottom />
      <Search @click="() => showSearchPanel = true" />
      <ThemeSwitcher />
    </template>
    <Setup :style="ArrowUpStyle" @click="() => showTool = !showTool" />
  </div>
  <SearchPanel v-model="showSearchPanel" />
</template>

<style module>
.container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.container>* {
  width: 25px;
  height: 25px;
  padding: 2.5px;
  margin: 5px 2.5px 2.5px 2.5px;
  background-color: var(--z-toolbar-background);
  box-shadow: 0 0 5px var(--z-toolbar-shadow);
  border-radius: 50%;
}
</style>