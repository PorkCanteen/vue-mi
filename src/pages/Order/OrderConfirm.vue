<template>
  <div class="order-confirm" ref="mainDiv">
    <order-header title="订单确认">
      <template v-slot:tip>
        <span>温馨提示：请核对收货信息</span>
      </template>
    </order-header>
    <div class="container">
      <div class="confirm-box">
        <div class="location">
          <p>收货地址</p>
          <div class="location-box" :class="{ checked: index === checkIndex }" @click="checkIndex = index" v-for="(item, index) in AddressList" :key="index">
            <h6>{{ item.receiverName }}</h6>
            <p>{{ item.receiverMobile }}</p>
            <p>{{ item.receiverProvince }} {{ item.receiverCity }} {{ item.receiverDistrict }} {{ item.receiverAddress }}</p>
            <div class="delete iconfont icon-lajitong" @click="delAddress(item)"></div>
            <div class="edit iconfont icon-bi" @click="editAddressModule(item)"></div>
          </div>
          <div class="location-box add-box" @click="openAddressModule">
            <div class="plus iconfont icon-zengjia"></div>
            <p>添加新地址</p>
          </div>
        </div>

        <div class="products">
          <p class="product-title">商品</p>
          <div class="product-item" v-for="(item, index) in cartList" :key="index">
            <img v-lazy="item.productMainImage" alt="" />

            <p>{{ item.productName + '' + item.productSubtitle }}</p>
            <div>{{ item.productPrice }}元</div>
            <div class="com">{{ item.productTotalPrice }}元 × {{ item.quantity }}</div>
          </div>
        </div>
        <div class="custom">
          <p><span>配送方式</span><a href="javascript:;">包邮</a></p>
          <p><span>发票</span><a href="javascript:;">电子发票</a><a href="javascript:;">个人</a><a href="javascript:;">商品明细</a></p>
        </div>
        <div class="sum">
          <p>
            商品件数：<span>{{ productCount }}件</span>
          </p>
          <p>
            商品总价：<span>{{ cartTotalPrice }}元</span>
          </p>
          <p>优惠活动：<span>0元</span></p>
          <p>运费：<span>0元</span></p>
          <p>
            应付总额：<span
              ><b>{{ cartTotalPrice }}元</b>
            </span>
          </p>
        </div>
        <div class="button">
          <a href="#/cart" class="back">返回购物车</a>
          <a href="javascript:;" class="to-pay" @click="orderSubmit">去结算</a>
        </div>
      </div>
    </div>
    <popup title="删除确认" :btn="1" :showModule="showDelModule" @cancel="showDelModule = false" @submit="submitAddress">
      <template v-slot:body>
        <p>是否确认要删除此地址</p>
      </template>
    </popup>
    <popup title="新增地址" :btn="1" :showModule="showEditModule" @cancel="showEditModule = false" @submit="submitAddress">
      <template v-slot:body>
        <div class="edit-wrap">
          <div>
            <input type="text" placeholder="姓名" v-model="checkedItem.receiverName" />
            <input type="text" placeholder="手机号" v-model="checkedItem.receiverMobile" />
          </div>
          <!-- 城市选择组件 -->
          <city-select @updateData="updateData"></city-select>
          <div>
            <textarea name="street" v-model="checkedItem.receiverAddress"></textarea>
          </div>
          <div>
            <input type="text" placeholder="邮编" class="email" v-model="checkedItem.receiverZip" />
          </div>
        </div>
      </template>
    </popup>
  </div>
</template>

<script>
import CitySelect from '@/components/module/CitySelect.vue'
import OrderHeader from '@/components/order/OrderHeader.vue'
import Popup from '@/components/module/popup.vue'
export default {
  name: 'order-confirm',
  components: {
    Popup,
    OrderHeader,
    CitySelect,
  },
  data() {
    return {
      // 收货地址
      AddressList: [],
      // 购物车
      cartList: [],
      cartTotalPrice: 0,
      productCount: 0,
      checkedItem: {},
      action: '', // 0 add 1 edit 2 delete
      showDelModule: false,
      showEditModule: false,
      checkIndex: 0,
    }
  },
  methods: {
    async getAddressList() {
      const res = await this.$axios.get('/shippings')
      this.AddressList = res.list
    },
    openAddressModule() {
      this.action = 0
      this.checkedItem = {}
      this.showEditModule = true
    },
    editAddressModule(item) {
      this.action = 1
      this.checkedItem = item
      this.showEditModule = true
    },
    delAddress(item) {
      this.checkedItem = item
      this.action = 2
      this.showDelModule = true
    },
    submitAddress() {
      // 地址增删改 (统一提交事件，通过点击事件传入参数判断执行方式)
      const { checkedItem, action } = this
      let method, url
      let params = {}
      if (action === 0) {
        method = 'post'
        url = '/shippings'
      } else if (action === 1) {
        method = 'put'
        url = `/shippings/${checkedItem.id}`
      } else {
        method = 'delete'
        url = `/shippings/${checkedItem.id}`
      }
      if (action === 0 || action === 1) {
        let errorMsg = ''
        const { receiverName, receiverMobile, receiverProvince, receiverCity, receiverDistrict, receiverAddress, receiverZip } = checkedItem
        if (!receiverName) {
          errorMsg = '请输入收货人姓名'
        } else if (!receiverMobile || !/\d{11}/.test(receiverMobile)) {
          errorMsg = '请按正确格式输入手机号码'
        } else if (!receiverProvince) {
          errorMsg = '请选择省份'
        } else if (!receiverCity) {
          errorMsg = '请选择城市'
        } else if (!receiverDistrict) {
          errorMsg = '请填写区'
        } else if (!receiverAddress) {
          errorMsg = '请填写详细地址'
        } else if (!/\d{6}/.test(receiverZip)) {
          errorMsg = '请输入六位邮编'
        }
        if (errorMsg) {
          this.$message.error(errorMsg)
          return
        }
        params = {
          receiverName,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
        }
      }
      this.$axios[method](url, params).then(() => {
        this.closeModule()
        this.getAddressList()
        this.$message.success('操作成功')
      })
    },
    closeModule() {
      this.checkedItem = {}
      this.action = ''
      this.showEditModule = false
      this.showDelModule = false
    },
    async getCartList() {
      const res = await this.$axios.get('/carts')
      // 过滤为选中的商品
      this.cartList = res.cartProductVoList.filter((item) => item.productSelected)
      this.cartTotalPrice = res.cartTotalPrice
      this.cartList.map((item) => {
        this.productCount += item.quantity
      })
    },
    // 提交订单
    orderSubmit() {
      const item = this.AddressList[this.checkIndex]
      if (!item) {
        this.$message.error('请选择收货地址')
        return
      }
      this.$axios
        .post('/orders', {
          shippingId: item.id,
        })
        .then((res) => {
          this.$router.push({
            path: '/order/pay',
            query: {
              orderNo: res.orderNo,
            },
          })
        })
    },
    getDivHeight() {
      const screenheight = window.innerHeight
      if (this.$refs.mainDiv.style.height + 704 > screenheight) return
      this.$refs.mainDiv.style.height = screenheight - 704 + 'px'
    },
    updateData(province, city, district) {
      this.checkedItem.receiverProvince = province
      this.checkedItem.receiverCity = city
      this.checkedItem.receiverDistrict = district
    },
  },
  mounted() {
    this.getAddressList()
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
.order-confirm {
  // height: 971px;
  min-height: 1171px;
  background-color: $colorH;
  padding: 0 0 50px;
  .confirm-box {
    background-color: $colorJ;
    padding: 30px 60px;
    margin-top: 20px;
    .location {
      &:after {
        content: '';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      }
      .clearfix {
        *zoom: 1;
      }

      p {
        font-size: $fontF;
      }
      .location-box {
        float: left;
        position: relative;
        box-sizing: border-box;
        height: 180px;
        width: 271px;
        border: 1px solid $colorG;
        margin: 20px 20px 20px 0;
        color: $colorB;
        padding: 20px 30px;
        h6 {
          font-size: $fontH;
          font-weight: normal;
          margin-bottom: 15px;
        }
        p {
          font-size: $fontJ;
          line-height: 20px;
        }
        .delete {
          position: absolute;
          bottom: 20px;
          left: 30px;
          font-size: $fontF;
          cursor: pointer;
        }
        .edit {
          position: absolute;
          bottom: 20px;
          right: 30px;
          font-size: $fontF;
          cursor: pointer;
        }
      }
      .checked {
        border: 1px solid $colorL;
      }
      .add-box {
        color: $colorC;
        cursor: pointer;
        .plus {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -80%);
          font-size: 40px;
          opacity: 0.5;
        }
        p {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, 50%);
        }
      }
    }
    .products {
      .product-title {
        font-size: $fontH;
        height: 40px;
        border-bottom: 1px solid $colorG;
      }
      .product-item {
        position: relative;
        height: 50px;
        line-height: 50px;
        font-size: $fontJ;

        border-bottom: 1px solid $colorG;
        p {
          float: left;
          margin-left: 30px;
        }
        img {
          float: left;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          height: 20px;
        }
        div {
          float: right;
        }
        .com {
          margin-right: 200px;
        }
      }
    }
    .custom {
      p {
        font-size: $fontG;
        margin-top: 20px;
        span {
          display: inline-block;
          width: 180px;
        }
        a {
          color: $colorL;
          margin-right: 30px;
        }
      }
    }
    .sum {
      float: right;
      height: 150px;
      width: 100%;
      margin: 20px 0;
      padding-bottom: 30px;
      border-bottom: 1px solid $colorG;
      p {
        font-size: $fontI;
        text-align: right;
        line-height: 30px;
        span {
          display: inline-block;
          width: 80px;
          color: $colorL;
          b {
            font-size: $fontH;
          }
        }
        &:last-child {
          margin-top: 10px;
        }
      }
    }
    .button {
      text-align: right;
      font-size: $fontH;
      a {
        border: 1px solid $colorG;
        padding: 10px 40px;
        margin-left: 20px;
        transition: all 0.5s;
        &:hover {
          opacity: 0.8;
        }
      }
      .back {
        color: $colorC;
      }
      .to-pay {
        color: $colorJ;
        background-color: $colorL;
        padding: 10px 55px;
      }
    }
  }
  .edit-wrap {
    box-sizing: border-box;
    font-size: $fontJ;
    .city-select /deep/ select {
      height: 40px;
      width: 175px;
      line-height: 40px;
      border: 1px solid $colorG;
      padding: 0 10px;
      margin-right: 15px;
    }
    div {
      margin-bottom: 15px;
      input {
        box-sizing: border-box;
        display: inline-block;
        width: 270px;
        height: 40px;
        line-height: 40px;
        padding-left: 15px;
        border: 1px solid $colorG;
        margin-right: 14px;
      }
      textarea {
        box-sizing: border-box;
        height: 62px;
        width: 96%;
        padding: 13px 15px;
        border: 1px solid $colorG;
      }
    }
  }
}
</style>
