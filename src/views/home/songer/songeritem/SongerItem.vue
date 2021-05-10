<template>

  <div class="songeritem">
    <div class="songerimg">
      <slot name="SongerImg"> </slot>
    </div>
    <div class="songername">
      <slot name="SongerName"> </slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.songeritem {
  height: 19rem;
  margin: 0.7rem 1.25rem;
  border-radius: 1rem;
  border: 0.1rem solid var(--color-bordercolor);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.songerimg {
  width: 100%;
  height: 85%;

  /* background-color: #f0f; */
}
.songerimg > img {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}
.songername {
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 1.25rem;
  text-align: center;
  /* background-color: #ff0; */
}
.songername > span {
  color: black;
  font-family: 'Times New Roman', Times, serif;
}
</style>