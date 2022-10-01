import { defineStore } from 'pinia'
import ThemeColorSwitcher from '../utils/themeColorSwitcher'
import config from '../core/_config.yaml'
import { PostSet, pageImport } from '../core'
import ScrollSet from '../utils/scrollSet'


const { pagesInfo } = pageImport()

const useStore = defineStore('store', {
  state() {
    return {
      themeColor: new ThemeColorSwitcher(),
      postSet: new PostSet(),
      pagesInfo,
      pageIndex: 1,
      randomImg: {
        api: 'https://www.dmoe.cc/random.php',
        randomNonce: 0,
      },
      scrollNode: null,
      scrollSet: new ScrollSet(),
      config,
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: sessionStorage,
        paths: [
          'themeColor',
          'scrollSet',
          'pageIndex',
        ]
      },
      {
        storage: localStorage,
        paths: [
          'randomImg'
        ]
      }
    ]
  }
})

export default useStore