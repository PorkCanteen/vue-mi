<template>
  <div class="cart">
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span> 温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="product-list" ref="mainDiv">
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th class="l1"><span class="checkbox" :class="allChecked ? 'checked' : ''" @click="selectAll"></span>全选</th>
              <th class="l2">商品名称</th>
              <th class="l3">单价</th>
              <th class="l4">数量</th>
              <th class="l5">小计</th>
              <th class="l6">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in list" :key="index">
              <td class="l1">
                <span class="checkbox" :class="item.productSelected ? 'checked' : ''" @click="updateCart(item)"></span>
              </td>
              <td class="l2">
                <img v-lazy="item.productMainImage" alt="" />
                {{ item.productName + '，' + item.productSubtitle }}
              </td>
              <td class="l3">{{ item.productPrice }}元</td>
              <td class="l4">
                <div class="quantity">
                  <div class="sub fl" @click="updateCart(item, '-')">-</div>
                  <div class="num fl">{{ item.quantity }}</div>
                  <div class="add fl" @click="updateCart(item, '+')">+</div>
                </div>
              </td>
              <td class="l5">{{ item.productTotalPrice }}元</td>
              <td class="l6"><em class="iconfont icon-cuocha_kuai" @click="show(item)"></em></td>
            </tr>
          </tbody>
        </table>

        <div class="total">
          <div class="left-box fl">
            <div class="continue">继续购物</div>
            <span>|</span>
            <div class="total-num">
              共 <b>{{ list.length }}</b> 件商品，已选择 <b>{{ checkedNum }}</b> 件
            </div>
          </div>
          <div class="right-box fr">
            <div class="total-money">
              合计： <b>{{ totalPrice }}</b> 元
            </div>
            <div class="button" @click="order">去结算</div>
          </div>
        </div>
      </div>
    </div>
    <common-footer></common-footer>
    <popup :title="'提示'" submitBtn="确定" cancelBtn="取消" :btn="3" size="middle" :showModule="showModule" @submit="deleteProduct(delItem)" @cancel="showModule = false">
      <template v-slot:body>
        <p>确定删除吗？</p>
      </template>
    </popup>
  </div>
</template>

<script>
// 引入自定义弹窗插件
import Popup from '@/components/module/popup.vue'
import OrderHeader from '@/components/order/OrderHeader.vue'
import CommonFooter from '@/components/common/CommonFooter.vue'
export default {
  name: 'cart',
  components: {
    CommonFooter,
    OrderHeader,
    Popup,
  },
  data() {
    return {
      checked: true,
      // 商品列表
      list: [],
      // 全选
      allChecked: false,
      // 总金额
      totalPrice: 0,
      // 选中商品的数量
      checkedNum: 0,
      // 显示弹窗
      showModule: false,
      // 删除项
      delItem: {},
    }
  },
  methods: {
    // 渲染
    renderData(res) {
      this.list = res.cartProductVoList || []
      this.allChecked = res.selectedAll
      this.totalPrice = res.cartTotalPrice
      this.checkedNum = this.list.filter((item) => item.productSelected).length
    },
    // 获取购物车列表
    async getCartList() {
      const res = await this.$axios.get('/carts')
      this.renderData(res)
    },
    // 全选
    selectAll() {
      const path = this.allChecked ? '/carts/unSelectAll' : '/carts/selectAll'
      this.$axios.put(path).then((res) => {
        this.renderData(res)
      })
    },
    // 各项产品操作更新数据
    updateCart(item, type) {
      let quantity = item.quantity
      let selected = item.productSelected
      if (type === '-') {
        if (quantity === 1) {
          this.$message.warning('修改数量不能小于0')
          return
        }
        --quantity
      } else if (type === '+') {
        if (quantity > item.productStock) {
          this.$message.warning('库存不足')
          return
        }
        ++quantity
      } else {
        selected = !item.productSelected
      }
      this.$axios
        .put(`/carts/${item.productId}`, {
          quantity,
          selected,
        })
        .then((res) => {
          this.renderData(res)
        })
    },
    // 删除商品
    deleteProduct(item) {
      this.$axios.delete(`/carts/${item.productId}`).then((res) => {
        this.showModule = false
        this.renderData(res)
      })
    },
    // 显示弹窗并保持数据
    show(item) {
      this.delItem = item
      this.showModule = true
    },
    order() {
      const checked = this.list.every((item) => !item.productSelected)
      if (checked) {
        this.$message.warning('请勾选需要结算的商品')
      } else {
        this.$router.push('/order/confirm')
      }
    },
    getDivHeight() {
      const screenheight = window.innerHeight
      this.$refs.mainDiv.style.height = screenheight - 704 + 'px'
    },
  },
  mounted() {
    this.getCartList()
    this.getDivHeight()
    window.addEventListener('resize', this.getDivHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.getDivHeight, false)
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
@import '@/assets/styles/mixin.scss';
// 复选框样式
.checkbox {
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 1px solid #e5e5e5;
  vertical-align: middle;
  margin-right: 17px;
  cursor: pointer;
  &.checked {
    background: url('/imgs/icon-gou.png') #ff6600 no-repeat center;
    background-size: 16px 12px;
    border: none;
  }
}
.product-list {
  background-color: $colorH;
  padding: 30px 0 60px;
  height: 0;
  min-height: 370px;
  .table {
    width: 100%;
    background-color: $colorJ;
    border-collapse: collapse;
    tr {
      width: 100%;
      .l1,
      .l3,
      .l5,
      .l6 {
        width: 10%;
        text-align: center;
      }
      .l2 {
        width: 40%;
        text-align: left;
        padding-left: 120px;
      }
      .l4 {
        width: 20%;
        text-align: center;
      }
    }
    thead {
      height: 70px;
      font-size: $fontJ;
      tr th {
        font-weight: normal;
      }
    }
    tbody tr {
      height: 85px;
      font-size: $fontH;
      color: #424242;
      border-top: 1px solid $colorG;
      .l2 {
        position: relative;
        img {
          display: inline-block;
          position: absolute;
          left: 0px;
          top: 0;
          height: 80px;
        }
      }
      .l4 {
        text-align: center;
        .quantity {
          display: inline-block;
          width: 150px;
          height: 40px;
          line-height: 40px;
          border: 1px solid $colorG;
          .num {
            width: 70px;
            height: 100%;
          }
          .sub,
          .add {
            height: 100%;
            width: 40px;
            cursor: pointer;
            @include btn-hover(0.2s, $colorJ, $colorD, 1, 1);
          }
        }
      }
      .l5 {
        color: $colorL;
      }
      .l6 {
        em {
          display: inline-block;
          color: $colorC;
          cursor: pointer;
          padding: 5px;
          border-radius: 14px;
          @include btn-hover(0.3s, $colorJ, $colorB, 1, 1);
        }
      }
    }
  }
  .total {
    position: relative;
    height: 50px;
    line-height: 50px;
    background-color: $colorJ;
    margin-top: 20px;
    padding: 0 20px;
    .left-box {
      div {
        float: left;
        b {
          color: $colorL;
        }
      }
      span {
        float: left;
        display: block;
        margin: 0 10px;
      }
      .continue:hover {
        color: $colorL;
        cursor: pointer;
      }
    }
    .right-box {
      .total-money {
        font-size: $fontJ;
        color: $colorL;
        margin-right: 200px;
        b {
          font-size: 30px;
        }
      }
      .button {
        position: absolute;
        right: 0;
        top: 0;
        width: 200px;
        height: 100%;
        background-color: $colorL;
        color: $colorJ;
        font-size: $fontH;
        text-align: center;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
