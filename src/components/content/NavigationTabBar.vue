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
}
.content {
  width: 100%;
  height: 100%;
  margin-top: 6.2rem;
  display: flex;
  flex-direction: row;
}
.left-content {
  width: 21%;
  height: 100%;
  border-right: 0.1rem solid #b5b9be;
  /* background-color: rgb(32, 218, 32); */
  border: 1px solid rgb(32, 218, 32);
}
.right-content {
  width: 78%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgb(35, 32, 218);
}
</style>
