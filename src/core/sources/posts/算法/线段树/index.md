---

# 默认为文件名称
title: 

tags:

# 类别中已包含文件夹名称
categories:

description: 线段树是一个平衡二叉树，且节点中存储着区间范围内的特征，它对区间操作复杂度较低

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-10-06 20:48:50
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

**数组实现线段树**

已知数组大小且大小不变

- 和
- 最大值 | 最小值
- 最大公约数 | 最小公倍数
- 区间内满足要求数的数量
- 等 ......

```js
class SegmentTree {

  /**
   * 
   * @param {Array} initArr 
   * @param {(leftValue, rightValue) => parentValue} pushUp
   */
  constructor(initArr, pushUp) {
    this._pushUp = pushUp
    this._data = [...initArr]
    this._tree = []
    this.buildTree(0, 0, this.size() - 1)
  }

  size() {
    return this._data.length
  }

  leftChild(i) {
    return (i << 1) + 1
  }

  rightChild(i) {
    return (i << 1) + 2
  }

  buildTree(nodeIndex, left, right) {
    if (left === right) {
      this._tree[nodeIndex] = this._data[left]
      return
    }
    const leftChild = this.leftChild(nodeIndex)
    const rightChild = this.rightChild(nodeIndex)
    const middle = Math.floor((left + right) / 2)
    this.buildTree(leftChild, left, middle)
    this.buildTree(rightChild, middle + 1, right)
    this._tree[nodeIndex] = this._pushUp(this._tree[leftChild], this._tree[rightChild])
  }

  query(queryLeft, queryRight) {
    if (queryLeft < 0 || queryRight >= this.size()) {
      throw new Error("Query range is out of whole range !")
    }
    return this.queryNode(0, 0, this.size() - 1, queryLeft, queryRight)
  }

  queryNode(nodeIndex, left, right, queryLeft, queryRight) {
    if (queryLeft <= left && queryRight >= right) {
      return this._tree[nodeIndex]
    }
    const middle = Math.floor((left + right) / 2)
    const leftChild = this.leftChild(nodeIndex)
    const rightChild = this.rightChild(nodeIndex)
    if (queryLeft >= middle + 1) return this.queryNode(rightChild, middle + 1, right, queryLeft, queryRight)
    if (queryRight <= middle) return this.queryNode(leftChild, left, middle, queryLeft, queryRight)
    const leftValue = this.queryNode(leftChild, left, middle, queryLeft, queryRight)
    const rightValue = this.queryNode(rightChild, middle + 1, right, queryLeft, queryRight)
    return this._pushUp(leftValue, rightValue)
  }

  updata(index, value) {
    if (index >= this.size() || index < 0) {
      throw new Error("index is out of range !")
    }
    this._data[index] = value
    this.updateNode(0, 0, this.size() - 1, index)
  }

  updateNode(nodeIndex, left, right, index) {
    if (left === right) {
      this._tree[nodeIndex] = this._data[index]
      return
    }
    const middle = Math.floor((left + right) / 2)
    const leftChild = this.leftChild(nodeIndex)
    const rightChild = this.rightChild(nodeIndex)
    if (index >= middle + 1) this.updateNode(rightChild, middle + 1, right, index)
    else this.updateNode(leftChild, left, middle, index)
    this._tree[nodeIndex] = this._pushUp(this._tree[leftChild], this._tree[rightChild])
  }

}

```

**链表实现线段树**

查询与修改同步；动态开点；懒标记修改区间

- 前后满足要求数的数量
- 区间插入

```js
class TreeNode {
  constructor(start, end, initValue) {
    this.start = start
    this.end = end
    /**
     * @type {TreeNode}
     */
    this.left = null
    /**
     * @type {TreeNode}
     */
    this.right = null
    this.value = initValue
    this.isLazy = false
    this.LazyFns = []
  }
}

class SegmentTree {

  /**
   * 
   * @param {Number} start 线段起点
   * @param {Number} end 线段终点
   * @param {() => initValue} init 形成 TreeNode 的初始值
   * @param {(leftValue, rightValue) => parentValue} pushUp  向上合并
   */
  constructor(start, end, init, pushUp) {
    this.root = new TreeNode(start, end, init())
    this._init = init
    this._pushUp = pushUp
  }

  /**
   * 
   * @param {TreeNode} node 
   */
  pushDown(node) {
    if (!node) return
    const middle = Math.floor((node.start + node.end) / 2)
    if (!node.left) node.left = new TreeNode(node.start, middle, this._init())
    if (!node.right) node.right = new TreeNode(middle + 1, node.end, this._init())
    if (node.isLazy) {
      node.left.isLazy = true
      node.left.LazyFns = [...node.LazyFns]
      node.left.value = node.LazyFns.reduce((value, Fn) => Fn(value), node.left.value)
      node.right.isLazy = true
      node.right.LazyFns = [...node.LazyFns]
      node.right.value = node.LazyFns.reduce((value, Fn) => Fn(value), node.left.value)
      node.isLazy = false
      node.LazyFns = []
    }
  }

  /**
   * 
   * @param {*} start 
   * @param {*} end 
   * @param {(originValue) => newValue} modifyValueFn 
   */
  update(start, end, modifyValueFn) {
    this.updateNode(this.root, start, end, modifyValueFn)
  }

  /**
   * 
   * @param {TreeNode} node 
   * @param {Number} start 
   * @param {Number} end 
   * @param {(originValue) => newValue} modifyValueFn 
   */
  updateNode(node, start, end, modifyValueFn) {
    if (!node) return
    if (node.start > end || node.end < start) return
    if (node.start >= start && node.end <= end) {
      node.value = modifyValueFn(node.value)
      node.isLazy = true
      node.LazyFns.push(modifyValueFn)
      return
    }
    this.pushDown(node)
    this.updateNode(node.left, start, end, modifyValueFn)
    this.updateNode(node.right, start, end, modifyValueFn)
    node.value = this._pushUp(node.left.value, node.right.value)
  }

  query(start, end) {
    return this.queryNode(this.root, start, end)
  }

  /**
   * 
   * @param {TreeNode} node 
   * @param {*} start 
   * @param {*} end 
   */
  queryNode(node, start, end) {
    if (!node) return null
    if (node.start > end || node.end < start) return null
    if (node.start >= start && node.end <= end) return node.value
    else {
      this.pushDown(node)
      const leftValue = this.queryNode(node.left, start, end)
      const rightValue = this.queryNode(node.right, start, end)
      if (leftValue === null) return rightValue
      if (rightValue === null) return leftValue
      return this._pushUp(leftValue, rightValue)
    }
  }
}
```





