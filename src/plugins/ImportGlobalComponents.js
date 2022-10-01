// 导入全局 components

export default {
  install(app) {
    const moduleFiles = import.meta.glob('../components/Global/*.vue', { eager: true })
    for (let module of Object.keys(moduleFiles)) {
      const component = moduleFiles[module].default
      const name = module.match(/[^/]+?(?=\.vue)/)[0]
      app.component(
        name,
        component
      )
    }
  }
}
