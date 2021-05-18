<template>

  <!-- <div class="model-row model-singer">
      <div class="model-title">歌手</div>
      <div class="row-height">
        <span>asdasdasdasd</span>
      </div>
      <div class="row-height">asdasd</div>
    </div> -->
  <div class="model-row">
    <div class="model-title modelsongtitle">
      <slot name="Model-Title"></slot>
    </div>
    <slot name="Model-Content"></slot>
  </div>
</template>

<script>
import SearchRowItem from './SearchRowItem.vue'
export default {
  components: { SearchRowItem },
}
</script>

<style>
.model-row {
  width: 100%;
  height: 100%;
}
.row-height {
  height: 3rem;
  line-height: 3rem;
  margin: 0.2rem 0;
  /* background-color: #00f; */
  padding-left: 1.2rem;
}
.row-height:hover {
  background-color: #ddd;
}
.model-row > div {
  border-radius: 0.5rem;
}
.model-title {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  font-size: 1rem;
  padding-left: 1rem;
  background-color: #ddd;
}
.modelsongtitle {
  margin-top: 0.3rem;
}
</style>