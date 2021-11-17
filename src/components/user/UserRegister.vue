<template>
  <div class="user-login">
    <div class="content-table">
      <div class="title">
        <a href="javascript:;" class="btn-login" @click="toLogin">登录</a>
        <a href="javascript:;" class="btn-register">注册</a>
      </div>
      <div class="form">
        <form action="">
          <input type="text" class="id" placeholder="请输入用户名" v-model="username" />
          <input type="text" class="psw" placeholder="请输入密码" v-model="password" />
          <input type="text" class="email" placeholder="请输入邮箱" v-model="email" />
          <input type="submit" class="submit" value="点击注册" @click="register" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-login',
  components: {},
  data() {
    return {
      username: '',
      password: '',
      email: '',
      userId: '',
    }
  },
  methods: {
    async register() {
      const res = await this.$axios.post('/user/register', {
        username: this.username,
        password: this.password,
        email: this.email,
      })
      // console.log(this)
      this.$message.success('注册成功')
      // this.$router.push('/')
      console.log(res)
    },
    toLogin() {
      this.$emit('change', 'UserLogin')
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
  height: 540px;
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
      &:first-child {
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
    .psw,
    .email {
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
  }
}
</style>
