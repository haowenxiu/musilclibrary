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
  margin-top: 6.5rem;
  display: flex;
  flex-direction: row;
}
.left-content {
  width: 350px;
  height: 100%;
  border-right: 0.1rem solid #b5b9be;
}
.right-content {
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
}
</style>
