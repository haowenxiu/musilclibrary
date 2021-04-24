/* 退出登录组件 */
<template>
  <center-row>
    <center-row-item :centertransferinfo="message">
      <template v-slot:center-icon>
        <i class="iconfont icon-guanji"></i>
      </template>
      <template v-slot:center-text>
        {{message}}
      </template>
      <template v-slot:user-related>
        Lv.9
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
}
</script>

<style>
</style>
