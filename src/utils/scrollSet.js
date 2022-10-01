export default class scrollSet {
  routeHistory = []
  currentScrollTop = 0

  getPrePathName() {
    return this.routeHistory.at(-1)?.path
  }

  pop() {
    return this.routeHistory.pop()
  }

  push(path, top) {
    return this.routeHistory.push({
      path,
      top
    })
  }

}