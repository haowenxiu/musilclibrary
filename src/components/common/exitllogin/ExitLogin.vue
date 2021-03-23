<template>
  <div id="exit">
    <!-- <div class="exit-btn">
      <span class="iconfont icon-guanji span-icon"></span>
      <span class="span-text">{{message}}</span>
    </div> -->
    <cente-rrow></cente-rrow>
  </div>
</template>

<script>
import CenteRrow from 'comp/common/usercenterrow/CenterRow'
export default {
  name: 'ExitLogin',
  components: { CenteRrow },
  data() {
    return {
      message: '退出登录',
    }
  },
}
</script>

<style scoped>
#exit {
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  background-color: rgb(158, 152, 152);
}
</style>
