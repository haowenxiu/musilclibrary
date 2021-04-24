<template>
  <div class="social-info">
    <click-router path='/userSocialInfo111'>
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
    </click-router>

    <click-router path='/userSocialInfo2222'>
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
    </click-router>

  </div>
</template>

<script>
import CenterRow from 'common/usercenterrow/CenterRow'
import CenterRowItem from 'common/usercenterrow/CenterRowItem'
import ClickRouter from 'comp/common/clickrouter/ClickRouter'
export default {
  components: { CenterRow, CenterRowItem, ClickRouter },
  name: 'UserSocialInfo',
  data() {
    return {
      message: '用户社交信息',
    }
  },
}
</script>

<style>
.social-info {
  width: 100%;
  height: 7rem;
  border: 0.2rem solid rgb(210, 216, 216);
  border-left: none;
  border-right: none;
}
</style>