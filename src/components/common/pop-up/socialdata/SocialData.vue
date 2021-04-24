<template>
  <div class="basicinfo">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SocialData',
}
</script>

<style>
.basicinfo {
  width: 100%;
  height: 9rem;
  padding: 2rem 0 0.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>