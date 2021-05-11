<template>
  <div class="detail">
    <div class="detail-head">
      <detail-head>
        <template #Singer-Pic>
          <img v-lazy="singerinfo.pic"
               :alt="singerinfo.id">
        </template>
        <template #Singer-Name>
          <span>{{singerinfo.singername}}</span>
        </template>
        <template #Singer-Location>
          <span>{{singerinfo.location}}</span>
        </template>
        <template #Singer-Intro>
          <p>{{singerinfo.introduction}}</p>
        </template>
      </detail-head>
    </div>
    <hr />
    <div>

    </div>

  </div>
</template>

<script>
import DetailHead from '../../../../common/detailinfo/DetailHead.vue'
export default {
  components: { DetailHead },
  created() {
    this.onload()
  },
  data() {
    return {
      thesingersong: [],
      singerinfo: {},
    }
  },
  methods: {
    onload() {
      const singer = JSON.parse(this.$route.params.singerid)
      this.singerinfo = singer
      console.log(this.singerinfo)
      this.$api
        .singerdetail({ singerid: singer.id })
        .then((res) => {
          const singerdetail = res.data.extend.info
          this.thesingersong = singerdetail
          this.thesingersong.forEach((item, index) => {
            this.thesingersong[index].pic = this.$store.state.imghead + item.pic
          })
          // console.log(this.thesingersong)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style>
.detail {
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: center;
}
.detail-head {
  width: 90%;
  height: 20rem;
  margin: 2rem;
  /* background-color: #00f; */
}
</style>