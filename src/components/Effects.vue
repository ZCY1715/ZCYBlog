<script setup>
import { IsPC } from '../utils'
import { computed } from 'vue'
import useStore from '../store'

const store = useStore()

const backgroundEffect = computed(() => store.config.backgroundEffect)
const clickEffect = computed(() => store.config.clickEffect)

function farmet(name) {
  return `/statics/${name}.js`
}

</script>

<template>
  <template v-if="IsPC()">
    <!-- 背景效果 -->
    <component is="script" :src="farmet('sakura')" v-if="backgroundEffect.sakura" />
    <!-- 点击效果 -->
    <component is="script" :src="farmet('heart')" v-if="clickEffect.heart" />
    <template v-else-if="clickEffect.boom">
      <canvas class="fireworks" style="z-index: 9999;position: fixed;left: 0;top: 0; pointer-events: none;"></canvas>
      <component is="script" :async="false" :src="farmet('anime')" />
      <component is="script" :async="false" :src="farmet('boom')" />
    </template>
    <component is="script" :src="farmet('grain')" v-else-if="clickEffect.grain" />
  </template>
</template>