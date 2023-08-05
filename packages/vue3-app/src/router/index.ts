import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress' // progress bar
import ErrorVue from '@/components/Error.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { App } from 'vue'

const routes: RouteRecordRaw[] = [
  // 不识别的path自动匹配404
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: ErrorVue
  },
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  }
]
// 禁⽤进度环 若为true右侧会出现一个进度环
NProgress.configure({ showSpinner: false })
// 创建路由实例并传递 `routes` 配置
export const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.VITE_BASE), //
  // history: createWebHashHistory(),
  scrollBehavior(_to, _from, _savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  }
})

// setup router
export default function setupRouter(app: App) {
  // 路由守卫
  router.beforeEach((_to, _from, next) => {
    NProgress.start() // 开始进度条
    // console.log("全局前置守卫");
    next()
  })
  router.afterEach(() => {
    // console.log("全局后置钩子");
    NProgress.done() // 结束进度条
  })
  app.use(router)
}
