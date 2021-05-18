<template>
  <div>
    <div class="button-play"
         :style="playheight">
      <div class="colckplay"
           @click="colckplay">
        <span v-if="colck"
              class="iconfont icon-ai243"></span>
        <span class="iconfont icon-guansuo"></span>
      </div>
      <div class="audio-warpper">
        <!-- http://127.0.0.1/music/song/张杰 - 爱,不解释 (Live).mp3 -->
        <div class="playsong">
          <div class="playimg">
            <img :src="returnaudioListpic"
                 alt="">
          </div>
          <div class="playname">
            <span>{{ currentAudioName || returnaudiolistname }}</span>
          </div>
        </div>
        <audio-player ref="audioPlayer"
                      autoplay
                      :audio-list="audioList.map(elm => elm.songurl)"
                      :before-play="handleBeforePlay"
                      :show-playback-rate=false
                      @click="play"
                      theme-color="#ff2929" />

        <div class="showmusiclist">
          <el-popover placement="top"
                      width="350"
                      trigger="hover">
            <div class="songlist">
              <div class="list"
                   v-for="(item,index) in reversemusiclist"
                   :key="index"
                   @click="playthissong(index)">
                <span>{{item.songname}}</span>
                <span>{{item.singername}}</span>
                <span @click="deleteInsonglist(item.songnum)"><i class="el-icon-close"></i></span>
              </div>
            </div>
            <el-button type="text"
                       slot="reference">
              <span class="iconfont icon-toggle"
                    @click="showmisuclist" />
            </el-button>
          </el-popover>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import EventBus from '@/event-bus'
// 局部引入
import AudioPlayer from '@liripeng/vue-audio-player'
import '@liripeng/vue-audio-player/lib/vue-audio-player.css'

export default {
  data() {
    return {
      visible: true,
      indexsong: 0,
      colck: true,
      playheight: { height: '' },
      currentAudioName: '',
      audioList: [],
      // showlist: [],
    }
  },
  props: {
    songinfo: Object,
  },
  components: {
    AudioPlayer,
  },
  mounted() {
    EventBus.$on('songdetailinfo', (info) => {
      console.log(info)
      const path = info.pic
      info.pic =
        this.$store.state.imghead +
        path.substring(path.lastIndexOf('/', path.lastIndexOf('/') - 2))
      // this.$refs.audioPlayer.play()
      this.audioList.unshift(info)
    })
    // this.$refs.audioPlayer.play()
  },
  computed: {
    showlist() {
      return this.$store.state.playsonginfo
    },
    reversemusiclist() {
      // console.log(this.showlist)
      return this.showlist.reverse()
    },
    returnaudioListpic() {
      if (this.audioList.length == 0) {
        return null
      }
      return this.audioList[this.indexsong].pic
    },
    //
    returnaudiolistname() {
      if (this.audioList.length == 0) {
        return null
      }
      return this.audioList[this.indexsong].songname
    },
  },
  methods: {
    play() {
      console.log('开始播放')
    },
    // 播放前做的事
    handleBeforePlay(next) {
      // 这里可以做一些事情...
      // console.log(this.$refs.audioPlayer.currentPlayIndex)
      this.indexsong = this.$refs.audioPlayer.currentPlayIndex
      this.currentAudioName = this.audioList[
        this.$refs.audioPlayer.currentPlayIndex
      ].name
      next() // 开始播放
    },
    colckplay() {
      const height = this.playheight.height
      this.playheight.height = height == '' ? 12.5 + 'rem' : ''
      this.colck = this.colck ? false : true
    },
    showmisuclist() {
      this.visible = !this.visible
      // console.log('点击了歌单按钮')
    },
    playthissong(index) {
      const chose = this.showlist[index]
      this.audioList.unshift(chose)
      this.$refs.audioPlayer.play()
    },
    deleteInsonglist(songnum) {
      console.log('要删除的歌曲编号 : ' + songnum)
      this.$store.dispatch('deleteplaysonglist', songnum)
    },
  },
}
</script>

<style>
.button-play {
  width: 100%;
  height: 1.5rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  transition: height 2.5s;
  cursor: pointer;
  z-index: 99;
}
.button-play:hover {
  height: 12.5rem;
}
.colckplay {
  background-color: red;
  width: 2%;
  height: 1.5rem;
  line-height: 1.5rem;
  float: right;
  text-align: center;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
}
.colckplay > span {
  display: inline-block;
}
.audio-warpper {
  background-color: rgb(238, 231, 231);
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.playsong {
  width: 9rem;
  height: 11rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.playimg {
  width: 100%;
  height: 80%;
  /* margin: 0 2rem; */
}
.playimg > img {
  width: 100%;
  height: 100%;
  border-radius: 2rem;
}
.playname {
  position: relative;
  left: 85%;
  bottom: 3.2rem;
}
.playname > span {
  display: inline-block;
  width: 200rem;
  position: absolute;
  font-size: 1.5rem;
}
.audio-player {
  width: 75rem;
  margin: 2rem 2rem;
}
.audio-player .audio__progress-wrap {
  height: 0.9rem;
}
.audio-player .audio__play-volume-icon-wrap {
  left: 25%;
}
.audio-player .audio__play-volume-icon-wrap .audio__play-volume-wrap {
  background-color: rgb(168, 168, 168);
  bottom: 2.5rem;
}
.showmusiclist {
  position: relative;
  right: 20rem;
  top: 1.5rem;
}
.showmusiclist span {
  font-size: 2rem;
  color: red;
}
.songlist {
  width: 100%;
  height: 25rem;
  overflow: hidden;
  overflow-y: scroll;
}
.songlist .list {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  /* background-color: aqua; */
  margin: 0.1rem 0;
  border-radius: 1rem;
  cursor: pointer;
  display: grid;
  grid-template-columns: 65% 20% 15%;
}
.songlist .list:nth-child(2n + 1) {
  background-color: rgb(250, 249, 249);
}
.songlist > .list > span:nth-child(2),
span:nth-child(3) {
  text-align: center;
}
.songlist > .list > span:nth-child(3) i {
  display: inline-block;
  /* width: 90%; */
  /* height: 80%; */
  height: 50%;
  width: 50%;
  text-align: center;
  align-content: center;
  /* margin: auto 0; */
}
.songlist > .list > span:nth-child(3) i:hover {
  background-color: #dde;
  border: 0.1rem solid #ddd;
  /* border-radius: 1rem; */
}
</style>