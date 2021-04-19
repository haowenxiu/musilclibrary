<template>
  <div class="musicmenu">
    <span>音乐·生活</span>
    <div class="menu-row">
      <span>音乐馆</span>
    </div>
    <div class="menu-row">
      <span>音乐库</span>
    </div>
    <div class="menu-row">
      <span>动态乐园</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicMenu',
}
</script>

<style >
.musicmenu {
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;
  margin-left: 2rem;
}
.musicmenu > span {
  font-size: 1.3rem;
  display: inline-block;
  height: 2.1rem;
  line-height: 2.1rem;
  width: 85%;
  text-align: center;
  background-color: #fff;
}
.menu-row {
  width: 85%;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 1.1rem;
  background-color: red;
}
.menu-row>span{
  padding-left: 1rem;
}
</style>