<template>
  <music-menu-row>
    <el-collapse accordion
                 v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <!-- <template v-slot:music-menu-title> -->
          <pack-up-lay-down>
            <music-menu-title>
              <template v-slot:menu-name>收藏歌单</template>
            </music-menu-title>
          </pack-up-lay-down>
          <!-- </template> -->
        </template>
        <click-router path="/MusicHall">
          <music-menu-item>
            <template v-slot:menu-icon>
              <span class="iconfont icon-icon-- "></span>
            </template>
            <template v-slot:menu-text>欧美抒情</template>
          </music-menu-item>
        </click-router>

        <click-router path="/RankingList">
          <music-menu-item>
            <template v-slot:menu-icon>
              <span class="iconfont icon-icon--"></span>
            </template>
            <template v-slot:menu-text>安静</template>
          </music-menu-item>
        </click-router>

        <click-router path="/DynamicPark">
          <music-menu-item>
            <template v-slot:menu-icon>
              <span class="iconfont icon-icon--"></span>
            </template>
            <template v-slot:menu-text>摇滚</template>
          </music-menu-item>
        </click-router>
      </el-collapse-item>
    </el-collapse>
  </music-menu-row>
</template>

<script>
import MusicMenuRow from 'common/leftmenvrow/MusicMenuRow'
import MusicMenuItem from 'common/leftmenvrow/MusicMenuItem.vue'
import ClickRouter from 'comp/common/clickrouter/ClickRouter.vue'
import PackUpLayDown from 'comp/common/clickrouter/PackUpLayDown.vue'
import MusicMenuTitle from 'common/leftmenvrow/MusicMenuTitle.vue'

export default {
  components: {
    MusicMenuRow,
    MusicMenuItem,
    ClickRouter,
    PackUpLayDown,
    MusicMenuTitle,
  },
  naem: 'CollectPlaylist',
  data() {
    return { activeNames: ['1'] }
  },
}
</script>

<style>
.el-collapse {
  border: none;
}
</style>