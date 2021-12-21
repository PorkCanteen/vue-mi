<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    // 获取用户信息
    async getUserInfo() {
      const res = await this.$axios.get('/user')
      this.$store.dispatch('saveUserName', res.username)
    },
    async getCartCount() {
      const res = await this.$axios.get('/carts/products/sum')
      this.$store.dispatch('saveCartCount', res)
    },
  },
  mounted() {
    if (this.$cookie.get('userId')) {
      this.getUserInfo()
      this.getCartCount()
    }
  },
}
</script>

<style lang="scss">
@import './assets/styles/reset.scss';
@import './assets/styles/common.scss';
@import './assets/styles/basic.scss';
@import './assets/styles/button.scss';
// @import './assets/styles/popup.scss';
</style>
