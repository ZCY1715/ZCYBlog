/**
 * 
 * @param {HTMLElement} node 
 * @param {String} str 
 * @returns 
 */
export default function typed(node, str) {
  var timer1 = null
  var timer2 = null
  var timer3 = null

  let arr1 = str.split("")
  let arr2 = []

  function on() {
    if (!arr1.length) {
      clearInterval(timer1)
      timer3 = setTimeout(() => {
        timer2 = setInterval(off, 200)
      }, 3000)
      return
    }
    arr2.push(arr1.shift())
    node.innerText = arr2.join("")
  }

  function off() {
    if (!arr2.length) {
      clearInterval(timer2)
      timer1 = setInterval(on, 100)
      return
    }
    arr1.unshift(arr2.pop())
    node.innerText = arr2.join("")
  }

  off()

  return () => {
    timer1 && clearInterval(timer1)
    timer2 && clearInterval(timer2)
    timer3 && clearTimeout(timer3)
  }
}