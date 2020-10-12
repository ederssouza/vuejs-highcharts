<template>
  <article class="doc__content">
    <section style="padding-top: 10px;">
      <h2 class="section__title">Vue.js Highcharts</h2>
      <p>Vue.js wrapper for Highcharts library.</p>
    </section>

    <section class="section">
      <h2 class="section__title">Instalation</h2>
      <pre><code class="zsh">$ npm install vuejs-highcharts --save
# OR
$ yarn add vuejs-highcharts</code></pre>
    </section>

    <section class="section">
      <h2 class="section__title">How to use</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus iste iure nulla veritatis possimus aliquam deserunt neque est nihil ullam, corrupti vel eius dignissimos rerum in doloribus pariatur voluptatum.</p>
      <pre><code class="html">&lt;template&gt;
  &lt;ColumnChart :prop1="propValue1" :prop2="propValue2" /&gt;
&lt;/template&gt;

&lt;script&gt;
import { ColumnChart } from 'vuejs-highcharts'

export default {
  components: {
    ColumnChart
  },
  data () {
    return {
      chart: {
        // config here
      }
    }
  }
}
&lt;/script&gt;</code></pre>
    </section>

    <section class="section">
      <h2 class="section__title">Options</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus iste iure nulla veritatis possimus aliquam deserunt neque est nihil ullam, corrupti vel eius dignissimos rerum in doloribus pariatur voluptatum.</p>
      <table id="customers">
        <tr>
          <th>Options</th>
          <th>Value</th>
          <th>Default</th>
        </tr>
        <tr>
          <td>encryption</td>
          <td>encrypt all notes before saving. If turned on, it requires password to open the file.</td>
          <td>false</td>
        </tr>
        <tr>
          <td>highlighting</td>
          <td>Show syntax highlight on markdown text.</td>
          <td>true</td>
        </tr>
        <tr>
          <td>prettyTable</td>
          <td>Render table with Scribbler’s pretty table style.</td>
          <td>true</td>
        </tr>
      </table>
    </section>

    <section class="section">
      <h2 class="section__title">Examples</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat consequatur, provident mollitia beatae saepe eaque. Quibusdam tempora libero cumque deserunt non assumenda dolore. Sed amet iste velit dignissimos maiores accusantium!</p>
    </section>

    <section class="section">
      <h3 class="section__title">Basic chart</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus iste iure nulla veritatis possimus aliquam deserunt neque est nihil ullam, corrupti vel eius dignissimos rerum in doloribus pariatur voluptatum.</p>
      <ColumnChartSample />

      <h4>Code</h4>
      <pre><code class="html"></code></pre>
    </section>

    <section class="section">
      <h3 class="section__title">Area chart</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus iste iure nulla veritatis possimus aliquam deserunt neque est nihil ullam, corrupti vel eius dignissimos rerum in doloribus pariatur voluptatum.</p>
      <AreaChartSample />

      <h4>Code</h4>
      <pre><code class="html"></code></pre>
    </section>

    <section class="section">
      <h3 class="section__title">Bar chart</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus iste iure nulla veritatis possimus aliquam deserunt neque est nihil ullam, corrupti vel eius dignissimos rerum in doloribus pariatur voluptatum.</p>
      <BarChartSample />

      <h4>Code</h4>
      <pre><code class="html"></code></pre>
    </section>

    <section class="section">
      <h3 class="section__title">Column chart</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus iste iure nulla veritatis possimus aliquam deserunt neque est nihil ullam, corrupti vel eius dignissimos rerum in doloribus pariatur voluptatum.</p>
      <ColumnChartSample />

      <h4>Code</h4>
      <pre><code class="html"></code></pre>
    </section>

    <section class="section">
      <h3 class="section__title">Scatter chart</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus iste iure nulla veritatis possimus aliquam deserunt neque est nihil ullam, corrupti vel eius dignissimos rerum in doloribus pariatur voluptatum.</p>
      <ScatterChartSample />

      <h4>Code</h4>
      <pre><code class="html"></code></pre>
    </section>

    <section class="section">
      <h3 class="section__title">Line chart</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus iste iure nulla veritatis possimus aliquam deserunt neque est nihil ullam, corrupti vel eius dignissimos rerum in doloribus pariatur voluptatum.</p>
      <LineChartSample />

      <h4>Code</h4>
      <pre><code class="html"></code></pre>
    </section>

    <section class="section">
      <h3 class="section__title">Pie chart</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus iste iure nulla veritatis possimus aliquam deserunt neque est nihil ullam, corrupti vel eius dignissimos rerum in doloribus pariatur voluptatum.</p>
      <PieChartSample />

      <h4>Code</h4>
      <pre><code class="html"></code></pre>
    </section>

    <section class="section">
      <h3 class="section__title">Combination chart</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus iste iure nulla veritatis possimus aliquam deserunt neque est nihil ullam, corrupti vel eius dignissimos rerum in doloribus pariatur voluptatum.</p>
      <CombinationChartSample />

      <h4>Code</h4>
      <pre><code class="html"></code></pre>
    </section>

    <section class="section">
      <h3 class="section__title">Rewrite all props</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus iste iure nulla veritatis possimus aliquam deserunt neque est nihil ullam, corrupti vel eius dignissimos rerum in doloribus pariatur voluptatum.</p>
      <ColumnChartSample />

      <h4>Code</h4>
      <pre><code class="html"></code></pre>
    </section>
  </article>
</template>

<script>
import AreaChartSample from 'components/examples/AreaChartSample'
import BarChartSample from 'components/examples/BarChartSample'
import ColumnChartSample from 'components/examples/ColumnChartSample'
import CombinationChartSample from 'components/examples/CombinationChartSample'
import LineChartSample from 'components/examples/LineChartSample'
import PieChartSample from 'components/examples/PieChartSample'
import ScatterChartSample from 'components/examples/ScatterChartSample'

export default {
  name: 'Home',
  components: {
    AreaChartSample,
    BarChartSample,
    ColumnChartSample,
    CombinationChartSample,
    LineChartSample,
    PieChartSample,
    ScatterChartSample
  }
}
</script>
