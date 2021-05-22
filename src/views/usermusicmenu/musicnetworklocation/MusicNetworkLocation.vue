<template>
  <div class="uploadmusic">
    <div class="inputinfo ">
      <!-- <span class="span">上传音频</span> -->
      <div class="audiouploadbtn block">
        <span>该网盘只能存放，不可在该网站播放 !!!</span>
        <el-button round
                   @click="uploadaudio">点击上传到网盘</el-button>
        <!-- <span>{{audiopath}}</span> -->
        <input ref="fileaudio"
               type="file"
               style='display:none'
               @change="getaudio">
      </div>
      <div class="like-context">
        <div class="like-context-title">
          <span>歌曲列表 : </span>
        </div>
        <div class="showsong">
          <tr>
            <th></th>
            <th>歌曲名称</th>
            <th>歌手</th>
            <th>时长</th>
          </tr>
          <tr v-for="(item,index) in songlist"
              :key="index"
              class="usersonglist"
              @dbclick="play">
            <td>
              <span>
                {{index+1}}
              </span>
              <span class="download"
                    @click="download(item)">
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
            <td>{{item.singername}}</td>
            <td>{{item.songname}}</td>
            <td>{{item.corrl}}</td>
          </tr>
        </div>
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
  inject: ['reload'],
  mounted() {
    this.onload()
  },
  data() {
    return {
      audiopath: '',
      userid: '',
      baseURL: '',
      filename: '',
      uploadsong: {
        url: '',
        name: '',
        singername:'',
      },
      songlist: [],
    }
  },
  methods: {
    download(item) {
      const url = item.songurl
      // console.log(url)
      this.baseURL = this.$store.state.baseUrl + '/file/download?url=' + url
      const baseurl = this.$store.state.baseUrl + '/file/download'
      // console.log(this.baseURL)
      // console.log(this.$store.state.baseUrl)
      this.filename = url.substring(url.lastIndexOf('/') + 1)
      // console.log(url.substring(url.lastIndexOf('/') + 1))
      // this.$api.download({ url }).then((res) => {
      //   console.log(res)
      // })
    },
    play() {
      this.$message({
        message: '警告，该页面的歌曲不可在该网站播放，只可进行下载',
        type: 'warning',
        offset: 80,
      })
    },
    onload() {
      this.userid = this.$store.state.userInfo.userid
      console.log(this.userid)
      this.$api.selectuploadsong({ userid: this.userid }).then((res) => {
        const info = res.data.extend.info
        // console.log(info)
        info.forEach((item) => {
          item.songurl = this.$store.state.songhead + item.songurl
        })
        this.songlist = info
        console.log(this.songlist)
      })
    },
    uploadaudio() {
      this.$refs.fileaudio.dispatchEvent(new MouseEvent('click'))
    },
    getaudio() {
      console.log('点击上传')
      const inputFile = this.$refs.fileaudio.files[0]
      this.uploadsong.name = inputFile.name
      this.uploadsong.singername = inputFile.name.substring(
        0,
        inputFile.name.lastIndexOf('-')
      )
      // this.song.songname = inputFile.name
      if (inputFile) {
        if (inputFile.type == 'audio/mpeg') {
          // console.log(inputFile.type)
          this.audiopath = inputFile.name
          this.upload(inputFile)
        } else {
          this.$message({
            message: '请上传MP3格式的文件',
            type: 'error',
            offset: '80',
          })
        }
      }
    },
    upload(inputFile) {
      var that = this
      const reader = new FileReader()
      reader.readAsDataURL(inputFile)
      reader.onload = function (e) {
        that.uploadsong.url = e.currentTarget.result
        that.$api
          .insertuploadsong({
            songname: that.uploadsong.name,
            songurl: e.currentTarget.result,
            userid: that.userid,
            singername: that.uploadsong.singername,
          })
          .then((res) => {
            console.log(res)
            that.$message({
              message: '添加成功',
              type: 'success',
              offset: '80',
            })
            that.reload()
          })
          .catch((err) => {
            that.$message({
              message: '添加失败',
              type: 'error',
              offset: '80',
            })
          })
      }
    },
  },
}
</script>

<style>
.uploadmusic {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.inputinfo {
  width: 90%;
  height: 100%;
}
.inputinfo .block {
  width: 100%;
  margin: 0;
  margin: 2rem 0;

  text-align: start;
}
.audiouploadbtn .el-button {
  color: white;
  width: 100%;
  line-height: 1.5rem;
  letter-spacing: 2rem;
  font-size: 1.5rem;
  background-color: var(--color-tint);
}
.audiouploadbtn .el-button:hover {
  background-color: var(--color-high-text);
}
.audiouploadbtn > span {
  display: inline-block;
  width: 100%;
  text-align: center;
  letter-spacing: 1.5rem;
  margin: 1rem;
  color: red;
}
.likesong-content {
  width: 100%;
  height: 100%;
  /* display: grid; */
  /* grid-template-rows: 32% 63%; */
  /* background-color: aqua; */
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
.showsong {
  width: 100%;
}
.showsong tr {
  width: 100%;
  height: 4rem;
  /* background-color: #ff0; */
  text-align: center;
  line-height: 4rem;
}
.showsong tr th {
  font-weight: 500;
  font-size: 1.2rem;
  width: 20rem;
}
.showsong tr td:nth-child(1) span {
  display: inline-block;
  margin: 0 2rem;
}
.showsong tr th:nth-child(3) {
  width: 35rem;
}
.showsong tr td {
  height: 3rem;
  text-align: center;
}
.showsong tr:nth-child(2n) {
  background-color: var(--color-hovercolor);
}
.showsong tr:hover {
  background-color: rgb(217, 220, 223);
}
</style>