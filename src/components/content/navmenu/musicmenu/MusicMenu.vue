<template>
  <music-menu-row>
    <template v-slot:menu-name>
      <span>音乐 · 生活</span>
    </template>
    <click-router path="/MusicHall">
      <music-menu-item>
        <template v-slot:menu-text>
          <span>音乐馆</span>
        </template>
      </music-menu-item>
    </click-router>

    <click-router path="/RankingList">
      <music-menu-item>
        <template v-slot:menu-text>
          <span>音乐排行榜</span>
        </template>
      </music-menu-item>
    </click-router>

    <click-router path="/DynamicPark">
      <music-menu-item>
        <template v-slot:menu-text>
          <span>动态乐园</span>
        </template>
      </music-menu-item>
    </click-router>
  </music-menu-row>
</template>

<script>
import MusicMenuRow from 'common/leftmenvrow/MusicMenuRow'
import MusicMenuItem from 'common/leftmenvrow/MusicMenuItem.vue'
import ClickRouter from 'comp/common/clickrouter/ClickRouter.vue'
export default {
  components: { MusicMenuRow, MusicMenuItem, ClickRouter },
  name: 'MusicMenu',
}
</script>

<style >
</style>