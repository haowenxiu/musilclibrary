<template>
  <div class="like-song">
    <div class="likesong-content">
      <div class="like-head">
        <song-list-detail-item :collectSonglistTitle="info.collect_title">
          <template #SongList-Pic>
            <img :src="info.pic"
                 :alt="info.id">
          </template>
          <template #SongList-Name>
            <span>歌单</span>
            <span>{{info.title}}</span>
          </template>
          <template #SongList-Button>
            <button>{{info.collect_title}}</button>
          </template>
          <template #SongList-Nickname>
            <span>标签</span>
            <span>{{info.style}}</span>
          </template>
          <template #SongList-Num1>
            <span>歌曲</span>
            <span>{{getsonglistlength}}</span>
          </template>
        </song-list-detail-item>
      </div>
      <div class="like-context">
        <div class="like-context-title">
          <span>歌曲列表 : </span>
        </div>
        <song-row>
          <song-item>
            <song-item-row v-for="(item,index) in likesonglist"
                           :key="index"
                           :singdetailinfo="item.song"
                           :getsongdetailid="item.song.songnum">
              <template #Song-Id>
                <span>{{index+1}}</span>
              </template>
              <template #Song-Name>
                <span>{{item.song.songname}}</span>
              </template>
              <template #Song-SingerName>
                <span>{{item.singername}}</span>
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
import SongItem from 'common/detailinfo/song/SongItem.vue'
import SongItemRow from 'common/detailinfo/song/SongItemRow.vue'
import SongRow from 'common/detailinfo/song/SongRow.vue'
import SongListDetailItem from 'views/home/songlist/songlistdetail/songlistdetailitem/SongListDetailItem.vue'
export default {
  components: { SongListDetailItem, SongRow, SongItem, SongItemRow },
  mounted() {
    this.onload()
  },
  data() {
    return {
      likesonglist: [],
      info: {
        title: '我喜欢的音乐',
        pic: '',
        id: 0,
        collect_title: '播放全部',
        style: '全',
      },
      show: true,
    }
  },
  computed: {
    getsonglistlength() {
      return this.likesonglist.length
    },
  },
  methods: {
    onload() {
      const userid = this.$store.state.userInfo.userid

      this.$api
        .getuserlikesonglist({
          userid,
        })
        .then((res) => {
          const info = res.data.extend.info
          const length = info.length
          info.forEach((item, index) => {
            console.log(item.song)
            item.song.pic = this.$store.state.imghead + item.song.pic
            item.song.songurl = this.$store.state.songhead + item.song.songurl
            this.$store.dispatch('saveUserLikeSongListId', item.song.songnum)
            if (index === length - 1) {
              this.info.pic = item.song.pic
              this.info.id = item.song.songnum
            }
            // const state = this.$store.state
            // if (state.saveUserLikeSongListId.indexOf(item.song.songnum) > 0) {
            //   // EventBus.$emit('songdetailinfo', this.singdetailinfo)
            //   this.show = false
            // }
          })
          this.likesonglist = info
          console.log(this.likesonglist)
        })
    },
  },
}
</script>

<style>
.like-song {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* background-color: #f0f; */
}
.likesong-content {
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-rows: 37% 63%;
  /* background-color: aqua; */
}
.like-head {
  margin-left: 2rem;
}
.like-context {
  width: 100%;
  height: 100%;
  /* background-color: yellow; */
}
.like-context-title {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  padding: 0 3.5rem;
  /* background-color: red; */
}
.like-context-title span {
  font-size: 1.4rem;
  font-weight: bold;
}
.singlisttext-span span:nth-child(1) {
  color: rgb(148, 145, 145);
  padding-right: 1rem;
}
.singlisttext-span span:nth-child(2) {
  color: rgb(97, 94, 94);
}
.head-text {
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  font-size: 1.1rem;
}
.head-content {
  width: 75%;
  height: 90%;
  margin: 0 1rem;
  display: grid;
  grid-template-columns: 38% 62%;
}
.singlist {
  display: grid;
  grid-template-rows: 20% 80%;
}
.singlist span {
  display: inline-block;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 2rem;
}
</style>