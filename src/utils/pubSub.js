// markdown 更新的订阅发布


const events = []

export function pubEvent() {
  const mdBody = document.querySelector(".markdown-body")
  events.forEach(fn => fn(mdBody))
  events.length = 0
}

export function subEvent(fn) {
  events.push(fn)
}