<template>
  <div class="mainContent">
    <el-tabs v-model="activeName"
             @tab-click="handleClick"
             class="homepagetitle">
      <el-tab-pane label="个性化推荐"
                   name="first">
        <home-banners></home-banners>
      </el-tab-pane>
      <el-tab-pane label="歌单"
                   name="second">
        <song-list></song-list>
      </el-tab-pane>
      <!-- <el-tab-pane label="排行榜"
                   name="third">排行榜</el-tab-pane> -->
      <el-tab-pane label="歌手"
                   name="third">
        <singer></singer>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import HomeBanners from './homebanners/HomeBanners'
import Singer from './songer/Singer.vue'
import SongList from './songlist/SongList.vue'
export default {
  components: { HomeBanners, Singer, SongList },
  data() {
    return { activeName: 'first' }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab.name)
    },
  },
}
</script>

<style>
.mainContent {
  width: 100%;
}
.el-tab-pane {
  display: flex;
  justify-content: center;
}

.el-tabs__active-bar {
  background-color: red;
  margin-left: 2rem;
}
.el-tabs__item.is-active {
  /* color: red; */
  color: red;

  /* transform: all 1.5s; */
}
.el-tabs__item {
  font-size: 1.5rem;
  font-weight: 400;
}

.el-tabs__item:hover {
  color: black;
}

.el-tabs__nav {
  padding-left: 2rem;
}

.el-tabs__item.is-active:visited {
  color: red;
}
</style>