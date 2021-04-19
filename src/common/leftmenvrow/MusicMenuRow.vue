<template>
  <div class="musicmenu">
    <div class="menu">
      <!-- <span>音乐·生活</span> -->
      <span>
        <slot name="menu-name"></slot>
      </span>
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
.musicmenu {
  /* width: 100%;
  height: 100%; */
  margin-top: 1.5rem;
  margin-left: 2rem;
}
.musicmenu > .menu {
  font-size: 1.2rem;
  display: inline-block;
  height: 2.1rem;
  line-height: 2.1rem;
  width: 85%;
  color: #757575;
  /* text-align: center; */
  background-color: #fff;
}
</style>