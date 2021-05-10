<template>
  <div id="app">
    <!-- <navigation></navigation> -->
    <navigation-tab-bar v-if="isRouterAlive"></navigation-tab-bar>
  </div>
</template>

<script>
import NavigationTabBar from './components/content/NavigationTabBar.vue'

export default {
  name: 'App',
  components: {
    NavigationTabBar,
  },
  provide() {
    return {
      reload: this.reload,
    }
  },
  data() {
    return {
      isRouterAlive: true,
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    },
  },
}
</script>

<style>
/* @import '~assets/css/base.css'; */
</style>
