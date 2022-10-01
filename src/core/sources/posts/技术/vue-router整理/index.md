---

# 默认为文件名称
title: 

tags:

# 类别中已包含文件夹名称
categories:

description: vue-router 是 vue 的官方路由库，对它的用法进行了整理

# 该字段必须,格式 <YYYY-MM-DD hh:mm:ss>
publishTime: 2022-09-05 17:42:50
updateTime:
 
# 默认随机
img: 

# 目录
toc: true

# 评论
comment: true
---

# vue-router API

## NavigationGuard

路由导航函数

```js
// to | from 都是 RouteRecordRaw 对象(除去里面的方法)
(to , from) => {}

// 返回值
// undefined | void | true: 验证导航
// false: 取消导航
// RouteLocationRaw: 重定向到一个不同的位置
```



## RouteLocationRaw

进行路由跳转时，可以填写的路由地址写法，例如：

```js
// 这三种形式是等价的
router.push('/users/posva#bio') //只有 path 参数时，可以使用字符串形式
router.push({ path: '/users/posva', hash: '#bio' })
router.push({ name: 'users', params: { username: 'posva' }, hash: '#bio' })
// 只改变 hash
router.push({ hash: '#bio' })
// 只改变 query
router.push({ query: { page: '2' } })
// 只改变 param
router.push({ params: { username: 'jolyne' } })
```

一般的格式如下：

```js
{
    path: "",
    hash: "",
    name: "",
    params: {},
    query: {},
    replace: false
}
```

**注意**：path 参数必须以编码方式提供，`phantom blood` 变为 `phantom%20blood`



## RouteRecordRaw

当用户通过 routes option 或者 router.addRoute() 来添加路由时，可以得到路由记录

有三种不同的路由记录：

- 单一视图记录：有一个 `component` 配置
- 多视图记录 (命名视图) ：有一个 `components` 配置
- 重定向记录：没有 `component` 或 `components` 配置，因为重定向记录永远不会到达，只能通过其他路由重定向到达

参数：

- path

`string` 

记录的路径。应该以 `/` 开头，除非该记录是另一条记录的子记录。

- redirect

`RouteLocationRaw`对象

用户输入错误时，将路由重定向到正确的路由

- children

`RouteRecordRaw[]`

当前记录的嵌套路由。

- name

`string | symbol`

路有记录独一无二的名称

- beforeEnter

`NavigationGuard | NavigationGuard[]`

在进入特定于此记录的守卫之前。注意如果记录有`重定向`属性，则 `beforeEnter` 无效

- props

`boolean`

是否将 param 参数作为 props 传递给组件，默认为 false

- sensitive

`boolean`

路由匹配是否区分大小写，默认为 false

- strict

`boolean`

严格检查路径末尾是否有尾部斜线（`/`），默认为 false， 这意味着 路由 `/users` 同时匹配 `/users` 和 `/users/`

- meta

在记录上附加自定义数据。通过 route.meta 就能访问



## RouterOptions

初始化 router 时设置的选项

-  history

  历史模式

  - createWebHistory：要求正确配置服务器
  - createWebHashHistory：基于 hash 的历史记录，不需要在服务器上进行任何配置，但是搜索引擎根本不会处理它，在 SEO 上表现很差

-  routes

添加到路由的初始路由列表

- linkActiveClass

用于激活的 RouterLink 的默认类。如果什么都没提供，则会使用 router-link-active

- scrollBehavior

使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。

```js
scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
},
```





## router-link

表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个 string 或者是描述目标位置的对象

```vue
<router-link to="" replace active-class custom v-slot="{href,route,navigate,isActive}">Home</router-link>
```

- to：RouteLocationRaw 对象
- replace
- active-class：链接被激活后的class
- custom：routerLink 默认包裹一层 a 标签，设置为 true 则去掉这层
- v-slot：自定义 routerLink 插槽，可传递参数
  - href：解析后的 URL
  - route：规范化的 route 对象
  - navigate：触发导航的函数
  - isActive：判断是否激活 ，当使用 active-class 时



## router-view

```vue
<router-view name="" v-slot="{ Component, route }"></router-view>
```

- name：命名视图
- v-slot：routerView 插槽
  - Component：匹配路由的组件
  - route：根据路由匹配解析出来的规范化的 route 对象

```vue
<!-- transition | keep-alive | suspense 搭配使用 -->
<router-view v-slot="{ Component, route }">
  <transition :name="route.meta.transition || 'fade'" mode="out-in">
    <keep-alive>
      <suspense>
        <template #default>
          <component
            :is="Component"
            :key="route.meta.usePathKey ? route.path : undefined"
          />
        </template>
        <template #fallback> Loading... </template>
      </suspense>
    </keep-alive>
  </transition>
</router-view>
```



## createRoot

```ts
export declare function createRouter(options: RouterOptions): Router
```

options：用于初始化

Router：用于交给 app 使用，全局使用 this.$router



## createWebHistory

创建一个 HTML5 历史，即单页面应用程序中最常见的历史记录。应用程序必须通过 http|https 协议提供服务。

```ts
export declare function createWebHistory(base?: string): RouterHistory
```

- base：基础路由，在这个路由的基础上再添加

## createWebHashHistory

创建一个 hash 历史记录。对于没有主机的 web 应用程序 (例如 file://)，或当配置服务器不能处理任意 URL 时这非常有用。注意：如果 SEO 对你很重要，你应该使用 createWebHistory。



## START_LOCATION

路由所在的初始路由地址。可用于导航守卫中，以区分初始导航

```js
import { START_LOCATION } from 'vue-router'

router.beforeEach((to, from) => {
  if (from === START_LOCATION) {
    // 初始导航
  }
})
```



## Router

- currentRoute

`Ref<RouteLocation>`

当前路由地址

- options

创建 Router 时传递的原始配置对象。只读的

- addRoute

添加一条新的路由记录到路由。如果新加的路由有一个 name，并且已经有一个与之名字相同的路由，它会先删除之前的路由，返回一个删除添加路由的方法

```js
// parentName : 添加一条子路由到父路由
addRoute(parentName: string | symbol, route: RouteRecordRaw): () => void
// 添加到顶级路由
addRoute(route: RouteRecordRaw): () => void
```

- removeRoute

通过名称删除现有路由。

```js
removeRoute(name: string | symbol): void
```



- afterEach

添加一个导航钩子，在每次导航后执行。返回一个删除注册钩子的函数。

```js
afterEach(guard: NavigationHookAfter): () => void
```

- beforeEach

添加一个导航守卫，在任何导航前执行。返回一个删除已注册守卫的函数。

```js
beforeEach(guard: NavigationGuard): () => void
```

- beforeResolve

添加一个导航守卫，在导航即将解析之前执行。在这个状态下，所有的组件都已经被获取，并且其他导航守卫也已经成功。返回一个删除已注册守卫的函数。

```
beforeEach(guard: NavigationGuard): () => void
```

- back

如果可能的话，通过调用 `history.back()` 回溯历史。相当于 `router.go(-1)`

- forward

如果可能的话，通过调用 history.forward() 在历史中前进。相当于 router.go(1)。

- go

允许你在历史中前进或后退。

- hasRoute

确认是否存在指定名称的路由。

```js
hasRoute(name: string | symbol): boolean
```

- onError

出现错误的错误捕获

```js
onError(handler: (error: any, to: RouteLocationNormalized, from: RouteLocationNormalized) => any): () => void
```



-  push：推送到路由
-  replace：替换到路由



-  resolve

返回路由地址的标准化版本。还包括一个包含任何现有 base 的 href 属性

```ts
resolve(to: RouteLocationRaw): RouteLocation & {
  href: string
}
```



## Composition API

- onBeforeRouteLeave
- onBeforeRouteUpdate
- useLink：返回 v-slot API 暴露的所有对象
- useRoute：返回当前的 route 对象
- useRouter：返回 Router 对象



















