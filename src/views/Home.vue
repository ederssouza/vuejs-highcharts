<template>
  <div class="container">
    <h1 class="container__title">Vue.js Highcharts Wrapper</h1>

    <AreaChartSample />
    <BarChartSample />
    <ColumnChartSample />
    <LineChartSample />
    <PieChartSample />
    <ScatterChartSample />
    <CombinationChartSample />
  </div>
</template>

<script>
import AreaChartSample from 'components/examples/AreaChartSample'
import BarChartSample from 'components/examples/BarChartSample'
import ColumnChartSample from 'components/examples/ColumnChartSample'
import LineChartSample from 'components/examples/LineChartSample'
import PieChartSample from 'components/examples/PieChartSample'
import ScatterChartSample from 'components/examples/ScatterChartSample'
import CombinationChartSample from 'components/examples/CombinationChartSample'

export default {
  name: 'Home',
  components: {
    AreaChartSample,
    BarChartSample,
    ColumnChartSample,
    LineChartSample,
    PieChartSample,
    ScatterChartSample,
    CombinationChartSample
  }
}
</script>

<style lang="scss">
body {
  background-color: #eef3f5;
  color: #636a6d;
  font-family: 'Montserrat', sans-serif;
  padding: 40px 0;
}

.container {
  margin: 0 auto;
  max-width: 960px;
}

.container__title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 35px;
  text-align: center;
}

.container__subtitle {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
}

.vuejs-highcharts {
  background-color: #fff;
  padding: 16px;
}
</style>
