/* 行信息组件的详细样式组件 */
<template>
  <div class="centerrow-conten"
       @click="userCenterItemClick">
    <div class="font">
      <!-- <i class="iconfont icon-guanji"></i> -->
      <slot name='center-icon'></slot>
      <span class="font-text">
        <slot name="center-text"></slot>
      </span>
    </div>
    <div class="tager">
      <span class="tager-text">
        <slot name="user-related"></slot>
      </span>
      <i class="iconfont icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  naem: 'CenterRowItem',
  props: {
    path: String,
    centertransferinfo: {
      type: String,
    },
  },
  data() {
    return {}
  },
  methods: {
    userCenterItemClick() {
      console.log(this.path === undefined)
      if (this.centertransferinfo == '退出登录') {
        this.quirtLogin()
      } else {
        this.$router.push(this.path)
        console.log(this.path)
      }
    },
    quirtLogin() {
      const userinfo = this.$store.state
      console.log(userinfo)
      if (userinfo.token != null) {
        this.$store.dispatch('clearUserInfo')
        // location.reload();
        // this.reload()
        this.$router.go(0)
      } else {
        this.$router.push('/loginpage')
      }
    },
  },
}
</script>

<style>
.centerrow-conten {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 300;
}
.centerrow-conten > div {
  display: flex;
  align-items: center;
}
.centerrow-conten > .font > .font-text {
  margin: 0 0.7rem;
  font-size: 1.4rem;
}
.centerrow-conten > .font > i {
  margin-left: 0.2rem;
  font-size: 2.2rem;
}
.centerrow-conten > .tager > .tager-text {
  font-size: 0.5rem;
  margin-right: 0.5rem;
}
.centerrow-conten > .tager > i {
  font-size: 1.6em;
}
</style>