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
    <div class="homesonglist">
      <div class="songlist_title">
        <span>歌单</span>
      </div>
      <div class="tensonglist">
        <singer-item v-for="(item,index) in tensonglist"
                     :key="index">
          <template #SingerImg>
            <img v-lazy="item.pic"
                 :alt="item.id"
                 :data-id="item.id "
                 @click="homesonglistdetail(item.id)">
          </template>
          <template #SingerName>
            <span @click="homesonglistdetail(item.id)">{{item.title}}</span>
          </template>
        </singer-item>
      </div>
    </div>
  </div>
</template>

<script>
function random(number) {
  var arr = []
  while (arr.length < 10) {
    //原数组长度为0，每次成功添加一个元素后长度加1，当数组添加最后一个数字之前长度为number即可
    // var num = Math.floor(Math.random() * 84);   //生成一个0-300的随机整数
    var num = Math.floor(Math.random() * number)
    if (arr.length === 0) {
      //如果数组长度为0则直接添加到arr数组
      arr.push(num)
    } else {
      for (var i = 0; i < arr.length; i++) {
        //当新生成的数字与数组中的元素不重合时则添加到arr数组
        if (arr.join(',').indexOf(num) < 0) {
          arr.push(num)
        }
      }
    }
  }
  return arr
}
import axios from 'axios'
// import { banners } from '@/network/api'
import EventBus from '../../../event-bus'
import SingerItem from '../songer/singeritem/SingerItem'
export default {
  components: { SingerItem },
  name: 'HomeBanners',
  created() {
    this.onLoad()
    this.getSonglist()
  },
  mounted() {},
  data() {
    return {
      message: '这里是轮播图',
      banners: [],
      tensonglist: [],
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
      })
    },
    getSonglist() {
      this.$api.gethomesonglist().then((res) => {
        const length = res.data.extend.info.length
        const songlistinfo = res.data.extend.info
        this.songlistinfo = songlistinfo
        var list = random(length)
        songlistinfo.forEach((item, index) => {
          songlistinfo[index].pic = this.$store.state.imghead + item.pic
          for (let i = 0; i < list.length; i++) {
            if (index === i) {
              this.tensonglist.push(songlistinfo[list[i]])
            }
          }
        })
        console.log(this.tensonglist[1].pic)
      })
    },
    homesonglistdetail(id) {
      this.$router.push({
        path: '/songlistdetail/' + id,
      })
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
  height: 100%;
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
.homesonglist {
  width: 100%;
  height: 100%;
  margin: 1rem 0 2rem 0;
}
.songlist_title {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  margin: 1rem 0;
}
.songlist_title span {
  font-size: 1.7rem;
  font-weight: bolder;
}
.tensonglist {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
</style>