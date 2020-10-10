<template>
  <article class="doc__content">
    <section class="section" id="section1">
      <h3 class="section__title">Title</h3>
      <p>Text example.</p>
      <h3 class="section__title">Installation</h3>
      <div class="code__block code__block--notabs">
        <pre class="code code--block">
          <code>
            $ npm install vuejs-highcharts --save
            # OR
            $ yarn add vuejs-highcharts
          </code>
        </pre>
      </div>

      <div class="code__block code__block--notabs">
        <pre class="code code--block">
          <code>
            var one = 1
          </code>
        </pre>
      </div>
      <Highlight language="html">
      &lt;ul&gt;
        &lt;li&gt;item&lt;/li&gt;
        &lt;li&gt;item&lt;/li&gt;
      &lt;/ul&gt;
      </Highlight>

      <Highlight>var one = 1
      </Highlight>
    </section>

    <section class="section" id="section2">
      <h3 class="section__title">Title</h3>
      <p>Text example.</p>
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
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nulla nesciunt nobis quo! Amet nemo delectus libero rem. Minima, soluta. Velit consectetur, expedita obcaecati sapiente necessitatibus eligendi quasi est quae!</p>
    </section>

    <section class="section" id="section3">
      <h3 class="section__title">Title</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eligendi sed doloremque consectetur quibusdam ipsa placeat reiciendis quo veniam consequatur quis, tempora ut architecto maiores pariatur, culpa excepturi. Neque, facere.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eligendi sed doloremque consectetur quibusdam ipsa placeat reiciendis quo veniam consequatur quis, tempora ut architecto maiores pariatur, culpa excepturi. Neque, facere.</p>
    </section>

    <section class="section" id="section4">
      <h3 class="section__title">Title</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eligendi sed doloremque consectetur quibusdam ipsa placeat reiciendis quo veniam consequatur quis, tempora ut architecto maiores pariatur, culpa excepturi. Neque, facere.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eligendi sed doloremque consectetur quibusdam ipsa placeat reiciendis quo veniam consequatur quis, tempora ut architecto maiores pariatur, culpa excepturi. Neque, facere.</p>
    </section>
  </article>
</template>

<script>
import Highlight from 'components/Highlight'

export default {
  name: 'Home',
  components: {
    Highlight
  }
}
</script>

<style lang="scss">
</style>
