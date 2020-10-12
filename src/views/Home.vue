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
          <th style="font-weight: 600;">name</th>
          <th style="font-weight: 600;">type</th>
          <th style="font-weight: 600;">defalt value</th>
          <th style="font-weight: 600;">required</th>
        </tr>
        <tr>
          <td>config</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Object</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">{}</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Overwrites all properties</td>
        </tr>
        <tr>
          <td>height</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Number</code>, <code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">String</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">400</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Controls the height of the chart</td>
        </tr>
        <tr>
          <td>title</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">String</code></td>
          <td></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Insert main title</td>
        </tr>
        <tr>
          <td>subtitle</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">String</code></td>
          <td></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Insert main subtitle</td>
        </tr>
        <tr>
          <td>backgroundColor</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">String</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">'#ffffff'</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Controls the background color of the chart</td>
        </tr>
        <tr>
          <td>xAxis</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Object</code></td>
          <td></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.5); color: #fff; border-radius: 6px;">true</code></td>
          <td>The X axis or category axis. Normally this is the horizontal axis, though if the chart is inverted this is the vertical axis. In case of multiple axes, the xAxis node is an array of configuration objects.</td>
        </tr>
        <tr>
          <td>yAxis</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Object</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">{}</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>The Y axis or value axis. Normally this is the vertical axis, though if the chart is inverted this is the horizontal axis. In case of multiple axes, the yAxis node is an array of configuration objects.</td>
        </tr>
        <tr>
          <td>series</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Array</code></td>
          <td></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.5); color: #fff; border-radius: 6px;">true</code></td>
          <td>Series options for specific data and the data itself.</td>
        </tr>
        <tr>
          <td>crosshair</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Boolean</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Configure a crosshair that follows either the mouse pointer or the hovered point.</td>
        </tr>
        <tr>
          <td>legend</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Object</code></td>
          <td></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>The legend is a box containing a symbol and name for each series item or point item in the chart. Each series (or points in case of pie charts) is represented by a symbol and its name in the legend.</td>
        </tr>
        <tr>
          <td>thousandsSep</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">String</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">'.'</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Thousands separator</td>
        </tr>
        <tr>
          <td>decimalPoint</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">String</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">','</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Decimal point</td>
        </tr>
        <tr>
          <td>customStyles</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Object</code></td>
          <td></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Render chart with custom Styles</td>
        </tr>
        <tr>
          <td>gridLineColor</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">String</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">'#e6e6e6'</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Custom grid line color</td>
        </tr>
        <tr>
          <td>curvedLine</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Boolean</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Only for line chart type</td>
        </tr>
        <tr>
          <td>tooltip</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Object</code></td>
          <td></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Tooltip configs</td>
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
      <BasicChartSample />

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
      <h3 class="section__title">Custom styles</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus iste iure nulla veritatis possimus aliquam deserunt neque est nihil ullam, corrupti vel eius dignissimos rerum in doloribus pariatur voluptatum.</p>
      <ColumnChartSample />

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
// highlight
import hljs from 'highlight.js'

import 'highlight.js/styles/atom-one-light.css'
// import 'highlight.js/styles/tomorrow.css'

// components
import BasicChartSample from 'components/examples/BasicChartSample'
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
    BasicChartSample,
    AreaChartSample,
    BarChartSample,
    ColumnChartSample,
    CombinationChartSample,
    LineChartSample,
    PieChartSample,
    ScatterChartSample
  },
  mounted () {
    hljs.initHighlightingOnLoad()
  }
}
</script>

<style lang="scss" scoped>
.hljs,
.vuejs-highcharts {
  border: 1px solid var(--code-bg-color);
  border-radius: 4px;
}

.hljs {
  padding: 15px;
}

.vuejs-highcharts {
  padding: 30px 15px 15px;
}
</style>
