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
        <div v-for="(item) in usersonglist"
             :key="item.id"
             @click="songlistdetail(item.id)">
          <music-menu-item>
            <template v-slot:menu-icon>
              <span class="iconfont icon-icon--"></span>
            </template>
            <template v-slot:menu-text
                      :date-id="item.id">{{item.title}}</template>
          </music-menu-item>
        </div>

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
  mounted() {
    this.onload()
  },
  data() {
    return {
      activeNames: ['1'],
      usersonglist: [],
      collectsonglist: [],
    }
  },
  watch: {
    $store: 'onload',
  },
  methods: {
    onload() {
      const state = this.$store.state
      if (state.token !== '' && state.token !== null) {
        const userid = state.userInfo.userid
        this.$api.getUserCollectSongList({ userid }).then((res) => {
          const info = res.data.extend.info
          info.forEach((item, index) => {
            item.pic = state.imghead + item.pic
            this.collectsonglist.push(item.id)
            this.$store.dispatch('savecollectsonglist', item.id)
            
          })
          this.usersonglist = info
          console.log(this.collectsonglist)
        })
      } else {
        console.log('token为空')
        console.log(state)
      }
    },
    songlistdetail(id) {
      this.$router.push({
        path: '/songlistdetail/' + id,
      })
    },
  },
}
</script>

<style>
.el-collapse {
  border: none;
}
</style>