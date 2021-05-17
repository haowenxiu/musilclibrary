<template>
  <div class="">
    <table class="song-table">
      <tr>
        <th></th>
        <th>标题</th>
        <th>歌手</th>
        <th>专辑</th>
        <th>时长</th>
      </tr>
      <slot></slot>
    </table>
  </div>
</template>

<script>
export default {}
</script>

<style>
.song-table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
}
.song-table tr:nth-child(2n) {
  background-color: var(--color-hovercolor);
}
.song-table tr th,
td {
  height: 2.5rem;
  text-align: start;
  padding-left: 1rem;
  cursor: pointer;
  color: rgb(87, 88, 90);
  /* background-color: blueviolet; */
}
.song-table tr th {
  font-size: 1.2rem;
  font-weight: 500;
  color: rgb(132, 134, 136);
}
.song-table tr th:nth-child(1) {
  width: 6%;
}
.song-table tr:hover {
  background-color: rgb(217, 220, 223);
}
.song-table tr td {
  height: 3rem;
  line-height: 3rem;
  font-size: 1.22rem;
}
</style>