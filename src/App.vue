<template>
  <div id="app">
    <!-- <navigation></navigation> -->
    <navigation-tab-bar></navigation-tab-bar>
  </div>
</template>

<script>
import NavigationTabBar from './components/content/NavigationTabBar.vue'

export default {
  name: 'App',
  components: {
    NavigationTabBar,
  },
}
</script>

<style>
/* @import '~assets/css/base.css'; */
</style>
