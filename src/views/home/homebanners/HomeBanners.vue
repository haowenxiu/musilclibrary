<template>
  <div class="banners">
    <el-carousel :interval="400000"
                 type="card"
                 height="230px">
      <el-carousel-item v-for="item in banners"
                        :key="item.bannersImg">
        <!-- <h3 class="medium">{{ item.bannersImg }}</h3> -->
        <img v-lazy="item.bannersImg"
             :key="item.bannersImg"
             :alt="item.bannersId"
             :data-id="item.bannersId"
             class="medium">
      </el-carousel-item>
    </el-carousel>
    <button @click="clickdata">获取</button>
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
      /* this.$api.banners().then((res) => {
        const banner = res.data.blocks[0].extInfo.banners
        console.log(banner)
        banner.forEach((data, index) => {
          this.banners.push({
            bannersId: data.bannerId,
            bannersImg: data.pic,
          })
        })
      }) */
      // axios
      //   .get('https://autumnfish.cn/homepage/block/page')
      //   .then((res) => {
      //     const banner = res.data.data.blocks[0].extInfo.banners
      //     console.log(banner)
      //     banner.forEach((data, index) => {
      //       this.banners.push({
      //         bannersId: data.bannerId,
      //         bannersImg: data.pic,
      //       })
      //     })
      //   })
      //   .catch((err) => {
      //     console.error(err)
      //   })
    },
    clickdata() {
      console.log(this.banners)
    },
  },
}
</script>

<style>
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