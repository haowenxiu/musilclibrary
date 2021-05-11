<template>
  <div class="head">
    <div class="head-img">
      <!-- <img src="../../assets/img/songerimg/yuner01.jpg"
           alt=""> -->
      <slot name="Singer-Pic"></slot>
    </div>
    <div class="head-content">
      <div class="detail-left">
        <div class="head-text singer-name">
          <!-- <span>林允儿</span> -->
          <slot name="Singer-Name"></slot>
        </div>
        <div class="head-text singer-nickname">
          <!-- <span>允儿</span> -->
          <slot name="Singer-Nickname"></slot>
        </div>
        <div class="head-text singer-location">
          <!-- <span>青海西宁</span> -->
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
          <!-- <p>"华语歌坛新生代领军人物，偶像与实力兼具的超人气天王。2004年出道至今，已发行9张高品质唱片，唱片销量称冠内地群雄。2008年以来举办过9场爆满的个人演唱会，在各大权威音乐奖项中先后21次获得“最受欢迎男歌手”称号，2012年度中国TOP排行榜内地最佳男歌手，2010年在韩国M-net亚洲音乐大赏(MAMA)上获得“亚洲之星”（Best Asian
            Artist）大奖，影响力触及海外。啊实打实的阿斯顿阿萨大苏打阿萨大苏打撒旦青蛙大十大实打实打算大苏打撒旦啊苏打阿斯顿阿斯顿阿斯顿阿萨 阿斯顿阿斯达萨达苏打苏打"</p> -->
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
.singer-intro {
  /* background-color: #f0f; */
}
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