<template>
  <article class="doc__content">
    <section class="section" id="section1">
      <h3 class="section__title">Title</h3>
      <p>Text example.</p>
      <h3 class="section__title">Installation</h3>

      <highlightjs language='javascript' :code="`var x = 5;

function myFunc () {
  return true
}`"
      />
      <highlightjs
        language='html'
        :code="`<ul>
  <li>item</li>
  <li>item</li>
  <li>item</li>
  <li>item</li>
</ul>`"
      />
      <highlightjs language='shell' code="$ npm i vuejs-highcharts --save" />
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
export default {
  name: 'Home'
}
</script>
