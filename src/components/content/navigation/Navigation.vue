/* 导航栏 */
<template>
  <div id="nav">
    <el-row :gutter="20">
      <!-- 标签 -->
      <el-col :span="7">
        <click-router class="grid-content bg-purple Log"
                      path="/homePage">
          <svg class="sign"
               aria-hidden="true">
            <use xlink:href="#icon-music-rf"></use>
          </svg>
          <span>Music·library</span>
        </click-router>
      </el-col>

      <!-- 前进和后退按钮 -->
      <!-- 考虑取消  一个在前，一个在最后-->
      <!-- <el-col :span="2">
        <div class="grid-content bg-purple Go-Back">
          <button class="iconfont icon-arrow-left goback-btn"
                  @click="previous"
                  v-show="activeStyleleft"></button>
          <button class="iconfont icon-arrow-right goback-btn"
                  @click="next"
                  v-show="activeStyleright"></button>
        </div>
      </el-col> -->
      <!-- 搜索框 -->
      <el-col :span="9">
        <div class="grid-content bg-purple find">
          <div class="findmusic">
            <span class="iconfont icon-sousuo"></span>
            <el-popover placement="top"
                        width="400"
                        trigger="click"
                        visible-arrow='false'>
              <div v-show="show">
                <div v-show="show">
                  <search-pop-up :List="list"
                                 :SearchWords="searchWord"></search-pop-up>
                </div>
              </div>
              <input slot="reference"
                     type="text"
                     class="find-input"
                     placeholder="输入歌曲名或者歌手名字进行搜索"
                     @keyup.enter="search">
            </el-popover>
          </div>
        </div>
      </el-col>
      <!-- 用户中心 -->
      <el-col :span="8">
        <div class="grid-content bg-purple login">
          <nav-login></nav-login>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import 'assets/font/icon/iconfont'
import NavLogin from './navlogin/NavLogin'
import ClickRouter from 'comp/common/clickrouter/ClickRouter.vue'
import SearchPopUp from 'comp/common/pop-up/SearchPopUp.vue'
export default {
  name: 'Navigative',
  components: {
    NavLogin,
    ClickRouter,
    SearchPopUp,
  },
  data() {
    return {
      isback: true,
      isnext: true,
      style: {
        disabledbgcolor: 'rgb(220,69,63)',
        bgcolor: '#0ff',
      },
      list: {},
      searchWord: '',
      show: false,
    }
  },
  computed: {
    activeStyleleft() {
      if (window.history.length <= 1) {
        return (this.isback = true)
      } else {
        return (this.isback = false)
      }
    },
    activeStyleright() {
      if (window.history.length <= 1) {
        return (this.isnaxt = true)
      } else {
        return (this.isnaxt = false)
      }
    },
  },
  methods: {
    search(event) {
      console.log(event.currentTarget.value)
      let serch = event.currentTarget.value
      // console.log(serch)
      if (serch !== null) {
        this.searchWord = serch
        this.show = true
      } else {
        this.searchWord = null
        this.show = true
      }
      if (serch !== null && serch !== '') {
        this.$api.dimSerch({ serch }).then((res) => {
          this.list = res.data.extend.info
        })
      }
    },
    previous() {
      console.log('back' + ' ' + this.isback)
      this.$router.go(-1)
    },
    next() {
      console.log('next' + ' ' + this.isnext)
      this.$router.go(+1)
    },
  },
}
</script>

<style>
@import '~assets/font/icon/iconfont.css';
@import '~assets/css/base.css';

#nav {
  width: 100%;
  height: 6rem;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: var(--color-tint);
}
/* .icon {
  width: 3.5rem;
  height: 3.5rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
} */
.sign {
  width: 2.7rem;
  height: 2.7rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.Log {
  cursor: pointer;
}
.bg-purple {
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: rgb(55, 172, 162); */
}
.Log span {
  margin-left: 1rem;
  font-size: 2.5rem;
}

.Go-Back .iconfont {
  color: aliceblue;
}

.goback-btn {
  font-size: 2rem;
  border-radius: 50%;
  border: none;
  background-color: rgb(205, 62, 62);
  /* background-color: aqua; */
  outline: none;
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
}
/* .goback-btn:hover {
  transform: scale(1, 1);
  color: antiquewhite;
  font-size: 2.1rem;
  box-shadow: 0 0 10px rgb(205, 62, 62);
} */
.findmusic {
  height: 2.8rem;
  width: 35rem;
  line-height: 3rem;
  border-radius: 3rem;
  background-color: rgb(205, 62, 62);
}
.findmusic .icon-sousuo {
  font-size: 2.5rem;
  margin-left: 0.7rem;
  position: relative;
}
.findmusic .find-input {
  position: absolute;
  border: none;
  outline: none;
  background-color: rgb(205, 62, 62);
  height: 2.8rem;
  width: 24%;
  border-radius: 3rem;
  line-height: 3rem;
  font-size: 1.3rem;
  padding-left: 1rem;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 0.15rem;
}
.mycenter {
  display: flex;
  flex-direction: row;
  width: 90rem;
}
</style>