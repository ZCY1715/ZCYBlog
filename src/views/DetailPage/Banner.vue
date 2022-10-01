<script setup>

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div :class="$style.container">
    <Picture :src="props.img" :class="$style.bannerImg" />
    <div :class="$style.postTitle" :title="props.title">
      {{ props.title }}
    </div>
  </div>
</template>

<style module>
.container {
  width: 100%;
  height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bannerImg {
  width: 100%;
  height: 100%;
  position: absolute;
}

.postTitle {
  position: relative;
  z-index: 1;
  font-size: 30px;
  background-color: var(--z-postBanner-background);
  width: 40%;
  min-width: 260px;
  border-radius: 10px;
  line-height: 35px;
  text-overflow: ellipsis;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 20px;
  transform: translateY(-50px);
}
</style>