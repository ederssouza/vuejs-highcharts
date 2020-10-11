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
        { label: 'Instalation' },
        { label: 'How to use' },
        { label: 'Options' },
        { label: 'Basic chart' },
        { label: 'Area chart' },
        { label: 'Bar chart' },
        { label: 'Column chart' },
        { label: 'Scatter chart' },
        { label: 'Line chart' },
        { label: 'Pie chart' },
        { label: 'Combination chart' },
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

<style lang="scss" scoped>
.doc__nav {
  flex-basis: 20%;
  font-weight: 200;
}

.doc__nav ul {
  list-style: none;
  padding-left: 0;
  line-height: 1.8;
}

.doc__nav ul.fixed {
  position: fixed;
  top: 2rem;
}

.doc__nav li:hover {
  color: var(--primary-color-light);
  cursor: pointer;
  transition: color .3s ease-in-out;
}

.doc__nav .active {
  color: var(--accent-color);
  position: relative;
}

.doc__nav .active:after {
  position: absolute;
  content: "";
  width: 1rem;
  height: 1rem;
  background-color: var(--accent-color);
  left: -1.5rem;
  top: 0.3rem;
}
</style>
