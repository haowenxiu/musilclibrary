<template>
  <div class=""
       @click="itemClick()">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ClickRouter',
  props: {
    path: String,
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
      console.log(this.path)
    },
  },
}
</script>

<style>
</style>