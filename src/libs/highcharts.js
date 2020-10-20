'use strict'

import Vue from 'vue'
import Highcharts from 'highcharts'
import highcharts3D from 'highcharts/highcharts-3d.src'
highcharts3D(Highcharts)

Vue.$highcharts = Highcharts
Vue.prototype.$highcharts = Highcharts
