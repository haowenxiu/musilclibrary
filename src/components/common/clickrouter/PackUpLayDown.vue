/* 点击收起或者放下组件 */
<template>
  <div class="packuplaydown"
       @click="itemClick()">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PackUpLayDown',
  data() {
    return {
      isshow: true,
    }
  },
  methods: {
    itemClick() {
      console.log('点击了')
    },
  },
}
</script>

<style>
.packuplaydown {
  width: 70%;
  height: 100%;
  /* background-color: red; */
  cursor: pointer;
}
</style>