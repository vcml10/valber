<template>
  <div id="index">
  <section class="hero is-dark is-fullheight">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <span>Nome do Projeto</span>
            </a>
            <span class="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
              </span>
            </div>
            <div id="navbarMenu" class="navbar-menu">
              <div class="navbar-end">
                <span class="navbar-item">
                  <a class="button is-white is-outlined" href="#">
                    <span>Página Principal</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div> <!-- /hero-head -->

      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-6 is-offset-3">
            <h1 class="title">
              Em breve
            </h1>
            <h2 class="subtitle">
              Descrição do projeto...
            </h2>

          </div>
        </div>
      </div> <!-- /hero-body -->
  </section>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
