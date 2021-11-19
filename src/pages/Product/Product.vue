<template>
  <div class="product">
    <product-header :title="product.name">
      <template v-slot:buy>
        <button class="btn" @click="buy">立即购买</button>
      </template>
    </product-header>
    <div class="product-content">
      <div class="section1 section">
        <transition name="fade">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomicivibfbefe/section1-2.png" v-show="show1" />
        </transition>
      </div>
      <div class="section2 section">
        <div class="info">
          <p>一款别具一格的作品，来到你面前</p>
          <p>独特设计美学、非凡的屏幕、性能与续航表现，美妙面面俱到</p>
          <p>创新的影像科技，看见你天生的好看</p>
          <p>这枚指尖上跃动的精灵，为你倾心奉上</p>
        </div>
      </div>
      <div class="section3 section" ref="sec3">
        <div class="video-section">
          <!-- 页面视频遮罩层 -->
          <div class="video-mask">
            <div class="video-btn" @click="show3 = true">观看产品视频</div>
          </div>
          <!-- 页面视频 -->
          <div class="video-box">
            <div class="video">
              <video src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomicivibfbefe/video1-b.mp4" autoplay muted loop></video>
            </div>
          </div>
          <!-- 弹窗(全屏)视频 -->
          <transition name="fade">
            <div class="video-show" v-show="show3">
              <div class="show-mask"></div>
              <div class="cross iconfont icon-cuocha_kuai" @click="show3 = false"></div>
              <video src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomicivibfbefe/video1-b.mp4" controls autoplay></video>
            </div>
          </transition>
        </div>
      </div>
      <div class="section4 section" ref="sec4">
        <transition name="fade">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomicivibfbefe/section4-2.png" alt="" v-show="show4" />
        </transition>
      </div>
      <div class="section5 section">
        <transition name="fade">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomicivibfbefe/section5-2.png" alt="" class="pic-l" v-show="show5" />
        </transition>
        <transition name="fade">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomicivibfbefe/section5-3.png" alt="" class="pic-r" v-show="show5" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import ProductHeader from '@/components/product/ProductHeader.vue'
export default {
  name: 'product',
  components: {
    ProductHeader,
  },
  data() {
    return {
      show1: false,
      show4: false,
      show5: false,
      show3: false,
      product: {},
    }
  },
  methods: {
    isShow1() {
      setTimeout(() => {
        this.show1 = true
      }, 800)
    },
    // 获取元素到页面顶部距离 -- 递归累加 offsetTop
    getElementToPageTop(el) {
      if (el.parentElement) {
        return this.getElementToPageTop(el.parentElement) + el.offsetTop
      }
      return el.offsetTop
    },
    getHeight() {
      const scrollTop = window.pageYOffset
      // 当 [窗口下沿滚动距离] 超过 [上一个模块底边与页面顶部距离] 时触发渐入动画
      this.show4 = scrollTop + innerHeight > this.getElementToPageTop(this.$refs.sec3) + this.$refs.sec3.style.height
      this.show5 = scrollTop + innerHeight > this.getElementToPageTop(this.$refs.sec4) + this.$refs.sec4.style.height
    },
    // 获取商品信息
    async getProductInfo() {
      const id = this.$route.params.id
      const res = await this.$axios.get(`/products/${id}`)
      this.product = res
    },
    // 立即购买按键
    buy() {
      const id = this.$route.params.id
      this.$router.push(`/detail/${id}`)
    },
  },
  mounted() {
    this.isShow1()
    window.addEventListener('scroll', this.getHeight)
    this.getProductInfo()
  },
  destroyed() {
    window.removeEventListener('scroll', this.getHeight, false)
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin.scss';
.product {
  button {
    margin-left: 10px;
  }
  .section {
    position: relative;
    width: 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    &::before {
      content: '';
      display: block;
      padding-top: 50%;
    }
  }
  .section1 {
    background-image: url('https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomicivibfbefe/section1-1.png');
    img {
      display: inline-block;
      position: absolute;
      right: 15%;
      top: 50%;
      transform: translateY(-50%);
      width: 25%;
      @include fade-in(0, 0, 0, -50%);
    }
  }
  .section2 {
    background-image: url('https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomicivibfbefe/section2-1.png');
    .info {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 20%;
      font-size: 1.2vw;
      line-height: 40px;
      text-align: center;
    }
  }
  .section3 {
    .video-section {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .video-mask {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 11;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        .video-btn {
          position: absolute;
          left: 50%;
          bottom: 10%;
          transform: translateX(-50%);
          font-size: 1.2vw;
          padding: 17px 30px;
          border: 1px solid #fff;
          color: #fff;
          font-weight: 200;
          background-color: rgba(0, 0, 0, 0.3);
          cursor: pointer;
        }
      }
      .video-box .video video {
        width: 100%;
      }
      .video-show {
        .show-mask {
          z-index: 30;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.3);
        }
        .cross {
          z-index: 31;
          position: fixed;
          top: 20px;
          right: 20px;
          font-size: 2vw;
          color: #fff;
          cursor: pointer;
          padding: 5px;
          border-radius: 20px;
          background-color: rgba(0, 0, 0, 0.3);
          @include btn-hover(0.3s, #fff, none, 1.3);
        }
        video {
          z-index: 30;
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
        }
        &.fade-enter {
          opacity: 0;
        }
        &.fade-enter-active {
          transition: all 1s;
        }
        &.fade-enter-to {
          opacity: 1;
        }
      }
    }
  }
  .section4 {
    img {
      display: inline-block;
      position: absolute;
      right: 0;
      bottom: 0;
      width: 80%;
      @include fade-in(50%, 0, 0, 0, 2s);
    }
  }
  .section5 {
    margin-bottom: 20px;
    img {
      position: absolute;
      bottom: 0;
    }
    .pic-l {
      left: 10%;
      height: 90%;
      @include fade-in(-50%, 0, 0, 0, 2s);
    }
    .pic-r {
      right: 10%;
      height: 70%;
      @include fade-in(50%, 0, 0, 0, 2s);
    }
  }
}
</style>
