<script setup>
import GoTop from '../../assets/svgs/GoTop.svg?vueComponent'
import useScroll from '../../hooks/useScroll'
import { computed } from 'vue'

const [scrollNode, scrollTop] = useScroll()

const styleStr = computed(() => {
  const offset = scrollTop.value === 0 ? 'margin-bottom: 100vh' : ''
  return `transition: 1s;${offset};`
})

</script>

<template>
  <span @click="() => scrollNode.scrollTo({ top: 0 })" :style="styleStr">
    <GoTop />
  </span>
</template>