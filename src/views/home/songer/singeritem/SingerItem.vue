<template>

  <div class="singeritem">
    <div class="singerimg">
      <slot name="SingerImg"></slot>
    </div>
    <div class="singername">
      <slot name="SingerName"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style>
.singeritem {
  height: 20rem;
  margin: 0.7rem 1.25rem;
  border-radius: 1rem;
  /* border: 0.1rem solid var(--color-bordercolor); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.singerimg {
  width: 100%;
  height: 85%;
  cursor: pointer;
  /* background-color: #f0f; */
}
.singerimg > img {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}
.singername {
  width: 100%;
  height: 2.5rem;
  margin: 0.2rem 0;
  line-height: 2.5rem;
  font-size: 1.25rem;
  text-align: center;
  font-weight: 600;

  /* background-color: #ff0; */
}
.singername > span {
  color: black;
  display: inline-block;
  font-family: 'Times New Roman', Times, serif;
  height: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  cursor: pointer;
}
.singername > span:hover {
  color: rgb(18, 18, 228);
  text-decoration: underline;
}
</style>