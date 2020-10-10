<template>
  <nav class="header">
    <h1 class="logo">
      <span class="logo__thin">Vue.js</span> Highcharts
    </h1>

    <ul class="menu">
      <div class="menu__item toggle"><span></span></div>
      <li class="menu__item">
        <a href="https://github.com/ederssouza/vuejs-highcharts" class="link link--dark" target="_blank">
          <i class="fa fa-github"></i> Github
        </a>
      </li>
      <li class="menu__item">
        <router-link :to="{ name: 'Home' }" class="link link--dark">
          <i class="fa fa-home"></i> Home
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>
