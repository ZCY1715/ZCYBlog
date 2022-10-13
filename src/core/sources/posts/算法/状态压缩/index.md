---

# 默认为文件名称
title: 

tags:
  - 状态压缩

# 类别中已包含文件夹名称
categories:

description: 

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-10-09 19:56:11
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

# 题1

## 题目描述

Farmer John has purchased a lush new rectangular pasture composed of M by N (1 ≤ M ≤ 12; 1 ≤ N ≤ 12) square parcels. He wants to grow some yummy corn for the cows on a number of squares. Regrettably, some of the squares are infertile and can't be planted. Canny FJ knows that the cows dislike eating close to each other, so when choosing which squares to plant, he avoids choosing squares that are adjacent; no two chosen squares share an edge. He has not yet made the final choice as to which squares to plant.

Being a very open-minded man, Farmer John wants to consider all possible options for how to choose the squares for planting. He is so open-minded that he considers choosing no squares as a valid option! Please help Farmer John determine the number of ways he can choose the squares to plant.

农场主 $\rm John$ 新买了一块长方形的新牧场，这块牧场被划分成 $M$ 行 $N$ 列 $(1 \le M \le 12; 1 \le  N \le 12)$，每一格都是一块正方形的土地。 $\rm John$ 打算在牧场上的某几格里种上美味的草，供他的奶牛们享用。

遗憾的是，有些土地相当贫瘠，不能用来种草。并且，奶牛们喜欢独占一块草地的感觉，于是 $\rm John$ 不会选择两块相邻的土地，也就是说，没有哪两块草地有公共边。

$\rm John$ 想知道，如果不考虑草地的总块数，那么，一共有多少种种植方案可供他选择？（当然，把新牧场完全荒废也是一种方案）

## 输入格式

第一行：两个整数 $M$ 和 $N$，用空格隔开。

第 $2$ 到第 $M+1$ 行：每行包含 $N$ 个用空格隔开的整数，描述了每块土地的状态。第 $i+1$ 行描述了第 $i$ 行的土地，所有整数均为 $0$ 或 $1$ ，是 $1$ 的话，表示这块土地足够肥沃，$0$ 则表示这块土地不适合种草。

## 输出格式

一个整数，即牧场分配总方案数除以 $100,000,000$ 的余数。

## 样例 #1

### 样例输入 #1

```
2 3
1 1 1
0 1 0
```

### 样例输出 #1

```
9
```



## 解决

```js
/**
 * 
 * @param {Number} m 
 * @param {Number} n 
 * @param {Number[][]} g 
 */
function fn(m, n, g) {

  // 对于一行共多少种状态
  const states = Array.from({ length: 1 << m }, (_, i) => i)
    // 过滤掉行内不符合的状态
    .filter(i => i & (i >> 1) === 0)
  const statesLen = states.length

  // 处理 g 中每一行的状态
  const gStates = g.map(row => row.reduce((state, cur) => (state << 1) + cur, 0))

  // dp[i][j] 表示前 i-1 行确定后第 i 行达到 j 状态的可能方案数
  const dp = Array.from({ length: n + 1 }, _ => [])

  // 最上方无形的墙, 第 0 行, 状态为 0, 也是一种方案
  dp[0][0] = 1

  // 对每一行
  for (let row = 0; row <= n; row++) {
    // 列举: 从一种状态 -> 另一种状态
    const gState = gStates[row]
    for (let i = 0; i < statesLen; i++) {
      const stateFrom = states[i]
      for (let j = 0; j < statesLen; j++) {
        const stateTo = states[j]
        // gState 是否可以变成 stateTo: stateTo 是 gState 的一个子集
        // stateFrom 是否与 stateTo 无交叉
        if (
          gState & stateTo === stateTo &&
          stateFrom & stateTo === 0
        ) {
          // 可以从上一行的状态变过来, 加上
          dp[row][stateTo] += dp[row - 1][stateFrom]
        }
      }
    }
  }

  // 最后一行的各种状态的方案数和即为结果
  const MAX_NUM = Math.pow(10, 8)
  return dp[n].reduce((sum, cur) => (sum + cur) % MAX_NUM, 0)
}

```



# 题2

# 蒙德里安的梦想

## 题目背景

acwing291

## 题目描述

求把 N×M 的棋盘分割成若干个 1×2 的的长方形，有多少种方案。

例如当 N=2，M=4 时，共有 5 种方案。当 N=2，M=3 时，共有 3 种方案。

如下图所示：

![ss](./imgs/19_4dd1644c20-2411_1.jpg)

## 输入格式

输入包含多组测试用例。

每组测试用例占一行，包含两个整数 N 和 M。

当输入用例 N=0，M=0 时，表示输入终止，且该用例无需处理。

## 输出格式

每个测试用例输出一个结果，每个结果占一行。

## 样例 #1

### 样例输入 #1

```
1 2
1 3
1 4
2 2
2 3
2 4
2 11
4 11
0 0
```

### 样例输出 #1

```
1
0
1
2
3
5
144
51205
```

## 提示

1≤N,M≤11

## 解决

```js

/**
 * 
 * @param {Number} n 行 
 * @param {Number} m 列
 */
function fn(n, m) {

  // 一行的所有状态 // 用 0 0 表示横放的一个, 1 表示竖放的一个
  const states = Array.from({ length: 1 << m }, (_, i) => i)
    // 过滤掉无用的状态: 非连续的偶数个 0
    .filter(state => {
      let num = 0 // 连续 0 的个数
      for (let i = 0; i < m; i++) {
        const code = (state >> i) & 1
        if (code === 1) {
          if (num % 2) return false
          num = 0
        } else {
          num++
        }
        return true
      }
    })
  const statesLen = states.length

  // dp[i][j] 前 i - 1 行确定后, 第 i 行为 j 状态的方案数
  // n + 2 : 起始行与结尾行都需要用到
  const dp = Array.from({ length: n + 2 }, _ => new Array(statesLen).fill(0))
  dp[0][0] = 1

  // 每一列
  for (let row = 1; row <= n + 1; row++) {
    // 列举: 从一种状态 -> 另一种状态
    for (let i = 0; i < statesLen; i++) {
      const stateTo = states[i]
      for (let j = 0; j < statesLen; j++) {
        const stateFrom = states[j]
        if (!(stateFrom & stateTo)) { // 上一行为竖, 本行也一定为竖
          dp[row][i] += dp[row - 1][j]
        }
      }
    }
  }

  // 最后合法的状态一定是 n + 1 行全是未超出的状态
  return dp[n + 1][0]
}


```

