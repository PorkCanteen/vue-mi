import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

const state = {
  username: '',
  cartCount: 0,
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
})
