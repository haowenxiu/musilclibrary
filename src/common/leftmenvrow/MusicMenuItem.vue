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
  width: 95%;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.3rem;
  margin: 0.3rem 0;
  cursor: pointer;
  display: grid;
  grid-template-columns: 0.1fr 4fr 1fr;
}
.menu-icon > span {
  font-size: 1.8rem;
  font-weight: 600;
}
.menu-row:hover {
  border-radius: 0.5rem;
  background-color: #f0f1f2;
}
.menu-row > div {
  display: inline;
  margin-left: 0.5rem;
}
.menu-text {
  font-size: 1.3rem;
  padding: 0 1rem;
  color: #484849;
}
.menu-extra > span {
  font-size: 1.8rem;
}
</style>