<script setup>
import useStore from '../../store'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import useRandomImg from '../../hooks/useRandomImg'

const props = defineProps({
  id: String,
})
const store = useStore()
const prePost = ref(null)
const nextPost = ref(null)
const randomImg = useRandomImg()
watch(() => props.id, id => {
  prePost.value = store.postSet.getPreMdById(id)
  nextPost.value = store.postSet.getNextMdById(id)
  if (prePost.value && !prePost.value.img) {
    prePost.value.img = randomImg()
  }
  if (nextPost.value && !nextPost.value.img) {
    nextPost.value.img = randomImg()
  }
}, { immediate: true })

const router = useRouter()
const toPost = id => router.push({ name: 'DetailPage', params: { id } })

</script>

<template>
  <div :class="$style.container">
    <div :class="[$style.prePost, !prePost ? $style.noSeeMobile : '']">
      <Arrow />
      <div :class="$style.noMorePost" v-if="!prePost">
        暂无更多~
      </div>
      <div v-else @click="() => toPost(prePost.id)">
        <Picture :src="prePost.img" :class="$style.morePostImg" :key="prePost.img" />
        <div :class="$style.morePostTitle">
          <span>{{ prePost.title }}</span>
        </div>
      </div>
    </div>
    <div :class="[$style.nextPost, !nextPost ? $style.noSeeMobile : '']">
      <div :class="$style.noMorePost" v-if="!nextPost">
        暂无更多~
      </div>
      <div v-else @click="() => toPost(nextPost.id)">
        <Picture :src="nextPost.img" :class="$style.morePostImg" :key="nextPost.img" />
        <div :class="$style.morePostTitle">
          <span>{{ nextPost.title }}</span>
        </div>
      </div>
      <Arrow />
    </div>
  </div>
</template>

<style module>
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 30px 0 30px 0;
}

.prePost,
.nextPost {
  height: 100px;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.prePost svg {
  width: 18px;
  height: 18px;
  transform: rotate(90deg);
}

.nextPost svg {
  width: 18px;
  height: 18px;
  transform: rotate(-90deg);
}

.prePost>:nth-child(2),
.nextPost>:nth-child(1) {
  width: calc(100% - 50px);
  height: 100%;
  border-radius: 10px;
  position: relative;
}

.prePost>:nth-child(2) {
  margin: 0 28px 0 10px;
}

.nextPost>:nth-child(1) {
  margin: 0 10px 0 28px;
}

@media screen and (min-width: 850px) {
  .container {
    flex-direction: row;
  }

  .container>div {
    width: 400px;
  }
}

@media screen and (max-width: 850px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .container>div {
    width: 100%;
    max-width: 400px;
  }

  .noSeeMobile {
    display: none;
  }
}

.noMorePost {
  display: flex;
  align-items: center;
  justify-content: center;
}

.morePostImg {
  width: 100%;
  height: 100%;
}

.container>div:hover .morePostImg {
  transform: scale(1.1);
}

.morePostTitle {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
}

.morePostTitle span {
  padding: 10px 20px 10px 20px;
  text-align: center;
  font-size: 20px;
  width: 100%;
  line-height: 25px;
  background-color: var(--z-postBanner-background);
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>