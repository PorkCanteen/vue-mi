<template>
  <div class="order">
    <!-- 通过判断路由信息填充对应文本 -->
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonFooter from '@/components/common/CommonFooter.vue'
export default {
  name: 'order',
  components: {
    CommonFooter,
  },
}
</script>

<style></style>
