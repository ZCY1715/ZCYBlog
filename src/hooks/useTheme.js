import { computed } from 'vue'
import useStore from '../store'
import { storeToRefs } from 'pinia'


export default function useTheme() {
  const store = useStore()
  const { themeColor } = storeToRefs(store)

  const isDay = computed(() => themeColor.value.isDayModel())

  function switchTheme() {
    themeColor.value.switchThemeColor()
  }

  return [isDay, switchTheme]
}