/* 退出登录组件 */
<template>
  <center-row>
    <center-row-item :centertransferinfo="message">
      <template v-slot:center-icon>
        <i class="iconfont icon-guanji"></i>
      </template>
      <template v-slot:center-text>
        {{messageChange}}
      </template>
    </center-row-item>
  </center-row>
</template>

<script>
import CenterRow from 'common/usercenterrow/CenterRow'
import CenterRowItem from 'common/usercenterrow/CenterRowItem'
import ClickRouter from 'comp/common/clickrouter/ClickRouter'
export default {
  name: 'ExitLogin',
  components: { CenterRow, CenterRowItem, ClickRouter },
  data() {
    return {
      message: '退出登录',
    }
  },
  computed: {
    messageChange() {
      const userinfo = this.$store.state
      // this.$store.state.userInfo
      console.log(userinfo)
      if (userinfo.token === null || userinfo.token === '') {
        console.log('token为空了')
        return '请登录'
      }else{
        console.log('token不为空了')
        return this.message
      }
      
    },
  },
}
</script>

<style>
</style>
