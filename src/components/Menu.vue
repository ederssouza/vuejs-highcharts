<template>
  <aside class="doc__nav">
    <ul ref="navbar" id="navbar">
      <li
        v-for="(item, index) in items"
        :key="`item${index}`"
        class="js-btn"
      >
        <a
          :href="`#section${index}`"
          :title="item.label"
          :class="{ 'active': index === 0 }"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
import VanillaScrollspy from 'vanillajs-scrollspy'

export default {
  name: 'Menu',
  data () {
    return {
      items: [
        { label: 'Basic Chart' },
        { label: 'Area Chart' },
        { label: 'Bar Chart' },
        { label: 'Column Chart' },
        { label: 'Scatter Chart' },
        { label: 'Line Chart' },
        { label: 'Pie Chart' },
        { label: 'Combination Chart' },
        { label: 'Rewrite all props' }
      ]
    }
  },
  methods: {
    fixedMenu () {
      const navbar = this.$refs['navbar']

      if (navbar) {
        if (window.pageYOffset === 0) {
          navbar.querySelector('li:first-child a').classList.add('active')
        }

        if (window.pageYOffset > 63) {
          navbar.classList.add('fixed')
          return
        }

        navbar.classList.remove('fixed')
      }
    },
    initScrollSpy () {
      const navbar = this.$refs['navbar']
      if (navbar) {
        const scrollspy = new VanillaScrollspy(navbar)
        scrollspy.init()
      }
    }
  },
  mounted () {
    this.initScrollSpy()
    window.addEventListener('scroll', this.fixedMenu)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.fixedMenu)
  }
}
</script>
