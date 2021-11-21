import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import VueCookie from 'vue-cookie'

// 通用样式文件
import '@/assets/styles/basic.scss'
import '@/assets/styles/reset.scss'

// 按需引入并挂载 element-ui
import { Message } from 'element-ui'
// Vue.use(Message)
Vue.prototype.$message = Message

// ★ axios 配置
// 挂载 axios 到 Vue 原型
Vue.prototype.$axios = axios
// 设置 axios 基础值
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
// 配置 axios 拦截器
axios.interceptors.response.use(function (response) {
  // 获取真实返回值
  const res = response.data
  const path = location.hash
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    if (path !== '#/index') {
      // 若未登录，跳转到登录页
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  } else {
    Message.warning(res.msg)
    return Promise.reject(res)
  }
})

// 使用插件
Vue.use(VueCookie)
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg',
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
