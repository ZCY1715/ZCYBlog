/**
  * @type {HTMLCanvasElement}
*/
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
ctx.lineWidth = 2

function getPoint(x, y) {
  const canvasRect = canvas.getBoundingClientRect()
  return [x - canvasRect.x, y - canvasRect.y]
}

let isDrawing = false
canvas.addEventListener("mousedown", e => {
  isDrawing = true
  ctx.moveTo(...getPoint(e.x, e.y))
})

canvas.addEventListener("mousemove", e => {
  if (isDrawing) {
    ctx.lineTo(...getPoint(e.x, e.y))
    ctx.stroke()
  }
})

canvas.addEventListener("mouseup", e => {
  isDrawing = false
})

