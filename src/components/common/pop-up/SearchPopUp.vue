/* 点击搜索后出现的模态层 */
<template>
  <div class="model-page">
    <div class="model">
      <div class="model-row model-singer">
        <div class="model-title">歌手</div>
        <div v-for="item in singerlist"
             :key="item.id">
          <div class="row-height"
               @click="clickSinger(item.id)">
            <!-- <span>{{index}}</span> -->
            <span>{{item.singername}}</span>
          </div>
        </div>
      </div>
      <div class="model-row model-song">
        <div class="model-title modelsongtitle">歌曲</div>
        <div v-for="item in song"
             :key="item.songnum">
          <div class="row-height"
               @click="clickSong(item)">
            <!-- <span>{{index}}</span> -->
            <span>{{item.songname}}</span>
          </div>
        </div>
      </div>
      <div class="model-row model-songlist">
        <div class="model-title">歌单</div>
        <div v-for="item in songlist"
             :key="item.id" @click="clickSongList(item.id)">
          <div class="row-height">
            <span>{{item.title}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '@/event-bus'
export default {
  name: 'SearchPopUp',
  props: {
    List: {
      type: Object,
    },
    SearchWords: {
      type: String,
    },
  },
  data() {
    return {
      message: '水水水水水水水水水水水水水水水水水水水',
      song: [],
      singerlist: [],
      songlist: [],
      searchword: '',
    }
  },
  computed: {},
  watch: {
    List: {
      handler(n, o) {
        this.song = n.song
        this.songlist = n.songlist
        this.singerlist = n.singer
        console.log(this.song)
        console.log(this.songlist)
        console.log(this.singerlist)
      },
      deep: true,
    },
    SearchWords: {
      handler(n, o) {
        this.searchword = n === null ? 'kogn' : n
      },
      deep: true,
    },
  },
  methods: {
    clickSinger(singerid) {
      this.singerlist.forEach((item, index) => {
        if (singerid === item.id) {
          console.log((item.pic = this.$store.state.imghead + item.pic))
          this.$router.push({
            path: '/singerdetail/' + encodeURIComponent(JSON.stringify(item)),
          })
        }
      })
    },
    clickSong(item) {
      this.$store.dispatch('playsonginfo', item)
      EventBus.$emit('songdetailinfo', item)
    },
    clickSongList(item){
      console.log(item);
      this.$router.push({
        path: '/songlistdetail/' + item,
      })
    }
  },
}
</script>

<style>
.model-page {
  padding: 1px;
}
.model {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.model-row {
  width: 100%;
  height: 100%;
}
.row-height {
  height: 3rem;
  line-height: 3rem;
  margin: 0.2rem 0;
  /* background-color: #00f; */
  padding-left: 1.2rem;
  border-radius: 0.5rem;
}
.row-height:hover {
  background-color: #ddd;
}
.model-row > div {
  border-radius: 0.5rem;
}
.model-title {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  font-size: 1rem;
  padding-left: 1rem;
  background-color: #ddd;
}
.modelsongtitle {
  margin-top: 0.3rem;
}
</style>