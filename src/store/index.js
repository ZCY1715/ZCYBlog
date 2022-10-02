import { defineStore } from 'pinia'
import ThemeColorSwitcher from '../utils/themeColorSwitcher'
import config from '../core/_config.yaml'
import { PostSet, pages } from '../core'

const useStore = defineStore('store', {
  state() {
    return {
      themeColor: new ThemeColorSwitcher(),
      postSet: new PostSet(),
      pagesInfo: pages.pagesInfo,
      pageIndex: 1,
      scrollTop: 0,
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
          'scrollTop',
          'pageIndex',
        ]
      }
    ]
  }
})

export default useStore