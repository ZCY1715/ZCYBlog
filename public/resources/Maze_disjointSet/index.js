class DisJointSet {

  arr = []

  /**
   * @param {Number} size 
   */
  constructor(size) {
    this.arr = new Array(size).fill(-1)
  }

  find(index) {
    if (this.arr[index] < 0) return index
    // 路径压缩
    this.arr[index] = this.find(this.arr[index])
    return this.arr[index]
  }

  merge(i, j) {

    const fatherI = this.find(i)
    const fatherJ = this.find(j)
    if (fatherI === fatherJ) return

    const sizeI = - this.arr[fatherI]
    const sizeJ = - this.arr[fatherJ]

    if (sizeI >= sizeJ) {
      this.arr[fatherJ] = fatherI
      this.arr[fatherI] = - (sizeI + sizeJ)
    } else {
      this.arr[fatherI] = fatherJ
      this.arr[fatherJ] = - (sizeI + sizeJ)
    }

  }

  getSet(index) {
    const setArr = []
    const father = this.find(index)
    for (let i = 0, len = this.arr.length; i < len; i++) {
      if (this.find(i) === father) {
        setArr.push(i)
      }
    }
    return setArr
  }

  getSetSize(index) {
    const fatherI = this.find(index)
    return - this.arr[fatherI]
  }

  getAllSet() {
    const allSet = []
    const size = this.arr.length
    const hasVisit = new Array(size).fill(false)
    for (let i = 0; i < size; i++) {
      if (hasVisit[i]) continue
      const set = [i]
      hasVisit[i] = true
      const fatherI = this.find(i)
      for (let j = i + 1; j < size; j++) {
        if (hasVisit[j]) continue
        if (this.find(j) === fatherI) {
          set.push(j)
          hasVisit[j] = true
        }
      }
      allSet.push(set)
    }
    return allSet
  }

  isInSameSet(i, j) {
    return this.find(i) === this.find(j)
  }

  isAllConnected() {
    return this.arr.length === this.getSetSize(0)
  }

}

const specs = 40

function randomCell() {
  return [
    Math.floor(Math.random() * specs),
    Math.floor(Math.random() * specs)
  ]
}

const offsets = [
  [0, -1, 'up', 'down'],
  [0, 1, 'down', 'up'],
  [1, 0, 'right', 'left'],
  [-1, 0, 'left', 'right']
]

function randomNeighber(row, col) {
  const canTo = []
  for (const offset of offsets) {
    const [dr, dc, d1, d2] = offset
    const [r, c] = [row + dr, col + dc]
    if (
      r < 0 ||
      r >= specs ||
      c < 0 ||
      c >= specs
    ) continue
    canTo.push([r, c, d1, d2])
  }
  const len = canTo.length
  if (!len) return null
  else return canTo[Math.floor(Math.random() * len)]
}

function initMaze() {
  const disJointSet = new DisJointSet(specs * specs)
  const gridWalls = Array.from({ length: specs }, _ => Array.from({ length: specs }, _ => ({
    left: false,
    right: false,
    up: false,
    down: false
  })))
  while (!disJointSet.isInSameSet(0, specs * specs - 1)) {
    const [row1, col1] = randomCell()
    const neighber = randomNeighber(row1, col1)
    if (!neighber) continue
    const [row2, col2, d1, d2] = neighber
    if (disJointSet.isInSameSet(
      row1 * specs + col1,
      row2 * specs + col2
    )) continue
    disJointSet.merge(
      row1 * specs + col1,
      row2 * specs + col2
    )
    gridWalls[row1][col1][d1] = true
    gridWalls[row2][col2][d2] = true
  }
  return gridWalls
}

function drawMaze(gridWalls) {
  /**
    * @type {HTMLCanvasElement}
  */
  const mazeCanvas = document.getElementById('maze')
  const mazeCtx = mazeCanvas.getContext("2d")
  mazeCtx.clearRect(0, 0, mazeCanvas.width, mazeCanvas.height)
  const sideLen = mazeCanvas.width / specs
  for (let i = 0; i < specs; i++) {
    for (let j = 0; j < specs; j++) {
      mazeCtx.save()
      mazeCtx.translate(i * sideLen, j * sideLen)
      const cell = gridWalls[i][j]
      mazeCtx.beginPath()
      if (!cell.left) {
        mazeCtx.moveTo(0, 0)
        mazeCtx.lineTo(0, sideLen)
      }
      if (!cell.up) {
        mazeCtx.moveTo(0, 0)
        mazeCtx.lineTo(sideLen, 0)
      }
      if (!cell.right) {
        mazeCtx.moveTo(sideLen, 0)
        mazeCtx.lineTo(sideLen, sideLen)
      }
      if (!cell.down) {
        mazeCtx.moveTo(0, sideLen)
        mazeCtx.lineTo(sideLen, sideLen)
      }
      mazeCtx.closePath()
      mazeCtx.stroke()
      mazeCtx.restore()
    }
  }
}


function drawControl(gridWalls) {
  /**
    * @type {HTMLCanvasElement}
  */
  const controlCanvas = document.getElementById('control')
  const controlCtx = controlCanvas.getContext("2d")
  const sideLen = controlCanvas.width / specs
  const currentPoint = {
    row: 0,
    col: 0
  }
  const endPoint = {
    row: specs - 1,
    col: specs - 1
  }
  function drawCurrent() {
    controlCtx.save()
    const { row, col } = currentPoint
    controlCtx.translate(row * sideLen, col * sideLen)
    controlCtx.fillStyle = "#cc0099"
    controlCtx.fillRect(2, 2, sideLen - 4, sideLen - 4)
    controlCtx.restore()
  }

  function drawEnd() {
    controlCtx.save()
    const { row, col } = endPoint
    controlCtx.translate(row * sideLen, col * sideLen)
    controlCtx.fillStyle = "#0099dd"
    controlCtx.fillRect(2, 2, sideLen - 4, sideLen - 4)
    controlCtx.restore()
  }
  function initBoth() {
    controlCtx.clearRect(0, 0, controlCanvas.width, controlCanvas.height)
    drawCurrent()
    drawEnd()
  }
  initBoth()
  document.addEventListener("keydown", e => {
    const { row, col } = currentPoint
    const currentCell = gridWalls[row][col]
    switch (e.keyCode) {
      case 37:
        if (currentCell.left) {
          currentPoint.row--
        }
        break
      case 38:
        if (currentCell.up) {
          currentPoint.col--
        }
        break
      case 39:
        if (currentCell.right) {
          currentPoint.row++
        }
        break
      case 40:
        if (currentCell.down) {
          currentPoint.col++
        }
        break
      default:
        return
    }
    if (currentPoint.row === endPoint.row && currentPoint.col === endPoint.col) {
      alert("You win !")
      init()
      return
    }
    initBoth()
  })
}

function init() {
  const gridWalls = initMaze()
  drawMaze(gridWalls)
  drawControl(gridWalls)
}


init()