<script setup>
import useStore from '../../store'
import useRandomImg from '../../hooks/useRandomImg'
import useTitle from '../../hooks/useTitle'
import CategoryBar from '../../components/CategoryBar.vue'
import TagBar from '../../components/TagBar.vue'
import { computed, ref, watch } from 'vue'
import Banner from './Banner.vue'
import OtherPost from './OtherPost.vue'
import Valine from '../../components/Valine.vue'
import MarkdownBody from '../../components/MarkdownBody.vue'
import SideBar from './SideBar.vue'
import Toc from './Toc.vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const store = useStore()
const frontmatter = ref(null)
watch(() => props.id, id => {
  frontmatter.value = store.postSet.getMdById(id)
  useTitle(frontmatter.value.title)
}, { immediate: true })

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
      <MarkdownBody :id="props.id" :key="props.id" />
      <AlertBar type="WARN" :message="copyrightAlertMessage" />
      <CategoryBar :data="frontmatter.categories" />
      <TagBar :data="frontmatter.tags" />
      <OtherPost :id="props.id" />
      <Valine v-if="commentEnable" :key="props.id" :id="props.id" />
    </div>
    <SideBar :class="$style.rightBar">
      <Toc v-if="showToc" :key="props.id" />
    </SideBar>
  </div>
</template>

<style module>
.content {
  display: flex;
  width: 100%;
  transform: translateY(-50px);
}

.main {
  flex: 1;
  background-color: var(--z-mdbody-background);
  box-shadow: var(--z-mdbody-shadow) 0 0 10px;
  border-radius: 20px;
  padding: 30px 40px 60px 40px;
  margin: 0 5px 0 5px;
}

@media screen and (max-width: 1350px) {
  .leftBar {
    display: none;
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