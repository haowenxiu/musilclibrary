<template>
  <div class="banners">
    <el-carousel :interval="3000"
                 type="card"
                 height="250px">
      <el-carousel-item v-for="item in banners"
                        :key="item.bannerid">
        <!-- <h3 class="medium">{{ item.bannersImg }}</h3> -->
        <img v-lazy="item.bannerpic"
             :key="item.bannerpic"
             :alt="item.songid"
             :data-id="item.songid"
             class="medium">
      </el-carousel-item>
    </el-carousel>
    <button @click="clickdata">获取</button>
    <div class="auto">
      <audio controls
             preload="auto"
             src="http://127.0.0.1/music/song/%E5%BC%A0%E6%9D%B0%20-%20%E7%88%B1,%E4%B8%8D%E8%A7%A3%E9%87%8A%20(Live).mp3"></audio>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import { banners } from '@/network/api'
export default {
  name: 'HomeBanners',
  created() {
    this.onLoad()
  },
  data() {
    return {
      message: '这里是轮播图',
      banners: [],
    }
  },
  methods: {
    onLoad() {
      const that = this
      this.$api.banners().then((res) => {
        const banner = res.data.extend.info
        banner.forEach((data, index) => {
          data.bannerpic = this.$store.state.imghead + data.bannerpic
        })
        this.banners = banner
        console.log(this.banners)
        console.log(banner)
      })
    },
    clickdata() {
      console.log(this.banners)
    },
  },
}
</script>

<style>
.auto audio {
  width: 50rem;
  height: 5rem;
}

.banners {
  width: 90%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item--card {
  width: 50%;
  border-radius: 1.5rem;
}
.el-carousel__button {
  width: 12px;
  height: 4px;
  border-radius: 25%;
}
.el-carousel__indicator--horizontal {
  padding: 12px 6px;
}
.el-carousel__arrow {
  width: 2.2rem;
  height: 7rem;
  border-radius: 2rem;
  background-color: rgba(31, 45, 61, 0.29);
}
</style>