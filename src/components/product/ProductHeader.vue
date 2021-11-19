<template>
  <div class="product-header" :class="fixed ? 'isFixed' : ''">
    <div class="container">
      <div class="product-title">{{ title }}</div>
      <div class="product-button">
        <a href="javascript:;">概述页</a><span>|</span> <a href="javascript:;">参数页</a><span>|</span> <a href="javascript:;">F码通道</a><span>|</span> <a href="javascript:;">资讯客服</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-header',
  props: {
    title: String,
  },
  data() {
    return {
      fixed: false,
    }
  },
  methods: {
    getHeight() {
      const scrollTop = window.pageYOffset
      this.fixed = scrollTop > 140
    },
  },
  mounted() {
    window.addEventListener('scroll', this.getHeight)
  },
  destroyed() {
    window.removeEventListener('scroll', this.getHeight, false)
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
@import '@/assets/styles/mixin.scss';
.product-header {
  z-index: 20;
  height: 70px;
  line-height: 70px;
  border-top: 1px solid $colorG;
  background-color: $colorJ;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  &.isFixed {
    position: fixed;
    top: 0;
    width: 100%;
  }
  .container {
    display: flex;
    justify-content: space-between;
    .product-title {
      font-size: $fontH;
    }
    .product-button {
      font-size: $fontJ;
      a {
        color: $colorB;
        @include btn-hover(0);
      }
      span {
        margin: 0 7px;
        color: $colorD;
      }
    }
  }
}
</style>
