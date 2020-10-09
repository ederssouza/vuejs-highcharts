'use strict'

import Vue from 'vue'

// charts
import AreaChart from 'components/charts/AreaChart'
import BarChart from 'components/charts/BarChart'
import ColumnChart from 'components/charts/ColumnChart'
import LineChart from 'components/charts/LineChart'
import PieChart from 'components/charts/PieChart'
import CombinationChart from 'components/charts/CombinationChart'

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
