<template>
  <div class="detail">
    <div class="detail-head">
      <song-list-detail-item :collectSongListById="songlistinfo.id"
                             :collectSonglistTitle="collect_title">
        <template #SongList-Pic>
          <img :src="songlistinfo.pic"
               :alt="songlistinfo.id">
        </template>
        <template #SongList-Name>
          <span>歌单</span>
          <span>{{songlistinfo.title}}</span>
        </template>
        <template #SongList-Button>
          <button>{{collect_title}}</button>
        </template>
        <template #SongList-Nickname>
          <span>标签</span>
          <span>{{songlistinfo.style}}</span>
        </template>
        <template #SongList-Num1>
          <span>歌曲</span>
          <span>{{getsonglistlength}}</span>
        </template>
        <template #SongList-Intro>
          <span>歌单简介 :</span>
          <p>{{songlistinfo.introduction}}</p>
        </template>
      </song-list-detail-item>
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
            <song-item-row v-for="(item,index) in songinfo"
                           :key="item.id"
                           :singdetailinfo="item.song"
                           :getsongdetailid="item.song.songnum">
              <template #Song-Id>
                <span>{{index+1}}</span>
              </template>
              <template #Song-Name>
                <span>{{item.song.songname}}</span>
              </template>
              <template #Song-SingerName>
                <span>{{item.singer.singername}}</span>
              </template>
              <template #Song-Collection>
                <span>{{item.song.collection}}</span>
              </template>
              <template #Song-Time>
                <span>{{item.song.duration}}</span>
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
import SongItem from 'common/detailinfo/song/SongItem.vue'
import SongItemRow from 'common/detailinfo/song/SongItemRow.vue'
import SongListDetailItem from './songlistdetailitem/SongListDetailItem.vue'
export default {
  components: {
    DetailHead,
    SongRow,
    SongItem,
    SongItemRow,
    SongListDetailItem,
  },
  created() {
    this.onload()
  },
  data() {
    return {
      songlistinfo: {},
      songinfo: [],
      collect_title: '收藏',
    }
  },
  computed: {
    getsonglistlength() {
      return this.songinfo.length
    },
  },
  watch: {
    $route: 'onload',
  },
  methods: {
    onload() {
      const songlistid = this.$route.params.songlistid
      const collectsonglist = this.$store.state.collectsonglist
      console.log(collectsonglist)
      this.$api.getsonglistbyid({ id: songlistid }).then((res) => {
        const info = res.data.extend.info
        console.log(info.songlist.id)
        if (collectsonglist.indexOf(info.songlist.id) > 0) {
          this.collect_title = '已收藏'
        }
        const imghead = this.$store.state.imghead
        this.songlistinfo = info.songlist
        this.songlistinfo.pic = imghead + info.songlist.pic
        info.song.forEach((item, index) => {
          item.singer.pic = imghead + item.singer.pic
          item.song.pic = imghead + item.song.pic
          item.song.songurl = this.$store.state.songhead + item.song.songurl
        })
        this.songinfo = info.song
        console.log(this.songinfo)
      })
    },
    collect(songlistid) {
      console.log('要收藏的歌曲列表id')
      console.log(songlistid)
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
  /* background-color: #f0f; */
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