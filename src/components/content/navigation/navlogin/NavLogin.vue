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
          <user-center></user-center>
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
import changePhotoToBase64 from 'common/phototobase64/Base64'

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
      username: '登录',
      userimg: require('assets/img/portrait/login_before.png'),
      // userimg: '/userpic/1552354056660L1.jpg'
      // userimg: require('http://127.0.0.1/img/userpic/1552354056660L1.jpg')
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
      const userinfo = JSON.parse(localStorage.getItem('userInfo'))
      if (userinfo != null) {
        this.$router.push('/UserCenter')
      } else {
        this.$router.push('/loginpage')
      }
      console.log(userinfo)
    },

    showUserInfo() {
      console.log(this.$store)
      // const userinfo = this.$store.state.userInfo
      const userinfo = JSON.parse(localStorage.getItem('userInfo'))
      console.log(userinfo.headphoto);
      const token = localStorage.getItem('token')
      const userHeadImg = userinfo.headphoto
      this.username = userinfo.name ? userinfo.name : this.username
      if (userHeadImg != null) {
        // console.log(this.$store.state.imghead+userHeadImg)
        this.userimg = this.$store.state.imghead + userHeadImg
        console.log(this.userimg);
      }
      // changePhotoToBase64(userinfo.headphoto)
      if (userinfo == null && token == null) {
        this.$router.push('/loginpage')
      }
    },
  },
  created() {
    // this.showinfo()
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