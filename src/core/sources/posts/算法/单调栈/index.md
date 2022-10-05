---

# 默认为文件名称
title: 

tags:

# 类别中已包含文件夹名称
categories:

description: 单调栈算法，主要用于统计标值前后比其满足一定规律的其他值数量

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-10-05 15:06:49
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

# 单调栈

**维护一个单调栈，用于确定前方所有元素的最大值或最小值**

```js
class MonotonicStack {

  _mainArr = []
  _arr = []
  _customCompare = null

  /**
   * 
   * @param {(itemInStack, itemAdd) => Boolean} compare 决定是否进入单调栈
   * @param {[]} arr
   */
  constructor(compare, arr) {
    this._customCompare = compare
    arr && arr.forEach(item => this.push(item))
  }

  compare(itemInStack, itemAdd) {
    if (
      !this._customCompare ||
      !(this._customCompare instanceof Function)
    ) {
      throw new TypeError("Compare Function is required !")
    }
    return this._customCompare(itemInStack, itemAdd)
  }

  push(item) {
    this._mainArr.push(item)
    if (
      this._arr.length === 0 ||
      this.compare(this._arr[this._arr.length - 1], item)
    ) {
      this._arr.push(item)
    }
  }

  pop() {
    if (this._mainArr.length === 0) return null
    const item = this._mainArr.pop()
    if (this._arr[this._arr.length - 1] === item) {
      this._arr.pop()
    }
    return item
  }

  top() {
    return this._mainArr[this._mainArr.length - 1]
  }

  maxmin() {
    return this._arr[this._arr.length - 1]
  }

}
```



**用于统计目标值前后比其满足一定规律的其他值数量**

```js
/**
 * 
 * @param {Array} arr 
 * @param {(itemCurrent,itemOther) => Boolean} compare 决定统计前后满足的规律
 * @return {{beforeItemIndexs: [], afterItemIndex: []}} 返回前后第一个不满足规律的序号
 */
function monotonicStackUtilize(arr, compare) {

  const len = arr.length

  const _arrIndex = []
  const topIndex = () => _arrIndex[_arrIndex.length - 1] ?? -1
  const beforeItemIndexs = new Array(len).fill(-1)
  const afterItemIndexs = new Array(len).fill(len)

  for (let i = 0; i < len; i++) {

    while (_arrIndex.length !== 0 && !compare(arr[topIndex()], arr[i])) {
      afterItemIndexs[_arrIndex.pop()] = i
    }
    beforeItemIndexs[i] = topIndex()
    _arrIndex.push(i)
  }

  return {
    beforeItemIndexs,
    afterItemIndexs
  }

}
```























