<template>
  <music-menu-row>
    <template v-slot:menu-name>音乐 · 生活</template>
    <click-router path="/MusicHall">
      <music-menu-item>
        <template v-slot:menu-text>音乐馆</template>
      </music-menu-item>
    </click-router>

    <click-router path="/RankingList">
      <music-menu-item>
        <template v-slot:menu-text>音乐排行榜</template>
      </music-menu-item>
    </click-router>

    <click-router path="/DynamicPark">
      <music-menu-item>
        <template v-slot:menu-text>动态乐园</template>
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
.musicmenu {
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;
  margin-left: 2rem;
}
.musicmenu > span {
  font-size: 1.3rem;
  display: inline-block;
  height: 2.1rem;
  line-height: 2.1rem;
  width: 85%;
  text-align: center;
  background-color: #fff;
}
.menu-row {
  width: 85%;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 1.1rem;
}
.menu-row > span {
  padding-left: 1rem;
}
</style>