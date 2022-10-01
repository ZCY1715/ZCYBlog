<script setup>
import useScroll from '../../hooks/useScroll'
import { computed } from 'vue'
import { IsPC } from '../../utils'

const [_, scrollTop] = useScroll()
const top = computed(() => Math.max(scrollTop.value - 350, 0))
const styleStr = computed(() => `top: ${top.value}px`)

</script>

<template>
  <div :class="[$style.container, !IsPC() ? $style.noSeeInMobile : '']">
    <div :class="$style.wrap" :style="styleStr">
      <slot />
    </div>
  </div>
</template>

<style module>
.container {
  margin: 80px 20px 0 20px;
  width: 250px;
  min-width: 250px;
}

.wrap {
  position: relative;
  width: 100%;
  display: inline-flex;
  transition: top 0s;
}

.noSeeInMobile {
  display: none;
}
</style>