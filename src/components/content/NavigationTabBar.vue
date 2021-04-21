<template>
  <div class="page">
    <navigation class="header"></navigation>
    <div class="content">
      <nav-menu class="left-content"></nav-menu>
      <router-view class="right-content"></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from 'content/navigation/Navigation.vue'
import NavMenu from './navmenu/NavMenu.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    NavMenu,
  },
}
</script>

<style>
@import '~assets/css/base.css';

.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.content {
  width: 100%;
  /* height: 100%; */
  margin-top: 6.1rem;
  border-top: 1px solid rgb(110, 109, 134);
  display: grid;
  grid-template-columns: 24rem auto;
  /* flex-direction: row; */
}
.left-content {
  /* height: 50%; */
  border-right: 0.1rem solid #b5b9be;
  height: 90vh;
  overflow-y: scroll;
}
.left-content:hover {
  overflow-y: scroll;
}
.left-content::-webkit-scrollbar {
  /*滚动条基本样式，高度*/
  width: 4px;
  height: 4px;
}
.left-content::-webkit-scrollbar-thumb {
  /*滚动条上层颜色*/
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.left-content::-webkit-scrollbar-track {
  /*滚动条底层颜色*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}

.right-content {
  /* width: 80%; */
  /* height: 200vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: rgb(110, 109, 134); */
}
</style>