<template>
  <div class="order-header">
    <div class="container">
      <div class="left-box">
        <div class="logo">
          <a href="/" name="小米官网"></a>
        </div>
        <div class="title fl">{{ title }}</div>
        <div class="subtitle fl"><slot name="tip"></slot></div>
      </div>
      <div class="right-box fr">
        <div class="username">{{ username }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'order-header',
  props: {
    title: String,
  },
  computed: {
    ...mapState(['username']),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
.order-header {
  height: 112px;
  .container {
    position: relative;
    .left-box {
      .logo {
        position: absolute;
        top: 30px;
        left: 0;
        height: 56px;
        width: 56px;
        a {
          display: inline-block;
          height: 100%;
          width: 100%;
          background: url('https://s02.mifile.cn/assets/static/image/logo-mi2.png') no-repeat center;
          background-size: contain;
          &:active {
            transform: scale(0.9);
          }
        }
      }
      .title {
        line-height: 112px;
        margin-left: 100px;
        font-size: $fontC;
      }
      .subtitle {
        line-height: 112px;
        margin-left: 30px;
        font-size: $fontJ;
        color: $colorC;
      }
    }
    .right-box {
      .username {
        font-size: $fontJ;
        color: $colorB;
        line-height: 112px;
      }
    }
  }
}
</style>
