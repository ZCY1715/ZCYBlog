<script setup>
import useStore from '../store'
import { computed, onMounted } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const store = useStore()
const valineConfig = computed(() => store.config.comments.valine)

onMounted(() => {
  if (valineConfig.value.enable) {
    import('valine').then(Valine => {
      new Valine.default({
        el: '#vcomments',
        appId: valineConfig.value.appId,
        appKey: valineConfig.value.appKey,
        placeholder: '说点什么吧~',
        path: props.id,
        avatar: 'retro',
        recordIP: true,
      })
    })
  }
})

</script>

<template>
  <div id="vcomments" v-if="valineConfig.enable"></div>
</template>

<style>
#vcomments a:hover {
  background-color: inherit !important;
}

#vcomments .txt-right a {
  display: inline;
}

#vcomments .vbtn:hover {
  color: var(--theme-color);
  border-color: var(--theme-color);
}

#vcomments #veditor {
  font-size: 18px;
  caret-color: var(--theme-color);
}

#vcomments #veditor::placeholder {
  font-size: 18px;
  color: #666;
}

#vcomments .vempty {
  font-size: 20px;
}
</style>