// 这里是我的路由管理
export default [
  {
    path: '/',
    component: () => import('@/components/layout/layout'),
    children: [
      {
        path: '',
        component: () => import('@/components/pages/home.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/components/pages/login.vue')
  }
]
