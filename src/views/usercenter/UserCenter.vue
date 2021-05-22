<template>
  <div class="user">
    <div class="user-content">
      <div class="info">
        <div class="user-pic">
          <img :src="userinfo.headphoto"
               :alt="userinfo.userid">
        </div>
        <div class="user-info">
          <div class="user-info-head">
            <p>
              <span>{{userinfo.name}}</span>
              <span>{{userinfo.sex}}</span>
            </p>
            <p>
              <el-button @click="changeinfo">编辑个人信息</el-button>
            </p>
          </div>
          <br>
          <p>电话 : <span>{{userinfo.telephone}}</span></p>
          <p>邮箱 : <span>{{userinfo.email}}</span></p>
          <p>地址 : <span>{{userinfo.address}}</span></p>
          <p>简介 : <span>{{userinfo.introduce}}</span></p>
        </div>
      </div>
      <div class="info-songlist">
        <div class="songlist_title">
          <span>歌单</span>
        </div>
        <div class="tensonglist">
          <singer-item v-for="(item,index) in collectlist"
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
      <div class="block pagerhapel">
        <div class="block-total">
          <p>共有 <span>{{total}}</span> 条数据</p>
        </div>
        <div class="block-pager">
          <el-pagination @size-change="handleSizeChange"
                         @current-change="handleCurrentChange"
                         :current-page.sync="currentPage"
                         :page-size="pagesize"
                         layout="prev, pager, next, jumper"
                         :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingerItem from '../home/songer/singeritem/SingerItem'
export default {
  components: { SingerItem },
  inject: ['reload'],
  mounted() {
    this.onload()
  },
  data() {
    return {
      message: 'UserCenterUserCenterUserCenterUserCenterUserCenter',
      userinfo: '',
      collectlist: [],
      currentPage: 1,
      pagesize: 0,
      total: 0,
      pn: 1,
    }
  },
  methods: {
    onload() {
      const state = this.$store.state
      // state.userInfo.headphoto = state.imghead + state.userInfo.headphoto
      this.userinfo = state.userInfo
      // this.$api
      //   .selectuserinfo({ userid: state.userInfo.userid })
      //   .then((res) => {
      //     const info = res.data.extend.info
      //     console.log(info)
      //     info.headphoto = state.imghead + info.headphoto
      //     console.log(info)
      //     this.userinfo = info
      //   })

      console.log(this.userinfo)
      this.$api
        .getcollectsonglist({ userid: this.userinfo.userid, pn: this.pn })
        .then((res) => {
          const info = res.data.extend.info
          // console.log(info)
          this.pagesize = info.pagesize
          this.total = info.total
          this.currentPage = info.pageNum
          info.list.forEach((item) => {
            item.pic = state.imghead + item.pic
          })
          this.collectlist = info.list
          console.log(this.collectlist)
        })
    },
    homesonglistdetail(id) {
      this.$router.push({
        path: '/songlistdetail/' + id,
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.pn = val
      this.onload()
    },
    changeinfo() {
      this.$router.push('/changeinfo')
    },
  },
}
</script>

<style>
.user {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user-content {
  width: 90%;
}
.info {
  width: 100%;
  height: 22rem;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 20rem auto;
  align-content: center;
  /* background-color: #ff0; */
}
.user-pic {
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
}
.user-pic img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.user-info {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: #ff0; */
}
.user-info-head {
  height: 5rem;
  line-height: 5rem;
  display: flex;
  justify-content: space-between;

  border-bottom: 0.1rem solid black;
}
.user-info-head p {
  margin: 0 2rem;
}
.user-info-head p:nth-child(1) span:nth-child(1) {
  font-size: 2rem;
  font-weight: 600;
  margin-right: 5rem;
}
.user-info-head p:nth-child(1) span:nth-child(2) {
  font-size: 1.1rem;
}
.user-info-head p:nth-child(2) > .el-button {
  border-radius: 2rem;
}
.user-info-head p:nth-child(2) > .el-button:hover {
  border-color: #d3d3d3;
  background-color: #ececec;
  color: rgb(119, 115, 115);
}
.user-info > p {
  /* background-color: #ff0; */
  height: 3rem;
  line-height: 3rem;
  font-size: 1.1rem;
  margin-left: 2rem;
  color: rgb(95, 93, 93);
}
.user-info > p span {
  margin-left: 1rem;
}
.info-songlist {
  width: 100%;
}
.pagerhapel {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.block-total {
  margin-right: 1.5rem;
}
</style>