/* 导航栏用户中心 */
<template>
  <div class="mycenter">
    <click-router class="portrait"
                  path="/UserCenter">
      <img :src="userimg"
           alt="">
    </click-router>
    <div class="popup-message">
      <el-popover placement="top"
                  width="300"
                  trigger="click"
                  visible-arrow='false'>
        <user-center></user-center>
        <button slot="reference"
                class="personal">
          <span>{{username}}</span>
          <span class="iconfont icon-caret-down"></span>
        </button>
      </el-popover>
    </div>
  </div>

</template>

<script>
import ClickRouter from 'comp/common/clickrouter/ClickRouter'
import UserCenter from 'comp/common/pop-up/UserCenter.vue'

export default {
  name: 'NavLogin',
  components: {
    ClickRouter,
    UserCenter,
  },
  data() {
    return {
      username: 'Mr丿郝',
      userimg: require('assets/img/portrait/login.jpg'),
    }
  },
  methods: {
    itemClick(path) {
      // console.log(path)
      this.$router.push(path)
    },
  },
}
</script>

<style>
@import '~assets/css/base.css';

.mycenter {
  height: 100%;
  width: 100%;
  margin-left: 3rem;
  display: flex;
  align-items: center;
  /* background-color: rgb(55, 172, 162); */
}
.portrait img {
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  cursor: pointer;
}
.personal {
  margin-left: 1.3rem;
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