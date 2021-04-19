<template>
  <div class="menu-conten">
    <div class="menu-row">
      <div class="menu-icon">
        <slot name="menu-icon"></slot>
      </div>
      <span class="menu-text">
        <slot name="menu-text"></slot>
      </span>
      <div class="menu-extra">
        <slot name="menu-extra"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicMenuItem',
}
</script>

<style>
.menu-row {
  width: 85%;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.3rem;
  margin: 0.2rem 0;
  /* background-color: red; */
  cursor: pointer;
}
.menu-row:hover {
  border-radius: 0.5rem;
  background-color: #f0f1f2;
}
.menu-row > .menu-text {
  padding-left: 1.3rem;
  color: #353535;
}
</style>