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
    <span class="inline"></span>
    <!-- <hr> -->
    <div class="detail-song">
      <div class="song-title">
        <span>歌手歌曲 :</span>
      </div>
      <div class="song">
        <song-row>
          <song-item>
            <song-item-row v-for="(item,index) in thesingersong"
                           :key="item.id"
                           :singdetailinfo="item">
              <template #Song-Id>
                <span>{{index+1}}</span>
              </template>
              <template #Song-Name>
                <span>{{item.songname}}</span>
              </template>
              <template #Song-SingerName>
                <span>{{singerinfo.singername}}</span>
              </template>
              <template #Song-Collection>
                <span>{{item.collection}}</span>
              </template>
              <template #Song-Time>
                <span>{{item.duration}}</span>
              </template>
            </song-item-row>
          </song-item>
        </song-row>
      </div>
    </div>

  </div>
</template>

<script>
import DetailHead from 'common/detailinfo/DetailHead.vue'
import SongRow from 'common/detailinfo/song/SongRow.vue'
import SongItem from '../../../../common/detailinfo/song/SongItem.vue'
import SongItemRow from '../../../../common/detailinfo/song/SongItemRow.vue'
export default {
  components: { DetailHead, SongRow, SongItem, SongItemRow },

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
            const info = this.thesingersong[index]
            info.pic = this.$store.state.imghead + item.pic
            info.songurl = this.$store.state.songhead + item.songurl
            info.singername = this.singerinfo.singername
          })
          console.log(this.thesingersong)
          console.log(this.singerinfo)
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #f00; */
}
.detail-head {
  width: 90%;
  height: 20rem;
  margin: 2rem;
  background-color: #f0f;
}
.inline {
  display: inline-block;
  height: 0.01rem;
  width: 100%;
  background-color: var(--color-bordercolor);
}
.detail-song {
  width: 90%;
  margin: 2rem;
  /* background-color: #0ff; */
}
.song-title {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  /* background-color: #ff0; */
}
.song-title {
  font-size: 1.5rem;
  padding-left: 3rem;
  font-weight: bold;
}
</style>