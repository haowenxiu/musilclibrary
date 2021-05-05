<template>
  <click-router path="/loginpage">
    <div class="loginimg">
      <img :src="userimg"
           alt="">
    </div>
    <div class="popup-message">
      <div class="personal">
        <span>{{username}}</span>
        <span class="iconfont icon-caret-down"></span>
      </div>
    </div>
  </click-router>
</template>

<script>
import ClickRouter from '../../../../common/clickrouter/ClickRouter.vue'
export default {
  components: { ClickRouter },
  name: 'LoginModalLayer',
  data() {
    return {
      username: '登录',
      userimg: require('assets/img/portrait/login_before.png'),
    }
  },
}
</script>

<style>
.loginimg img {
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  cursor: pointer;
}
.personal {
  font-size: 1.2rem;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  background-color: var(--color-tint);
}
.personal span {
  margin: 0 0.7rem;
}
.personal:hover {
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
</style>