<script setup>
import useStore from '../../store'
import { computed, provide } from 'vue'
import { useRoute } from 'vue-router'
import Banner from './Banner.vue'

const store = useStore()
const route = useRoute()

const pageConfig = computed(() => {
  const { name } = route
  const page = store.pagesInfo.find(item => item.pageName === name)
  return {
    title: page.title,
    ...page.config
  }
})

const config = computed(() => store.config)
provide("config", config)

</script>

<template>
  <Banner :data="pageConfig" />
  <div :class="$style.container">
    <div :class="$style.wrap">
      <router-view />
    </div>
  </div>
</template>

<style module>
.container {
  display: flex;
  justify-content: center;
  width: 100%;
  transform: translateY(-100px);
}

.wrap {
  width: 90%;
}
</style>