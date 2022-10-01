import { computed } from 'vue'
import useStore from '../store'
import { storeToRefs } from 'pinia'


export default function useScroll() {
  const store = useStore()
  const { scrollNode, scrollSet } = storeToRefs(store)

  const node = computed({
    get() {
      return scrollNode.value
    },
    set(node) {
      scrollNode.value = node
    }
  })
  const top = computed({
    get() {
      return scrollSet.value.currentScrollTop
    },
    set(num) {
      scrollSet.value.currentScrollTop = num
    }
  })

  return [node, top, computed(() => scrollSet.value)]
}