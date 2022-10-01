// 导入全局自定义组件

export default {
  install(app) {
    const moduleFiles = import.meta.globEager('../components/Global/*.vue')
    for (let module of Object.keys(moduleFiles)) {
      const component = moduleFiles[module].default
      const name = module.match(/[^/]+?(?=.vue)/)[0]
      app.component(
        name,
        component
      )
    }
  }
}
