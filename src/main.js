'use strict'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './libs/highcharts'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
