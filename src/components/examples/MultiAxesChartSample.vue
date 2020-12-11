<template>
  <div class="container">
    <select v-model="option">
      <option
        v-for="item in [
          { value: 'oneDay', text: 'Um dia (segunda)' },
          { value: 'oneDaySunday', text: 'Um dia (domingo)' },
          { value: 'oneWeek', text: 'Uma semana' },
          { value: 'biweekly', text: '15 dias' },
          { value: 'mondayIsFirstDay', text: '1 mês (1º dia segunda)' },
          { value: 'sundayIsFirstDay', text: '1 mês (1º dia domingo)' },
          { value: 'twoMonths', text: '2 meses' },
          { value: 'threeMonths', text: '3 meses' }
        ]"
        :value="item.value"
        :key="item.value"
      >
        {{ item.text }}
      </option>
    </select>

    <!-- <v-select
      v-model="option"
      item-text="text"
      :items="[
        { value: 'oneDay', text: 'Um dia (segunda)' },
        { value: 'oneDaySunday', text: 'Um dia (domingo)' },
        { value: 'oneWeek', text: 'Uma semana' },
        { value: 'biweekly', text: '15 dias' },
        { value: 'mondayIsFirstDay', text: '1 mês (1º dia segunda)' },
        { value: 'sundayIsFirstDay', text: '1 mês (1º dia domingo)' },
        { value: 'twoMonths', text: '2 meses' },
        { value: 'threeMonths', text: '3 meses' }
      ]"
      noDataText=""
      required
      flat
      outline
      solo
      color="accent"
    /> -->

    <MultiAxesChart
      :gridLineColor="chart.gridLineColor"
      :thousandsSep="chart.thousandsSep"
      :decimalPoint="chart.decimalPoint"
      :height="chart.height"
      :xAxis="chart.xAxis"
      :yAxis="chart.yAxis"
      :series="chart.series"
      :legend="chart.legend"
      :crosshair="chart.crosshair"
      :tooltip="chart.tooltip"
      :plotOptions="chart.plotOptions"
    />
  </div>
</template>

<script>
import MultiAxesChart from 'components/charts/MultiAxesChart'
// this.mock = {
//   date: ['2020-09-07', '2020-09-08', '2020-09-09', '2020-09-10', '2020-09-11', '2020-09-12', '2020-09-13', '2020-09-14', '2020-09-15', '2020-09-16', '2020-09-17', '2020-09-18', '2020-09-19', '2020-09-20', '2020-09-21'],
//   amount: [27, 12, 22, 19, 6, 0, 5, 17, 19, 22, 20, 0, 0, 20, 33],
//   averageFare: [20.97, 20.31, 31.12, 40.55, 17.87, 0, 6.22, 38.63, 42.44, 23.73, 40.49, 0, 0, 26.96, 28.36],
//   totalFare: [566.21, 243.67, 684.71, 770.41, 107.2, 0, 31.1, 656.67, 806.4, 522.05, 809.86, 0, 0, 539.24, 935.95]
// }
import moment from 'moment'
moment.locale('pt-br')

function convertToCurrencyBRL (value) {
  const val = !value ? 0 : value
  return `${val.toLocaleString(
    'pt-br', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL'
    }
  )}`
}

function formatNumber (
  value,
  placeholder = null,
  lang = 'pt-br',
  currency = 'BRL'
) {
  // coin table: https://goo.gl/uFmJj7
  const defaultConfig = {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
    currency
  }

  if (!value && placeholder) return placeholder
  if (!value) return `${Number(0).toLocaleString(lang, { ...defaultConfig })}`
  return `${value.toLocaleString(lang, { ...defaultConfig })}`
}

export default {
  name: 'MultiAxesChartSample',
  components: {
    MultiAxesChart
  },
  data () {
    return {
      option: 'mondayIsFirstDay',
      chart: {}
    }
  },
  methods: {
    renderMock () {
      const val = this.option

      if (!val || val === 'default') {
        this.mock = {
          date: ['2020-09-01', '2020-09-02', '2020-09-03', '2020-09-04', '2020-09-05', '2020-09-06', '2020-09-07', '2020-09-08', '2020-09-09', '2020-09-10', '2020-09-11', '2020-09-12', '2020-09-13', '2020-09-14', '2020-09-15', '2020-09-16', '2020-09-17', '2020-09-18', '2020-09-19', '2020-09-20', '2020-09-21', '2020-09-22', '2020-09-23', '2020-09-24', '2020-09-25', '2020-09-26', '2020-09-27', '2020-09-28', '2020-09-29', '2020-09-30'],
          amount: [27, 12, 22, 19, 6, 0, 5, 17, 19, 22, 20, 0, 0, 20, 33, 20, 24, 23, 0, 0, 18, 17, 22, 10, 27, 0, 0, 13, 25, 18],
          averageFare: [20.97, 20.31, 31.12, 40.55, 17.87, 0, 6.22, 38.63, 42.44, 23.73, 40.49, 0, 0, 26.96, 28.36, 31.12, 24.7, 33.62, 0, 0, 33.64, 29.89, 33.36, 28.99, 29.69, 0, 0, 33.72, 37.67, 30.11],
          totalFare: [566.21, 243.67, 684.71, 770.41, 107.2, 0, 31.1, 656.67, 806.4, 522.05, 809.86, 0, 0, 539.24, 935.95, 622.33, 592.82, 773.19, 0, 0, 605.44, 508.06, 733.98, 289.93, 801.61, 0, 0, 438.37, 941.66, 541.94]
        }
      }

      if (val === 'mondayIsFirstDay') {
        this.mock = {
          date: ['2020-09-07', '2020-09-08', '2020-09-09', '2020-09-10', '2020-09-11', '2020-09-12', '2020-09-13', '2020-09-14', '2020-09-15', '2020-09-16', '2020-09-17', '2020-09-18', '2020-09-19', '2020-09-20', '2020-09-21', '2020-09-22', '2020-09-23', '2020-09-24', '2020-09-25', '2020-09-26', '2020-09-27', '2020-09-28', '2020-09-29', '2020-09-30', '2020-10-01', '2020-10-02', '2020-10-03', '2020-10-04', '2020-10-05', '2020-10-06'],
          amount: [27, 12, 22, 19, 6, 0, 5, 17, 19, 22, 20, 0, 0, 20, 33, 20, 24, 23, 0, 0, 18, 17, 22, 10, 27, 0, 0, 13, 25, 18],
          averageFare: [20.97, 20.31, 31.12, 40.55, 17.87, 0, 6.22, 38.63, 42.44, 23.73, 40.49, 0, 0, 26.96, 28.36, 31.12, 24.7, 33.62, 0, 0, 33.64, 29.89, 33.36, 28.99, 29.69, 0, 0, 33.72, 37.67, 30.11],
          totalFare: [566.21, 243.67, 684.71, 770.41, 107.2, 0, 31.1, 656.67, 806.4, 522.05, 809.86, 0, 0, 539.24, 935.95, 622.33, 592.82, 773.19, 0, 0, 605.44, 508.06, 733.98, 289.93, 801.61, 0, 0, 438.37, 941.66, 541.94]
        }
      }

      if (val === 'sundayIsFirstDay') {
        this.mock = {
          date: ['2020-09-06', '2020-09-07', '2020-09-08', '2020-09-09', '2020-09-10', '2020-09-11', '2020-09-12', '2020-09-13', '2020-09-14', '2020-09-15', '2020-09-16', '2020-09-17', '2020-09-18', '2020-09-19', '2020-09-20', '2020-09-21', '2020-09-22', '2020-09-23', '2020-09-24', '2020-09-25', '2020-09-26', '2020-09-27', '2020-09-28', '2020-09-29', '2020-09-30', '2020-10-01', '2020-10-02', '2020-10-03', '2020-10-04', '2020-10-05', '2020-10-06'],
          amount: [27, 12, 22, 19, 6, 0, 5, 17, 19, 22, 20, 0, 0, 20, 33, 20, 24, 23, 0, 0, 18, 17, 22, 10, 27, 0, 0, 13, 25, 18],
          averageFare: [20.97, 20.31, 31.12, 40.55, 17.87, 0, 6.22, 38.63, 42.44, 23.73, 40.49, 0, 0, 26.96, 28.36, 31.12, 24.7, 33.62, 0, 0, 33.64, 29.89, 33.36, 28.99, 29.69, 0, 0, 33.72, 37.67, 30.11],
          totalFare: [566.21, 243.67, 684.71, 770.41, 107.2, 0, 31.1, 656.67, 806.4, 522.05, 809.86, 0, 0, 539.24, 935.95, 622.33, 592.82, 773.19, 0, 0, 605.44, 508.06, 733.98, 289.93, 801.61, 0, 0, 438.37, 941.66, 541.94]
        }
      }

      if (val === 'oneDaySunday') {
        this.mock = {
          date: ['2020-09-06'],
          amount: [27],
          averageFare: [20.97],
          totalFare: [566.21]
        }
      }

      if (val === 'oneDay') {
        this.mock = {
          date: ['2020-09-07'],
          amount: [27],
          averageFare: [20.97],
          totalFare: [566.21]
        }
      }

      if (val === 'oneWeek') {
        this.mock = {
          date: ['2020-09-07', '2020-09-08', '2020-09-09', '2020-09-10', '2020-09-11', '2020-09-12', '2020-09-13'],
          amount: [27, 12, 22, 19, 6, 0, 5],
          averageFare: [20.97, 20.31, 31.12, 40.55, 17.87, 0, 6.22],
          totalFare: [566.21, 243.67, 684.71, 770.41, 107.2, 0, 31.1]
        }
      }

      if (val === 'biweekly') {
        this.mock = {
          date: ['2020-09-07', '2020-09-08', '2020-09-09', '2020-09-10', '2020-09-11', '2020-09-12', '2020-09-13', '2020-09-14', '2020-09-15', '2020-09-16', '2020-09-17', '2020-09-18', '2020-09-19', '2020-09-20', '2020-09-21'],
          amount: [27, 12, 22, 19, 6, 0, 5, 17, 19, 22, 20, 0, 0, 20, 33],
          averageFare: [20.97, 20.31, 31.12, 40.55, 17.87, 0, 6.22, 38.63, 42.44, 23.73, 40.49, 0, 0, 26.96, 28.36],
          totalFare: [566.21, 243.67, 684.71, 770.41, 107.2, 0, 31.1, 656.67, 806.4, 522.05, 809.86, 0, 0, 539.24, 935.95]
        }
      }

      if (val === 'biweekly') {
        this.mock = {
          date: ['2020-09-07', '2020-09-08', '2020-09-09', '2020-09-10', '2020-09-11', '2020-09-12', '2020-09-13', '2020-09-14', '2020-09-15', '2020-09-16', '2020-09-17', '2020-09-18', '2020-09-19', '2020-09-20', '2020-09-21'],
          amount: [27, 12, 22, 19, 6, 0, 5, 17, 19, 22, 20, 0, 0, 20, 33],
          averageFare: [20.97, 20.31, 31.12, 40.55, 17.87, 0, 6.22, 38.63, 42.44, 23.73, 40.49, 0, 0, 26.96, 28.36],
          totalFare: [566.21, 243.67, 684.71, 770.41, 107.2, 0, 31.1, 656.67, 806.4, 522.05, 809.86, 0, 0, 539.24, 935.95]
        }
      }

      if (val === 'twoMonths') {
        this.mock = {
          date: ['2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19', '2020-07-20', '2020-07-21', '2020-07-22', '2020-07-23', '2020-07-24', '2020-07-25', '2020-07-26', '2020-07-27', '2020-07-28', '2020-07-29', '2020-07-30', '2020-07-31', '2020-08-01', '2020-08-02', '2020-08-03', '2020-08-04', '2020-08-05', '2020-08-06', '2020-08-07', '2020-08-08', '2020-08-09', '2020-08-10', '2020-08-11', '2020-08-12', '2020-08-13', '2020-08-14', '2020-08-15', '2020-08-16', '2020-08-17', '2020-08-18', '2020-08-19', '2020-08-20', '2020-08-21', '2020-08-22', '2020-08-23', '2020-08-24', '2020-08-25', '2020-08-26', '2020-08-27', '2020-08-28', '2020-08-29'],
          amount: [16, 13, 10, 0, 0, 80, 8, 10, 10, 10, 0, 0, 14, 24, 28, 18, 18, 0, 0, 31, 30, 36, 30, 37, 0, 0, 28, 24, 28, 23, 27, 0, 0, 29, 26, 10, 10, 18, 0, 0, 19, 12, 23, 14, 8, 0, 0, 24, 14, 13, 10, 22, 1, 0, 20, 14, 23, 37, 25, 3],
          averageFare: [43.11, 43.42, 30.52, 0, 0, 29.53, 26.11, 23.32, 31.9, 26.55, 0, 0, 42.65, 29.21, 27.82, 33.94, 34.01, 0, 0, 24.66, 28.17, 32.13, 24.7, 34.86, 0, 0, 27.2, 28.4, 25.1, 22.93, 31.18, 0, 0, 23.03, 20.17, 26.06, 24.04, 26.04, 0, 0, 44.9, 28.87, 22.1, 26.88, 26.7, 0, 0, 36.14, 24.94, 27.44, 27.56, 36.48, 4.8, 0, 23.19, 26.86, 25.19, 22.19, 30.05, 25.5],
          totalFare: [689.76, 564.5, 305.15, 0, 0, 2362.7, 208.9, 233.2, 318.99, 265.46, 0, 0, 597.09, 700.97, 778.84, 610.84, 612.13, 0, 0, 764.48, 844.95, 1156.84, 741.03, 1289.78, 0, 0, 761.48, 681.56, 702.81, 527.42, 841.78, 0, 0, 668.01, 524.4, 260.58, 240.38, 468.73, 0, 0, 853.01, 346.48, 508.19, 376.27, 213.58, 0, 0, 867.33, 349.19, 356.73, 275.59, 802.54, 4.8, 0, 463.77, 375.99, 579.3, 821.12, 751.27, 76.51]
        }
      }

      if (val === 'threeMonths') {
        this.mock = {
          date: ['2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19', '2020-07-20', '2020-07-21', '2020-07-22', '2020-07-23', '2020-07-24', '2020-07-25', '2020-07-26', '2020-07-27', '2020-07-28', '2020-07-29', '2020-07-30', '2020-07-31', '2020-08-01', '2020-08-02', '2020-08-03', '2020-08-04', '2020-08-05', '2020-08-06', '2020-08-07', '2020-08-08', '2020-08-09', '2020-08-10', '2020-08-11', '2020-08-12', '2020-08-13', '2020-08-14', '2020-08-15', '2020-08-16', '2020-08-17', '2020-08-18', '2020-08-19', '2020-08-20', '2020-08-21', '2020-08-22', '2020-08-23', '2020-08-24', '2020-08-25', '2020-08-26', '2020-08-27', '2020-08-28', '2020-08-29', '2020-08-30', '2020-08-31', '2020-09-01', '2020-09-02', '2020-09-03', '2020-09-04', '2020-09-05', '2020-09-06', '2020-09-07', '2020-09-08', '2020-09-09', '2020-09-10', '2020-09-11', '2020-09-12', '2020-09-13', '2020-09-14', '2020-09-15', '2020-09-16', '2020-09-17', '2020-09-18', '2020-09-19', '2020-09-20', '2020-09-21', '2020-09-22', '2020-09-23', '2020-09-24', '2020-09-25', '2020-09-26', '2020-09-27', '2020-09-28', '2020-09-29', '2020-09-30'],
          amount: [16, 13, 10, 0, 0, 80, 8, 10, 10, 10, 0, 0, 14, 24, 28, 18, 18, 0, 0, 31, 30, 36, 30, 37, 0, 0, 28, 24, 28, 23, 27, 0, 0, 29, 26, 10, 10, 18, 0, 0, 19, 12, 23, 14, 8, 0, 0, 24, 14, 13, 10, 22, 1, 0, 20, 14, 23, 37, 25, 3, 1, 27, 27, 12, 22, 19, 6, 0, 5, 17, 19, 22, 20, 0, 0, 20, 33, 20, 24, 23, 0, 0, 18, 17, 22, 10, 27, 0, 0, 13, 25, 18],
          averageFare: [43.11, 43.42, 30.52, 0, 0, 29.53, 26.11, 23.32, 31.9, 26.55, 0, 0, 42.65, 29.21, 27.82, 33.94, 34.01, 0, 0, 24.66, 28.17, 32.13, 24.7, 34.86, 0, 0, 27.2, 28.4, 25.1, 22.93, 31.18, 0, 0, 23.03, 20.17, 26.06, 24.04, 26.04, 0, 0, 44.9, 28.87, 22.1, 26.88, 26.7, 0, 0, 36.14, 24.94, 27.44, 27.56, 36.48, 4.8, 0, 23.19, 26.86, 25.19, 22.19, 30.05, 25.5, 5.1, 28.58, 20.97, 20.31, 31.12, 40.55, 17.87, 0, 6.22, 38.63, 42.44, 23.73, 40.49, 0, 0, 26.96, 28.36, 31.12, 24.7, 33.62, 0, 0, 33.64, 29.89, 33.36, 28.99, 29.69, 0, 0, 33.72, 37.67, 30.11],
          totalFare: [689.76, 564.5, 305.15, 0, 0, 2362.7, 208.9, 233.2, 318.99, 265.46, 0, 0, 597.09, 700.97, 778.84, 610.84, 612.13, 0, 0, 764.48, 844.95, 1156.84, 741.03, 1289.78, 0, 0, 761.48, 681.56, 702.81, 527.42, 841.78, 0, 0, 668.01, 524.4, 260.58, 240.38, 468.73, 0, 0, 853.01, 346.48, 508.19, 376.27, 213.58, 0, 0, 867.33, 349.19, 356.73, 275.59, 802.54, 4.8, 0, 463.77, 375.99, 579.3, 821.12, 751.27, 76.51, 5.1, 771.61, 566.21, 243.67, 684.71, 770.41, 107.2, 0, 31.1, 656.67, 806.4, 522.05, 809.86, 0, 0, 539.24, 935.95, 622.33, 592.82, 773.19, 0, 0, 605.44, 508.06, 733.98, 289.93, 801.61, 0, 0, 438.37, 941.66, 541.94]
        }
      }
    },
    renderChart () {
      const arr = [...this.mock.date]
      const diff = 15 - arr.length
      const complementArray = Array.from({ length: diff }, (_, idx) => '')
      const categories = arr.concat(complementArray).map((item, index) => {
        if (item) {
          const date = moment(item).format('DD/MM')
          const dayNumber = arr.length > 1 ? new Date(item + 'T00:00:00').getDay() : 1
          return `<span class="day day-${dayNumber} index-${index}" data-value="${item}">${date}</span>`
        }

        return ''
      })

      this.chart = {
        backgroundColor: '#fff',
        gridLineColor: '#ccd6eb',
        thousandsSep: '.',
        decimalPoint: ',',
        height: 400,
        crosshair: true,
        xAxis: [
          {
            categories,
            crosshair: true,
            labels: {
              autoRotation: 0,
              overflow: 'allow'
            }
          }
        ],
        yAxis: [
          {
            title: { text: '' },
            opposite: false
          },
          {
            title: { text: '' },
            opposite: true
          },
          {
            title: { text: '' },
            opposite: true
          }
        ],
        series: [
          {
            name: 'Corridas',
            type: 'column',
            color: '#d26464',
            data: [...this.mock.amount].concat(complementArray)
          },
          {
            name: 'Valor',
            type: 'column',
            color: '#03bbd4',
            yAxis: 1,
            data: [...this.mock.totalFare].concat(complementArray)
          },
          {
            name: 'Ticket médio',
            type: 'line',
            color: '#f7a35c',
            yAxis: 2,
            data: [...this.mock.averageFare].concat(complementArray),
            marker: {
              lineWidth: 1,
              lineColor: this.$highcharts.getOptions().colors[3],
              fillColor: 'white'
            }
          }
        ],
        plotOptions: {
          column: {
            borderRadius: 2
          }
        },
        tooltip: {
          backgroundColor: '#fff',
          borderColor: '#bbb',
          borderRadius: 6,
          shadow: false,
          formatter () {
            const { points = [] } = this || {}
            const doc = new DOMParser().parseFromString(this.x, 'text/xml')
            const value = doc.querySelector('span').getAttribute('data-value')
            const day = moment(value).format('dddd')
            const date = moment(value).format('DD/MM/YYYY')

            function renderHTML (item) {
              const color = item.color
              const name = item.series.name
              const val = name !== 'Corridas' ? convertToCurrencyBRL(item.y) : formatNumber(item.y)
              return `<span style="color: ${color};">● </span><span>${name}: </span><span style="font-weight:bold; ">${val}</span><br>`
            }

            return `
              <div style="line-height: 2;">
                <span style="font-size: 10px; margin-bottom: 5px;">${day}, ${date}</span><br>
                ${points.map(item => renderHTML(item)).join('')}
              </div>
            `
          }
        }
      }
    }
  },
  watch: {
    option () {
      this.renderMock()
      this.renderChart()
    }
  },
  created () {
    this.renderMock()
    this.renderChart()
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 800px;

  .vuejs-highcharts {
    background-color: #fff;
    padding: 20px;
  }
}

.select__container {
  margin-bottom: 20px;
}

.select__container:before,
.select__container:after {
  clear: both;
  content: '';
  display: block;
  width: 100%;
}

.select {
  border: none;
  float: right;
  padding: 8px;
}
</style>

<style lang="scss">
.highcharts-axis-labels.highcharts-xaxis-labels .day {
  opacity: 0;
  visibility: hidden;
  position: relative;
  z-index: 1;
}

.highcharts-axis-labels.highcharts-xaxis-labels .day.day-1,
.highcharts-axis-labels.highcharts-xaxis-labels .day.index-0:not(.day-0) {
  opacity: 1;
  visibility: visible;
}
</style>
