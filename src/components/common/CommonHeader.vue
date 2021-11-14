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
          <div class="client-list fl"><a href="javascript:;">登录</a><span>|</span><a href="javascript:;">注册</a><span>|</span><a href="javascript:;">消息通知</a></div>
          <div class="client-cart fr">
            <span class="iconfont icon-gouwuchekong"></span>
            <span>购物车 (0)</span>
            <div class="show-cart">购物车中还没有商品，抓紧选购吧</div>
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
                    <a href="javascript:;" target="_blank">
                      <div class="product-img">
                        <img :src="item.imgUrl" alt="" />
                      </div>
                      <div class="product-title">{{ item.title }}</div>
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
      phones: [
        {
          id: 1,
          imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8cad77bda138fd94eadbc2ddfced7c56.png?thumb=1&w=220&h=151&f=webp&q=90',
          title: 'Xiaomi Civi',
          price: '2599',
        },
        {
          id: 2,
          imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/087c52d253d9301dff7743d6bf2d0330.png?thumb=1&w=220&h=151&f=webp&q=90',
          title: 'Xiaomi MIX 4',
          price: '4199',
        },
        {
          id: 3,
          imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85e44ea2405ff8414148bbde7446b137.png?thumb=1&w=220&h=151&f=webp&q=90',
          title: 'Xiaomi MIX FOLD',
          price: '7499',
        },
        {
          id: 4,
          imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a359e9346e3c6ee8c9d8389e3fd9458.png?thumb=1&w=220&h=151&f=webp&q=90',
          title: 'Xiaomi 11 Ultra',
          price: '5499',
        },
        {
          id: 5,
          imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1c45eadcedeb27b1cafca0359422da9.png?thumb=1&w=220&h=151&f=webp&q=90',
          title: 'Xiaomi 11 Pro',
          price: '3999',
        },
        {
          id: 6,
          imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56e3379b5422cb06e5c8a0c546445606.png?thumb=1&w=220&h=151&f=webp&q=90',
          title: 'Xiaomi 11 青春版',
          price: '1999',
        },
      ],
    }
  },
  methods: {},
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
      width: 260px;
      .client-list {
        a {
          display: inline-block;
          line-height: 40px;
          color: $colorE;
          font-size: $fontK;
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
