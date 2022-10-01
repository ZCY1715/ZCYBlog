<script setup>

const { data } = defineProps({
  data: Array
})

function toTag(tag) {

}


</script>

<template>
  <div :class="$style.container" v-if="data.length !== 0">
    <Tag />
    <div :class="$style.tags">
      <span v-for="(tag, index) of data" :key="index" @click="() => toTag(tag)">{{ tag }}</span>
    </div>
  </div>
</template>

<style module>
.container {
  display: flex;
  margin: 5px 0 5px 0;
}

.container>:first-child {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}

.container>.tags {
  flex: 1;
}

.tags>span {
  line-height: 22px;
  font-size: 14px;
  color: #999;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0 8px 0 8px;
  cursor: var(--pointer);
  white-space: nowrap;
}

.tags>span:hover {
  color: var(--theme-color);
  text-decoration: underline;
}
</style>