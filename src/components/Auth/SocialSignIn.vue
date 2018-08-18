<template>
  <div class="">
    <h4 class="title is-4 has-text-centered has-text-weight-light">Redes Sociais</h4>

    <a href="#" @click.prevent="userSignInWithGoogle" class="button is-fullwidth is-google">
      <span class="icon">
        <b-icon icon="google"></b-icon>
      </span>
      <span>Acessar com o Google</span>
    </a>

    <a href="#" @click.prevent="userSignInWithFacebook" class="button is-fullwidth is-facebook">
      <span class="icon">
        <b-icon icon="facebook"></b-icon>
      </span>
      <span>Acessar com o Facebook</span>
    </a>

    <a href="#" @click.prevent="userSignInWithTwitter" class="button is-fullwidth is-twitter">
      <span class="icon">
        <b-icon icon="twitter"></b-icon>
      </span>
      <span>Acessar com o Twitter</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialSignIn',
  data () { return {} },
  methods: {
    userSignInWithGoogle: function () {
      this.$store.dispatch('userSignInWithGoogle')
    },
    userSignInWithFacebook: function () {
      this.$store.dispatch('userSignInWithFacebook')
    },
    userSignInWithTwitter: function () {
      this.$store.dispatch('userSignInWithTwitter')
    }
  },
  computed: {
    error () {
      return this.$store.state.auth.error
    },
    loading () {
      return this.$store.state.auth.loading
    }
  },
  components: { }
}
</script>

<style>
</style>
