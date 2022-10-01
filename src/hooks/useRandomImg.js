import useStore from '../store'
import { storeToRefs } from 'pinia'


export default function useRandomImg() {
  const store = useStore()
  const { randomImg, config } = storeToRefs(store)
  const api = config.value.api.randomImg || randomImg.value.api
  const flag = /\?/.test(api)

  return () => {
    const nonce = Math.round(Math.random() * 100000000)
    randomImg.value.randomNonce = nonce
    return `${api}${flag ? "&" : "?"}i=${nonce}`
  }
}