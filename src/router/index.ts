/**
 * @description TS版路由
 * @date 2022-12-13
 * @vueCreate vue项目创建方式 vite
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

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
        component: () => import('../views/login/index.vue'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../views/register/index.vue'),
      },
      {
        path: 'desktop',
        name: 'desktop',
        component: () => import('../views/desktop/index.vue'),
        children: [
          // =================首页控制台信息==========================
          {
            path: 'console',
            name: 'console',
            component: () => import('../views/console/index.vue'),
          },
          // =================用户路由信息==========================
          {
            path: 'userInfo',
            name: 'userInfo',
            component: () => import('../views/user/userInfo.vue'),
          },
          {
            path: 'roleInfo',
            name: 'roleInfo',
            component: () => import('../views/user/roleInfo.vue'),
          },
          {
            path: 'menuInfo',
            name: 'menuInfo',
            component: () => import('../views/user/menuInfo.vue'),
          },
          {
            path: 'userRoleInfo',
            name: 'userRoleInfo',
            component: () => import('../views/user/userRoleInfo.vue'),
          },
          {
            path: 'roleMenuInfo',
            name: 'roleMenuInfo',
            component: () => import('../views/user/roleMenuInfo.vue'),
          },
          // =================资源路由信息==========================
          {
            path: 'fileInfo',
            name: 'fileInfo',
            component: () => import('../views/resource/fileInfo.vue'),
          },
          {
            path: 'fileType',
            name: 'fileType',
            component: () => import('../views/resource/fileType.vue'),
          },
          // =================网站路由信息==========================
          {
            path: 'websiteList',
            name: 'websiteList',
            component: () => import('../views/website/websiteList.vue'),
          },
          {
            path: 'websiteType',
            name: 'websiteType',
            component: () => import('../views/website/websiteType.vue'),
          },
          // =================博客路由信息==========================
          {
            path: 'blogList',
            name: 'blogList',
            component: () => import('../views/blog/blogList.vue'),
          },
          {
            path: 'blogType',
            name: 'blogType',
            component: () => import('../views/blog/blogType.vue'),
          },
          {
            path: 'blogComment',
            name: 'blogComment',
            component: () => import('../views/blog/blogComment.vue'),
          },
          {
            path: 'blogGetLike',
            name: 'blogGetLike',
            component: () => import('../views/blog/blogGetLike.vue'),
          },
          {
            path: 'blogCollect',
            name: 'blogCollect',
            component: () => import('../views/blog/blogCollect.vue'),
          },
        ],
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
