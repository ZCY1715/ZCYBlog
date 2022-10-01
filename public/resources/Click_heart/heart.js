(
    function (window, document) {

        window.requestAnimationFrame = (function () {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) {
                    setTimeout(callback, 1000 / 60)
                }
        })()

        const canvas = document.createElement("canvas")
        canvas.style.cssText = `pointer-events: none; position: fixed; z-index: 9999; top:0; left: 0;`
        document.body.insertAdjacentElement("beforeend", canvas)

        function resetSize() {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resetSize()
        function debounce(fn, delay) {
            let timer = null
            let isAbort = false
            function _debounce(...args) {
                if (isAbort) return
                if (timer) clearTimeout(timer)
                timer = setTimeout(() => {
                    fn.apply(this, args)
                }, delay)
            }
            _debounce.abort = () => {
                isAbort = true
                timer && clearTimeout(timer)
            }
            return _debounce
        }
        const debounceResetSize = debounce(resetSize, 100)
        window.addEventListener("resize", debounceResetSize)

        const ctx = canvas.getContext("2d")

        const loveList = []

        const getXY = d => [
            (12 * Math.sin(d) - 4 * Math.sin(3 * d)) * 0.6,
            (13 * Math.cos(d) - 5 * Math.cos(2 * d) - 2 * Math.cos(3 * d) - Math.cos(4 * d)) * 0.6
        ]

        class Love {
            constructor(x, y) {
                this.x = x
                this.y = y
                this.r = Math.floor(Math.random() * 255)
                this.g = Math.floor(Math.random() * 255)
                this.b = Math.floor(Math.random() * 255)
                this.a = 1
            }
            shouldDelete() {
                return this.a === 0
            }

            draw() {
                this.y -= 1
                this.a -= 0.01

                ctx.save()
                ctx.beginPath()
                ctx.translate(this.x, this.y)
                ctx.rotate(Math.PI)
                let radian = 0
                ctx.moveTo(...getXY(radian))
                while (radian < Math.PI * 2) {
                    radian += Math.PI / 180
                    ctx.lineTo(...getXY(radian))
                }
                ctx.closePath()
                ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${this.a})`
                ctx.fill()
                ctx.restore()
            }
        }

        let isStart = false

        window.addEventListener("click", e => {
            loveList.push(new Love(e.pageX, e.pageY))
            if (!isStart) {
                isStart = true
                anime()
            }
        })

        function anime() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            for (let i = loveList.length - 1; i >= 0; i--) {
                if (loveList[i].shouldDelete()) {
                    loveList.splice(i, 1)
                } else {
                    loveList[i].draw()
                }
            }
            if (loveList.length !== 0) {
                window.requestAnimationFrame(anime)
            } else {
                isStart = false
            }
        }

    }
)(window, document)