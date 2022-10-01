<script setup>
import Category from '../assets/svgs/Category.svg?vueComponent'

const { data } = defineProps({
  data: Array
})

function toCategory(category) {

}


</script>

<template>
  <div :class="$style.container" v-if="data.length !== 0">
    <Category />
    <div :class="$style.categorys">
      <span v-for="(category, index) of data" :key="index" @click="() => toCategory(category)">{{ category }}</span>
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

.container>.categorys {
  flex: 1;
}

.categorys>span {
  line-height: 22px;
  font-size: 14px;
  font-weight: bold;
  color: #999;
  letter-spacing: 1px;
  padding: 0 8px 0 8px;
  cursor: var(--pointer);
  white-space: nowrap;
}

.categorys>span:hover {
  color: var(--theme-color);
  text-decoration: underline;
}
</style>