<template>
  <div class="index">
    <div class="home-content">
      <div class="container">
        <!-- 轮播图部分 -->
        <div class="home-swiper">
          <!-- 品类列表 -->
          <div class="categories">
            <ul>
              <li>
                手机<em class="iconfont icon-jiantou"></em>
                <div class="children">
                  <div class="phone" v-for="item in phoneList" :key="item.id">
                    <a href="">
                      <img v-lazy="item.url" alt="" />
                      <p>{{ item.title }}</p>
                    </a>
                  </div>
                </div>
              </li>
              <li>电视<em class="iconfont icon-jiantou"></em></li>
              <li>笔记本 平板<em class="iconfont icon-jiantou"></em></li>
              <li>家电<em class="iconfont icon-jiantou"></em></li>
              <li>出行 穿戴<em class="iconfont icon-jiantou"></em></li>
              <li>智能 路由器<em class="iconfont icon-jiantou"></em></li>
              <li>电源 配件<em class="iconfont icon-jiantou"></em></li>
              <li>健康 儿童<em class="iconfont icon-jiantou"></em></li>
              <li>耳机 音箱<em class="iconfont icon-jiantou"></em></li>
              <li>生活 箱包<em class="iconfont icon-jiantou"></em></li>
            </ul>
          </div>
          <!-- 轮播图 -->
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide
              ><a href="javascript:;"><img src="../../../public/imgs/swiper/1.jpg" alt="" /></a
            ></swiper-slide>
            <swiper-slide
              ><a href="javascript:;"><img src="../../../public/imgs/swiper/2.webp" alt="" /></a
            ></swiper-slide>
            <swiper-slide
              ><a href="javascript:;"><img src="../../../public/imgs/swiper/3.webp" alt="" /></a
            ></swiper-slide>
            <swiper-slide
              ><a href="javascript:;"><img src="../../../public/imgs/swiper/4.webp" alt="" /></a
            ></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
        <!-- 中部图标部分 -->
        <div class="home-middle">
          <div class="left-box">
            <ul>
              <li>
                <a href="javascript:;"
                  ><em class="iconfont icon-shizhong"></em><br />
                  保障服务</a
                >
              </li>
              <li>
                <a href="javascript:;"
                  ><em class="iconfont icon-24gl-building2"></em><br />
                  企业团购</a
                >
              </li>
              <li>
                <a href="javascript:;"
                  ><em class="iconfont icon-orbit"></em><br />
                  F码通道</a
                >
              </li>
              <li>
                <a href="javascript:;"
                  ><em class="iconfont icon-line-simcardsimka-02"></em><br />
                  米粉卡</a
                >
              </li>
              <li>
                <a href="javascript:;"
                  ><em class="iconfont icon-qian"></em><br />
                  以旧换新</a
                >
              </li>
              <li>
                <a href="javascript:;"
                  ><em class="iconfont icon-shumashouji"></em><br />
                  话费充值</a
                >
              </li>
            </ul>
          </div>
          <div class="right-box">
            <ul>
              <li class="rise">
                <a href="javascript:;"><img v-lazy="'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8a6d6d37904e22c72130e3e4ec79b41.jpg?w=632&h=340'" alt="" /></a>
              </li>
              <li class="rise">
                <a href="javascript:;"><img v-lazy="'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fce474f4024b96545959ccd45b7e50f3.jpg?w=632&h=340'" alt="" /></a>
              </li>
              <li class="rise">
                <a href="javascript:;"><img v-lazy="'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35b3f906861db9d6472206e6d68318d9.jpeg?w=632&h=340'" alt="" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 主要内容部分 -->
      <div class="home-main">
        <div class="container">
          <div class="main-top">
            <a href=""><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f334fbd05d5681bb838fefd1c815d88c.jpg?thumb=1&w=1686&h=165&f=webp&q=90" alt="" /></a>
          </div>
          <div class="main-content">
            <div class="content-series">
              <div class="head">
                <div class="title fl">手机</div>
                <div class="button fr">
                  <a href="">查看更多<em class="iconfont icon-jiantou"></em></a>
                </div>
              </div>
              <div class="body">
                <div class="large fl rise">
                  <a href=""><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c583f2edc613f1be20fa415910b13ce3.jpg?thumb=1&w=322&h=844&f=webp&q=90" alt="" /></a>
                </div>
                <ul>
                  <li class="fl rise" v-for="item in mainPhone" :key="item.id">
                    <a :href="'/#/product/' + item.id" target="_blank">
                      <div class="pic"><img v-lazy="item.mainImage" alt="" /></div>
                      <h5>{{ item.name }}</h5>
                      <h6>{{ item.subtitle }}</h6>
                      <p>
                        {{ item.price }}元起 <a href="javascript:;"><em class="iconfont icon-gouwuchekong" @click="addCart(item.id)"></em></a>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <popup :title="'提示'" :submitBtn="'查看详情'" :btn="1" :size="'middle'" :showModule="showModule" @submit="toCart" @cancel="showModule = false">
      <template v-slot:body>
        <p>商品已添加到购物车！</p>
      </template>
    </popup>
  </div>
</template>

<script>
// 引入自定义弹窗插件
import Popup from '@/components/module/popup.vue'
// 引入 swiper 插件及其样式文件
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Index',
  components: {
    Swiper,
    SwiperSlide,
    Popup,
  },
  data() {
    return {
      swiperOptions: {
        effect: 'fade',
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      phoneList: [
        {
          id: 11,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a95d59ec8c9c6ae7061f314eb4901e7c.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Note 11 Pro',
        },
        {
          id: 12,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1241b5a94ba1739e85f72d46592af0e.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Xiaomi 11 Ultra',
        },
        {
          id: 13,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/79e2935264bf9247aa7512e330112820.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Note 10 5G',
        },
        {
          id: 14,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/947721c8bc4a4ecc3bca17237ee64dea.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Redmi Note 9 4G',
        },
        {
          id: 15,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca3caca774dc8be0a453c90d1fa58e13.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Note 11 5G',
        },
        {
          id: 16,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6cf44dfe89111cb35e1a2211481ff546.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Xiaomi 11 Pro',
        },
        {
          id: 17,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Note 10 Pro',
        },
        {
          id: 18,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/970c6b287eb89620f5ee8e2b347f6f3d.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Redmi Note 9 5G',
        },
        {
          id: 19,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92fdd051100722d25323e9bd188befc5.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Redmi K40',
        },
        {
          id: 20,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Xiaomi 11',
        },
        {
          id: 21,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Redmi 9A',
        },
        {
          id: 22,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Redmi Note 9 Pro',
        },
        {
          id: 23,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f33903e1162959f500360a39896f2306.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Xiaomi Civi',
        },
        {
          id: 24,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c89e7b3a3495acaa0a4df271d9da59ea.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Xiaomi 10S',
        },
        {
          id: 25,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/72bd70039670d29610569421f753fcb6.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Xiaomi 11 青春',
        },
        {
          id: 26,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Redmi 9',
        },
        {
          id: 27,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fa2bae1f43611e80a8e4877719c76bdb.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Xiaomi MIX 4',
        },
        {
          id: 28,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab956ee82c24bdd83d21bc212aad3eb5.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'K40 游戏增强版',
        },
        {
          id: 29,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b45cbcf2bbe244982b2e865fa5077a52.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: '黑鲨4S Pro',
        },
        {
          id: 30,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/77bfd346ad97807237beca297cfe2fba.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Redmi 8A',
        },
        {
          id: 31,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'Xiaomi MIX FOLD',
        },
        {
          id: 32,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e5aa3cab478f5eeba1c7d4cf25cba9a.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: 'K40 Pro 系列',
        },
        {
          id: 33,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/958d5b4cf1f6a755b97b797f4cec67ed.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: '黑鲨 4S',
        },
        {
          id: 34,
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png?thumb=1&w=55&h=55&f=webp&q=90',
          title: '黑鲨4',
        },
      ],
      mainPhone: [],
      showModule: false,
    }
  },
  methods: {
    async getMainPhone() {
      const res = await this.$axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 14,
        },
      })
      this.mainPhone = res.list.slice(6, 14)
    },
    addCart(id) {
      this.$axios
        .post('/carts', {
          productId: id,
          selected: true,
        })
        .then((res) => {
          this.showModule = true
          this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
        })
        .catch(() => {
          this.showModule = true
        })
    },
    toCart() {
      this.$router.push('/cart')
    },
  },
  mounted() {
    this.getMainPhone()
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
.home-content {
  .container {
    .home-swiper {
      position: relative;
      height: 460px;
      .swiper-container {
        height: 460px;
        img {
          height: 100%;
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: $colorD;
          padding: 7px;
          &:hover {
            background-color: rgba(0, 0, 0, 0.3);
            color: $colorI;
          }
        }
        .swiper-button-prev {
          left: 239px;
        }
      }
      .categories {
        box-sizing: border-box;
        z-index: 4;
        position: absolute;
        top: 0;
        left: 0;
        width: 234px;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        padding: 20px 0;
        li {
          box-sizing: border-box;
          display: inline-block;
          width: 100%;
          height: 42px;
          line-height: 42px;
          padding: 0 30px;
          font-size: $fontI;
          color: $colorJ;
          em {
            display: block;
            float: right;
            font-weight: bold;
          }
          &:hover {
            background-color: $colorL;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            z-index: 10;
            box-sizing: border-box;
            position: absolute;
            top: 0;
            left: 234px;
            height: 460px;
            width: 992px;
            padding-top: 10px;
            background-color: $colorJ;
            border: 1px solid $colorF;
            box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.1);
            .phone {
              float: left;
              box-sizing: border-box;
              width: 24%;
              height: 75px;
              line-height: 42px;
              padding: 10px;
              img {
                float: left;
                height: 43px;
              }
              p {
                float: left;
                margin-left: 5px;
                color: $colorA;
                font-size: $fontJ;
                &:hover {
                  color: $colorL;
                }
              }
            }
          }
        }
      }
    }
    .home-middle {
      height: 170px;
      margin: 20px 0;
      .left-box {
        float: left;
        height: 170px;
        width: 234px;
        background-color: #5f5750;
        text-align: center;
        li {
          display: inline-block;
          box-sizing: border-box;
          width: 33.3%;
          height: 85px;
          padding-top: 20px;
          border: 1px solid $colorB;
          a {
            color: $colorD;
            font-size: $fontJ;
            .iconfont {
              font-size: $fontF;
              line-height: 25px;
            }
            &:hover {
              color: $colorJ;
            }
          }
        }
      }
      .right-box {
        float: right;
        height: 170px;
        li {
          float: left;
          height: 170px;
          margin-left: 14px;
          a {
            img {
              height: 100%;
            }
          }
        }
      }
    }
  }
  .home-main {
    background-color: $colorH;
    .container {
      padding: 20px 0;
      .main-top {
        width: 1226px;
        height: 120px;
        img {
          width: 100%;
        }
      }
      .main-content {
        margin-top: 20px;
        .content-series {
          // margin-bottom: 20px;
          .head {
            height: 58px;
            line-height: 58px;
            width: 100%;
            .title {
              font-size: $fontF;
              color: $colorB;
            }
            .button {
              font-size: $fontI;
              a {
                color: $colorA;
                transition: all 0.3s;
                em {
                  color: $colorB;
                  font-weight: bold;
                }
                &:hover {
                  color: $colorL;
                }
              }
            }
          }
          .body {
            height: 614px;
            .large {
              height: 100%;
              img {
                height: 100%;
              }
            }
            ul {
              li {
                display: inline-block;
                box-sizing: border-box;
                height: 300px;
                width: 234px;
                background-color: $colorJ;
                margin-left: 14px;
                text-align: center;
                padding-top: 20px;
                &:nth-child(n + 5) {
                  margin-top: 14px;
                }
                a {
                  display: inline-block;
                  height: 100%;
                  width: 100%;
                  .pic {
                    height: 128px;
                    img {
                      height: 128px;
                      margin-top: 15px;
                    }
                  }
                  h5 {
                    margin-top: 30px;
                    font-size: 14px;
                    font-weight: normal;
                    color: $colorA;
                  }
                  h6 {
                    font-size: 12px;
                    font-weight: normal;
                    color: $colorE;
                    margin: 5px 0;
                  }
                  p {
                    font-size: 14px;
                    color: $colorL;
                    margin-top: 10px;
                    a {
                      display: inline;
                      color: $colorL;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
