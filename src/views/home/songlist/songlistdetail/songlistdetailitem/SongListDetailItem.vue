<template>
  <div class="head">
    <div class="head-img">
      <slot name="SongList-Pic"></slot>
    </div>
    <div class="head-content">
      <div class="detail-left">
        <div class="head-text singlist-name">
          <slot name="SongList-Name"></slot>
        </div>
        <div class="head-text collection"
             @click="collectSongList">
          <slot name="SongList-Button"></slot>
        </div>
        <div class="head-text singlisttext-span">
          <slot name="SongList-Nickname"></slot>
        </div>
        <div class="head-text singlisttext-span">
          <div>
            <slot name="SongList-Num1"></slot>
          </div>
        </div>
      </div>
      <div class="detail-right singlist">
        <div class="singlist-intro">
          <slot name="SongList-Intro"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  props: {
    path: Number,
    collectSongListById: {
      type: Number,
    },
    path: String,
    collectSonglistTitle: {
      type: String,
    },
  },
  methods: {
    collectSongList() {
      const userid = this.$store.state.userInfo.userid
      console.log(this.collectSongListById)
      console.log(userid)
      console.log(this.collectSonglistTitle)
      if (this.collectSonglistTitle === '播放全部') {
        console.log('开始播放全部歌曲')
      } else {
        if (this.collectSonglistTitle !== '已收藏') {
          this.$api
            .collectsonglist({
              userid: userid,
              songlistid: this.collectSongListById,
            })
            .then((res) => {
              console.log(res)
              this.reload()
            })
          // console.log('收藏歌单完成')
        } else {
          this.$api
            .cancelsonglist({
              userid: userid,
              songlistid: this.collectSongListById,
            })
            .then((res) => {
              this.$store.dispatch(
                'deleteusersonglistbyid',
                this.collectSongListById
              )
              console.log(res)
              this.reload()
            })
        }
      }
    },
  },
}
</script>

<style>
.head {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.head-img {
  width: 20%;
  height: 90%;
  margin: 0 1rem;
  border: 0.1rem solid #ddd;
  border-radius: 1rem;
  /* background-color: #ff0; */
}
.head-img img {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}
.singlist-name {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.singlist-name span:nth-child(1) {
  display: inline-block;
  width: 2.5rem;
  height: 2rem;
  margin-right: 0.5rem;
  text-align: center;
  line-height: 2rem;
  border: 0.12rem solid red;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: red;
  /* background-color: #ff0; */
}
.collection {
  padding: 0 2rem;
}
.collection button {
  width: 6rem;
  height: 60%;
  border: 0.1rem solid red;
  background-color: var(--color-tint);
  border-radius: 2rem;
  cursor: pointer;
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
/*.singer-intro {
   background-color: #0f0;
} */
.singlist p {
  height: 100%;
  padding: 1.5rem 0.5rem;
  line-height: 1.9rem;
  text-indent: 2em;
  font-size: 1.25rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
}
</style>