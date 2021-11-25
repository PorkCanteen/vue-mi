<template>
  <div class="alipay">
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import Loading from '@/components/module/Loading.vue'
export default {
  name: 'alipay',
  components: {
    Loading,
  },
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: '',
      loading: true,
    }
  },
  methods: {
    paySubmit() {
      this.$axios
        .post('/pay', {
          orderId: this.orderId,
          orderName: 'vue-mi',
          amount: 0.01,
          payType: 1,
        })
        .then((res) => {
          this.content = res.content
          setTimeout(() => {
            document.forms[0].submit()
          }, 100)
        })
    },
  },
  mounted() {
    this.paySubmit()
  },
}
</script>

<style></style>
