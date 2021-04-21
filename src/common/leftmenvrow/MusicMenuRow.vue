<template>
  <div class="musicmenu">
    <div class="musicmenu-menu">
      <slot name="music-menu-title"></slot>
    </div>
    <slot></slot>
    <!-- <music-menu-item></music-menu-item> -->
  </div>
</template>

<script>
import MusicMenuItem from './MusicMenuItem.vue'
export default {
  components: { MusicMenuItem },
  name: 'MusicMenuModule',
}
</script>

<style>
.musicmenu-menu{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>