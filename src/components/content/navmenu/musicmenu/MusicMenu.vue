<template>
  <music-menu-row>
    <template v-slot:music-menu-title>
      <music-menu-title>
        <template v-slot:menu-name>音乐 · 生活</template>
      </music-menu-title>
    </template>
    <click-router path="/homePage">
      <music-menu-item>
        <template v-slot:menu-text>音乐馆</template>
      </music-menu-item>
    </click-router>

    <click-router path="/UserCenter">
      <music-menu-item>
        <template v-slot:menu-text>用户中心</template>
      </music-menu-item>
    </click-router>
    <click-router path="/Mylovemusiclist">
      <music-menu-item>
        <!-- <template v-slot:menu-icon>
          <span class="iconfont icon-like-line"></span>
        </template> -->
        <template v-slot:menu-text>我喜欢的音乐</template>
        <template v-slot:menu-extra>
          <span class="iconfont icon-icon_huabanfuben"></span>
        </template>
      </music-menu-item>
    </click-router>
    <click-router path="/Musicnetworklocation">
      <music-menu-item>
        <!-- <template v-slot:menu-icon>
          <span class="iconfont icon-yun"></span>
        </template> -->
        <template v-slot:menu-text>我的云音乐盘</template>
      </music-menu-item>
    </click-router>

    <!-- <click-router path="/DynamicPark">
      <music-menu-item>
        <template v-slot:menu-text>动态乐园</template>
      </music-menu-item>
    </click-router> -->
  </music-menu-row>
</template>

<script>
import MusicMenuRow from 'common/leftmenvrow/MusicMenuRow'
import MusicMenuItem from 'common/leftmenvrow/MusicMenuItem.vue'
import ClickRouter from 'comp/common/clickrouter/ClickRouter.vue'
import MusicMenuTitle from '../../../../common/leftmenvrow/MusicMenuTitle.vue'
export default {
  components: { MusicMenuRow, MusicMenuItem, ClickRouter, MusicMenuTitle },
  name: 'MusicMenu',
}
</script>

<style >
</style>