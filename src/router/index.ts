/**
 * @description TS版路由
 * @date 2022-12-13
 * @vueCreate vue项目创建方式 vite
 */

 import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router'

/**
 * @description 定义路由模块
 * @date 2022-12-13
 */
const routers: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    // component: () => import('../components/HelloWorld.vue'),
    redirect: '/login',
    children: [
      {
        path: 'login',
        name: 'login',
        component : () => import('../views/login/index.vue')
      },
      {
        path: 'register',
        name: 'register',
        component : () => import('../views/register/index.vue')
      },
      {
        path: 'desktop',
        name: 'desktop',
        component: () => import('../views/desktop/index.vue'),
      },
    ],
  },

]

/**
 * @description 定义导出模块
 */
const router = createRouter({
  // history: createWebHashHistory(), // hash 模式
  history: createWebHistory(), // 设置为history模式，就是路径里面没有#,  createWebHashHistory 是默认的，括号里面的就是基础路径，可以理解为项目名称，就是请求路径的基础url
  routes: routers,
})

export default router
