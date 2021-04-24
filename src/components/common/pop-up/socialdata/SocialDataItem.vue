<template>
  <div class="basicinfo-content" @click="itemClick()">
    <!-- <span>8</span>
      <span>关注</span> -->
    <slot name="Social-Data-Item-num"></slot>
    <slot name="Social-Data-Item-text"></slot>
  </div>
</template>

<script>
export default {
  name: 'SocialDataItem',
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
.basicinfo-content {
  display: inline-block;
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.basicinfo-content:hover {
  border-radius: 1rem;
  background-color: var(--color-hovercolor);
}
.basicinfo-content span:nth-child(1) {
  font: small-caps 600 2rem sans-serif;
  margin: 0.3rem 0;
}
.basicinfo-content span:nth-child(2) {
  font-size: 1.2rem;
  margin: 0rem 0;
}
</style>