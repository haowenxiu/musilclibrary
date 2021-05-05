<template>
  <div class="login-item">
    <el-form :model="ruleForm"
             :rules="rules"
             ref="ruleForm"
             label-width="100px"
             class="demo-ruleForm"
             label-position="top">
      <el-form-item prop="user"
                    label="登录方式">
        <el-input type="text"
                  placeholder="请输入手机号或者邮箱号"
                  required="required"
                  v-model="ruleForm.user"
                  prefix-icon="el-icon-user-solid"></el-input>
      </el-form-item>
      <el-form-item prop="pass"
                    label="密码">
        <el-input type="password"
                  placeholder="请输入密码"
                  prefix-icon="el-icon-lock"
                  v-model="ruleForm.pass"
                  @keyup.enter.native="toSubmitForm('ruleForm')"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked"
                     @change="getValue">记住密码</el-checkbox>
        <el-button type="primary"
                   @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script >
export default {
  name: 'Login',
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号或者邮箱不能为空'))
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        // eslint-disable-next-line no-useless-escape
        const reg2 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        if (reg.test(value) || reg2.test(value)) {
          callback()
        } else {
          callback(new Error('请输入正确的手机号或者邮箱'))
        }
      }
    }
    return {
      // 获取url地址后面的参数
      urlQuery: '',
      activeIndex: '1',
      ruleForm: {
        pass: '',
        user: '',
      },
      rules: {
        user: [{ required: true, validator: validateUser, trigger: 'blur' }],
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
      },
      checked: true,
    }
  },
  methods: {
    submitForm(ruleForm) {
      console.log(this.$refs[ruleForm])
    },
    getValue() {
      console.log(this.checked)
    },
  },
}
</script>

<style scoped>
.login-item {
  width: 100%;
  height: 44rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-form-item {
  padding-right: 5rem;
  width: 25rem;
}
.el-checkbox {
  padding-right: 3rem;
}
</style>