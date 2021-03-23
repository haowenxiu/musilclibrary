/* 退出登录组件 */
<template>
  <div>
    <cente-rrow>
      <center-row-item path="/exit">
        <template v-slot:center-icon>
          <i class="iconfont icon-guanji"></i>
        </template>
        <template v-slot:center-text>
          退出登录
        </template>
        <template v-slot:user-related>
          Lv.9
        </template>
      </center-row-item>
    </cente-rrow>
  </div>
</template>

<script>
import CenteRrow from 'common/usercenterrow/CenterRow'
import CenterRowItem from 'common/usercenterrow/CenterRowItem'
import ClickRouter from 'comp/common/clickrouter/ClickRouter'
export default {
  name: 'ExitLogin',
  components: { CenteRrow, CenterRowItem, ClickRouter },
  data() {
    return {
      message: '退出登录',
    }
  },
}
</script>

<style scoped>
</style>
