import { createRouter, createWebHashHistory } from "vue-router"
import { pageImport } from '../core'
import useScroll from '../hooks/useScroll'
const { pagesRouter } = pageImport()

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../views/HomePage/index.vue"),
  },
  {
    path: '/detail/:id',
    name: 'DetailPage',
    props: route => ({ id: route.params.id }),
    component: () => import('../views/DetailPage/index.vue')
  },
  {
    path: "/page",
    component: () => import('../views/PageLayout/index.vue'),
    children: [
      ...pagesRouter
    ]
  }
]

const Router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 刷新时回到刷新之前的路由
// 进入新路由时回到顶部
// 路由回退时回到历史高度
Router.afterEach((to, from) => {

  const [scrollNode, scrollTop, scrollSet] = useScroll()


  // 进入或刷新都是从空路由进入
  if (from.name === undefined) {
    return setTimeout(() => {
      scrollNode.value.scrollTo({ top: scrollTop.value })
    }, 500)
  }

  // 要去的路由是否为记录的最后一个路由
  if (to.fullPath === scrollSet.value.getPrePathName()) {
    const { top } = scrollSet.value.pop()
    return scrollNode.value.scrollTo({ top })
  }

  // 没有历史记录或进入新路由
  scrollSet.value.push({
    path: from.fullPath,
    top: scrollNode.value.top
  })
  return scrollNode.value.scrollTo({ top: 0 })

})

export default Router
