<template>
  <div id="login">
    <div class="login-content">
      <el-tabs type="border-card"
               class="conent-card">
        <el-tab-pane label="登录"
                     class="content-login">
          <login></login>
        </el-tab-pane>
        <el-tab-pane label="注册">
          <register></register>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import login from './login/login'
import Register from './rigister/Register.vue'
export default {
  components: { login, Register },
  name: 'LoginRegister',
  data() {
    return {}
  },
}
</script>

<style scoped>
#login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-content {
  width: 45rem;
  height: 50rem;
  border: 0.1rem;
  border-style: solid;
  border-right: 0.1rem solid var(--color-bordercolor);
  transform: translateZ();
  box-shadow: darkgrey 10px 10px 30px 5px;
  /* background-color: #f0f; */
}
.conent-card {
  height: 50rem;
  display: flex;
  flex-direction: column;
}
.el-tabs--border-card {
  height: 100%;
}

.el-tabs__nav {
  width: 100%;

  text-align: center;
}

.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: #909399;
}

.content-login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>