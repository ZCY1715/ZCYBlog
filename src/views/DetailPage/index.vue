<script setup>
import useStore from '../../store'
import useRandomImg from '../../hooks/useRandomImg'
import useTitle from '../../hooks/useTitle'
import CategoryBar from '../../components/CategoryBar.vue'
import TagBar from '../../components/TagBar.vue'
import { onBeforeMount, computed, ref } from 'vue'
import Banner from './Banner.vue'
import OtherPost from './OtherPost.vue'
import Valine from '../../components/Valine.vue'
import MarkdownBody from '../../components/MarkdownBody.vue'
import SideBar from './SideBar.vue'
import Toc from './Toc.vue'

const { id } = defineProps({
  id: {
    type: String,
    required: true
  }
})

const store = useStore()

const frontmatter = ref(null)

onBeforeMount(() => {
  frontmatter.value = store.postSet.getMdById(id)
  useTitle(frontmatter.value.title)
})

const showToc = computed(() => frontmatter.value.toc)

const copyrightAlertMessage = computed(() => store.config.copyright || '')

const randomImg = useRandomImg()
const bannerImg = computed(() => frontmatter.value.img || randomImg())

const timeAlertMessage = computed(() => {
  const { publishTime, updateTime } = frontmatter.value
  let arr = [`本文发布于： ${publishTime}`]
  if (updateTime) {
    arr.push(`最近更新于： ${updateTime}`)
  }
  return arr
})

const commentEnable = computed(() => frontmatter.value.comment)

</script>

<template>
  <Banner :title="frontmatter.title" :img="bannerImg" />
  <div :class="$style.content">
    <SideBar :class="$style.leftBar">

    </SideBar>
    <div :class="$style.main">
      <AlertBar :message="timeAlertMessage" />
      <MarkdownBody :id="id" />
      <AlertBar type="WARN" :message="copyrightAlertMessage" />
      <CategoryBar :data="frontmatter.categories" />
      <TagBar :data="frontmatter.tags" />
      <OtherPost :id="id" />
      <Valine v-if="commentEnable" :id="id" />
    </div>
    <SideBar :class="$style.rightBar">
      <Toc v-if="showToc" />
    </SideBar>
  </div>
</template>

<style module>
.content {
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: 1;
  top: -50px;
}

.main {
  background-color: var(--z-mdbody-background);
  box-shadow: var(--z-mdbody-shadow) 0 0 10px;
  position: relative;
  border-radius: 20px;
  padding: 30px 40px 60px 40px;
}

@media screen and (max-width: 1350px) {
  .leftBar {
    display: none;
  }
}

@media screen and (min-width: 1000px) {
  .main {
    width: 50%;
    min-width: 650px;
  }
}

@media screen and (max-width: 1000px) {
  .main {
    width: 100%;
  }

  .rightBar {
    display: none;
  }
}
</style>