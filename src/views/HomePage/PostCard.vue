<script setup>
import { useRouter } from 'vue-router'
import TagBar from '../../components/TagBar.vue'
import CategoryBar from '../../components/CategoryBar.vue'

const { data, index } = defineProps({
  data: Object,
  index: Number
})

const router = useRouter()
const toDetail = id => router.push({ name: 'DetailPage', params: { id } })

</script>

<template>
  <div :class="[$style.container, index % 2 ? $style.reverseItem : '']">
    <div :class="$style.imgBox" @click="() => toDetail(data.id)">
      <Picture lazy :src="data.img" :class="$style.postImg" />
    </div>
    <div :class="$style.postDetail">
      <div :class="$style.postTitle" @click="() => toDetail(data.id)">
        {{ data.title }}
      </div>
      <div :class="$style.publishTime">
        <Date />
        {{ data.publishTime }}
      </div>
      <div :class="$style.description" @click="() => toDetail(data.id)">
        {{ data.description }}
      </div>
      <CategoryBar :data="data.categories" />
      <TagBar :data="data.tags" />
    </div>
  </div>
</template>

<style module>
.container {
  z-index: 1;
  background-color: var(--z-layout-background);
}

.postImg {
  cursor: var(--pointer);
}

.postDetail {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 40px;
  margin-top: 20px;
}

.postTitle {
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: var(--pointer);
}

.postTitle:hover {
  color: var(--theme-color);
}

.publishTime {
  margin-top: 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #999;
  font-weight: bold;
}

.publishTime svg {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}

.description {
  margin-top: 20px;
  text-indent: 2em;
  line-height: 25px;
  height: 125px;
  text-overflow: ellipsis;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  font-size: 18px;
  cursor: var(--pointer);
}

@media screen and (min-width: 950px) {
  .container {
    width: 900px;
    height: 0;
    min-height: 300px;
    margin: 50px 10px 50px 10px;
    border-radius: 20px;
    display: flex;
    box-shadow: var(--z-postCard-shadow) 0 0 10px;
  }

  .container:hover {
    box-shadow: var(--z-postCard-shadow) 0 0 20px;
  }

  .reverseItem {
    transform: rotateY(180deg);
  }

  .reverseItem>* {
    transform: rotateY(180deg);
  }

  .imgBox {
    width: 400px;
    height: 100%;
  }

  .postImg {
    width: 100%;
    height: 100%;
    transition: 1s;
  }

  .container:hover .postImg {
    transform: scale(1.3) rotate(15deg);
  }

  .postTitle {
    width: 400px;
  }

  .description {
    width: 440px;
  }
}

@media screen and (max-width: 950px) {
  .container {
    width: 100%;
    margin: 30px 0 30px 0;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 3px 10px var(--z-postCard-shadow);
  }

  .imgBox {
    width: 100%;
    aspect-ratio: 2;
  }

  .postTitle {
    width: 100%;
  }

  .description {
    width: 100%;
  }
}
</style>