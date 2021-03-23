<template>
  <div class="social-info">
    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: 'UserSocialInfo',
  data() {
    return {
      message: '这里是弹出框的用户社交信息',
    }
  },
}
</script>

<style>
.social-info {
  width: 100%;
  height: 7rem;
  border: 0.2rem solid rgb(210, 216, 216);
  border-left: none;
  border-right: none;
}
</style>