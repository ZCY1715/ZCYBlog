<script setup>
import Arrow from '../../assets/svgs/Arrow.svg?vueComponent'
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
  let arr = [i - 1, i, i + 1].filter(item => item >= 1 && item <= pageNums)
  const start = arr.at(0)
  const end = arr.at(-1)
  if (start > 2) {
    arr.unshift("...")
  }
  if (start === 2) {
    arr.unshift(1)
  }
  if (end < pageNums - 1) {
    arr.push("...")
  }
  if (end === pageNums - 1) {
    arr.push(pageNums)
  }
  return arr
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

function handleEnter(e) {
  const index = Number(e.target.value)
  e.target.value = ""
  if (index < 1 || index > pageNums) return
  toPage(index)
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
    <span :class="$style.pageInput">
      To:<input type="number" @keyup.enter="handleEnter" />
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

.pageInput {
  font-size: 20px;
  width: 80px;
  margin-left: 10px;
}

.pageInput input {
  width: 40px;
  outline: none;
  font-size: 20;
  background-color: var(--z-layout-background);
  border: none;
  border-bottom: 1px solid var(--theme-color);
  caret-color: var(--theme-color);
  padding-left: 10px;
  font-size: 20px;
}

.pageInput input::-webkit-inner-spin-button {
  display: none;
}
</style>