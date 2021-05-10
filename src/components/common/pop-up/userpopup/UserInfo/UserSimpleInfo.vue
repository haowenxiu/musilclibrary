<template>
  <div class="usersimpleinfo">
    <social-data>

      <template>
        <social-data-item path='/dynamicState'>
          <template v-slot:Social-Data-Item-num>
            <span>8</span>
          </template>
          <template v-slot:Social-Data-Item-text>
            <span>动态</span>
          </template>
        </social-data-item>
      </template>

      <template>
        <social-data-item path='/follow'>
          <template v-slot:Social-Data-Item-num>
            <span>8</span>
          </template>
          <template v-slot:Social-Data-Item-text>
            <span>关注</span>
          </template>
        </social-data-item>
      </template>
      <template>
        <social-data-item path='/fans'>
          <template v-slot:Social-Data-Item-num>
            <span>8</span>
          </template>
          <template v-slot:Social-Data-Item-text>
            <span>粉丝</span>
          </template>
        </social-data-item>
      </template>
    </social-data>
    <div class="basicinfo-btn">
      <click-router path='/UserCenter'>
        <button><span>个人中心</span></button>
      </click-router>
    </div>
  </div>
</template>

<script>
import ClickRouter from 'comp/common/clickrouter/ClickRouter'
import SocialData from '../../socialdata/SocialData'
import SocialDataItem from '../../socialdata/SocialDataItem.vue'
export default {
  components: { ClickRouter, SocialData, SocialDataItem },
  name: 'UserSimpleInfo',
  data() {
    return {
      message: '个人简单信息',
    }
  },
}
</script>

<style>
.usersimpleinfo {
  width: 100%;
  height: 15rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.basicinfo-btn {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.basicinfo-btn button {
  background-color: #fff;
  border-radius: 1rem;
  border: 0.1rem solid var(--color-bordercolor);
  cursor: pointer;
}
.basicinfo-btn button:hover {
  background-color: var(--color-hovercolor);
}
.basicinfo-btn button > span {
  display: inline-block;
  padding: 0.5rem 1rem;
}
</style>