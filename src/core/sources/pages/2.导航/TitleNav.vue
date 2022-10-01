<script>

export default {
  data() {
    return {
      titles: [],
      showElementIndex: 0,
      elements: [],
      isInView: [],
    }
  },
  mounted() {
    this.elements = Array.from(document.querySelectorAll("[collection-title]"))
    this.titles = this.elements.map(node => node.innerText)
    this.isInView = new Array(this.elements.length).fill(false)
    this.elements.forEach((element, i) => {
      const observer = new IntersectionObserver(entries => {
        this.isInView[i] = entries.at(-1).isIntersecting
      }, {
        root: document.querySelector("[collection-container]"),
        threshold: [0, 1]
      })
      observer.observe(element)
    })
  },
  computed: {
    elementInViewIndex() {
      return this.isInView.findIndex(item => item)
    }
  },
  watch: {
    elementInViewIndex: {
      handler(value, oldValue) {
        if (~value) {
          this.showElementIndex = value
        } else {
          this.showElementIndex = oldValue
        }
      },
      immediate: true
    }
  }
}

</script>

<template>
  <div :class="$style.container" v-if="titles.length">
    <span v-for="(title, index) of titles" :key="index">
      <span :class="[$style.title, index === showElementIndex ? $style.targetTitle : '']"
        @click="() => elements[index].scrollIntoView()">{{ title
        }}</span>
      <span :class="$style.cutLine" v-if="index < titles.length - 1">|</span>
    </span>
  </div>
</template>

<style module>
.container {
  width: 100%;
  font-size: 20px;
  padding-bottom: 10px;
}

.container>span {
  line-height: 30px;
  white-space: nowrap;
}

.title {
  cursor: var(--pointer);
}

.targetTitle {
  color: var(--theme-color);
  text-decoration: underline;
}

.cutLine {
  padding: 0 12px 0 12px;
  color: #999;
}
</style>