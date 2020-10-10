<template>
  <div id="app">
    <Header />

    <div class="wrapper">
      <Menu />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from 'components/Header'
import Menu from 'components/Menu'

export default {
  name: 'App',
  components: {
    Header,
    Menu
  }
}
</script>

<style lang="scss">
@import 'assets/scss/app.scss';
</style>
