<template>
  <tr @dblclick="toplaymusic">
    <td>
      <slot name="Song-Id"></slot>
    </td>
    <td>
      <slot name="Song-Name"></slot>
    </td>
    <td>
      <slot name="Song-SingerName"></slot>
    </td>
    <td>
      <slot name="Song-Collection"></slot>
    </td>
    <td>
      <slot name="Song-Time"></slot>
    </td>
  </tr>
  <!-- v-for="item in thesingersong" :key="item.id" -->
</template>

<script>
import { EventBus } from '@/event-bus'
export default {
  props: {
    path: Object,
    singdetailinfo: {
      type: Object,
    },
  },
  data() {
    return {
      songinfo: [],
    }
  },
  methods: {
    toplaymusic() {
      // console.log('双击了')
      // console.log(this.singdetailinfo)
      this.$store.dispatch('playsonginfo', this.singdetailinfo)
      EventBus.$emit('songdetailinfo', this.singdetailinfo)
    },
  },
}
</script>

<style>
</style>