<template>
  <div class="navmenu">
    <music-menu></music-menu>
  </div>
</template>

<script>
import MusicMenu from './musicmenu/MusicMenu.vue'

export default {
  name: 'NavMenu',
  components: { MusicMenu },
  data() {
    return {}
  },
}
</script>

<style>
</style>