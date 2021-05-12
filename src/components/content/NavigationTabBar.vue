<template>
  <div class="pages">
    <navigation class="header"></navigation>
    <div style="height: 0;overflow: hidden;clear: both;"></div>
    <div class="content">
      <nav-menu class="left-content"></nav-menu>
      <router-view class="right-content"></router-view>
    </div>
    <play-music></play-music>
    <page-footer class="footer"></page-footer>
  </div>
</template>

<script>
import Navigation from 'content/navigation/Navigation.vue'
import NavMenu from './navmenu/NavMenu.vue'
import PageFooter from './footer/Footer.vue'
import PlayMusic from './playmusic/PlayMusic.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    NavMenu,
    PageFooter,
    PlayMusic,
  },
}
</script>

<style>
@import '~assets/css/base.css';

.pages {
  width: 100%;
  height: 100%;
  /* display: flex;
  flex-direction: row; */
}

.header {
  width: 100%;
  height: 50rem;
  z-index: 9999;
}
.content {
  width: 100%;
  height: 100%;
  margin-top: 6.1rem;
  border-top: 1px solid rgb(110, 109, 134);
  display: grid;
  grid-template-columns: 26rem auto;

  /* flex-direction: row; */
}
.left-content {
  /* height: 100%; */
  padding-top: 1.5rem;
  border-right: 0.1rem solid #b5b9be;
  height: 90vh;
  overflow-y: scroll;
}
.left-content:hover {
  overflow-y: scroll;
}
.left-content::-webkit-scrollbar {
  /*滚动条基本样式，高度*/
  width: 2px;
  height: 4px;
}

.right-content {
  /* width: 80%; */
  /* height: 200vh; */
  width: 100%;
  /*display: flex;
  justify-content: center; */
  /* align-items: center; */
  /* background-color: rgb(110, 109, 134); */
}
.footer {
  width: 100%;
  height: 500px;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b5b9be;
}
</style>