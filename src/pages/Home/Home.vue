<template>
  <div class="home">
    <!-- 头部组件 -->
    <common-header></common-header>
    <!-- 主体部分 -->
    <router-view></router-view>
    <!-- 底部组件 -->
    <common-footer></common-footer>
  </div>
</template>

<script>
// 引入 头部 底部 组件
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

<style lang="scss" scoped></style>
