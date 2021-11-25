<template>
  <div class="order">
    <!-- 通过判断路由信息填充对应文本 -->
    <order-header :title="title">
      <template v-slot:tip>
        <span> {{ tip }}</span>
      </template>
    </order-header>
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>
import OrderHeader from '@/components/order/OrderHeader.vue'
import CommonFooter from '@/components/common/CommonFooter.vue'
export default {
  name: 'order',
  components: {
    CommonFooter,
    OrderHeader,
  },
  data() {
    return {
      title: '',
      tip: '',
    }
  },
  mounted() {
    const path = this.$route.path
    if (path === '/order/confirm') {
      this.title = '订单确认'
      this.tip = '温馨提示：请核对收货信息'
    } else if (path === '/order/list') {
      this.title = '订单列表'
      this.tip = '温馨提示：请谨防钓鱼链接及诈骗电话'
    } else {
      this.title = '订单支付'
      this.tip = '温馨提示：请谨防钓鱼链接及诈骗电话'
    }
  },
}
</script>

<style></style>
