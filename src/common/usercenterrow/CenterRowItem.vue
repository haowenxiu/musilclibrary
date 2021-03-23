/* 行信息组件的详细样式组件 */
<template>
  <div class="centerrow-conten"
       @click="userCenterItemClick">
    <div class="font">
      <!-- <i class="iconfont icon-guanji"></i> -->
      <slot name='center-icon'></slot>
      <span class="font-text">
        <slot name="center-text"></slot>
      </span>
    </div>
    <div class="tager">
      <span class="tager-text">
        <slot name="user-related"></slot>
      </span>
      <i class="iconfont icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  naem: 'CenterRowItem',
  props: {
    path: String,
  },
  data() {
    return { message: '退出登录' }
  },
  methods: {
    userCenterItemClick() {
      if (this.path == 'exit') {
        alert('退出码')
      } else {
        console.log(this.path)
      }
    },
  },
}
</script>

<style>
.centerrow-conten {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.centerrow-conten > div {
  display: flex;
  align-items: center;
}
.centerrow-conten > .font > .font-text {
  margin: 0 0.7rem;
  font-size: 1.4rem;
}
.centerrow-conten > .font > i {
  margin-left: 0.2rem;
  font-size: 2.2rem;
}
.centerrow-conten > .tager > .tager-text {
  font-size: 0.5rem;
  margin-right: 0.5rem;
}
.centerrow-conten > .tager > i {
  font-size: 1.6em;
}
</style>