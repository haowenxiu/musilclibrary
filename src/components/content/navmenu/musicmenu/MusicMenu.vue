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

    <click-router path="/RankingList">
      <music-menu-item>
        <template v-slot:menu-text>音乐排行榜</template>
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