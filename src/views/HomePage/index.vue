<script setup>
import Banner from './Banner.vue'
import useStore from '../../store'
import Boy from '../../assets/boy.webp'
import Girl from '../../assets/girl.webp'
import PageSwitch from './PageSwitch.vue'
import { computed } from 'vue'
import useScroll from '../../hooks/useScroll'
import PostCard from './PostCard.vue'
import useRandomImg from '../../hooks/useRandomImg'
import useTheme from '../../hooks/useTheme'

const store = useStore()

const [isDay, _] = useTheme()
const [__, scrollTop] = useScroll()
const imgTop = computed(() => {
  return Math.max(100, scrollTop.value - window.innerHeight / 2)
})

const randomImg = useRandomImg()
const posts = computed(() => {
  const data = store.postSet.getMds()
  return data.map(item => ({
    ...item,
    img: item.img || randomImg(),
    description: item.description || `进入查看详情...`
  }))
})

const pageIndex = computed(() => store.pageIndex)
const numInPage = computed(() => store.config.post?.numInPage || 10)
const showPosts = computed(() => posts.value.slice((pageIndex.value - 1) * numInPage.value, pageIndex.value * numInPage.value))
const pageNums = computed(() => Math.ceil(posts.value.length / numInPage.value))

const noPostStr = computed(() => posts.value.length === 0 ? "暂未发布内容~" : "没有更多了~")

</script>

<template>
  <Banner />
  <div :class="$style.postContainer">
    <Picture :src="Boy" :class="[!isDay ? $style.invertImg : '']" :style="'top: ' + imgTop + 'px;'" />
    <div :class="$style.content">
      <div :class="$style.posts">
        <PostCard v-for="(item, index) of showPosts" :index="index" :data="item" :key="item.id" />
        <div :class="$style.noPosts" v-if="pageIndex === pageNums || pageNums === 0">
          {{ noPostStr }}
        </div>
      </div>
      <PageSwitch :pageNums="pageNums" />
    </div>
    <Picture :src="Girl" :class="[!isDay ? $style.invertImg : '']" :style="'top: ' + imgTop + 'px;'" />
  </div>
</template>

<style module>
.postContainer {
  width: 100%;
  display: flex;
  min-height: 600px;
  padding-bottom: 150px;
  position: relative;
  justify-content: space-evenly;
}

.postContainer>:nth-child(1),
.postContainer>:nth-child(3) {
  width: 200px;
  height: 200px;
  position: relative;
  border-radius: 20px;
  mix-blend-mode: multiply;
}

@media screen and (max-width: 1300px) {

  .postContainer>:nth-child(1),
  .postContainer>:nth-child(3) {
    display: none;
  }
}

.postContainer>:nth-child(3) {
  transform: rotateY(180deg);
}

.invertImg {
  filter: invert(100%);
  mix-blend-mode: revert !important;
}

.content {
  flex: 1;
  min-height: 200px;
  position: relative;
  top: 60px;
}

.noPosts {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
}

.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
}
</style>