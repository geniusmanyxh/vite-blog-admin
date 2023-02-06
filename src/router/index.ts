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
            meta: {
              preTitle: '',
              title: '控制台'
            }
          },
          // =================用户路由信息==========================
          {
            path: 'userInfo',
            name: 'userInfo',
            component: () => import('../views/user/userInfo.vue'),
            meta: {
              preTitle: '用户管理',
              title: '用户信息'
            }
          },
          {
            path: 'roleInfo',
            name: 'roleInfo',
            component: () => import('../views/user/roleInfo.vue'),
            meta: {
              preTitle: '用户管理',
              title: '角色信息'
            }
          },
          {
            path: 'menuInfo',
            name: 'menuInfo',
            component: () => import('../views/user/menuInfo.vue'),
            meta: {
              preTitle: '用户管理',
              title: '菜单信息'
            }
          },
          {
            path: 'userRoleInfo',
            name: 'userRoleInfo',
            component: () => import('../views/user/userRoleInfo.vue'),
            meta: {
              preTitle: '用户管理',
              title: '用户角色信息'
            }
          },
          {
            path: 'roleMenuInfo',
            name: 'roleMenuInfo',
            component: () => import('../views/user/roleMenuInfo.vue'),
            meta: {
              preTitle: '用户管理',
              title: '角色菜单信息'
            }
          },
          // =================资源路由信息==========================
          {
            path: 'fileInfo',
            name: 'fileInfo',
            component: () => import('../views/resource/fileInfo.vue'),
            meta: {
              preTitle: '资源管理',
              title: '文件信息'
            }
          },
          {
            path: 'fileType',
            name: 'fileType',
            component: () => import('../views/resource/fileType.vue'),
            meta: {
              preTitle: '资源管理',
              title: '文件类型'
            }
          },
          // =================网站路由信息==========================
          {
            path: 'websiteList',
            name: 'websiteList',
            component: () => import('../views/website/websiteList.vue'),
            meta: {
              preTitle: '网站管理',
              title: '网站列表'
            }
          },
          {
            path: 'websiteType',
            name: 'websiteType',
            component: () => import('../views/website/websiteType.vue'),
            meta: {
              preTitle: '网站管理',
              title: '网站类型'
            }
          },
          // =================博客路由信息==========================
          {
            path: 'blogList',
            name: 'blogList',
            component: () => import('../views/blog/blogList.vue'),
            meta: {
              preTitle: '博客管理',
              title: '博客列表'
            }
          },
          {
            path: 'blogType',
            name: 'blogType',
            component: () => import('../views/blog/blogType.vue'),
            meta: {
              preTitle: '博客管理',
              title: '博客分类'
            }
          },
          {
            path: 'blogComment',
            name: 'blogComment',
            component: () => import('../views/blog/blogComment.vue'),
            meta: {
              preTitle: '博客管理',
              title: '博客评论'
            }
          },
          {
            path: 'blogGetLike',
            name: 'blogGetLike',
            component: () => import('../views/blog/blogGetLike.vue'),
            meta: {
              preTitle: '博客管理',
              title: '博客点赞'
            }
          },
          {
            path: 'blogCollect',
            name: 'blogCollect',
            component: () => import('../views/blog/blogCollect.vue'),
            meta: {
              preTitle: '博客管理',
              title: '博客收藏'
            }
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
