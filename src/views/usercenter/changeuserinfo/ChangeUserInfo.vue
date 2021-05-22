<template>
  <div>

    <div class="changeinfo">
      <div class="changetitle">
        <span>编辑个人信息</span>
        <hr>
      </div>
      <div class="change-content">
        <div class="input-info">
          <div class="info-detail">
            <span>昵称</span>
            <span>
              <el-input v-model="userinfo.name"
                        placeholder=""></el-input>
            </span>
          </div>
          <div class="info-detail">
            <span>地址</span>
            <span>
              <el-input v-model="userinfo.address"
                        placeholder="请输入内容"></el-input>
            </span>
          </div>
          <div class="info-detail checkradio">
            <span>性别</span>
            <span>
              <el-radio-group v-model="userinfo.gender">
                <el-radio :label="1">男</el-radio>
                <el-radio :label="2">女</el-radio>
              </el-radio-group>
            </span>
          </div>
          <div class="info-detail">
            <span class="demonstration span">生日</span>
            <span>
              <el-date-picker v-model="userinfo.birthday"
                              type="date"
                              placeholder="选择日期">
              </el-date-picker>
            </span>
          </div>
          <div class="info-detail">
            <span>电话</span>
            <span>
              <el-input v-model="userinfo.telephone"
                        @blur="blurphono"
                        @focus="focusphono"
                        placeholder="请输入内容"></el-input>
            </span>
          </div>
          <span v-show="showphoto"
                class="hint">电话号码不正确</span>
          <div class="info-detail">
            <span>邮箱</span>
            <span>
              <el-input v-model="userinfo.email"
                        type="email"
                        @blur="bluremail"
                        @focus="focusemail"
                        placeholder="请输入内容"></el-input>
            </span>
          </div>
          <span v-show="showemail"
                class="hint">邮箱不正确</span>
          <div class="info-detail introduce">
            <span class="span">简介</span>
            <span>
              <el-input type="textarea"
                        :rows="4"
                        maxlength="225"
                        resize="none"
                        placeholder="请输入内容"
                        v-model="userinfo.introduce">
              </el-input>
            </span>
          </div>
        </div>
        <div class="input-img">
          <div class="oldimg">
            <img :src="userinfo.headphoto"
                 :alt="userinfo.userid">
          </div>
          <div class="changeimgBtn">
            <el-button class="upload"
                       round
                       @click="uploadimg">
              修改头像
            </el-button>
            <input ref="filElem"
                   type="file"
                   style='display:none'
                   @change="getFile">
          </div>

          <div>
            <el-button class="upload"
                       round
                       @click="changeuserinfo">
              确认修改
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  mounted() {
    this.onload()
  },
  data() {
    return {
      showphoto: false,
      showemail: false,
      userinfo: {},
    }
  },
  methods: {
    changeuserinfo() {
      const state = this.$store.state
      if (!this.showphoto && !this.showemail) {
        const info = this.userinfo
        console.log(info)
        this.$api
          .updateuserinfo({
            name: info.name,
            gender: info.gender,
            introduce: info.introduce,
            telephone: info.telephone,
            email: info.email,
            birthday: info.birthday,
            headphoto: info.headphoto,
            address: info.address,
            userid: info.userid,
          })
          .then((res) => {
            console.log(res)
            this.$api.selectuserinfo({ userid: info.userid }).then((res) => {
              const info = res.data.extend.info
              console.log(info)
              // info.headphoto = state.imghead + info.headphoto
              console.log(info)
              // this.userinfo = info
              this.$store.dispatch('saveUserInfo', info)
              this.reload()
            })
          })
      } else {
        this.$message({
          title: '警告',
          message: '请检查输入信息是否正确！！！',
          type: 'error',
          offset: 80,
        })
      }
    },
    focusphono() {
      this.showphoto = false
    },
    focusemail() {
      this.showemail = false
    },
    blurphono(event) {
      console.log(event.currentTarget.value)
      const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
      if (!regMobile.test(event.currentTarget.value)) {
        this.showphoto = true
      } else {
        this.showphoto = false
      }
    },
    bluremail(event) {
      const regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
      console.log(event.currentTarget.value)
      if (!regEmail.test(event.currentTarget.value)) {
        this.showemail = true
      } else {
        this.showemail = false
      }
    },
    onload() {
      const state = this.$store.state
      this.userinfo = state.userInfo
    },
    uploadimg() {
      this.$refs.filElem.dispatchEvent(new MouseEvent('click'))
    },
    getFile() {
      var that = this
      const inputFile = this.$refs.filElem.files[0]
      // console.log(inputFile)
      if (inputFile) {
        if (inputFile.type !== 'image/jpeg' && inputFile.type !== 'image/png') {
          alert('不是有效的图片文件！')
          return
        }
        const reader = new FileReader()
        reader.readAsDataURL(inputFile)
        reader.onload = function (e) {
          that.show = true
          that.userinfo.headphoto = e.currentTarget.result
        }
      }
    },
  },
}
</script>

<style>
.changeinfo {
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.changetitle {
  width: 90%;
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.change-content {
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: 40rem 30rem;
}
.input-info {
  width: 100%;
  height: 100%;
}
.info-detail {
  background-color: #ff0;
  width: 100%;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1.5rem 0;
}
.info-detail > span:nth-child(1) {
  font-size: 1.1rem;
  text-align: center;
  width: 6rem;
}
.info-detail > span:nth-child(2) {
  width: 100%;
  /* width: 35rem; */
}
.checkradio > span:nth-child(2) {
  margin-left: 1rem;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
.introduce {
  align-items: flex-start;
  height: 8rem;
}
.introduce > span:nth-child(2) {
  height: 100%;
}
.input-img {
  padding-top: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #ff0; */
}
.oldimg {
  width: 18rem;
  height: 18rem;
}
.oldimg img {
  width: 100%;
  height: 100%;
}
.upload {
  margin-top: 3rem;
}
.upload:visited {
  background-color: #ff0;
}
.upload:hover {
  border-color: #d3d3d3;
  background-color: #ececec;
  color: rgb(119, 115, 115);
}
.hint {
  display: inline-block;
  width: 100%;
  font-size: 1.2rem;
  color: red;
  letter-spacing: 1.5rem;
  text-align: center;
}
</style>