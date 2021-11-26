<template>
  <div class="order-pay">
    <order-header title="订单支付">
      <template v-slot:tip>
        <span>温馨提示：请谨防钓鱼链接及诈骗电话</span>
      </template>
    </order-header>
    <div class="container">
      <div class="pay-msg">
        <div class="gou iconfont icon-gougou"></div>
        <div class="content">
          <div class="line1">
            <h5>订单提交成功！去付款</h5>
            <p>应付总额：<span>2198元</span></p>
          </div>
          <div class="line2">请在<span>0小时30分</span>内完成支付，超时后将取消订单</div>
          <div class="line3">
            收货信息：{{ addressInfo }} <span @click="showDetail=!showDetail">订单详细 <b class="iconfont icon-jiantouxia"></b></span>
          </div>
        </div>
      </div>
      <div class="pay-detail" v-if="showDetail">
        <p><span>订单号：</span> {{ orderNo }}</p>
        <p><span>收货信息：</span> {{ addressInfo }}</p>
        <p><span>商品名称：</span> <ul>
          <li v-for="(item, index) in detail" :key="index">
            <img v-lazy="item.productImage" alt="">
            <p>{{item.productName}}</p>
          </li>
        </ul></p>
        <p><span>发票信息：</span> 施工更宏观</p>
      </div>
      <div class="pay-selections">
        <h5>选择以下支付方式付款</h5>
        <p>支付平台</p>
        <div class="alipay" :class="{'selected': payType===1}" @click="paySubmit(1)">
          <img src="/imgs/icon-ali.png" alt="" />
        </div>
        <div class="wechat"  :class="{'selected': payType===2}" @click="paySubmit(2)">
          <img src="/imgs/icon-wechat.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from '@/components/order/OrderHeader.vue'
export default {
  name: 'order-pay',
  components: {
    OrderHeader
  },
  data() {
    return {
      orderNo: this.$route.query.orderNo,
      addressInfo: '',
      detail: [], // 订单详情
      showDetail: false,
      payType: ''
    }
  },
  mounted() {
    this.getOrderInfo()
  },
  methods: {
    getOrderInfo() {
      this.$axios.get(`/orders/${this.orderNo}`).then((res) => {
        const info = res.shippingVo
        this.addressInfo = `${info.receiverName} ${info.receiverMobile} ${info.receiverProvince} ${info.receiverCity} ${info.receiverDistrict} ${info.receiverAddress} `
        this.detail = res.orderItemVoList
      })
    },
    paySubmit(payType) {
      if (payType === 2) {
        this.$message.warning('敬请期待')
        // window.open('/#/order/alipay?orderId=' + this.orderNo, '_blank')
        setTimeout(() => {
          this.$router.push('/order/list')
        }, 1000)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
.order-pay {
  background-color: $colorH;
  padding: 0 0 50px;
  .container {
    .pay-msg {
      position: relative;
      box-sizing: border-box;
      background-color: $colorJ;
      margin-top: 20px;
      height: 230px;
      padding: 62px 53px;
      .gou {
        position: absolute;
        top: 0;
        left: 0;
        width: 90px;
        height: 90px;
        margin: 62px 53px;
        background-color: #7ec688;
        text-align: center;
        line-height: 90px;
        color: $colorJ;
        font-size: 35px;
        font-weight: 800;
        border-radius: 45px;
      }
      .content {
        margin-left: 140px;
        .line1 {
          height: 50px;
          h5 {
            float: left;
            font-size: $fontE;
            font-weight: normal;
          }
          p {
            float: right;
            font-size: $fontJ;
            span {
              font-size: $fontE;
              color: $colorL;
            }
          }
        }
        .line2 {
          line-height: 30px;
          span {
            color: $colorL;
          }
        }
        .line3 {
          line-height: 30px;
          span {
            float: right;
            cursor: pointer;
            b {
              font-size: $fontK;
              margin-left: 3px;
            }
          }
        }
      }
    }
    .pay-detail {
      box-sizing: border-box;
      background-color: $colorJ;
      padding: 40px 190px;
      border-top: 1px solid $colorG;
      p {
        line-height: 35px;
        span {
          display: inline-block;
          width: 100px;
        }
        ul {
          margin-left: 100px;
          margin-top: -34px;
          li {
            position: relative;
            img {
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
              display: inline-block;
              height: 20px;
            }
            p {
              margin-left: 30px;
            }
          }
        }
      }
    }
    .pay-selections {
      box-sizing: border-box;
      background-color: $colorJ;
      height: 270px;
      padding: 0 53px;
      margin-top: 20px;
      h5 {
        font-size: $fontG;
        font-weight: normal;
        padding: 24px 0;
        border-bottom: 1px solid $colorG;
      }
      p {
        font-size: $fontH;
        padding: 20px 0;
      }
      div {
        position: relative;
        float: left;
        width: 188px;
        height: 64px;
        border: 1px solid $colorG;
        margin-right: 20px;
        cursor: pointer;
        img {
          position: absolute;
          height: 33px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .selected {
        border-color: $colorL;
      }
    }
  }
}
</style>
