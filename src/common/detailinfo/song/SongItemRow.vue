<template>
  <tr @dblclick="toplaymusic">
    <td class="likesong">
      <slot name="Song-Id"></slot>
      <span @click="checklikesong">
        <svg class="icon"
             aria-hidden="true"
             v-if="showimg">
          <use xlink:href="#icon-xin1"></use>
        </svg>
        <svg class="icon"
             aria-hidden="true"
             v-else>
          <use xlink:href="#icon-xin1-copy"></use>
        </svg>
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
    }
  },
  computed: {
    showimg() {
      const state = this.$store.state
      console.log(this.getsongdetailid)
      console.log(state.saveUserLikeSongListId.indexOf(this.getsongdetailid))
      if (state.saveUserLikeSongListId.indexOf(this.getsongdetailid) >= 0) {
        return false
      } else {
        return true
      }
      // return this.getsongid
    },
  },
  methods: {
    toplaymusic() {
      console.log('双击了')
      console.log(this.singdetailinfo)
      this.$store.dispatch('playsonginfo', this.singdetailinfo)
      EventBus.$emit('songdetailinfo', this.singdetailinfo)
    },
    
    checklikesong() {
      console.log('点击了喜欢')
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
          console.log(res.data)
          this.$store.dispatch('deleteUserLikeSongListId', songid)
          this.reload()
        })
      }
    },
  },
}
</script>

<style>
.likesong {
  width: 10%;
  height: 100%;
  /* background-color: aqua; */
}
.likesong span {
  display: inline-block;
  width: 50%;
}
.icon {
  width: 1.7rem;
  height: 1.7rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>