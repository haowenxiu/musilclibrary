<template>
  <div class="button-play">
  </div>
</template>

<script>
import { EventBus } from '@/event-bus'
export default {
  props: {
    songinfo: Object,
  },
  data() {
    return {
      songdetailinfo: {},
    }
  },
  created() {},
  mounted() {
    EventBus.$on('songdetailinfo', (info) => {
      console.log(info)
      this.songdetailinfo = info
    })
  },
  computed: {
    getsongdetailinfo() {},
  },
}
</script>

<style>
.button-play {
  width: 100%;
  height: 10rem;
  background-color: #ff0;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* transition: height 1s; */
  cursor: pointer;
}
/* .button-play:hover {
  height: 10rem;
  
} */
</style>