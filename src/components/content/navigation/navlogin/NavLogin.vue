/* 导航栏用户中心 */
<template>
  <div class="mycenter">
    <div>
      <!-- <click-router class="portrait"
                    path="/UserCenter"> -->
      <div class="loginbtn portrait"
           @click="userImgBtn">
        <img :src="userimg"
             alt="">
      </div>
      <!-- </click-router> -->
      <div class="popup-message">
        <el-popover placement="top"
                    width="300"
                    trigger="click"
                    visible-arrow='false'>
          <user-center style=""></user-center>
          <button slot="reference"
                  class="personal">
            <span>{{username}}</span>
            <span class="iconfont icon-caret-down"></span>
          </button>
        </el-popover>
      </div>
    </div>
    <login-modal-layer style="display:none" />
  </div>

</template>

<script>
import ClickRouter from 'comp/common/clickrouter/ClickRouter'
import UserCenter from 'comp/common/pop-up/UserCenter.vue'
import LoginModalLayer from './loginmodallayer/LoginModalLayer'
export default {
  name: 'NavLogin',
  components: {
    ClickRouter,
    UserCenter,
    LoginModalLayer,
  },
  data() {
    return {
      isahow: false,
      username: '',
      userimg: require('assets/img/portrait/login_before.png'),
    }
  },
  methods: {
    itemClick(path) {
      this.$router.push(path)
    },
    // open() {
    // this.$prompt()
    // },
    userImgBtn() {
      const userinfo = this.$store.state.userInfo
      console.log(userinfo)
      const token = this.$store.state.token
      if (token !== null && token !== '') {
        this.$router.push('/UserCenter')
      } else {
        this.$router.push('/loginpage')
      }
      console.log(token)
    },

    showUserInfo() {
      console.log(this.$store)
      // const userinfo = this.$store.state.userInfo
      const userinfo = this.$store.state.userInfo
      console.log(userinfo.headphoto)
      const token = this.$store.state.token
      const userHeadImg = userinfo.headphoto
      this.username = userinfo.name ? userinfo.name : this.username
      if (userHeadImg != null) {
        // console.log(this.$store.state.imghead+userHeadImg)
        this.userimg = userHeadImg
        console.log(this.userimg)
      }
      // changePhotoToBase64(userinfo.headphoto)
      if (userinfo == null && token == null) {
        this.$router.push('/loginpage')
      }
    },
  },
  mounted() {
    this.showUserInfo()
  },
}
</script>

<style>
@import '~assets/css/base.css';

.mycenter > div {
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
.popup-message {
  padding: 0 1.2rem;
  cursor: pointer;
}
.personal {
  /* margin-left: 1.3rem; */
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