/* 用户弹窗中心的行信息组件 */
<template>
  <div class="centerrow">
    <slot></slot>
  </div>
</template>

<script>
import CenterRowItem from './CenterRowItem.vue'

export default {
  components: { CenterRowItem },
  name: 'CenterRow',
  data() {
    return { message: '退出登录' }
  },
}
</script>

<style>
.centerrow {
  /* background-color: rgb(88, 41, 41); */
  width: 100%;
  height: 3rem;
  margin: 0.2rem 0;
  border-radius: 1rem;
  display: flex;
  align-items: center;
}
.centerrow:hover {
  background-color: #f0f1f2;
}
</style>