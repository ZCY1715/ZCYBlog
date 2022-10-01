<script>
import defaultIcon from './defaultIcon.png'

export default {
  data() {
    return {
      defaultIcon,
    }
  },
  props: ["data", "api"],
  methods: {
    toTarget(url) {
      window.open(this.formatUrl(url))
    },
    formatUrl(url) {
      if (!url.startsWith("http"))
        url = "https://" + url
      return url
    },
    getIcon(url) {
      return this.api + this.formatUrl(url)
    }
  },
}

</script>

<template>
  <div :class="[$style.container, 'scrollY']" collection-container>
    <div v-for="(collection, index) of data" :key="index">
      <h2 collection-title>{{ collection.title }}</h2>
      <div :class="$style.collection">
        <div v-for="item of collection.children" :class="$style.collectionItem" @click="() => toTarget(item.url)"
          :title="item.description">
          <span>
            <Picture :src="getIcon(item.url)" :defaultSrc="defaultIcon" />
          </span>
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.container {
  flex: 1;
  width: 100%;
  border-top: 2px solid #aaa;
  border-radius: 10px 10px 0 0;
}

.container::-webkit-scrollbar {
  display: none;
}

.container>div {
  width: 100%;
}

.collection {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  grid-gap: 15px 10px;
  width: 100%;
}

.collectionItem {
  min-height: 50px;
  width: min(100% - 10px, 300px);
  margin: 5px;
  box-shadow: var(--z-nav-item-shadow) 0 0 5px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  position: relative;
}

.collectionItem:hover {
  box-shadow: var(--z-nav-item-shadow) 0 0 10px;
  z-index: 1001;
}

.collectionItem>:first-child {
  width: 30px;
  height: 30px;
  margin: 0 10px 0 20px;
}

.collectionItem>:first-child img {
  width: inherit;
  height: inherit;
}

.collectionItem>:nth-child(2) {
  font-size: 20px;
}

.collectionItem:hover>:nth-child(2) {
  color: var(--theme-color);
}
</style>