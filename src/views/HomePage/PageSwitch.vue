<script setup>
import useStore from '../../store'
import useScroll from '../../hooks/useScroll'
import { computed } from 'vue'


const { pageNums } = defineProps({
  pageNums: Number
})

const store = useStore()

const pageIndex = computed(() => store.pageIndex)

const pageList = computed(() => {
  const i = pageIndex.value
  return [i - 2, i - 1, i, i + 1, i + 2].filter(item => item >= 1 && item <= pageNums)
})

const [scrollNode, _] = useScroll()
function toPage(i) {
  if (
    typeof i === "number" &&
    i <= pageNums &&
    i >= 1 &&
    i !== pageIndex.value
  ) {
    store.pageIndex = i
    scrollNode.value &&
      scrollNode.value.scrollTo({ top: window.innerHeight })
  }
}

</script>

<template>
  <div :class="$style.container" v-if="pageNums !== 0">
    <span :class="$style.leftArrow" @click="() => toPage(pageIndex - 1)" v-show="pageIndex !== 1">
      <Arrow />
    </span>
    <span :class="$style.pageNum" v-if="pageList.at(0) > 1">...</span>
    <span v-for="item of pageList" @click="() => toPage(item)" :key="item"
      :class="[$style.pageNum, item === pageIndex ? $style.targetPage : '']" style="text-decoration: underline;">
      {{ item }}
    </span>
    <span :class="$style.pageNum" v-if="pageList.at(-1) < pageNums">...</span>
    <span :class="$style.rightArrow" @click="() => toPage(pageIndex + 1)" v-show="pageIndex !== pageNums">
      <Arrow />
    </span>
  </div>
</template>

<style module>
.container {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.leftArrow,
.rightArrow {
  width: 20px;
  height: 20px;
}

.leftArrow *,
.rightArrow * {
  cursor: var(--pointer);
}

.leftArrow {
  transform: rotate(90deg);
}

.rightArrow {
  transform: rotate(-90deg);
}

.pageNum {
  font-size: 20px;
  line-height: 26px;
  padding: 0 5px 0 5px;
  cursor: var(--pointer);
}

.targetPage {
  color: var(--theme-color);
}
</style>