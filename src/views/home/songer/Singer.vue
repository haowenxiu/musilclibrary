<template>
  <div class="songer">
    <div class="songer-header"></div>
    <div class="songer-content">
      <singer-item v-for="(item,index) in singer"
                   :key="index">
        <template #SingerImg>
          <img v-lazy="item.pic"
               :alt="item.singername"
               :data-id="item.id "
               @click="singerDetail(item.id)">
        </template>
        <template #SingerName>
          <span @click="singerDetail(item.id)">{{item.singername}}</span>
        </template>
      </singer-item>
    </div>
    <div class="block">
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page.sync="currentPage"
                     :page-size="pagesize"
                     layout="prev, pager, next, jumper"
                     :total="total">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import SingerItem from './singeritem/SingerItem.vue'

export default {
  components: { SingerItem },
  mounted() {
    this.onload()
  },
  data() {
    return {
      singer: [],
      paramssinger: {},
      currentPage: 1,
      pagesize: 0,
      total: 0,
      pn: 1,
    }
  },
  methods: {
    onload() {
      console.log('触发')
      this.$api
        .singerList({
          pn: this.pn,
        })
        .then((res) => {
          const singerList = res.data.extend.info
          // console.log(singerList)
          this.singer = singerList.list
          this.pagesize = singerList.pagesize
          this.total = singerList.total
          this.currentPage = singerList.pageNum
          singerList.list.forEach((item, index) => {
            item.pic = this.$store.state.imghead + item.pic
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    singerDetail(singerid) {
      this.singer.forEach((item, index) => {
        if (singerid === item.id) {
          // this.paramssinger = item
          console.log(item);
          this.$router.push({
            path: '/singerdetail/' + encodeURIComponent(JSON.stringify(item)),
          })
        }
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.pn = val
      this.onload()
    },
  },
}
</script>

<style>
.songer {
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
}
.songer-header {
  width: 100%;
  height: 6rem;
  padding: 0 1.5rem;
}
.songer-content {
  width: 100%;
  height: 100%;
  padding: 0.5rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  /* grid-template-rows: 1fr 1fr ; */
}
.singerspan {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.block {
  text-align: end;
  margin: 1rem 3rem 3rem;
}
</style>
