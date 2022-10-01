---

# 默认为文件名称
title: 

tags:
  - prototype
  - constructor
  - __proto__
  - new

# 类别中已包含文件夹名称
categories:

description: 对象属性怎么从原型链上继承过来，构造器、原型对象、实例之间的关系

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-04 15:29:22
updateTime: 2022-09-06 18:45:39
 
# 默认随机
img: 

# 目录
toc: false

# 评论
comment: true

# 发布
publish: true
---

## 原型与原型链

### prototype

什么是构造函数？

```js
// 这是构造函数
function P(){
    this.value = 1
}
// 这也是构造函数，跟上方完全一样，但这是 es6 的写法
class P {
    value = 1
}
// typeof P === 'function'

const p = new P()
// console : P {value: 1}
// typeof p === 'object'

// 这是普通对象
const p = { value: 1 }
// console : { value: 1 }
// typeof p === 'object'
```

**构造对象的函数**就是构造函数，构造出来的对象与普通对象在控制台上的区别就是一个标识了它的构造函数，一个没有构造函数

对于一个函数类型的数据来说，它有一个属性 prototype，指向一个对象，这个对象就是成为它的**原型对象**

```js
P.prototype === { constructor: P() }
// { constructor: P() } 就是 P 的原型对象
```

原型对象有什么用？

对于 P 创建的每一个实例来说，都会复制 P 的属性和方法，这些方法都是重复的，产生浪费。而有一个**关键点**：实例对象能够直接使用原型对象上的属性和方法，就为此提供了一个很好的解决方案：把实例都需要用到的方法和属性放到原型上，这样就实现了方法与属性的共享

```js
P.prototype.fun = () => {} // 在原型上挂载一个 fun 方法
const p = new P() // 实例化
p.fun() // 实例化对象直接使用原型上的方法
```

**注意的是**：

- 原型 到 原型的原型 再到 原型的原型的原型... 构成原型链
- 原型链上的属性和方法可以逐层传递的，下层实例可以使用原型链上的方法
- 顺着原型链向上寻找属性和方法时，找到第一个同名的就返回，它可不管是找到哪一个原型上的

### constructor

对于原型对象，其都有一个属性 constructor，这个属性指向的是这个原型对象所对应的构造函数

```js
const PP = P.prototype // PP 是构造函数 P 的原型对象
PP.constructor === P // true
// PP 的 constructor 属性指向 PP 的构造函数 P
```

这从构造函数到原型对象形成一个闭环

### \_\_proto\_\_

从构造函数可以实例化得到实例化对象

怎么从实例化对象 p 获取到 构造函数的原型呢？

```js
const p = new P()
p.__proto__ === P.prototype // true
```

构造函数 P 的原型称为实例化对象 p 的隐式原型

现在这三者之间就有以下关系了

- 从构造函数到原型：prototype
- 从原型到构造函数：constructor
- 从构造函数到实例：new
- 从实例到原型：\_\_proto\_\_

我们可以从任何一个得到其他的两者：

值得注意的是，从实例到构造函数：

```js
p.__proto__.constructor === P
```

对于原型链，即是通过从实例对象不断地调用 \_\_proto\_\_ 向上寻找的

### 实现 new

构造函数包括 Function 和 Class 的，但是 **Class 没有 new 是不可以调用的**

工作原理

```js
// Function：创建一个对象，将属性与方法挂载到对象上，返回这个对象
function P(value){
    // const this = {} 默认执行
    this.value = value
    // 当函数内没有返回一个 Object 对象时, 默认返回 this
    // return this
}
```

实现

```js
// P 是构造函数
function myNew(P, ...args){
    const p = Object.create(P.prototype) // 以 P.prototype 为原型创建
    const res = P.apply(p, args) // 将 p 作为 this 运行 P, 即将 P 中的属性和方法挂载到了 p 上
    // 如果构造函数返回一个对象时，将对象作为返回值；否则返回 p
    return res instanceof Object ? res : p
}
```

### 注意点

1. 原型可以用来共享属性和方法
2. 沿原型链向上找只会返回第一个同名的属性或方法，没有则返回 undefined
3. 原型的尽头是 Object，Object 的尽头是 null





 



































