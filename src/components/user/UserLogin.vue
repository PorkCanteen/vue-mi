<template>
  <div class="user-login">
    <div class="content-table">
      <div class="title">
        <a href="javascript:;" class="btn-login">登录</a>
        <a href="javascript:;" class="btn-register" @click="toRegister">注册</a>
      </div>
      <div class="form">
        <form action="">
          <input type="text" class="id" placeholder="邮箱/手机号码/小米ID" v-model="username" />
          <input type="password" class="psw" placeholder="密码" v-model="password" />
          <input type="submit" class="submit" value="登录" @click.prevent="login" />
        </form>
        <a href="javascript:;" class="forget fl" @click="$message.info('敬请期待')">忘记密码</a>
        <a href="javascript:;" class="phone fr" @click="$message.info('敬请期待')">手机号登录</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-login',
  data() {
    return {
      username: '',
      password: '',
      userId: '',
    }
  },
  methods: {
    async login() {
      const { username, password } = this
      const res = await this.$axios.post('/user/login', {
        username,
        password,
      })
      this.$cookie.set('userId', res.id, { expires: 'Session' })
      this.$store.dispatch('saveUserName', res.username)
      // 跳转并传递参数，使得 header 组件知道是从 login 组件跳转而去从而触发调用接口
      // query 传参使用 path； params 传参使用 name
      this.$router.push({
        name: 'index',
        params: {
          from: 'login',
        },
      })
    },
    // async register() {
    //   const res = await this.$axios.post('/user/register', {
    //     username: 'admin123121',
    //     password: 'admin1',
    //     email: 'admin1@222.com',
    //   })
    //   this.$message.success('登录成功')
    //   // this.$router.push('/')
    //   console.log(res)
    // },
    toRegister() {
      this.$emit('change', 'UserRegister')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
.content-table {
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-20%, -60%);
  width: 450px;
  height: 500px;
  margin-top: 80px;
  padding: 40px 45px;
  box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.1);
  .title {
    height: 41px;
    margin: 15px;
    a {
      font-size: $fontF;
      margin-right: 17px;
      color: $colorA;
      &:last-child {
        color: #bbbbbb;
      }
    }
  }
  .form {
    text-align: center;
    input {
      box-sizing: border-box;
      width: 354px;
      height: 60px;
      border: none;
      margin-top: 20px;
      font-size: $fontI;
    }
    .id,
    .psw {
      background-color: #f9f9f9;
      padding: 20px;
    }
    .submit {
      background: $colorL;
      color: $colorJ;
      border-radius: 5px;
      margin-top: 40px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        opacity: 0.8;
      }
    }
    a {
      display: inline-block;
      font-size: $fontI;
      color: $colorL;
      margin: 15px 10px;
    }
  }
}
</style>
