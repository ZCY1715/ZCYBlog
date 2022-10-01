// 导入全局 svgs

export default {
  install(app) {
    const moduleFiles = import.meta.glob('../assets/svgs/*.svg', { eager: true })
    for (let module of Object.keys(moduleFiles)) {
      const component = moduleFiles[module].default
      const name = module.match(/[^/]+?(?=\.svg)/)[0]
      app.component(
        name,
        component
      )
    }
  }
}
