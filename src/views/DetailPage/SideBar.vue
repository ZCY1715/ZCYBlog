<script setup>
import useScroll from '../../hooks/useScroll'
import { computed } from 'vue'

const [_, scrollTop] = useScroll()
const styleStr = computed(() => {
  const transformTop = Math.max(scrollTop.value - 350, 50)
  return `transform: translateY(${transformTop}px);`
})

</script>

<template>
  <div :class="[$style.container]">
    <div :class="$style.wrap" :style="styleStr">
      <slot />
    </div>
  </div>
</template>

<style module>
.container {
  margin: 50px 20px 0 20px;
  width: 250px;
}

.wrap {
  width: 100%;
  transition: transform 0s;
}
</style>