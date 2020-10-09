<template>
  <Tabs>
    <template v-slot:preview>
      <CombinationChart
        :title="chart.title"
        :subtitle="chart.subtitle"
        :backgroundColor="chart.backgroundColor"
        :gridLineColor="chart.gridLineColor"
        :thousandsSep="chart.thousandsSep"
        :decimalPoint="chart.decimalPoint"
        :height="chart.height"
        :xAxis="chart.xAxis"
        :series="chart.series"
        :crosshair="chart.crosshair"
        :customStyles="chart.customStyles"
      />
    </template>

    <template v-slot:code>
      <h2 class="container__subtitle">Component</h2>
      <Highlight language="html">
      </Highlight>

      <h2 class="container__subtitle">Script</h2>
      <Highlight>
      </Highlight>
    </template>
  </Tabs>
</template>

<script>
import Highlight from 'components/Highlight'
import Tabs from 'components/Tabs'
import CombinationChart from 'components/charts/CombinationChart'

export default {
  name: 'CombinationChartSample',
  components: {
    Highlight,
    Tabs,
    CombinationChart
  },
  data () {
    return {
      chart: {
        title: 'Combination chart title',
        subtitle: 'Combination chart subtitle',
        backgroundColor: '#fff',
        gridLineColor: '#ccd6eb',
        thousandsSep: '.',
        decimalPoint: ',',
        height: 400,
        xAxis: {
          title: {
            text: 'xAxis title'
          },
          categories: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007]
        },
        yAxis: [{
          className: 'highcharts-color-0',
          title: {
            text: 'Primary axis'
          }
        }, {
          className: 'highcharts-color-1',
          opposite: true,
          title: {
            text: 'Secondary axis'
          }
        }, {
          className: 'highcharts-color-2',
          opposite: true,
          title: {
            text: 'Tertiary axis'
          }
        }],
        series: [
          {
            type: 'column',
            name: 'Installation',
            color: '#03bbd4',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          },
          {
            type: 'column',
            name: 'Manufacturing',
            color: '#f7a35c',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
          },
          {
            type: 'line',
            name: 'Services',
            color: '#d26464',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
          }
        ],
        crosshair: true,
        customStyles: {
          color: '#666',
          fontFamily: 'Montserrat'
        }
      }
    }
  }
}
</script>
