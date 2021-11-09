<template>
  <div class="home">
    <common-header></common-header>
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/CommonHeader.vue'
import CommonFooter from '@/components/common/CommonFooter.vue'
export default {
  name: 'Home',
  components: {
    CommonHeader,
    CommonFooter,
  },
}
</script>

<style></style>
