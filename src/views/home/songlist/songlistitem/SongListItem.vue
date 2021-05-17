<template>
  <div class="singeritem">
    <div class="singerimg">
      <slot name="SingerImg"> </slot>
    </div>
    <div class="singername">
      <slot name="SingerName"> </slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.songitem {
  width: rem;
  height: 20rem;
}
.songitem img {
  width: 100%;
  height: 100%;
}
</style>