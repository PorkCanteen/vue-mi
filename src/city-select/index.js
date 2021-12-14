import CitySelect from '../components/module/CitySelect.vue'

// Vue 插件模式需暴露 install 方法

const install = (Vue) => {
  Vue.component(CitySelect.name, {
    CitySelect,
  })
}
export default install
