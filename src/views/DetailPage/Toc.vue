<script setup>
import { ref, computed, watch } from 'vue'
import useStore from '../../store'
import { subEvent } from '../../utils/pubSub'

const store = useStore()
const toc = ref([])
const tocLevel = computed(() => store.config.tocLevel || 3)

subEvent(mdBody => {
  const titles = Array.from(mdBody.querySelectorAll(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].slice(0, tocLevel.value).join(",")))
  toc.value = titles.map(item => ({
    value: item.innerText,
    element: item,
    level: item.nodeName.slice(1),
    inview: false,
  }))
  for (let i = 0; i < titles.length; i++) {
    const element = titles[i]
    const observer = new IntersectionObserver(entries => {
      toc.value[i].inview = entries.at(-1).isIntersecting
    }, {
      threshold: [0, 1]
    })
    observer.observe(element)
  }
})

const elementInViewIndex = computed(() => toc.value.findIndex(item => item.inview))
const showTocItemIndex = ref(0)
watch(elementInViewIndex, (value, oldValue) => {
  showTocItemIndex.value = ~value ? value : oldValue
}, { immediate: true })


</script>

<template>
  <div :class="[$style.toc, 'scrollY']" :style="'--z: ' + toc.length" v-if="toc.length > 2">
    <span v-for="item of toc" :key="item.value" @click="() => item.element.scrollIntoView()"
      :style="'--level:' + item.level">{{
      item.value
      }}</span>
    <span :class="$style.chooseLight" :style="'--itemIndex: ' + showTocItemIndex"></span>
  </div>
</template>

<style module>
.toc {
  width: 90%;
  position: relative;
  background-color: var(--z-toc-background);
  height: min(400px, calc(30px + 30px * var(--z)));
  padding: 20px 10px 20px 10px;
  border-radius: 10px 0 0 10px;
}

.toc>:not(:last-child) {
  position: relative;
  z-index: 1;
  display: block;
  align-items: center;
  height: 30px;
  width: 90%;
  text-indent: calc(15px * var(--level));
  border-radius: 5px;
  font-size: calc(20px - 1px * var(--level));
  cursor: var(--pointer);
  line-height: 30px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: 0ms;
}

.toc>:not(:last-child):hover {
  text-decoration: underline;
  font-weight: bold;
}

.chooseLight {
  position: absolute;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  background-color: var(--theme-color);
  left: 0;
  top: calc(30px * var(--itemIndex));
  margin-top: 20px;
  padding-right: 10px;
}
</style>