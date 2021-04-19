<template>
  <div class="navmenu">
    <music-menu></music-menu>
    <user-music-menu></user-music-menu>
    <user-created-menu></user-created-menu>
  </div>
</template>

<script>
import MusicMenu from './musicmenu/MusicMenu.vue'
import UserCreatedMenu from './usercreatedmenu/UserCreatedMenu.vue'
import UserMusicMenu from './usermusicmenu/UserMusicMenu.vue'

export default {
  name: 'NavMenu',
  components: { MusicMenu, UserMusicMenu, UserCreatedMenu },
  data() {
    return {}
  },
}
</script>

<style>
</style>