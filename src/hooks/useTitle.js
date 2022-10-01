import { onBeforeUnmount, ref, isRef, watch } from 'vue'

export default function useTitle(title) {

  const node = document.querySelector('title')

  const originalTitle = ref(node.innerText)

  if (isRef(title)) {
    watch(title, value => node.innerText = value + ' — ' + originalTitle.value, { immediate: true })
  } else {
    node.innerText = String(title) + ' — ' + originalTitle.value
  }

  onBeforeUnmount(() => {
    node.innerText = originalTitle.value
  })

}