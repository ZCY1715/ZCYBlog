<script setup>
import { computed, inject, ref, onBeforeMount } from 'vue'
import defaultBg from '../../assets/defaultBg.png'
import useTitle from '../../hooks/useTitle'

const props = defineProps(["data"])
const config = inject("config")

const randomPoetryAPI = computed(() => config.value.api.randomPoetry)

function randomPoetry() {
  return new Promise(resolve => {
    fetch(randomPoetryAPI.value)
      .then(response => response.json())
      .then(data => resolve(data.content))
  })
}
const description = ref(props.data.description)

onBeforeMount(async () => {
  if (!description.value) {
    description.value = await randomPoetry()
  }
})

const title = computed(() => props.data.title)
useTitle(title)

const img = computed(() => props.data.img || defaultBg)

</script>

<template>
  <div :class="$style.container">
    <Picture lazy :src="img" :class="$style.img" />
    <div :class="$style.main">
      <div :class="$style.title">{{ title }}</div>
      <div :class="$style.description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<style module>
.container {
  height: 400px;
  width: 100%;
  position: relative;
}

.img {
  width: 100%;
  height: 100%;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  user-select: none;
}

.title {
  font-size: 40px;
  font-weight: bold;
  margin-top: 150px;
  color: #fff;
}

.description {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  color: #fff;
}
</style>