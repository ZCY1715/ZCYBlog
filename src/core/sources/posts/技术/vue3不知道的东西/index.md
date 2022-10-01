---

# 默认为文件名称
title: 

tags:
  - 选项式
  - 组合式

# 类别中已包含文件夹名称
categories: 

description: 重新再看一遍vue3官网，整理一下好用但不知道的东西。 深化选项式API，学习组合式API。

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-08-25 00:02:05
updateTime: 2022-09-05 14:47:51
 
# 默认随机
img: 

# 目录
toc: true

# 评论
comment: true
---

# 选项式API

## template

1. 在模板中只能访问到有限的全局对象(如下列表)，没有的可以在 `app.config.globalProperties` 显示加上

```js
const GLOBALS_WHITE_LISTED =
  'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
  'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
  'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt'
```

2. 参数名为变量时加中括号

```vue
<a :[attributeName]="url"> ... </a>
<a @[eventName]="doSomething">
```

注意： 参数名的值只能为 `String | null`。中括号中不能出现空格和引号。推荐使用计算属性，不使用 js 表达式。

3. 不知道的修饰符

```js

// 事件修饰符
.stop // 阻止事件冒泡和捕获
.prevent // 阻止事件产生的默认行为
.self // 事件只能由自身触发
.capture // 由冒泡变成捕获
.once // 事件最多被触发一次
.passive // 事件的默认行为优先执行，监听器的回调函数后执行


// 按键修饰符
.enter
.tab
.delete // 捕获“Delete”和“Backspace”两个按键
.esc
.space
.up
.down
.left
.right
.ctrl
.alt
.shift
.meta // 菜单键：在 Mac 键盘上，meta 是 Command 键 (⌘)。在 Windows 键盘上，meta 键是 Windows 键 (⊞)
.exact // 修饰符允许控制触发一个事件所需的确定组合的系统按键修饰符
	
	<!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
	<button @click.ctrl="onClick">A</button>

	<!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
	<button @click.ctrl.exact="onCtrlClick">A</button>

	<!-- 仅当没有按下任何系统按键时触发 -->
	<button @click.exact="onClick">A</button>

// 鼠标按键修饰符
.left
.right
.middle

// 表单输入
.lazy // 在 "change" 事件后同步更新而不是 "input"，降低更新的频率
.number // 用户输入自动转换为数字
.trim // 自动去除用户输入内容中两端的空格
```



## state

1. 响应式代理，不是赋值的对象

```js
export default {
  data() {
    return {
      someObject: {}
    }
  },
  mounted() {
    const newObject = {}
    this.someObject = newObject

    console.log(newObject === this.someObject) // false
  }
}
```

2. DOM 更新时机

当你更改响应式状态后，DOM 也会自动更新。然而，你得注意 DOM 的更新并不是同步的。相反，Vue 将缓冲它们直到更新周期的 “下个时机” 以确保无论你进行了多少次声明更改，每个组件都只需要更新一次。

要是需要等待一个状态改变后的DOM更新，再执行操作，需要使用：`nextTick()`

## computed

1. 可写计算属性

```js
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // 注意：我们这里使用的是解构赋值语法
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  }
}
```

现在当你给 fullName 赋值的时候，`this.fullName = 'John Doe'`，setter 会被调用而 `this.firstName` 和 `this.lastName` 会随之更新

## :class |  :style

1. 多个类用`[]`，判断是否添加用三元表达式
2. 组件上使用 class
   - 一个根元素时，会和根元素的 class 合并
   - 多个根元素时，需要显示给某元素的 class 赋值 `$attrs.class`
3. style 看变量用到的次数吧：多次时使用 css 变量，单次时直接在行内给定某属性变量值
4. **禁止 Attributes 穿透** ：在组件选项中设置 `inheritAttrs: false`。然后属性都默认都不会穿透了，但是组件上传递的属性值都会收集到 `$attr`中，可以通过 $attr 直接使用

## v-for

1. 遍历一个对象的所有属性

```js
<li v-for="(value, key, index) in myObject">
  {{ index }}. {{ key }}: {{ value }}
</li>
```

2. 使用值范围

```js
<span v-for="n in 10">{{ n }}</span>
```

注意此处 **n** 的初值是从 **1** 开始而非 **0**

3. vue 能监听到属性使用数组方法而改变的情况，包括：

```
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
```

然而产生新数组的不会！包括：`filter()` 等

这就需要注意的是：**在计算属性中不要使用改变数组的方法**

## v-model

数据双向绑定

*实现*

```js
// 子组件
export default {
    props: ["modelValue"],
    emits: ["update:modelValue"],
    computed: {
        value: {
            get(){
                return this.modelValue
            },
            set(value){
                this.$emit("update:modelValue", value)
            }
        }
    }
}

// 父组件
<Children v-model="value" />
```



## 生命周期

![](./imgs/lifecycle.16e4c08e.png =500x800)

详细的在👉[这里](https://cn.vuejs.org/api/options-lifecycle.html)

## watch

1. `watch` 选项也支持把键设置成用 `.` 分隔的路径：

```js
export default {
  watch: {
    // 注意：只能是简单的路径，不支持表达式。
    'some.nested.key'(newValue) {
      // ...
    }
  }
}
```

2. 深层侦听器

```js
export default {
  watch: {
    someObject: {
      handler(newValue, oldValue) {
        // newValue === oldValue 除非整个替换掉了
        // 但是有一点，我怎么分辨是哪一个属性变了呢？
      },
      deep: true
    }
  }
}
```

这个我一般用于：**数据发生变化时，不管内部什么变化，我只对怎个对象操作时使用，或发送给后端，或更新到本地**

3. 即时回调的侦听器

```js
export default {
  // ...
  watch: {
    question: {
      handler(newQuestion) {
        // 在组件实例创建时会立即调用
      },
      // 强制立即执行回调
      immediate: true
    }
  }
  // ...
}
```

4.  回调的触发时机

   默认情况下，用户创建的侦听器回调，都会在 Vue 组件更新之前被调用。这意味着你在侦听器回调中访问的 DOM 将是被 Vue 更新之前的状态。如果想在侦听器回调中能访问被 Vue 更新之后的DOM：

```js
export default {
  // ...
  watch: {
    key: {
      handler() {},
      flush: 'post'
    }
  }
}
```

5. 手动创建与关闭

```js
const unwatch = this.$watch('foo', callback)

// 当该侦听器不再需要时
unwatch()
```

## ref

1. 回调函数类型(跟react差不多)

```vue
<input :ref="(el) => { /* 将 el 赋值给一个数据属性或 ref 变量 */ }">
```

2. 组件上使用 ref：相当于被引用组件的 `this`
3. 限制对子组件的访问

```js
export default {
  expose: ['publicData', 'publicMethod'],
  data() {
    return {
      publicData: 'foo',
      privateData: 'bar'
    }
  },
  methods: {
    publicMethod() {
      /* ... */
    },
    privateMethod() {
      /* ... */
    }
  }
}
```

父组件通过模板引用访问到子组件实例后，仅能访问 `publicData` 和 `publicMethod`

## 组件相关

### app.component()

```js
import { createApp } from 'vue'

const app = createApp({})

app.component(
  // 注册的名字
  'MyComponent',
  // 组件的实现
  {
    /* ... */
  }
)

// 从单文件组件导入
import MyComponent from './App.vue'
app.component('MyComponent', MyComponent)

// 可以被链式调用
app
  .component('ComponentA', ComponentA)
  .component('ComponentB', ComponentB)
```



### props 

```js
// props 类型： Number | Boolean | Array | Object | Date | Function | 自定义class

export default {
    // 无类型
    props: []
}

export default {
  props: {
    // 基础类型检查
    //（给出 `null` 和 `undefined` 值则会跳过任何类型检查）
    propA: Number,
    // 多种类型
    propB: [String, Number],
    // 必传
    propC: {
      type: String,
      required: true
    },
    // 默认值
    propD: {
      type: Number,
      default: 100
    },
    // 对象类型的默认值
    propE: {
      type: Object,
      // 对象或者数组应当用工厂函数返回。
      // 工厂函数会收到组件所接收的原始 props
      // 作为参数
      default(rawProps) {
        return { message: 'hello' }
      }
    },
    // 自定义类型校验函数
    propF: {
      validator(value) {
        // The value must match one of these strings
        return ['success', 'warning', 'danger'].includes(value)
      }
    },
    // 函数类型的默认值
    propG: {
      type: Function,
      // 不像对象或数组的默认，这不是一个工厂函数。这会是一个用来作为默认值的函数
      default() {
        return 'Default function'
      }
    }
  }
}
```

注意：**prop 的校验是在组件实例被创建之前**

### emit

```js
// 父组件
<MyComponent @someEvent="someEvent" />

// 子组件调用
this.$emit('someEvent', arg1, ...)

export default {
  // 无校验
  emits: ['someEvent']
}

export default {
  // 参数校验
  emits: {
  	// payload 参数列表
    someEvent(payload) {
    // 通过返回值为 `true` 还是为 `false` 来判断
    // true 则提交给父组件，false 则忽略
  	},
    // 无校验
    someEvent2: null
  }
}

```



### slot

```vue
<AlertBox>
  <!-- children 部分 -->
  Something bad happened.
</AlertBox>

// AlertBox.vue
<template>
  <div class="alert-box">
    <strong>This is an Error for Demo Purposes</strong>
    <!-- 将父组件的 children 使用 slot 代替 -->  
    <slot />
  </div>
</template>
```

1. 默认内容

```vue
<slot>
<!-- 在这里可以写插槽的默认内容 --> 
</slot>
```

2. 具名插槽

```vue
<!-- 在不同的插槽位置指定不同名称 -->
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <!-- 默认的：default -->
    <slot></slot> 
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

<!-- 定义 header 插槽; v-slot 指令 -->
<template v-slot:header>
	<!-- header 插槽的内容放这里 -->
</template>

<!-- 简写指令 -->
<template #header>
	<!-- header 插槽的内容放这里 -->
</template>

```

3. 动态插槽名

```vue

<template v-slot:[dynamicSlotName]>
	...
</template>

<!-- 缩写为 -->
<template #[dynamicSlotName]>
    ...
</template>

```

4. 插槽内使用子组件的数据

```js
<!-- <MyComponent> 的模板 -->
<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>

<!-- slotProps 中收集了所有传递的数据 -->
<MyComponent v-slot="slotProps">
  {{ slotProps.text }} {{ slotProps.count }}
</MyComponent>

<!-- 具名 -->
<MyComponent #default="defaultProps">
  {{ defaultProps }}
</MyComponent>
```





### component

```vue
<component :is="currentTab"></component>
```

`:is`的值可以是：

1. 被注册的组件名
2. 导入的组件对象
3. 一般的 HTML 元素

可以用于实现组件的切换，被切换的组件即被卸载了，可以使用 `keepAlive`缓存被移除的组件实例



### provide | inject

```js
// provide: 为后代所有组件提供数据

export default {
	// 对象形式
  	provide: {
    	message: 'hello!'
  	}
    // 函数形式，可以访问到 `this`
  	provide() {
    	return {
      		message: this.message
    	}
  	}
	// 响应式数据 import { computed } from 'vue'
	provide() {
    	return {
      		// 显式提供一个计算属性
      		message: computed(() => this.message)
    	}
    }
}

// 应用层为整个应用提供依赖
import { createApp } from 'vue'
const app = createApp({})
app.provide(/* 注入名 */ 'message', /* 值 */ 'hello!')



// inject: 后代组件使用祖先注入的依赖
// 注意：注入解析发生于组件自身状态之前
export default {
  	// 数组形式
  	inject: ['message'],
  	// 别名
  	inject: {
    	/* 本地属性名 */ localMessage: {
     	from: /* 注入来源名 */ 'message'
    	}
  	}
  	// 默认值
  	inject: {
    	message: {
      		from: 'message', // 当与原注入名同名时，这个属性是可选的
      		default: 'default value'
    	},
    	user: {
      		// 对于非基础类型数据，如果创建开销比较大，或是需要确保每个组件实例需要独立数据的，使用工厂函数
      		default: () => ({ name: 'John' })
    	}
  	}
}

```

带响应式的 provide + inject 在 vue3.3 之前需要手动设置 `app.config.unwrapInjectedRef = true`

注册名使用 `Symbol`，避免潜在的冲突

```js
// keys.js
export const myInjectionKey = Symbol()

// 在供给方组件中
import { myInjectionKey } from './keys.js'

export default {
  provide() {
    return {
      [myInjectionKey]: {
        /* 要提供的数据 */
      }
    }
  }
}

// 注入方组件
import { myInjectionKey } from './keys.js'

export default {
  inject: {
    injected: { from: myInjectionKey }
  }
}
```

### defineAsyncComponent 

```js
// 组件懒加载
import { defineAsyncComponent } from 'vue'
// AsyncComp 无缝地替换原始组件，同时实现延迟加载
const AsyncComp = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
)

// 全局注册懒加载
app.component('MyComponent', defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
))

// 局部注册懒加载
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    AdminPage: defineAsyncComponent(() =>
      import('./components/AdminPageComponent.vue')
    )
  }
}

// 带选项
const AsyncComp = defineAsyncComponent({
  // 加载函数
  loader: () => import('./Foo.vue'),
  // 加载异步组件时使用的组件
  loadingComponent: LoadingComponent,
  // 展示加载组件前的延迟时间，默认为 200ms
  delay: 200,
  // 加载失败后展示的组件
  errorComponent: ErrorComponent,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 3000
})

```

## 逻辑复用

### 组合式函数

1. 根据组合式 API 编写的
2. 在选项式 API 中使用时：在 setup 函数中使用，且需要将用到的数据返回出来以挂在到 `this` 上

### 自定义指令

```js
// 实现
const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) {
    // 下面会介绍各个参数的细节
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {}
}

// el : 指令绑定到的元素
// binding :
// 		value : 传递给指令的值 (v-my-directive="1 + 1" 中，值是 2)
// 		oldValue : 之前的值，仅在 beforeUpdate 和 updated 中可用
//		arg : 传递给指令的参数 (v-my-directive:foo 中，参数是 "foo")
// 		modifiers: 包含修饰符的对象 v-my-directive.foo.bar 中，修饰符对象是 { foo: true, bar: true }
// vnode : 绑定元素的底层 VNode
// prevVnode : 之前的渲染中代表指令所绑定元素的 VNode。仅在 beforeUpdate 和 updated 钩子中可用

// 局部注册
export default {
  directives: {
    // 在模板中启用 v-myDirective
    myDirective
  }
}

// 全局注册
const app = createApp({})
// 使 v-myDirective 在所有组件中都可用
app.directive('myDirective', {
  /* ... */
})

// 简化形式
app.directive('myDirective', (el, binding) => {
  // 这会在 `mounted` 和 `updated` 时都调用
})


```



### 插件

```js
// 使用
import { createApp } from 'vue'
const app = createApp({})
app.use(myPlugin, {
  /* 可选的选项 */
})

// 实现
const myPlugin = {
  install(app, options) {
    // 配置此应用
  }
}
```

用于：

1. 通过 app.component() 和 app.directive() 注册一到多个全局组件或自定义指令
2. 通过 app.provide() 使一个资源可被注入进整个应用
3. 向 app.config.globalProperties 中添加一些全局实例属性或方法



## 内置组件

### Transition

```ts
interface TransitionProps {
  /**
   * 用于自动生成过渡 CSS class 名。
   * 例如 `name: 'fade'` 将自动扩展为 `.fade-enter`、
   * `.fade-enter-active` 等。
   */
  name?: string
  /**
   * 是否应用 CSS 过渡 class。
   * 默认：true
   */
  css?: boolean
  /**
   * 指定要等待的过渡事件类型
   * 来确定过渡结束的时间。
   * 默认情况下会自动检测
   * 持续时间较长的类型。
   */
  type?: 'transition' | 'animation'
  /**
   * 显式指定过渡的持续时间。
   * 默认情况下是等待过渡效果的根元素的第一个 `transitionend`
   * 或`animationend`事件。
   */
  duration?: number | { enter: number; leave: number }
  /**
   * 控制离开/进入过渡的时序。
   * 默认情况下是同时的。
   */
  mode?: 'in-out' | 'out-in' | 'default'
  /**
   * 是否对初始渲染使用过渡。
   * 默认：false
   */
  appear?: boolean

  /**
   * 用于自定义过渡 class 的 prop。
   * 在模板中使用短横线命名，例如：enter-from-class="xxx"
   */
  enterFromClass?: string
  enterActiveClass?: string
  enterToClass?: string
  appearFromClass?: string
  appearActiveClass?: string
  appearToClass?: string
  leaveFromClass?: string
  leaveActiveClass?: string
  leaveToClass?: string
}
```

事件：

- `@before-enter`
- `@before-leave`
- `@enter`
- `@leave`
- `@appear`
- `@after-enter`
- `@after-leave`
- `@after-appear`
- `@enter-cancelled`
- `@leave-cancelled` (`v-show` only)
- `@appear-cancelled`

### keepAlive

```vue
<!-- 默认缓存中间所有内容 -->
<KeepAlive>
  <component :is="activeComponent" />
</KeepAlive>

<!-- 
include | exclude : 根据条件匹配需要缓存的组件
匹配的是组件的组件名，export default { name: '', ... }
可以用英文逗号相隔的多个组件名，正则或是数值都需要 v-bind
-->
<KeepAlive include="a,b">
  <component :is="view" />
</KeepAlive>

<KeepAlive :include="/a|b/">
  <component :is="view" />
</KeepAlive>

<KeepAlive :exclude="['a', 'b']">
  <component :is="view" />
</KeepAlive>

<!-- 最大缓存实例数：采用最近最少淘汰机制 -->
<KeepAlive :max="10">
  <component :is="activeComponent" />
</KeepAlive>
```

<br>

缓存实例的生命周期：

当一个组件实例从 DOM 上移除但因为被 `<KeepAlive>` 缓存而仍作为组件树的一部分时，它将变为**不活跃状态**而不是被卸载。当一个组件实例作为缓存树的一部分插入到 DOM 中时，它将重新被**激活**

```js
export default {
  activated() {
    // 在首次挂载、
    // 以及每次从缓存中被重新插入的时候调用
  },
  deactivated() {
    // 在从 DOM 上移除、进入缓存
    // 以及组件卸载时调用
  }
}
```



### Teleport

一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去

```html
<Teleport to="body" disabled="isMobile">
  <div v-if="open">
  	...
  </div>
</Teleport>

<!--
to : 被传送到节点位置 支持 css 选择器 或者 DOM 元素对象
disabled : 不执行传送，即在该位置显示
-->
```



###   Suspense

使用情况：

- 异步加载的组件
- 带有异步 `setup()` 钩子的组件。这也包含了使用 `<script setup>` 时有顶层 `await` 表达式的组件

```vue
<Suspense>
  <!-- 具有深层异步依赖的组件 -->
  <Dashboard />

  <!-- 在 #fallback 插槽中显示 “正在加载中” -->
  <template #fallback>
    Loading...
  </template>
</Suspense>
```



# 组合式API

## setup

组合式 API 需要在 setup 中使用

```js
// 组件模板中
import { reactive } from 'vue'
export default {
  // `setup` 是一个专门用于组合式 API 的特殊钩子函数
  setup() {
    const state = reactive({ count: 0 })
    // 所有在模板中需要用到的都需要 return 暴露，就会存在到 `this` 上 
    return {
      state
    }
  }
}

// 另一种
<script setup>
//... 这里定义的不需要返回就能直接在 template 中使用
</script>
```

## reactive()

**创建一个响应式对象**

有局限性：

1. 对对象类型有效（对象、数组和 Map、Set 这样的集合类型），而对 string、number 和 boolean 这样的原始类型无效
2. 不能随变替换指针指向的对象，会丢失响应性

```js
// 返回一个对象的代理
const raw = {}
const proxy = reactive(raw)

// 代理对象和原始对象不是全等的
console.log(proxy === raw) // false

// 在同一个对象上调用 reactive() 会返回相同的代理
console.log(reactive(raw) === proxy) // true

// 在一个代理上调用 reactive() 会返回它自己
console.log(reactive(proxy) === proxy) // true
```

## ref()

创建可以使用任何值类型的响应式 ref

```js
import { ref } from 'vue'

const count = ref(0)
console.log(count) // { value: 0 }
console.log(count.value) // 0 // 值在 .value 属性上
const obj = {
    foo: ref(1)
}

// 当在模板 {{ ... }} 中计算后的最终结果是一个 ref，则： 
// 在 template 中自动解包，无需 .value
<template>
	{{ count }} // count.value
    {{ obj.foo }} // obj.foo.value
</template>

// reactive 使用 ref
// 当一个 ref 被嵌套在一个响应式对象中，作为属性被访问或更改时，它会自动解包
const count = ref(0)
const state = reactive({
  count
})
console.log(state.count) // 0

// 跟响应式对象不同，当 ref 作为响应式数组或像 Map 这种原生集合类型的元素被访问时，不会进行解包
```

## computed()

`computed()` 方法期望接收一个 getter 函数，返回值为一个计算属性 ref

你可以通过 `.value` 访问计算结果。计算属性 ref 也会在模板中自动解包，因此在模板表达式中引用时无需添加  .value

可写：

```js
<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>
```

## watch()

```js
import { ref, watch } from 'vue'
const x = ref(0)
const y = ref(0)

// 单个 ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// getter 函数：结果变化时执行
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`)
  }
)

// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY],[oldX,oldY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})

// 不能直接侦听响应式对象的属性值，需使用一个 getter 函数
const obj = reactive({ count: 0 })
watch(
  // obj.count ： 错误，因为 obj.count 是一个值
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`)
  }
)
```

1. 深层监听

```js
// 深层监听
// 监听一个响应式对象，隐式为 深层监听
const obj = reactive({ count: 0 })
watch(
  obj,
  (newObj,oldObj) => { // newObj === oldObj 除非对象整个替换
    console.log(`count is: ${count}`)
  }
)

// 自定义一个深层监听
watch(source, callback, { deep:true })
```

2. 立即执行 `watchEffect()`

```js
watch(source, callback, options)

// 立即执行一次
// 不需要申明依赖关系，自动收集依赖，当依赖变化时，自动执行
watchEffect(callback, options)

```

3. 回调的触发时机

同选项式 API

```js
watch(source, callback, {
	flush: 'post'
})
watchEffect(callback, {
	flush: 'post'
})

// watchPostEffect 用法同 watchEffect
import { watchPostEffect } from 'vue'
watchPostEffect(() => {
  /* 在 Vue 更新后执行 */
})
```

4. 手动关闭监听器

```js
const unwatch = watchEffect(() => {})

// ...当该侦听器不再需要时
unwatch()
```

## defineExpose()

声明向父组件暴露的数据，父组件通过 ref 拿到 子组件实例

```js
// 默认所有都是私有的，这与选项式 API 不同
<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})
</script>
```

## defineProps()

声明从父组件传来的数据

```js
// 有 <script setup> 时：
defineProps(['title'])

// 没有 <script setup> 时：
export default {
  props: ['title'], // 必须在此声明
  setup(props) { // 通过参数的形式传入后才能使用
    console.log(props.title)
  }
}
```

类型检查完全同 选项式 API

## defineEmits()

声明父组件绑定给子组件的事件

```js
// 有 <script setup> 时：
// emit 相当于 $emit 对象
const emit = defineEmits(['enlarge-text'])

// 没有 <script setup> 时：
export default {
  emits: ['enlarge-text'], // 在此声明
  setup(props, ctx) { // 通过第二个参数 ctx(上下文) 来访问 emit
    ctx.emit('enlarge-text')
  }
}
```

校验完全同 选项式 API



## useAttrs()

组合式 API 中需要一个单独的 script 来声明  `inheritAttrs: false`

```js
// 有 <script setup> 时：
import { useAttrs } from 'vue'
const attrs = useAttrs() // 访问穿透属性

// 没有 <script setup> 时：
export default {
  setup(props, ctx) {
    // 透传 attribute 被暴露为 ctx.attrs
    console.log(ctx.attrs)
  }
}
```



## Provide() | Inject()

```js
// 可以多次调用注册多个依赖
import { provide } from 'vue'
provide(/* 注入名 */ 'message', /* 值 */ 'hello!')

// 响应式
const count = ref(0)
provide('key', count)

// 如果是 ref 类型，不会自动解包
import { inject } from 'vue'
const message = inject('message')
const message = inject('message','默认值')
const message = inject('message', () => {} /* 回调函数产生默认值 */)
```

## 自定义指令

在 `<script setup>` 中，任何以 `v` 开头的驼峰式命名的变量都可以被用作一个自定义指令。在上面的例子中，`vFocus` 即可以在模板中以 `v-focus` 的形式使用

```js
// 在模板中启用 v-focus
const vFocus = {
  mounted: (el) => el.focus()
}
```



# 总结



基本上，vue3 所有的可能用得上的东西就在上面了。后续继续研究并更新...

后面会试着读一读 vue3 的源代码。













