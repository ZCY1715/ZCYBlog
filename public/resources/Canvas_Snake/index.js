/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")


const startNode = document.getElementById("start")
const stopNode = document.getElementById("stop")
const resetNode = document.getElementById("reset")

const specs = 50
const size = canvas.width / specs

let snake = null
let food = null
let timer = null

class Item {
  constructor(x, y) {
    this.x = x ?? Math.floor(Math.random() * specs)
    this.y = y ?? Math.floor(Math.random() * specs)
  }
  draw(color) {
    ctx.save()
    ctx.translate(this.x * size, this.y * size)
    ctx.fillStyle = color
    ctx.fillRect(0, 0, size, size)
    ctx.restore()
  }
}

class Food {
  target = null
  constructor() {
    while (true) {
      const item = new Item()
      if (!snake.isBody(item)) {
        this.target = item
        break
      }
    }
  }
  draw() {
    this.target.draw("red")
  }
}

class Snake {
  body = [new Item(specs / 2, specs / 2)]
  addSpeed = 0.001
  speed = 0.2
  dx = this.speed
  dy = 0
  /**
   * 
   * @param {"right"|"left"|"down"|"up"} direction 
   */
  setDirection(direction) {
    switch (direction) {
      case "up":
        if (this.dy !== 0) return
        this.dy = - this.speed
        this.dx = 0
        break
      case "down":
        if (this.dy !== 0) return
        this.dy = this.speed
        this.dx = 0
        break
      case "left":
        if (this.dx !== 0) return
        this.dx = - this.speed
        this.dy = 0
        break
      case "right":
        if (this.dx !== 0) return
        this.dx = this.speed
        this.dy = 0
        break
    }
  }
  /**
   * 
   * @param {Item} item 
   */
  isBody(item) {
    return Math.abs(this.body[0].x - item.x) <= 1 && Math.abs(this.body[0].y - item.y) <= 1
  }
  eat(item) {
    this.speed += this.addSpeed
    this.body.push(item)
    this.update()
  }
  draw() {
    this.body.forEach(item => item.draw("#fff"))
  }
  update() {
    const head = this.body[0]
    const lastOne = this.body.pop()
    lastOne.x = (head.x + this.dx + specs) % specs
    lastOne.y = (head.y + this.dy + specs) % specs
    this.body.unshift(lastOne)
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  snake.draw()
  food.draw()
}

function run() {
  snake.update()
  if (snake.isBody(food.target)) {
    snake.eat(food.target)
    food = new Food()
  }
  draw()
  timer = requestAnimationFrame(run)
}

function init() {
  snake = new Snake()
  food = new Food()
  draw()
}
init()

startNode.addEventListener("click", () => {
  if (timer) return
  timer = requestAnimationFrame(run)
})

stopNode.addEventListener("click", () => {
  if (!timer) return
  cancelAnimationFrame(timer)
  timer = null
})

resetNode.addEventListener("click", () => {
  if (timer) {
    cancelAnimationFrame(timer)
  }
  init()
})

document.addEventListener("keydown", (e) => {

  switch (e.keyCode) {
    //左
    case 37:
      snake.setDirection("left")
      break
    //上
    case 38:
      snake.setDirection("up")
      break
    //右
    case 39:
      snake.setDirection("right")
      break
    //下
    case 40:
      snake.setDirection("down")
      break
    default:
      break
  }
})

