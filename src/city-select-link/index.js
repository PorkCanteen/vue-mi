import CitySelectLink from '../components/module/CitySelectLink.vue'

// Vue 插件模式需暴露 install 方法

const install = (Vue) => {
  Vue.component(CitySelectLink.name, {
    CitySelectLink,
  })
}
export default install
