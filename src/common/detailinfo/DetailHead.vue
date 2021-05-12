<template>
  <div class="head">
    <div class="head-img">
      <slot name="Singer-Pic"></slot>
    </div>
    <div class="head-content">
      <div class="detail-left">
        <div class="head-text singer-name">
          <slot name="Singer-Name"></slot>
        </div>
        <div class="head-text singer-nickname">
          <slot name="Singer-Nickname"></slot>
        </div>
        <div class="head-text singer-location">
          <slot name="Singer-Location"></slot>
        </div>
        <div class="head-text detail-info">
          <div>歌曲数:
            <slot name="Singer-Num1"></slot>
          </div>
          <div>专辑数:
            <slot name="Singer-Num2"></slot>
          </div>
        </div>
      </div>
      <div class="detail-right">
        <span>歌手简介 :</span>
        <div class="singer-intro">
          <slot name="Singer-Intro"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.head {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.head-img {
  width: 20%;
  height: 90%;
  margin: 0 1rem;
  /* background-color: #ff0; */
}
.head-img img {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}
.head-content {
  width: 75%;
  height: 90%;
  margin: 0 1rem;
  display: grid;
  grid-template-columns: 30% 70%;
  /* background-color: #0f0; */
}
.detail-left {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: #ff0; */
}
.head-text {
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  font-size: 1.1rem;
  /* background-color: #0ff; */
}
.singer-name {
  font-size: 1.5rem;
  font-weight: 600;
}
.detail-info div {
  margin-right: 1.5rem;
  display: inline-block;
}
.detail-right {
  display: grid;
  grid-template-rows: 30% 70%;
  /* background-color: #ff0; */
}
.detail-right span {
  display: inline-block;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 2rem;
}
/* .singer-intro {
  background-color: #f0f;
} */
.detail-right p {
  height: 100%;
  padding: 1.5rem 0.5rem;
  line-height: 1.9rem;
  text-indent: 2em;
  font-size: 1.25rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
}
</style>