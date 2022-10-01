<script setup>
import useStore from '../store'
import { ref, onMounted, computed, markRaw, watch } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const store = useStore()

const md = ref(null)

onMounted(async () => {
  const mdComponent = store.postSet.import(props.id)
  md.value = markRaw((await mdComponent()).default)
})

const copyLimite = computed(() => store.config.copyLimite || Infinity)
const copySuffix = computed(() => store.config.copySuffix || '')

watch(md, () => {
  const mdBody = document.querySelector(".markdown-body")
  mdBody.querySelectorAll("pre").forEach(node => {
    node.classList.add("scrollX")
  })
  mdBody.querySelectorAll("a").forEach(node => {
    node.target = "_blank"
  })
  import('clipboard').then(ClipboardJS => {
    mdBody.querySelectorAll("pre").forEach(preNode => {
      const copyNode = document.createElement("span")
      copyNode.innerText = "复制"
      copyNode.className = 'copyBth'
      preNode.parentNode.appendChild(copyNode)
      const clipboard = new ClipboardJS.default(copyNode, {
        target: () => preNode,
        text: () => {
          const content = preNode.innerText
          return content.length < copyLimite.value ? content : content + "\n\n" + copySuffix.value
        }
      })
      clipboard.on("success", e => {
        const node = e.trigger
        node.className = "copySuccess"
        node.innerText = "成功"
        setTimeout(() => {
          node.innerText = "复制"
          node.className = 'copyBth'
        }, 1000)
      })
    })
  })
}, {
  flush: "post"
})


</script>

<template>
  <component :is="md" />
</template>
