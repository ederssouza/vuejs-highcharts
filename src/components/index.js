'use strict'

import Vue from 'vue'
import Highcharts from 'highcharts'

// charts
import AreaChart from 'components/charts/AreaChart'
import BarChart from 'components/charts/BarChart'
import ColumnChart from 'components/charts/ColumnChart'
import LineChart from 'components/charts/LineChart'
import PieChart from 'components/charts/PieChart'
import CombinationChart from 'components/charts/CombinationChart'

Vue.$highcharts = Highcharts
Vue.prototype.$highcharts = Highcharts

const Components = {
  AreaChart,
  BarChart,
  ColumnChart,
  LineChart,
  PieChart,
  CombinationChart
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
/* eslint-disable import/prefer-default-export */
export { default as AreaChart } from 'components/charts/AreaChart'
export { default as BarChart } from 'components/charts/BarChart'
export { default as ColumnChart } from 'components/charts/ColumnChart'
export { default as LineChart } from 'components/charts/LineChart'
export { default as PieChart } from 'components/charts/PieChart'
export { default as CombinationChart } from 'components/charts/CombinationChart'
