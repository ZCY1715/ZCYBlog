function isDay() {
  const date = new Date()
  const hour = date.getHours()
  return hour >= 7 && hour < 19
}

// 用于控制主题色

export default class ThemeColorSwitcher {
  id = "themeColor_init"
  themeTypes = {
    DAY: "day",
    NIGHT: "night"
  }
  themeColor = null

  constructor(themeColor) {
    if (themeColor && [this.themeTypes.DAY, this.themeTypes.NIGHT].includes(themeColor)) {
      this.themeColor = themeColor
    } else {
      this.themeColor = isDay() ? this.themeTypes.DAY : this.themeTypes.NIGHT
    }
  }

  isDayModel() {
    return this.themeColor === this.themeTypes.DAY
  }

  initThemeColor() {
    let styleNode = document.getElementById(this.id)
    if (!Boolean(styleNode)) {
      styleNode = document.createElement("link")
      styleNode.id = this.id
      styleNode.rel = "stylesheet"
      styleNode.type = "text/css"
      const type = this.themeColor
      styleNode.href = `/themeColors/${type}.css`
      document.head.appendChild(styleNode)
    }
  }

  switchThemeColor() {
    this.themeColor = this.isDayModel() ? this.themeTypes.NIGHT : this.themeTypes.DAY
    document.getElementById(this.id).setAttribute('href', `/themeColors/${this.themeColor}.css`)
  }

}