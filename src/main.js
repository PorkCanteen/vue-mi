import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

// 通用样式文件
import '@/assets/styles/basic.scss'
import '@/assets/styles/reset.scss'

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading: '/public/imgs/loading-svg/loading-bars.svg',
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
