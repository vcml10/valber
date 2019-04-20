<template>
  <nav class="navbar is-fixed-top is-transparent">
    <div class="navbar-brand">
      <p class="navbar-item">
        <span>valber.io</span>
      </p>
      <div class="navbar-burger burger" data-target="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="menu" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" :to="{ name: 'index' }">
          Página Inicial
        </router-link>
        <router-link class="navbar-item" :to="{ name: 'sensors' }">
          Sensores disponíveis
        </router-link>
      </div>

      <!--
    <div class="navbar-end">
      <div class="navbar-item">

        <div class="field is-grouped">
          <p class="control">
          <router-link class="button is-primary" :to="{ name: 'signin' }">
              <b-icon
                icon="account"
                size="is-small">
              </b-icon>
              <span>Login</span>
            </router-link>
          </p>
        </div>
      </div>
    </div>
    -->
    </div> <!-- /navbar-menu -->
</nav>
</template>

<script>
export default {
  name: 'Menu',
  data () { return {} },
  created () {
  },
  mounted () {
    this.toggleMainMenu()
  },
  methods: {
    toggleMainMenu: function () {
      document.addEventListener('DOMContentLoaded', () => {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
          // Add a click event on each of them
          $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
              // Get the target from the "data-target" attribute
              const target = el.dataset.target
              const $target = document.getElementById(target)
              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active')
              $target.classList.toggle('is-active')
            })
          })
        }
      })
    }
  },
  computed: {},
  components: {}
}
</script>

<style scoped>
</style>
