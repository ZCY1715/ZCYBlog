---

# 默认为文件名称
title: 

tags:
  - 状态
  - 手写promise

# 类别中已包含文件夹名称
categories:

description: Promise 有什么用，怎么用，有哪些方法呢？如何手写一个简单的 Promise

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-06 21:31:35
updateTime:
 
# 默认随机
img: 

# 目录
toc: true

# 评论
comment: true

# 发布
publish: true

---

# Promise

`Promise` 对象用于表示一个异步操作的最终完成（或失败）及其结果值

一个 Promise 对象代表一个在这个 promise 被创建出来时不一定已知值的代理。它让你能够把异步操作最终的成功返回值或者失败原因和相应的处理程序关联起来。这样使得异步方法可以像同步方法那样返回值：异步方法并不会立即返回最终的值，而是会返回一个 promise，以便在未来某个时候把值交给使用者。

## 状态

一个 Promise 必然处于以下几个状态之一：

- 待定(**pending**)：初始状态，既没有被兑现，也没有被拒绝
- 已兑现(**fulfilled**)：意味着操作成功完成
- 已拒绝(**rejected**)：意味着操作失败

对于已兑现和已拒绝，也可以称之为 已敲定(**settled**) 或是 已决议(**resolved**)

待定状态的 Promise 对象要么会通过一个值被兑现，要么会通过一个原因（错误）被拒绝。当这些情况之一发生时，我们用 promise 的 `then` 方法排列起来的相关处理程序就会被调用。如果 promise 在一个相应的处理程序**被绑定时就已经被兑现或被拒绝**了，那么这个处理程序也**同样会被调用**，也就是说不管怎样处理程序都会执行的

## 方法

### Promise

```js
new Promise((resolve,reject) => {
	// resolve(data)
    // reject(reason)
})
```



### Promise.all(iterable)

这个方法返回一个新的 promise 对象，等到**所有的 promise 对象都成功或有任意一个 promise 失败**。

如果所有的 promise 都成功了，它会把一个包含 iterable 里所有 promise 返回值的数组作为成功回调的返回值。顺序跟 iterable 的顺序保持一致。

一旦有任意一个 iterable 里面的 promise 对象失败则立即以该 promise 对象失败的理由来拒绝这个新的 promise。

- 所有成功就返回成功的结果数组，一个失败就返回失败的理由

### Promise.allSettled(iterable)

等到**所有 promise 都已敲定**（每个 promise 都已兑现或已拒绝）。

返回一个 promise，该 promise 在所有 promise 都敲定后完成，并兑现一个对象数组，其中的对象对应每个 promise 的结果。

- 只要所有都执行完就行，不管成功与否，返回对象数组
- { status: 'rejected', reason: '' }
- { status: 'fulfilled', value: '' }

### Promise.any(iterable)

接收一个 promise 对象的集合，当其中的**任意一个 promise 成功**，就返回那个成功的 promise 的值。

- 都失败：[AggregateError: All promises were rejected]

### Promise.race(iterable)

等到**任意一个 promise 的状态变为已敲定**。

当 iterable 参数里的任意一个子 promise 成功或失败后，父 promise 马上也会用子 promise 的成功返回值或失败详情作为参数调用父 promise 绑定的相应处理函数，并返回该 promise 对象

- 不管成功与否，执行完的第一个返回

### Promise.reject(reason)

返回一个**状态为已拒绝的 Promise 对象**，并将给定的失败信息传递给对应的处理函数。

### Promise.resolve(value)

返回一个状态由给定 value 决定的 Promise 对象。如果该值是 `thenable`（即，带有 then 方法的对象），返回的Promise 对象的**最终状态由 then 方法执行结果决定**；否则，**返回的 Promise 对象状态为已兑现**，并且将该 value 传递给对应的 then 方法

- resolve 里面返回一个 reject ，向下传递的是 reject

### Promise.prototype.then()

为 promise 添加被兑现和被拒绝状态的回调函数，其以回调函数的返回值兑现 promise。若不处理已兑现或者已拒绝状态（例如，onFulfilled 或 onRejected 不是一个函数），则返回 promise 被敲定时的值

```js
const onFulfilled = data => {
    
}
const onRejected = error => {
    
}
const otherPromise = myPromise.then(onFulfilled, onRejected)
```

- onRejected 可选，在这里没有错误回调就需要添加 catch 

### Promise.prototype.catch()

为 promise 添加一个被拒绝状态的回调函数，并返回一个新的 promise，若回调函数被调用，则兑现其返回值，否则兑现原来的 promise 兑现的值。

- myPromise.then(onFulfilled, onRejected) === myPromise.then(onFulfilled).catch(onRejected)

### Promise.prototype.finally()

finally() 方法返回一个 Promise。在 promise 结束时，无论结果是 fulfilled 或者是 rejected，都会执行指定的回调函数。这为在 Promise 是否成功完成后都需要执行的代码提供了一种方式。这避免了同样的语句需要在 then() 和 catch() 中各写一次的情况。

### 注意

- `then`,`catch`,`finally` 都返回 Promise，都可继续向下链式调用
- new Promise 中的代码是同步执行的，回调 then 之后是异步的微任务 
- Promise 的链式调用会在一个事件循环周期中执行完毕，但要注意次序，是放在微任务队尾
- then 和 catch 中只会处理一次异常，后面的不再处理
- async await 是 语法糖，await 前的是同步执行，await 后的代码是异步执行的微任务

**补充：在 node 环境下，process.nextTick 的优先级高于 Promise**



## 手写 Promise

```js
// 状态码
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class Promise {

  state = PENDING // 当前状态
  data = undefined // 成功的数据
  reason = undefined // 失败的理由
  onFulfilled = [] // 需要执行的成功回调队列
  onRejected = [] // 需要执行的失败回调队列

  constructor(executor) {

    // 将 class 内部函数与 class 中的 this 绑定
    // 在 executor 中执行时使用当前环境的 this
    const resolve = this.resolve.bind(this)
    const reject = this.reject.bind(this)

    try {
      executor && executor(resolve, reject)
    } catch (error) { reject(error) } // executor 执行出错

  }
    
  // resolve | reject
  // 当且仅当状态为 PENDING 时，且仅执行 1 次
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

// 工具函数
// 用于处理 then 中返回值类型为函数，且也含有 then 的情况
// 最终 promise 返回的是 then 的尽头
function resolvePromise(promise, result, resolve, reject) {
  if (promise === result) { // then 中返回本身的情况，循环调用报错
    return reject(new TypeError('Chaining cycle'))
  }

  // 为空值 null 时
  if (!result) return resolve(result)

  // 除 object | function , 因为只有这两者可以用 点运算符, 含有下一个 then
  if (typeof result !== 'object' && typeof result !== 'function') return resolve(result)

  let over // 用于判断本次 then 是否完成的标志位
  try {
    const moreThen = result.then
	
    // 虽然有 then, 但不是函数
    if (typeof moreThen !== 'function') {
      if (over) return
      over = true
      return resolve(result)
    }

    moreThen.call(
      promise, // 使用 promise 作为 moreThen 的 this 调用

      data => { // onFulfilled 成功回调
        if (over) return
        over = true
        resolvePromise(promise, data, resolve, reject) // 对于 data, 递归判断, 可能还有下个 then
      },

      error => { // onRejected 失败回调
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
  // 当不为函数时，封装成函数
  onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value
  onRejected = typeof onRejected === "function" ? onRejected : reason => { throw new Error(reason) }

  // then 中需要返回一个新的 promise
  const newPromise = new Promise((resolve, reject) => {
    // 不同的状态判断, FULFILLED | REJECTED 一开始就是敲定的状态
    switch (this.state) {
      case FULFILLED:
        return setTimeout(() => { // setTimeout 是为了异步处理
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
        // 此时还是加载态, 把函数存起来等加载完成后执行
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

// 第一个运行完的调用传入的 resolve | reject
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => promise.then(resolve, reject))
  })
}

// 所有运行完 resolve, 一个出错 reject
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let awaitFor = promises.length // 记录需要等待运行完的任务个数
    const result = new Array(awaitFor)
    promises.forEach((promise, index) => {
      promise.then(
        data => {
          result[index] = data
          awaitFor--
          if (awaitFor === 0) resolve(result) // 运行完毕
        },
        reason => reject(reason)
      )
    })
  })
}

module.exports = Promise
```

## 取消 Promise

1. 借助 reject

```js
function canAbortPromise(executor){
	let _reject
    const promise = new Promise((resolve,reject) => {
        _reject = reject
        executor && executor(resolve, reject)
    })
    promise.abort = () => {
        _reject("Promise Abort")
    }
    return promise
}

const promise = canAbortPromise((resolve, reject) => {
    // todo
})

promise.abort() // 即可中止
```

2. 使用 AbortController

```js
function canAbortPromise(executor) {
  const controller = new AbortController()
  const signal = controller.signal
  const promise = new Promise((resolve, reject) => {
    signal.onabort = () => {
      reject("Promise Abort")
    }
    executor && executor(resolve, reject)
  })
  promise.abort = () => {
    controller.abort()
  }
  return promise
}

const promise = canAbortPromise((resolve, reject) => {
    // todo
})

promise.abort() // 即可中止
```



























