<template>
  <div id="app">
    <Header />

    <div class="wrapper">
      <Menu />
      <router-view></router-view>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from 'components/Header'
import Menu from 'components/Menu'
import Footer from 'components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Footer
  },
  mounted () {
    window.hljs.initHighlightingOnLoad()
  }
}
</script>

<style lang="scss">
@import 'assets/scss/app.scss';

#app {
  position: relative;
  top: 80px;
}

.hljs {
  border: 1px solid var(--code-bg-color);
  border-radius: 4px;
  padding: 15px;
}

.vuejs-highcharts {
  border: 1px solid var(--code-bg-color);
  border-radius: 4px;
  padding: 15px;
}
</style>
