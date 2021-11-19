<template>
  <div class="common-header">
    <!-- 顶部导航栏 -->
    <div class="nav-top">
      <div class="container">
        <!-- 左侧导航列表 -->
        <ul class="top-list fl">
          <li><a href="javascript:;">小米商城</a></li>
          <span>|</span>
          <li><a href="javascript:;">MIUI</a></li>
          <span>|</span>
          <li><a href="javascript:;">loT</a></li>
          <span>|</span>
          <li><a href="javascript:;">云服务</a></li>
          <span>|</span>
          <li><a href="javascript:;">天星数科</a></li>
          <span>|</span>
          <li><a href="javascript:;">有品</a></li>
          <span>|</span>
          <li><a href="javascript:;">小爱开放平台</a></li>
          <span>|</span>
          <li><a href="javascript:;">企业团购</a></li>
          <span>|</span>
          <li><a href="javascript:;">资质证照</a></li>
          <span>|</span>
          <li><a href="javascript:;">协议规则</a></li>
          <span>|</span>
          <li><a href="javascript:;">下载app</a></li>
          <span>|</span>
          <li><a href="javascript:;">智能生活</a></li>
          <span>|</span>
          <li><a href="javascript:;">Select Location</a></li>
        </ul>
        <!-- 右侧用户操作区域 -->
        <div class="top-client fr">
          <div class="client-cart fr">
            <span class="iconfont icon-gouwuchekong"></span>
            <span>购物车 ({{ cartCount || 0 }})</span>
            <div class="show-cart">购物车中还没有商品，抓紧选购吧</div>
          </div>
          <div class="client-list fr">
            <a href="javascript:;" v-if="username">{{ username }}</a>
            <a href="javascript:;" v-if="username" @click="logout">退出</a>
            <a href="javascript:;" v-if="!username" @click="$router.push('/login')">登录</a>
          </div>
        </div>
      </div>
    </div>
    <!-- logo & 品类导航栏 & 搜索框 -->
    <div class="nav-header">
      <div class="container">
        <!-- logo -->
        <div class="logo">
          <a href="/" name="小米官网"></a>
        </div>
        <!-- 品类导航栏 -->
        <div class="header-series">
          <div class="nav-list">
            <div class="item-menu">
              <a href="javascript:;">Xiaomi手机</a>
              <div class="children">
                <ul v-for="item in phones" :key="item.id">
                  <li class="product">
                    <a :href="'/product/' + item.id" target="_blank">
                      <div class="product-img">
                        <img v-lazy="item.mainImage" alt="" />
                      </div>
                      <div class="product-title">{{ item.name }}</div>
                      <div class="product-price">{{ item.price }}元起</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-menu"><a href="javascript:;">Redmi红米</a></div>
            <div class="item-menu"><a href="javascript:;">电视</a></div>
            <div class="item-menu"><a href="javascript:;">笔记本</a></div>
            <div class="item-menu"><a href="javascript:;">平板</a></div>
            <div class="item-menu"><a href="javascript:;">家电</a></div>
            <div class="item-menu"><a href="javascript:;">路由器</a></div>
            <div class="item-menu"><a href="javascript:;">服务</a></div>
            <div class="item-menu"><a href="javascript:;">社区</a></div>
          </div>
        </div>
        <!-- 搜索框 -->
        <div class="header-search">
          <input type="text" placeholder="小米平板5pro" />
          <div class="search">
            <a href="javascript:;" class="iconfont icon-sousuoxiao"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// iconfont 文件
import '@/assets/icons/iconfont/iconfont.css'
export default {
  name: 'common-header',
  data() {
    return {
      phones: [],
    }
  },
  methods: {
    async getProductList() {
      const res = await this.$axios.get('/products', {
        params: {
          categoryId: '100012',
          pageSize: 6,
        },
      })
      this.phones = res.list
    },
    logout() {
      this.$axios.post('/user/logout').then(() => {
        this.$message.success('退出成功')
        this.$cookie.set('userId', '', { expires: '-1' })
        this.$store.dispatch('saveUserName', '')
        this.$store.dispatch('saveCartCount', '0')
      })
    },
    async getCartCount() {
      const res = await this.$axios.get('/carts/products/sum')
      this.$store.dispatch('saveCartCount', res)
    },
  },
  computed: {
    username() {
      return this.$store.state.username
    },
    cartCount() {
      return this.$store.state.cartCount
    },
  },
  mounted() {
    this.getProductList()
    // 仅当从登录页跳转时调用接口
    const params = this.$route.params
    if (params && params.from === 'login') {
      this.getCartCount()
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
.common-header {
  // 顶部导航栏
  .nav-top {
    height: 40px;
    background-color: $colorA;
    .top-list {
      width: 800px;
      li {
        display: inline-block;
        line-height: 40px;
        a {
          color: $colorE;
          font-size: $fontK;
          &:hover {
            color: $colorJ;
          }
        }
      }
      span {
        font-size: $fontK;
        color: $colorM;
        margin: 0 3.6px;
      }
    }
    .top-client {
      width: 300px;
      .client-list {
        a {
          display: inline-block;
          line-height: 40px;
          color: $colorE;
          font-size: $fontK;
          margin-right: 15px;
          &:hover {
            color: $colorJ;
          }
        }
        span {
          font-size: $fontK;
          color: $colorM;
          margin: 0 3.6px;
        }
      }
      .client-cart {
        position: relative;
        height: 40px;
        width: 120px;
        background-color: $colorM;
        text-align: center;
        cursor: pointer;
        overflow: hidden;
        &:hover {
          overflow: visible;
          background-color: $colorJ;
          span {
            color: $colorL;
          }
          .show-cart {
            height: 100px;
            opacity: 1;
          }
        }
        span {
          font-size: $fontK;
          line-height: 40px;
          color: $colorE;
        }
        .iconfont {
          color: $colorE;
          margin-right: 5px;
          font-size: $fontJ;
        }
        .show-cart {
          z-index: 5;
          position: absolute;
          right: 0;
          top: 40px;
          width: 330px;
          height: 0px;
          opacity: 0;
          line-height: 100px;
          text-align: center;
          font-size: $fontJ;
          box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.1);
          background-color: $colorJ;
          transition: all 0.3s;
        }
      }
    }
  }
  // logo & 品类导航栏 & 搜索框
  .nav-header {
    height: 100px;
    .container {
      height: 100%;
      position: relative;
      .logo {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
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
      .header-series {
        position: absolute;
        left: 200px;
        height: 100px;
        line-height: 100px;
        font-size: $fontI;
        .nav-list {
          .item-menu {
            display: inline-block;
            margin-right: 20px;
            &:hover {
              a {
                color: $colorL;
              }
              .children {
                height: 220px;
                opacity: 1;
                z-index: 20;
                background-color: $colorJ;
              }
            }
            a {
              color: $colorA;
            }
            .children {
              position: absolute;
              left: -200px;
              top: 100px;
              width: 1226px;
              height: 0;
              opacity: 0;
              overflow: hidden;
              border-top: 1px solid $colorG;
              box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.1);
              transition: all 0.3s;
              .product {
                position: relative;
                float: left;
                width: 16.6%;
                height: 220px;
                padding-top: 30px;
                text-align: center;
                font-size: $fontK;
                line-height: 12px;
                &::before {
                  content: '';
                  position: absolute;
                  top: 28px;
                  right: 0;
                  height: 100px;
                  width: 1px;
                  border-right: 1px solid $colorF;
                }
                a {
                  display: inline-block;
                }
                .product-img {
                  height: 111px;
                  width: 100%;
                  img {
                    height: 100%;
                  }
                }
                .product-title {
                  margin: 19px 0 8px;
                  color: $colorA;
                }
                .product-price {
                  color: $colorL;
                }
              }
            }
          }
        }
      }
      .header-search {
        position: absolute;
        height: 100px;
        right: 0;
        input {
          position: absolute;
          box-sizing: border-box;
          right: 52px;
          top: 50%;
          transform: translateY(-50%);
          width: 245px;
          height: 50px;
          border: 1px solid #e0e0e0;
          padding: 0 10px;
          margin-right: -1px;
        }
        .search {
          position: absolute;
          box-sizing: border-box;
          right: 0px;
          top: 50%;
          transform: translateY(-50%);
          height: 50px;
          line-height: 50px;
          width: 52px;
          border: 1px solid #e0e0e0;
          text-align: center;
          transition: background-color 0.3s;
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            color: $colorA;
            font-weight: bold;
          }
          &:hover {
            background-color: $colorL;
            border: 0;
            a {
              color: $colorJ;
            }
          }
        }
      }
    }
  }
}
</style>
