<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  background-color: #eef3f5;
  color: #636a6d;
  font-family: 'Montserrat', sans-serif;
  padding: 40px 0;
}

.container {
  margin: 0 auto;
  max-width: 960px;
}

.select__container {}

.select__container:before,
.select__container:after {
  clear: both;
  content: '';
  display: block;
  width: 100%;
}

.select {
  float: right;
  padding: 8px;
}

.container__wrapper {
  margin-top: 30px;
  max-width: 100%;
}
  /* background-color: #eef3f5;
  color: #636a6d; */
.container__wrapper__header {
  font-weight: 600;
  padding: 0 0 10px;
}
</style>
