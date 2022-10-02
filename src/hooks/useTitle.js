import { onBeforeUnmount, isRef, watch } from 'vue'

let used = false
let titleNode = null
let originalTitle = ""
let watchStopHandle = null

export default function useTitle(title) {

  if (!used) {
    titleNode = document.querySelector('title')
    originalTitle = titleNode.innerText
    used = true
    onBeforeUnmount(() => {
      used = false
      titleNode.innerText = originalTitle
      titleNode = null
      originalTitle = ""
      watchStopHandle = null
    })
  }

  if (isRef(title)) {
    if (watchStopHandle) watchStopHandle()
    watchStopHandle = watch(title, value => titleNode.innerText = value + ' — ' + originalTitle, { immediate: true })
  } else {
    titleNode.innerText = String(title) + ' — ' + originalTitle
  }
}