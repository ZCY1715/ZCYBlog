import { createRouter, createWebHashHistory } from "vue-router"
import { pages } from '../core'

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
      ...pages.pagesRouter
    ]
  }
]

const Router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default Router
