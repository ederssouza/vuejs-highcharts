'use strict'

import Vue from 'vue'
import App from './App.vue'
import Highcharts from 'highcharts'
import router from './router'

Vue.config.productionTip = false
Vue.$highcharts = Highcharts
Vue.prototype.$highcharts = Highcharts

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
