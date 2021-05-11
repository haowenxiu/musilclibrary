<template>
  <div class="songer">
    <div class="songer-header"></div>
    <div class="songer-content">
      <singer-item v-for="(item,index) in singer"
                   :key="index">
        <template #SingerImg>
          <img v-lazy="item.pic"
               :alt="item.singername"
               :data-id="item.id "
               @click="singerDetail(item.id)">
        </template>
        <template #SingerName>
          <span @click="singerDetail(item.id)">{{item.singername}}</span>
        </template>
      </singer-item>
    </div>

  </div>
</template>

<script>
import SingerItem from './singeritem/SingerItem.vue'

export default {
  components: { SingerItem },
  created() {
    this.onload()
  },
  data() {
    return {
      singer: [],
      paramssinger: {},
    }
  },
  methods: {
    onload() {
      this.$api
        .singerList()
        .then((res) => {
          const singerList = res.data.extend.info
          this.singer = singerList
          this.singer.forEach((item, index) => {
            // console.log(this.singer[index])
            this.singer[index].pic = this.$store.state.imghead + item.pic
          })
          // console.log(this.singer)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    singerDetail(singerid) {
      this.singer.forEach((item, index) => {
        if (singerid === item.id) {
          this.paramssinger = item
          this.$router.push({
            path: '/singerdetail/' + encodeURIComponent(JSON.stringify(item)),
          })
        }
      })
      console.log('歌手细节1111 : ' + singerid)
    },
  },
}
</script>

<style scoped>
.songer {
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
}
.songer-header {
  width: 100%;
  height: 6rem;
  padding: 0 1.5rem;
}
.songer-content {
  width: 100%;
  height: 100%;
  padding: 0.5rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  /* grid-template-rows: 1fr 1fr ; */
}
.singerspan {
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>
