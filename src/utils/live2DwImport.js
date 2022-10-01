// live2d 模型配置

export default function live2dInit() {
  window.L2Dwidget.init({
    pluginRootPath: '/statics/live2dw/',
    pluginJsPath: 'lib/',
    pluginModelPath: `live2d-widget-model-koharu/assets/`,
    tagMode: false,
    debug: false,
    model: {
      jsonPath: `/statics/live2dw/live2d-widget-model-koharu/assets/koharu.model.json`,
    },
    display: {
      position: 'left',
      width: 100,
      height: 200
    },
    mobile: {
      show: false
    },
    log: false,
    react: {
      opacity: 0.5
    }
  })
}