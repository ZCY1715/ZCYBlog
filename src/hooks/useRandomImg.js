import useStore from '../store'
import { storeToRefs } from 'pinia'

let nonce = 0
const defaultAPI = "https://www.dmoe.cc/random.php"

export default function useRandomImg() {
  const store = useStore()
  const { config } = storeToRefs(store)
  const api = config.value.api.randomImg || defaultAPI

  return () => {
    nonce = Math.round((Math.random() * 10000000))
    return `${api}${/\?/.test(api) ? "&" : "?"}i=${nonce}`
  }
}