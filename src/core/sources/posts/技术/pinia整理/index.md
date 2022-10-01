---

# 默认为文件名称
title: 

tags:

# 类别中已包含文件夹名称
categories:

description: pinia 是 vue3 的官方状态管理库，整理一下它的用法

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-05 21:50:40
updateTime:
 
# 默认随机
img: 

# 目录
toc: true

# 评论
comment: true
---

# pinia

## 导入 pinia

```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```



## 创建 store

### 选项式

```js
// 参数1：storeId, 必须独一无二, 可以使用 Symbal()
export const useAStore = defineStore('A', {
  // 相当于 data
  state: () => ({
  	A: 0
  }),
  // 相当于 computed
  getters: {
   	// 默认传入 state, 也可以使用 this
    doubleA: (state) => state.A * 2,
  },
  // 相当于 methods
  actions: {
    // 使用 this, 可以接受外部参数, 改变 state
    increment() {
      this.A++
    },
  },
})
```

### 组合式

```js
// 同 vue3 的组合式 API
export const useAStore = defineStore('A', () => {
  const A = ref(0)
  const doubleA = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { A, doubleA, increment }
})
```

## 使用 store

### 选项式 API 中

```js
import { useAStore } from '@/stores/A'
import { mapState, mapActions } from 'pinia'

export default {
    data(){
        return {
            store: useAStore()
        }
    },
    computed: {
        // 提取出计算属性
        ...mapState(useAStore, ['A','doubleA'])
        // 重命名与根据 store 计算
        ...mapState(useAstore, {
        	myA: 'A',
        	myDoubleA: store => store.A * 2,
        	myAA: store => {
        		return store.A + store.doubleA + 1
    		}
    	})
         // 提取出 action 
         ...mapActions(useAstore, ['increment'])
    }
}
// store 会保持响应式
```

- 通过 store 直接访问或修改属性都会保持响应式
- 从 store 中解构需要使用 mapState 获取 store 中数据的计算属性

### 组合式 API 中

```js
import { useAStore } from '@/stores/A'
import { storeToRefs } from 'pinia'

export default {
    setup() {
        const store = useAStore()
        // 解构需要使用到 storeToRefs 才能保持响应式
        const { A, doubleA } = storeToRefs(store)
        return {
            A,
            doubleA
        }
    }
}

<script setup>
    const store = useAStore()
</script>
```

**注意**：

- 通过 store 直接访问或修改属性都会保持响应式
- 从 store 中解构需要使用 storeToRefs 才能保持响应式



## state

1. 直接修改

```js
const store = useAStore()
store.A++
// 一定不能解构
```

2. 一次性批量修改

```js
// 接受对象与 state 合并
store.$patch({
  A: store.A + 1,
  age: 18,
})

// 接受函数对 state 直接修改
store.$patch( state => {
  state.A = 2
  state.age = 18
})
```

3. 重置

```js
store.$reset()
```

4. 使用 pinia 实例修改 state

```js
pinia.state.value = {}
```

5. 监听 store 的变化

```js
// mutation : 修改对象
store.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type
  // 修改的方式: 'direct' | 'patch object' | 'patch function'
  mutation.storeId // store.$id
  // mutation.type === 'patch object' 时的参数
  mutation.payload
  
  // 自己的逻辑...
})
```

在组件中设置的监听器在组件卸载时会自动删除，如果希望它一直保留，则设置：

```js
store.$subscribe(callback, { detached: true })
```

5. 监听整个 pinia

```js
// 在根组件中
watch(
  pinia.state,
  state => {
    // 自己的逻辑...
  },
  { deep: true }
)
```



## getters

1. 接收参数

getter 本身是不可以接收参数的，但是可以在内部返回一个函数

```js
export const useStore = defineStore('main', {
  getters: {
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    },
  },
})
```

在组件中：

```js
<script>
export default {
  setup() {
    const store = useStore()

    return { getUserById: store.getUserById }
  },
}
</script>

<template>
  <p>User 2: {{ getUserById(2) }}</p>
</template>
```

2. 接收参数同时拥有缓存

直接返回函数，则不再有计算属性的缓存功能。可以利用闭包原理，将数据缓存到闭包中：

```js
export const useStore = defineStore('main', {
  getters: {
    getActiveUserById(state) {
      const activeUsers = state.users.filter((user) => user.active)
      return (userId) => activeUsers.find((user) => user.id === userId)
    },
  },
})

// 但是，不能保持响应式
// 这种方式可以用于一些不变的数据
```

3. 使用其他 store 的数据

```js
import { useOtherStore } from './other-store'

export const useStore = defineStore('main', {
  state: () => ({
    // ...
  }),
  getters: {
    otherGetter(state) {
      const otherStore = useOtherStore()
      return state.localData + otherStore.data
    },
  },
})
```



## Actions

1. 异步

```js
export const useUsers = defineStore('users', {
  actions: {
    async registerUser(login, password) {
    	await ...
    },
  },
})
```

2. 也可以使用其他 store
3. 监听 action 执行

```js
const unsubscribe = store.$onAction(
  ({
    name, // action 名称
    store, // store 本身
    args, // 传递给 action 的参数列表
    after, // 在 action 执行完成后执行的回调
    onError, // 在 action 执行出错时执行的回调
  }) => {
    // 这里可以执行 action 执行之前的操作

    after((result) => {})
    onError((error) => {})
  }
)

// 移除监听器
unsubscribe()
```

在组件中设置的监听器在组件卸载时会自动删除，如果希望它一直保留，则设置：

```js
someStore.$onAction(callback, true)
```



## Plugins

使用：

```js
pinia.use(myPiniaPlugin)
```

创建：

```js
export function myPiniaPlugin({pinia, app, store, options}) {
  // pinia : createPinia()对象
  // app : createApp()对象 (Vue 3 only)
  // store : 你想要增强的 store
  // options : defineStore( options ) options
  // ...
}
```



**持久化存储插件**：`pinia-plugin-persist`

```shell
npm i pinia-plugin-persist
```

```js
import piniaPluginPersist from 'pinia-plugin-persist'

Pinia.use(piniaPluginPersist)
```

```js
import { defineStore } from 'pinia'

const useStore = defineStore('store', {
  persist: {
    enabled: true, // 开启
    strategies: [
      {
        storage: sessionStorage, // 使用 sessionStorage 存储
        paths: [
        	// 这里填需要存储的 state 中的键名(String)，不支持使用`.`到内部属性
        ]
      },
      {
        storage: localStorage, // 使用 localStorage 存储
        paths: [
			
        ]
      }
    ]
  }
})

export default useStore
```



# 与 vuex 的区别

```js
import { createStore } from 'vuex'

export default createStore({
    //全局state，类似于vue种的data
    state() {
      return {
        vuexmsg: "hello vuex",
        name: "xiaoyue",
      };
    },


    //修改state函数
    mutations: {
    },

    //提交的mutation可以包含任意异步操作
    actions: {
    },

    //类似于vue中的计算属性
    getters: {
    },

    //将store分割成模块（module）,应用较大时使用
    modules: {
    }
})
```

```js
import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
createApp(App).use(store).mount('#app')
```



1. 移除了 mutations，同步与异步都使用 actions 中的方法
2. 移除了 modules，不需要将多个 store 整合到一个 store 中了，因为 Pinia 中每一个 defineStore 文件就是一个单独的 store ， 直接在 vue 中调用即可
3. 不需要将 store 注入到 app 了，Pinia  传入的是 createPinia 本身
4. Pinia 使用时直接修改 state 就行。但在 vuex 中官方不推荐，且开启严格模式会报错











































