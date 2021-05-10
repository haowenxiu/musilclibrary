<template>
  <div class="songer">
    <div class="songer-header"></div>
    <div class="songer-content">
      <songer-item v-for="(item,index) in songer"
                   :key="index">
        <template #SongerImg>
          <img :src="item.songerimg"
               :alt="item.title"
               :data-id="item.songernum">
        </template>
        <template #SongerName>
          <span>{{item.songername}}</span>
        </template>
      </songer-item>
    </div>

  </div>
</template>

<script>
import SongerItem from './songeritem/SongerItem.vue'

export default {
  components: { SongerItem },
  data() {
    return {
      songer: [
        {
          songerimg: require('../../../assets/img/songerimg/yuner.jpg'),
          songername: '林允儿1',
          songernum: 100,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/lironghao.jpg'),
          songername: '林允儿2',
          songernum: 102,
          title: '12313213',
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/yuner02.jpg'),
          songername: '林允儿3',
          songernum: 103,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/yuner.jpg'),
          songername: '林允儿1',
          songernum: 104,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/lironghao.jpg'),
          songername: '林允儿2',
          songernum: 105,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/yuner02.jpg'),
          songername: '林允儿3',
          songernum: 106,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/yuner.jpg'),
          songername: '林允儿1',
          songernum: 107,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/lironghao.jpg'),
          songername: '林允儿2',
          songernum: 108,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/yuner02.jpg'),
          songername: '林允儿3',
          songernum: 109,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/yuner.jpg'),
          songername: '林允儿1',
          songernum: 100,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/lironghao.jpg'),
          songername: '林允儿2',
          songernum: 102,
          title: '12313213',
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/yuner02.jpg'),
          songername: '林允儿3',
          songernum: 103,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/yuner.jpg'),
          songername: '林允儿1',
          songernum: 104,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/lironghao.jpg'),
          songername: '林允儿2',
          songernum: 105,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/yuner02.jpg'),
          songername: '林允儿3',
          songernum: 106,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/yuner.jpg'),
          songername: '林允儿1',
          songernum: 107,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/lironghao.jpg'),
          songername: '林允儿2',
          songernum: 108,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/yuner02.jpg'),
          songername: '林允儿3',
          songernum: 109,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/yuner.jpg'),
          songername: '林允儿1',
          songernum: 100,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/lironghao.jpg'),
          songername: '林允儿2',
          songernum: 102,
          title: '12313213',
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/yuner02.jpg'),
          songername: '林允儿3',
          songernum: 103,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/yuner.jpg'),
          songername: '林允儿1',
          songernum: 104,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/lironghao.jpg'),
          songername: '林允儿2',
          songernum: 105,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/yuner02.jpg'),
          songername: '林允儿3',
          songernum: 106,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/yuner.jpg'),
          songername: '林允儿1',
          songernum: 107,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/lironghao.jpg'),
          songername: '林允儿2',
          songernum: 108,
          title: '12313213',
        },
        {
          songerimg: require('../../../assets/img/songerimg/yuner02.jpg'),
          songername: '林允儿3',
          songernum: 109,
          title: '12313213',
        },
      ],
    }
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
  height: 5rem;
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
</style>
