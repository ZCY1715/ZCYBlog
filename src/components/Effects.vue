<script setup>
import { IsPC } from '../utils'
import { computed } from 'vue'
import useStore from '../store'

const store = useStore()

const backgroundEffect = computed(() => store.config.backgroundEffect)
const clickEffect = computed(() => store.config.clickEffect)

function formet(name) {
  return `/statics/${name}.js`
}

</script>

<template>
  <template v-if="IsPC()">
    <!-- 背景效果 -->
    <component is="script" :src="formet('sakura')" v-if="backgroundEffect.sakura" />
    <!-- 点击效果 -->
    <component is="script" :src="formet('heart')" v-if="clickEffect.heart" />
    <template v-else-if="clickEffect.boom">
      <canvas class="fireworks" style="z-index: 9999;position: fixed;left: 0;top: 0; pointer-events: none;"></canvas>
      <component is="script" :async="false" :src="formet('anime')" />
      <component is="script" :async="false" :src="formet('boom')" />
    </template>
    <component is="script" :src="formet('grain')" v-else-if="clickEffect.grain" />
  </template>
</template>