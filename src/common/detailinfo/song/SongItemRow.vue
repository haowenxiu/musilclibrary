<template>
  <tr @dblclick="toplaymusic">
    <td class="likesong">
      <slot name="Song-Id"></slot>
      <span @click="checklikesong">

        <el-tooltip content="添加喜欢"
                    placement="top"
                    effect="light"
                    v-if="showimg">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-xin1"></use>
          </svg>
        </el-tooltip>

        <el-tooltip content="取消喜欢"
                    placement="top"
                    effect="light"
                    v-else>
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-xin1-copy"></use>
          </svg>
        </el-tooltip>
      </span>
      <span class="download"
            @click="download">
        <a :href="baseURL"
           :download="filename">
          <el-tooltip content="下载"
                      placement="top"
                      effect="light">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-xiazai"></use>
            </svg>
          </el-tooltip>
        </a>
      </span>
    </td>
    <td>
      <slot name="Song-Name"></slot>
    </td>
    <td>
      <slot name="Song-SingerName"></slot>
    </td>
    <td>
      <slot name="Song-Collection"></slot>
    </td>
    <td>
      <slot name="Song-Time"></slot>
    </td>
  </tr>
  <!-- v-for="item in thesingersong" :key="item.id" -->
</template>

<script>
import EventBus from '@/event-bus'
import axios from 'axios'
export default {
  inject: ['reload'],
  props: {
    path: Object,
    singdetailinfo: {
      type: Object,
    },
    path: Number,
    getsongdetailid: {
      type: Number,
    },
    path: Boolean,
    getsongid: {
      type: Boolean,
    },
  },
  data() {
    return {
      songinfo: [],
      show: true,
      baseURL: '',
      filename: '',
    }
  },
  computed: {
    showimg() {
      const state = this.$store.state
      if (state.saveUserLikeSongListId.indexOf(this.getsongdetailid) >= 0) {
        return false
      } else {
        return true
      }
    },
  },
  methods: {
    toplaymusic() {
      this.$store.dispatch('playsonginfo', this.singdetailinfo)
      EventBus.$emit('songdetailinfo', this.singdetailinfo)
    },

    checklikesong() {
      let state = this.$store.state
      const songid = this.getsongdetailid
      const userid = state.userInfo.userid
      if (state.saveUserLikeSongListId.indexOf(songid) < 0) {
        console.log('该歌曲不存在,可以添加')
        this.$api
          .collectlikesong({
            userid,
            songid,
          })
          .then((res) => {
            this.$store.dispatch('saveUserLikeSongListId', songid)
          })
      } else {
        this.$api.cancellikesong({ userid, songid }).then((res) => {
          // console.log(res.data)
          this.$store.dispatch('deleteUserLikeSongListId', songid)
          this.reload()
        })
      }
    },
    download() {
      const url = this.singdetailinfo.songurl
      this.baseURL = this.$store.state.baseUrl + '/file/download?url=' + url
      const baseurl = this.$store.state.baseUrl + '/file/download'
      console.log(this.baseURL)
      console.log(this.$store.state.baseUrl)
      this.filename = url.substring(url.lastIndexOf('/') + 1)
      console.log(url.substring(url.lastIndexOf('/') + 1))
      // this.$api.download({ url }).then((res) => {
      //   console.log(res)
      // })
    },
  },
}
</script>

<style>
.likesong {
  width: 10%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  /* background-color: aqua; */
}
.likesong span {
  display: inline-block;
  /* width: 50%; */
  height: 100%;
  margin: 0 0.5rem;
  width: 2rem;
}
.icon {
  width: 1.7rem;
  height: 1.5rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>