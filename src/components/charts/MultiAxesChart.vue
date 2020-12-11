<template>
  <div class="vuejs-highcharts" ref="MultiAxesChart" />
</template>

<script>
import Highcharts from 'highcharts'

export default {
  name: 'MultiAxesChart',
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    height: {
      type: [Number, String],
      default: 400
    },
    backgroundColor: {
      type: String,
      default: '#ffffff'
    },
    gridLineColor: {
      type: String,
      default: '#e6e6e6'
    },
    customStyles: {
      type: Object,
      default: () => {}
    },
    thousandsSep: {
      type: String,
      default: '.'
    },
    decimalPoint: {
      type: String,
      default: ','
    },
    legend: {
      type: Object,
      default: () => {}
    },
    xAxis: {
      type: Array,
      default: () => []
    },
    yAxis: {
      type: Array,
      default: () => []
    },
    series: {
      type: Array,
      default: () => []
    },
    tooltip: {
      type: Object,
      default: () => {}
    },
    crosshair: {
      type: Boolean,
      default: false
    },
    plotOptions: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    allProps () {
      return {
        date: new Date(),
        ...this.$props
      }
    }
  },
  data () {
    return {
      chart: null
    }
  },
  methods: {
    renderChart () {
      const {
        title,
        backgroundColor,
        customStyles,
        gridLineColor,
        thousandsSep,
        decimalPoint,
        height,
        xAxis,
        yAxis,
        series,
        legend,
        tooltip,
        crosshair,
        plotOptions
      } = this

      Highcharts.setOptions({
        lang: {
          thousandsSep,
          decimalPoint
        }
      })

      this.chart = Highcharts.chart(this.$refs.MultiAxesChart, {
        chart: {
          backgroundColor,
          height,
          style: {
            ...customStyles
          }
        },
        title: {
          text: title,
          style: {
            ...customStyles
          }
        },
        xAxis: xAxis.map(item => ({
          ...item,
          lineColor: gridLineColor,
          crosshair
        })),
        yAxis: yAxis.map(item => ({
          ...item,
          lineColor: gridLineColor
        })),
        series,
        tooltip: {
          shared: true,
          style: {
            ...customStyles
          },
          ...tooltip
        },
        legend: {
          itemStyle: {
            ...customStyles
          },
          ...legend
        },
        plotOptions: {
          ...plotOptions
        },
        credits: {
          enabled: false
        },
        ...this.config
      })
    }
  },
  watch: {
    allProps: {
      handler () {
        this.renderChart()
      },
      deep: true
    }
  },
  mounted () {
    this.renderChart()
  }
}
</script>
