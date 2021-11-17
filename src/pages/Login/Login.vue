<template>
  <div class="login">
    <!-- 左侧图片区域 -->
    <div class="login-img"></div>
    <!-- 右侧内容区域 -->
    <div class="login-content">
      <div class="content-header">
        <div class="header-title fl">
          <div class="logo fl" @click="$router.push('/')">
            <img src="https://s02.mifile.cn/assets/static/image/logo-mi2.png" alt="" />
          </div>
          <div class="text fl">
            <h3>小米账号</h3>
          </div>
        </div>
        <div class="header-btn fr">
          <ul>
            <li><a href="javascript:;">用户协议</a></li>
            <li><a href="javascript:;">隐私政策</a></li>
            <li><a href="javascript:;">帮助中心</a></li>
          </ul>
        </div>
      </div>
      <transition name="component-slide">
        <keep-alive><component class="component" :is="current" @change="changePage"></component></keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import UserLogin from '@/components/user/UserLogin.vue'
import UserRegister from '@/components/user/UserRegister.vue'
export default {
  name: 'login',
  components: {
    UserLogin,
    UserRegister,
  },
  data() {
    return {
      current: UserLogin,
    }
  },
  methods: {
    changePage(page) {
      this.current = page
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
.login {
  .login-img {
    position: fixed;
    left: 0;
    top: 0;
    width: 375px;
    height: 100%;
    background: url('https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.4994397e.jpg') no-repeat center;
    background-size: cover;
  }
  // 利用双飞翼布局
  .login-content {
    margin-left: 375px;
    height: 100%;
    .content-header {
      box-sizing: border-box;
      height: 80px;
      line-height: 40px;
      width: 100%;
      padding: 20px;
      .header-title {
        .logo {
          height: 40px;
          width: 40px;
          margin-right: 10px;
          cursor: pointer;
          img {
            height: 100%;
          }
        }
        .text {
          h3 {
            font-size: $fontD;
            font-weight: normal;
          }
        }
      }
      .header-btn {
        width: 300px;
        li {
          float: left;
          margin-right: 20px;
          a {
            color: #838383;
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
// Vue 过渡
.component {
  transition: all 0.3s;
  &.component-slide-enter-active {
    opacity: 1;
  }
  &.component-slide-leave-to {
    opacity: 0;
  }
  &.component-slide-enter {
    opacity: 0;
  }
}
</style>
