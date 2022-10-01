---

# 默认为文件名称
title: 

tags:
  - Heap
  - MaxHeap
  - MinHeap
  - 堆排序

# 类别中已包含文件夹名称
categories:

description: js 实现堆类

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-29 21:48:30
updateTime:
 
# 默认随机
img: 

# 目录
toc: false

# 评论
comment: true

# 发布
publish: true

---

```js
class Heap {

  arr = []
  customCompare = null

  /**
   * @param {(parentItem, childItem) => Boolean} compare 
   * @param {[]} initArr 
   */
  constructor(compare, initArr = []) {
    if (compare && compare instanceof Function) {
      this.customCompare = compare
    }
    this.arr = initArr
    this.buildHeap()

  }

  size() {
    return this.arr.length
  }

  top() {
    if (!this.size()) return null
    return this.arr[0]
  }

  leftChild(i) {
    return (i << 1) + 1
  }
  rightChild(i) {
    return (i << 1) + 2
  }
  parent(i) {
    return (i - 1) >> 1
  }
  swap(i, j) {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]]
  }

  buildHeap() {
    for (let i = this.size() - 1; i >= 0; i--) {
      this.shiftUp(i)
    }
  }

  shiftUp(i) {
    if (i === 0) return
    const p = this.parent(i)
    if (this.compare(this.arr[p], this.arr[i])) {
      this.swap(i, p)
      this.shiftUp(p)
    }
  }

  shiftDown(i) {
    const l = this.leftChild(i)
    const r = this.rightChild(i)

    let target = i
    if (l < this.size() && this.compare(this.arr[target], this.arr[l])) {
      target = l
    }
    if (r < this.size() && this.compare(this.arr[target], this.arr[r])) {
      target = r
    }

    if (target === i) return
    this.swap(i, target)
    this.shiftDown(target)
  }

  /**
   * 
   * @param {any} parentItem 父节点值
   * @param {any} childItem 子节点值
   * @return {Boolean} 判断是否需要交换
   */
  compare(parentItem, childItem) {
    if (this.customCompare) {
      return !!this.customCompare(parentItem, childItem)
    }
    throw new Error("Function Compare must be overwrited !")
  }

  /**
   * 
   * @param {any} item 新加入节点
   */
  insert(item) {
    this.arr.push(item)
    this.shiftUp(this.size() - 1)
  }

  shift(i = 0) {
    const size = this.size()
    if (i >= size) return
    const lastItem = this.arr.pop()
    if (i === size - 1) return lastItem
    const value = this.arr[i]
    this.arr[i] = lastItem
    this.shiftDown(i)
    return value
  }

  /**
   * 
   * @param { (Item) => Boolean} filterFn 根据条件删除节点
   */
  delete(filterFn) {
    let i = 0
    while (i < this.size()) {
      const item = this.arr[i]
      if (filterFn(item)) continue
      this.shift(i)
      i++
    }
  }

  sort() {
    const ans = []
    while (this.size() > 0) {
      ans.push(this.shift())
    }
    return ans
  }

}


// * 最大堆，仅数值比较
class MaxHeap extends Heap {
  compare(parentItem, childItem) {
    return parentItem < childItem
  }
}

// * 最小堆，仅数值比较
class MinHeap extends Heap {
  compare(parentItem, childItem) {
    return parentItem > childItem
  }
}
```

