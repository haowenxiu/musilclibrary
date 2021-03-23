/* 点击导航栏用户中心之后出现的模态层 */
<template>
  <div class="user">
    <user-simple-info></user-simple-info>
    <user-social-info class="social-info"></user-social-info>
    <exit-login></exit-login>
  </div>
</template>

<script>
import ExitLogin from '../exitllogin/ExitLogin.vue'
import UserSocialInfo from './userpopup/socialinfo/UserSocialInfo.vue'
import UserSimpleInfo from './userpopup/UserInfo/UserSimpleInfo.vue'
export default {
  name: 'UserCenter',
  components: { UserSocialInfo, UserSimpleInfo, ExitLogin },
  data() {
    return {
      message: '这里是用户个人中心',
    }
  },
}
</script>

<style scoped>
.user {
  width: 100%;
  height: 100%;
}
</style>

