const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class Promise {

  state = PENDING
  data = undefined
  reason = undefined
  onFulfilled = []
  onRejected = []

  constructor(executor) {

    const resolve = this.resolve.bind(this)
    const reject = this.reject.bind(this)

    try {
      executor && executor(resolve, reject)
    } catch (error) { reject(error) }

  }

  resolve(data) {
    if (this.state === PENDING) {
      this.state = FULFILLED
      this.data = data
      this.onFulfilled.forEach(fn => fn(data))
    }
  }

  reject(reason) {
    if (this.state === PENDING) {
      this.state = REJECTED
      this.reason = reason
      this.onRejected.forEach(fn => fn(reason))
    }
  }

}

function resolvePromise(promise, result, resolve, reject) {
  if (promise === result) {
    return reject(new TypeError('Chaining cycle'))
  }

  if (!result) return resolve(result)

  if (typeof result !== 'object' && typeof result !== 'function') return resolve(result)

  let over
  try {
    const moreThen = result.then

    if (typeof moreThen !== 'function') {
      if (over) return
      over = true
      return resolve(result)
    }

    moreThen.call(
      promise,

      data => {
        if (used) return
        used = true
        resolvePromise(promise, data, resolve, reject)
      },

      error => {
        if (over) return
        over = true
        reject(error)
      }
    )

  } catch (error) {
    if (over) return
    over = true
    reject(error)
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value
  onRejected = typeof onRejected === "function" ? onRejected : reason => { throw new Error(reason) }

  const newPromise = new Promise((resolve, reject) => {
    switch (this.state) {
      case FULFILLED:
        return setTimeout(() => {
          try {
            resolvePromise(newPromise, onFulfilled(this.data), resolve, reject)
          } catch (error) { reject(error) }
        })
      case REJECTED:
        return setTimeout(() => {
          try {
            resolvePromise(newPromise, onRejected(this.data), resolve, reject)
          } catch (error) { reject(error) }
        })
      case PENDING:
        this.onFulfilled.push((data) => {
          setTimeout(() => {
            try {
              resolvePromise(newPromise, onFulfilled(data), resolve, reject)
            } catch (error) { reject(error) }
          })
        })
        this.onRejected.push((reason) => {
          setTimeout(() => {
            try {
              resolvePromise(newPromise, onRejected(reason), resolve, reject)
            } catch (error) { reject(error) }
          })
        })
    }
  })

  return newPromise

}

Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => promise.then(resolve, reject))
  })
}

Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let awaitFor = promises.length
    const result = new Array(awaitFor)
    promises.forEach((promise, index) => {
      promise.then(
        data => {
          result[index] = data
          awaitFor--
          if (awaitFor === 0) resolve(result)
        },
        reason => reject(reason)
      )
    })
  })
}

module.exports = Promise