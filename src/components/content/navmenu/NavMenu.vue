<template>
  <div class="navmenu">
    <!-- 系统自带 -->
    <music-menu></music-menu>
    <!-- 我的音乐 -->
    <user-music-menu></user-music-menu>
    <!-- 用户自建歌单 -->
    <user-created-menu></user-created-menu>
    <!-- 收藏歌单 -->
    <collect-playlist></collect-playlist>
  </div>
</template>

<script>
import CollectPlaylist from './collectplaylist/CollectPlaylist.vue'
import MusicMenu from './musicmenu/MusicMenu.vue'
import UserCreatedMenu from './usercreatedmenu/UserCreatedMenu.vue'
import UserMusicMenu from './usermusicmenu/UserMusicMenu.vue'

export default {
  name: 'NavMenu',
  components: { MusicMenu, UserMusicMenu, UserCreatedMenu, CollectPlaylist },
  data() {
    return {}
  },
}
</script>

<style>
</style>