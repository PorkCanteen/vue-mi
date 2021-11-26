<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>温馨提示：请谨防钓鱼链接或诈骗电话</span>
      </template>
    </order-header>
    <div class="list-area">
      <div class="container">
        <loading v-if="loading"></loading>
        <div class="list-item" v-for="(item, index) in list" :key="index">
          <div class="item-top">
            <p class="fl">{{ item.createTime }} | {{ item.receiverName }} | 订单编号：{{ item.orderNo }} | 在线支付</p>
            <p class="fr">
              应付金额：<b>{{ item.payment }}</b> 元
            </p>
          </div>
          <div class="item-content" v-for="(pro, i) in item.orderItemVoList" :key="i">
            <img v-lazy="pro.productImage" alt="" />
            <p>{{ pro.productName }}</p>
            <p>{{ pro.totalPrice }} 元 × {{ pro.quantity }}</p>
            <div v-if="item.status === 20">
              <a href="javascript:;">{{ item.statusDesc }}</a>
            </div>
            <div v-else>
              <a href="javascript:;" @click="pay(item.orderNo)">{{ item.statusDesc }}</a>
            </div>
          </div>
        </div>
        <el-pagination class="pagination" background layout="prev, pager, next" :pageSize="10" :pageNum="pageNum" :total="total" @current-change="handleChange"> </el-pagination>
        <no-data v-if="!loading && list.length === 0"></no-data>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from '@/components/order/OrderHeader.vue'
import Loading from '@/components/module/Loading.vue'
import NoData from '@/components/module/NoData.vue'
import { Pagination } from 'element-ui'
export default {
  name: 'order-list',
  components: {
    OrderHeader,
    Loading,
    NoData,
    [Pagination.name]: Pagination,
  },
  data() {
    return {
      list: [],
      loading: true,
      total: 0,
      pageNum: 1,
    }
  },
  methods: {
    async getOrderList() {
      const res = await this.$axios.get('/orders', {
        params: {
          pageNum: this.pageNum,
        },
      })
      this.list = res.list
      this.loading = false
      this.total = res.total
    },
    pay(orderNo) {
      this.$router.push({
        path: '/order/pay',
        query: {
          orderNo,
        },
      })
    },
    handleChange(pageNum) {
      this.pageNum = pageNum
      this.getOrderList()
    },
  },
  mounted() {
    this.getOrderList()
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
.order-list {
  .list-area {
    background-color: $colorH;
    padding: 10px 0 50px;
    .list-item {
      background-color: $colorJ;
      margin-top: 20px;
      border: 1px solid $colorD;
      div {
        box-sizing: border-box;
      }
      .item-top {
        height: 74px;
        line-height: 74px;
        background-color: #fffaf7;
        font-size: $fontI;
        padding: 0 30px;
        color: $colorB;
        b {
          font-size: $fontF;
          font-weight: normal;
        }
      }
      .item-content {
        position: relative;
        height: 145px;
        padding: 50px 30px;
        img {
          position: absolute;
          top: 50%;
          left: 30px;
          transform: translateY(-50%);
          height: 69px;
        }
        p {
          margin-left: 100px;
          font-size: $fontG;
        }
        div {
          position: absolute;
          top: 50%;
          right: 30px;
          transform: translateY(-50%);
          font-size: $fontG;
          a {
            color: $colorL;
          }
        }
      }
    }
    .pagination {
      margin-top: 20px;
      text-align: center;
    }
  }
}
</style>
