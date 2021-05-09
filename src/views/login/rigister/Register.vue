<template>
  <div class="register">
    <el-form :model="ruleForm"
             :rules="rules"
             ref="ruleForm"
             class="demo-ruleForm elform"
             label-position="right">
      <el-form-item prop="userName">
        <el-input type="text"
                  placeholder="用户名"
                  required="required"
                  v-model="ruleForm.userName"
                  prefix-icon="el-icon-user-solid"></el-input>
      </el-form-item>
      <el-form-item prop="tel_email">
        <el-input class="phone-input"
                  placeholder="手机号/邮箱"
                  v-model="ruleForm.tel_email"
                  prefix-icon="el-icon-mobile-phone"></el-input>
      </el-form-item>
      <el-form-item prop="code"
                    class="phone"
                    v-show="yzmshow">
        <el-input v-model="ruleForm.code"
                  placeholder="验证码"
                  :minlength="6"
                  :maxlength="6"></el-input>
        <el-button type="primary"
                   @click="getCode()"
                   class="code-btn"
                   :disabled="!show">
          <span v-show="show">发送验证码</span>
          <span v-show="!show"
                class="count">{{ count }} s</span>
        </el-button>
      </el-form-item>
      <el-form-item prop="userPassword">
        <el-input type="password"
                  placeholder="请输入密码"
                  v-model="ruleForm.userPassword"
                  prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password"
                  placeholder="请再次输入密码"
                  v-model="ruleForm.checkPass"
                  prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-form-item class="btn-form">
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button type="primary"
                   @click="submitForm('ruleForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    var validateUser1 = async (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        if (value) {
          const res = await request.post('/api/user/checkUsernameExist', {
            username: this.ruleForm.user1,
          })
          console.log(res)
          if (res.data.code === 20000) {
            callback()
          } else {
            return callback(new Error('该用户名已经被注册'))
          }
        }
      }
    }
    var validatePass1 = async (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号或者邮箱不能为空'))
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        // eslint-disable-next-line no-useless-escape
        const reg2 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        if (reg.test(value) || reg2.test(value)) {
          this.yzmshow = true
          callback()
        } else {
          callback(new Error('请输入正确的手机号或者邮箱'))
        }
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else {
        if (this.ruleForm.code.length === 6) {
          callback()
        } else {
          callback(new Error('验证码不正确'))
        }
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.userPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      activeIndex: '2',
      loginForm: {
        mobile: '',
        code: '',
        zheCode: '',
      },
      show: true,
      count: '',
      timer: null,
      yzmshow: false,
      ruleForm: {
        userName: '',
        tel_email: '',
        userPassword: '',
        checkPass: '',
        zhecode: '',
        mobile: '',
        phoneCode: '',
        emailCode: '',
        code: '',
      },
      rules: {
        code: [
          {
            required: true,
            validator: validateCode,
            trigger: 'blur',
          },
          {
            min: 6,
            max: 6,
            message: '长度为6',
            trigger: 'blur',
          },
        ],
        user1: [
          {
            required: true,
            validator: validateUser1,
            trigger: 'blur',
          },
        ],
        pass1: [
          {
            required: true,
            validator: validatePass1,
            trigger: 'blur',
          },
        ],
        // 密码
        pass: [
          {
            required: true,
            validator: validatePass,
            trigger: 'blur',
          },
          {
            min: 6,
            message: '长度在不少于6个字符',
            trigger: 'blur',
          },
        ],
        // 校验密码
        checkPass: [
          {
            required: true,
            validator: validatePass2,
            trigger: 'blur',
          },
          {
            min: 6,
            message: '长度在不少于6个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    /*     submitForm(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
      if (valid) {
        const that = this.ruleForm
        console.log(
          that.userName +
            ' ' +
            that.tel_email +
            ' ' +
            that.userPassword +
            ' ' +
            that.checkPass +
            ' ' +
            that.mobile +
            ' '
        )
        // console.log('username : ' + that.user)
      } else {
        console.log('error submit!!')
        return false
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    } */
    submitForm(ruleForm) {
      console.log(this.$refs[ruleForm].validate())
      // this.$refs[ruleForm].validate((valid) => {
      //   if (valid) {
      const that = this.ruleForm
      console.log(
        that.userName +
          ' ' +
          that.tel_email +
          ' ' +
          that.userPassword +
          ' ' +
          that.checkPass +
          ' ' +
          that.mobile +
          ' '
      )
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style scoped>
.register {
  height: 44rem;
  /* background-color: #f0f; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-tabs__content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-tabs__content {
  width: 100%;
}

.el-form-item {
  width: 25rem;
}

.btn-form {
  display: flex;

  flex-direction: column;

  align-items: center;
}

.el-button {
  margin: 0 2.5rem;
}

.el-button--primary {
  margin-right: 2rem;
}
</style>