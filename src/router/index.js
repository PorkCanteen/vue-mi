import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Index from '../pages/Home/Index.vue'
import Login from '../pages/Login/Login.vue'
import Product from '../pages/Product/Product.vue'
import Detail from '../pages/Detail/detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index,
      },
      {
        path: '/product/:id',
        name: 'Product',
        component: Product,
      },
      {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

const router = new VueRouter({
  routes,
  // 解决页面跳转保存滚动条位置问题
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})

export default router
