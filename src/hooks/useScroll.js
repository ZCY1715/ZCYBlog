import useStore from '../store'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

let scrollNode = null

export default function useScroll() {
  const store = useStore()
  const { scrollTop } = storeToRefs(store)

  const node = computed({
    get: () => {
      return scrollNode
    },
    set: value => {
      scrollNode = value
    }
  })

  return [node, scrollTop]
}