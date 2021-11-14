<template>
  <div class="home">
    <common-header></common-header>
    <router-view></router-view>
    <div class="temp">占位</div>
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

<style>
.temp {
  height: 500px;
  line-height: 500px;
  background-color: skyblue;
  text-align: center;
  font-size: 80px;
  color: #fff;
}
</style>
