<template>
  <div class="mainContent">
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="个性化推荐"
                   name="first">
        <home-banners></home-banners>
      </el-tab-pane>
      <el-tab-pane label="歌单"
                   name="second">歌单</el-tab-pane>
      <el-tab-pane label="排行榜"
                   name="third">排行榜</el-tab-pane>
      <el-tab-pane label="歌手"
                   name="fourth">歌手</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import HomeBanners from '../../components/content/mainTabbar/homebanners/HomeBanners.vue'
export default {
  components: { HomeBanners },
  name: 'Home',
  data() {
    return { activeName: 'first' }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
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
.el-tabs__item {
  font-size: 1.5rem;
  font-weight: 400;
}
.el-tabs__item:hover {
  color: black;
  /* font-size: 1.6rem; */
  font-weight: 500;
}
.el-tabs__nav {
  padding-left: 2rem;
}
.el-tabs__item.is-active {
  /* color: red; */
  color: black;
  font-weight: 500;
  font-size: 2rem;
  /* transform: all 1.5s; */
}
.el-tabs__item.is-active:visited {
  color: rgb(72, 9, 219);
  transform: scale(2);
}
</style>