<template>
  <div class="song-detail">
    <div class="song-row">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import SongItem from './SongItem.vue'
export default {
  components: { SongItem },
}
</script>

<style>
.song-detail {
  width: 97%;
  height: 100%;
  padding-left: 3rem;
}
</style>