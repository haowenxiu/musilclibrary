<template>
  <music-menu-row>
    <template v-slot:menu-name>创建歌单</template>
    <!-- <span class="">+</span> -->
    <el-button type="text"
               @click="addsonglist"
               class="addsonglist">+</el-button>
    <click-router path="/Musicnetworklocation">
      <music-menu-item>
        <template v-slot:menu-icon>
          <span class="iconfont icon-icon--"></span>
        </template>
        <template v-slot:menu-text>旅行</template>
      </music-menu-item>
    </click-router>
    <click-router path="/Mycollect">
      <music-menu-item>
        <template v-slot:menu-icon>
          <span class="iconfont icon-icon--"></span>
        </template>
        <template v-slot:menu-text>薛之谦</template>
      </music-menu-item>
    </click-router>
    <click-router path="/Mycollect">
      <music-menu-item>
        <template v-slot:menu-icon>
          <span class="iconfont icon-icon--"></span>
        </template>
        <template v-slot:menu-text>你好，生活</template>
      </music-menu-item>
    </click-router>
    <click-router path="/Mycollect">
      <music-menu-item>
        <template v-slot:menu-icon>
          <span class="iconfont icon-icon--"></span>
        </template>
        <template v-slot:menu-text>海底</template>
      </music-menu-item>
    </click-router>
  </music-menu-row>
</template>

<script>
import MusicMenuRow from 'common/leftmenvrow/MusicMenuRow'
import MusicMenuItem from 'common/leftmenvrow/MusicMenuItem.vue'
import ClickRouter from 'comp/common/clickrouter/ClickRouter.vue'
export default {
  components: { MusicMenuRow, MusicMenuItem, ClickRouter },
  name: 'UserCreatedMenu',
  data() {
    return {}
  },
  methods: {
    addsonglist() {
      this.$prompt('请输入新歌单标题', '新建歌单', {
        confirmButtonText: '创建',
        center: true,
        roundButton: true,
        showCancelButton: false,
        inputPattern: /\S/,
        distinguishCancelAndClose: true,
        inputErrorMessage: '歌单名称格式不正确',
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的新建歌单是: ' + value,
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消创建',
          })
        })
    },
  },
}
</script>

<style>
.addsonglist > span {
  display: inline;
  color: black;
  font-size: 1.7rem;
  font-weight: 100;
}
.el-message-box__btns > button {
  background-color: red;
  border-color: white;
}
.el-message-box__btns > button:focus {
  background-color: red;
  border-color: white;
}
.el-message-box__btns > button:hover {
  background-color: var(--color-high-text);
  border-color: white;
}
/*.el-input > input {
   border-style: none;
  border: 0.1rem solid rgb(201, 195, 195);
  outline: none;
  outline-style: none;
  outline-color: rgb(201, 195, 195);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  -webkit-user-modify: read-write-plaintext-only; 
}*/
</style>