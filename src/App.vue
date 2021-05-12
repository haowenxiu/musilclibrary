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
  mounted() {
    // 刷新后跳转到首页面
    this.$router.push('/')
    //刷新后回到顶部
    window.addEventListener('beforeunload', (e) => {
      window.scroll(0, 0)
    })
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
