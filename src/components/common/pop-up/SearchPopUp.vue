/* 点击导航栏用户中心之后出现的模态层 */
<template>
<div>
  {{message}}
</div>
</template>

<script>
export default {
  name: 'SearchPopUp',
  data(){
    return{
      message: '这里是搜索框',
    }
  }
}
</script>

<style>
</style>