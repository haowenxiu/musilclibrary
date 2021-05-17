<template>
  <div class="songer">
    <div class="songer-header"></div>
    <div class="songer-content">
      <singer-item v-for="(item,index) in songlistinfo"
                   :key="index">
        <template #SingerImg>
          <img v-lazy="item.pic"
               :alt="item.id"
               :data-id="item.id "
               @click="songlistdetail(item.id)">
        </template>
        <template #SingerName>
          <span @click="songlistdetail(item.id)">{{item.title}}</span>
        </template>
      </singer-item>
    </div>
    <div class="block">
      <el-pagination @size-change="songListChange"
                     @current-change="songListChange"
                     :current-page.sync="currentPage"
                     :page-size="pagesize"
                     layout="prev, pager, next, jumper"
                     :total="total">
      </el-pagination>
    </div>
  </div>

</template>

<script>
import SingerItem from '../songer/singeritem/SingerItem.vue'
import SongListItem from './songlistitem/SongListItem.vue'
export default {
  components: { SongListItem, SingerItem },
  created() {
    this.onload()
  },
  data() {
    return {
      homesonglist: [],
      songlistinfo: [],
      currentPage: 1,
      pagesize: 0,
      total: 0,
      pn: 1,
    }
  },
  methods: {
    onload() {
      this.$api
        .getsonglist({
          pn: this.pn,
        })
        .then((res) => {
          const songlistinfo = res.data.extend.info
          console.log(songlistinfo);
          this.songlistinfo = songlistinfo.list
          this.pagesize = songlistinfo.pagesize
          this.total = songlistinfo.total
          this.currentPage = songlistinfo.pageNum
          songlistinfo.list.forEach((item, index) => {
            songlistinfo.list[index].pic = this.$store.state.imghead + item.pic
          })
          // console.log(this.songlistinfo)
        })
    },
    songlistdetail(id) {
      this.$router.push({
        path: '/songlistdetail/' + id,
      })
    },
    songListChange(val) {
      console.log(`每页 ${val} 条`)
    },
    songListChange(val) {
      console.log(`第 ${val} 页`)
      this.pn = val
      this.onload()
    },
  },
}
</script>

<style>
.songlist {
  width: 100%;
  height: 100%;
}
</style>