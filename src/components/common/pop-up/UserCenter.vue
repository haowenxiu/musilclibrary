/* 点击导航栏用户中心之后出现的模态层 */
<template>
  <div class="user">
    <user-simple-info v-if="showUserdetals"></user-simple-info>
    <div class="gologin"
         v-else>
      <button @click="gologin()">去登录</button>
    </div>
    <!-- <user-social-info class="social-info"></user-social-info> -->
    <hr>
    <exit-login></exit-login>
  </div>
</template>

<script>
import ExitLogin from '../exitllogin/ExitLogin.vue'
import UserSocialInfo from './userpopup/socialinfo/UserSocialInfo.vue'
import UserSimpleInfo from './userpopup/UserInfo/UserSimpleInfo.vue'
import checkToken from 'common/untils/checkToken'
export default {
  inject: ['reload'],
  name: 'UserCenter',
  components: { UserSocialInfo, UserSimpleInfo, ExitLogin },
  data() {
    return {
      message: '这里是用户个人中心',
      isshow: true,
    }
  },
  methods: {
    gologin() {
      const token = this.$store.state.token
      if (token !== null && token !== '') {
        this.$router.push('/UserCenter')
      } else {
        this.$router.push('/loginpage')
        this.reload()
        // localStorage.removeItem('vuex')
        // location. reload()
      }
    },
  },
  computed: {
    showUserdetals() {
      const userinfo = this.$store.state.userInfo
      console.log(userinfo)
      const token = this.$store.state.token
      if (token == '') {
        // console.log('token为空')
        return false
      } else {
        // console.log('token不 为空')
        return true
      }
    },
  },
}
</script>

<style scoped>
.user {
  width: 100%;
  height: 100%;
}
.gologin {
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.gologin > button {
  width: 10rem;
  height: 4rem;
  border-radius: 2rem;
  border: 0.1rem solid var(--color-bordercolor);
  background-color: #fff;
}
.gologin > button:hover {
  background-color: var(--color-bordercolor);
}
</style>

