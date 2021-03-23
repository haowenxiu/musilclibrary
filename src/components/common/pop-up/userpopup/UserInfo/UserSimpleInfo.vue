<template>
  <div class="exit">
    <h2>
      {{message}}
    </h2>
  </div>
</template>

<script>
import CenteRrow from 'common/usercenterrow/CenterRow'
import CenterRowItem from 'common/usercenterrow/CenterRowItem'
export default {
  name: 'UserSimpleInfo',
  data() {
    return {
      message: '这里是弹出框的个人简单信息',
    }
  },
}
</script>

<style>
</style>