import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Index from '../pages/Home/Index.vue'
// 路由按需加载配置
// import Login from '../pages/Login/Login.vue'
const Login = () => import('../pages/Login/Login.vue')
// import Product from '../pages/Product/Product.vue'
const Product = () => import('../pages/Product/Product.vue')
// import Detail from '../pages/Detail/detail.vue'
const Detail = () => import('../pages/Detail/detail.vue')
// import Cart from '../pages/Cart/Cart.vue'
const Cart = () => import('../pages/Cart/Cart.vue')
// import Order from '../pages/Order/Order.vue'
const Order = () => import('../pages/Order/Order.vue')
// import OrderConfirm from '../pages/Order/OrderConfirm.vue'
const OrderConfirm = () => import('../pages/Order/OrderConfirm.vue')
// import OrderPay from '../pages/Order/OrderPay.vue'
const OrderPay = () => import('../pages/Order/OrderPay.vue')
// import OrderList from '../pages/Order/OrderList.vue'
const OrderList = () => import('../pages/Order/OrderList.vue')
// import Alipay from '../pages/Order/Alipay.vue'
const Alipay = () => import('../pages/Order/Alipay.vue')
// import CitySelect from '../components/module/CitySelect.vue'
const CitySelect = () => import('../components/module/CitySelect.vue')

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
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'confirm',
        name: 'order-confirm',
        component: OrderConfirm,
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: OrderPay,
      },
      {
        path: 'list',
        name: 'order-list',
        component: OrderList,
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: Alipay,
      },
    ],
  },
  {
    path: '/city',
    name: 'city-select',
    component: CitySelect,
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
