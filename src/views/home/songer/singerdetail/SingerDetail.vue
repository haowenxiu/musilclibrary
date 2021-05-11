<template>
  <h2>{{this.$route.params.singerid}}</h2>
</template>

<script>
export default {
  created() {
    this.onload()
  },
  data() {
    return {}
  },
  methods: {
    onload() {
      this.$api
        .singerdetail({ singerid: this.$route.params.singerid })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style>
</style>