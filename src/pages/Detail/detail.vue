<template>
  <div class="detail">
    <div class="container">
      <div class="detail-img fl">
        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1632713426.30988142.jpg" alt="" />
      </div>
      <div class="detail-content fr">
        <div class="title">{{ product.name }}</div>
        <div class="desc">
          「购机享6期免息，信用卡分期最高立减200元；赠Keep会员7天体验卡；+110元得蓝牙耳机Air2 SE」轻薄潮流设计 | 丝绒AG工艺 | 原生美肌人像 | 像素级肌肤焕新技术 | 3200万高清质感自拍 | 双柔光灯+自动对焦 | 3D曲面OLED柔性屏 | 120Hz+Dolby Vision | 4500mAh 大电量 | 55W有线闪充 | 立体声双扬声器 | 多功能NFC
        </div>
        <div class="price">{{ product.price }} 元</div>
        <div class="location">
          <p><em class="iconfont icon-31dingwei"></em> 北京市 海淀区 清河街道</p>
          <a href="javascript:;">修改</a>
        </div>
        <div class="version">
          <p>选择版本</p>
          <div class="versions">
            <div :class="{ checked: version === 1 }" @click="version = 1">8GB+128GB</div>
            <div :class="{ checked: version === 2 }" @click="version = 2">12GB+256GB</div>
          </div>
        </div>
        <div class="color">
          <p>选择颜色</p>
          <div class="versions">
            <div class="checked">闪闪黑</div>
          </div>
        </div>
        <div class="total">
          <div class="item">
            <div class="item-info">{{ product.name }} {{ version === 1 ? '8GB+128GB' : '12GB+256GB' }} 闪闪黑</div>
            <div class="item-price">{{ product.price }} 元</div>
          </div>
          <div class="money">总计：{{ product.price }} 元</div>
        </div>
        <div class="buttons">
          <div class="btn1 btn" @click="addCart">加入购物车</div>
          <div class="btn2 btn btn-cancel" @click="$message.info('敬请期待')"><em class="iconfont icon-aixin"></em> 喜欢</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data() {
    return {
      product: {},
      version: 1,
      id: this.$route.params.id,
    }
  },
  methods: {
    async getProductInfo() {
      const res = await this.$axios.get(`/products/${this.id}`)
      this.product = res
    },
    async addCart() {
      const res = await this.$axios.post('/carts', {
        productId: this.id,
        selected: true,
      })
      this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
      this.$router.push('/cart')
    },
  },
  mounted() {
    this.getProductInfo()
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
.detail {
  height: 750px;
  .clearfix:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .detail-img {
    width: 560px;
    height: 560px;
    img {
      width: 100%;
    }
  }
  .detail-content {
    width: 600px;
    .title {
      font-size: $fontE;
    }
    .desc {
      font-size: $fontJ;
      line-height: 22px;
      margin: 15px 0;
      color: $colorC;
    }
    .price {
      font-size: $fontH;
      color: $colorL;
      padding-bottom: 15px;
      border-bottom: 1px solid $colorD;
    }
    .location {
      font-size: $fontJ;
      background-color: #fafafa;
      border: 1px solid #e0e0e0;
      padding: 20px 30px;
      p {
        margin-bottom: 10px;
        em {
          color: $colorC;
          font-size: $fontH;
        }
      }
      a {
        display: inline-block;
        color: $colorL;
        padding-left: 24px;
      }
    }
    .version,
    .color {
      p {
        font-size: $fontH;
        margin: 15px 0;
      }
      .versions {
        display: flex;
        justify-content: space-between;
        div {
          width: 48%;
          border: 1px solid $colorF;
          text-align: center;
          font-size: $fontI;
          color: $colorB;
          padding: 12px 0;
          cursor: pointer;
        }
        .checked {
          border-color: $colorL;
          color: $colorL;
        }
      }
    }
    .total {
      height: 100px;
      width: 100%;
      background-color: #f9f9fa;
      margin-top: 20px;
      padding: 30px;
      .item {
        display: flex;
        justify-content: space-between;
        font-size: $fontJ;
        color: #616161;
      }
      .money {
        font-size: $fontE;
        color: $colorL;
        margin-top: 30px;
      }
    }
    .buttons {
      font-size: $fontI;
      margin: 20px 0;
      .btn {
        padding: 10px;
      }
      .btn1 {
        width: 270px;
        margin-right: 10px;
      }
      .btn2 em {
        font-weight: bold;
      }
    }
  }
}
</style>
