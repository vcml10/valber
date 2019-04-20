<template>
  <section class="hero is-dark is-fullheight">

    <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">

        <div class="column is-4">
          <div class="box">
            <social-sign-in />
            <hr />
            <email-sign-in />

            <p class="is-size-7">
              <router-link :to="{ 'name': 'signup' }">Quero me cadastrar</router-link>
              <br />
              <router-link :to="{ 'name': 'PrivacyPolicy' }">Veja aqui nossa política de privacidade</router-link>
            </p>

          </div> <!-- /box -->
        </div> <!-- /column -->

      </div>
    </div> <!-- /container -->
    </div> <!-- /hero-body -->

    <b-loading  :active.sync="loading" :canCancel="true"></b-loading>
  </section>
</template>

<script>
import SocialSignIn from './SocialSignIn'
import EmailSignIn from './EmailSignIn'
export default {
  name: 'SignIn',
  data () { return {} },
  methods: {},
  computed: {
    error () {
      return this.$store.state.auth.error
    },
    loading () {
      return this.$store.state.auth.loading
    }
  },
  components: { SocialSignIn, EmailSignIn }
}
</script>

<style scoped>

</style>
