'use strict'

import Vue from 'vue'
import App from './App.vue'
import hljs from 'highlight.js'
import router from './router'
import './libs/highcharts'

Vue.use(hljs.vuePlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
