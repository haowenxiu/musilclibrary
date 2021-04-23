<template>
  <music-menu-row>
    <el-collapse accordion
                 v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <!-- <template v-slot:music-menu-title> -->
          <pack-up-lay-down>
            <music-menu-title>
              <template v-slot:menu-name>创建的歌单</template>
            </music-menu-title>
          </pack-up-lay-down>

          <!-- </template> -->
        </template>
        <template>
          <music-menu-item>
            <template v-slot:menu-icon>
              <span class="iconfont icon-like-line"></span>
            </template>
            <template v-slot:menu-text>添加新的歌单</template>
            <template v-slot:menu-extra>
              <div class="addmusiclist-icon"
                   @click="addsonglist">
                <span class="iconfont icon-tianjia"></span>
              </div>
            </template>
          </music-menu-item>

        </template>
        <!-- <span class="">+</span> -->

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
      </el-collapse-item>
    </el-collapse>
  </music-menu-row>
</template>

<script>
import MusicMenuRow from 'common/leftmenvrow/MusicMenuRow'
import MusicMenuItem from 'common/leftmenvrow/MusicMenuItem.vue'
import ClickRouter from 'comp/common/clickrouter/ClickRouter.vue'
import MusicMenuTitle from 'common/leftmenvrow/MusicMenuTitle.vue'
import PackUpLayDown from '../../../common/clickrouter/PackUpLayDown.vue'
export default {
  components: {
    MusicMenuRow,
    MusicMenuItem,
    ClickRouter,
    MusicMenuTitle,
    PackUpLayDown,
  },
  name: 'UserCreatedMenu',
  data() {
    return {
      activeNames: ['1'],
    }
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
.musicmenu-menu > button {
  height: 100%;
  padding: 0;
}
.addsonglist > span {
  display: inline;
  color: black;
  font-size: 1.7rem;
  font-weight: 100;
  padding: 0;
  padding: 0 2rem 0 0;
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
.el-collapse-item__content {
  padding-bottom: 0;
}
.addmusiclist-icon {
  margin: 0.45rem 0;
  display: flex;
  /* background-color: red; */
  width: 3.5rem;
  height: 2.1rem;
  line-height: 2.1rem;
  justify-content: center;
  border: 0.1rem solid #b6b1b1;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.5s;
  margin-right: 1rem;
}
.addmusiclist-icon > span {
  font-size: 1.5rem;
}
.addmusiclist-icon:hover {
  /* background-color: red; */
  transform: scale(1.1);
}
</style>