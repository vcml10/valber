<template>
  <div class="">
    <h4 class="title is-4 has-text-centered has-text-weight-light has-text-dark">Usuário e senha</h4>

    <form @submit="userSignIn">

      <b-field label="E-mail">
        <b-input type="email"
          v-model="email"
          placeholder="cicrano@meu-email.com.br">
        </b-input>
      </b-field>

      <b-field label="Senha">
        <b-input type="password"
          v-model="password"
          placeholder="senha segura"
          password-reveal>
        </b-input>
      </b-field>

      <div v-bind:error="showError"></div>

      <button class="button is-primary is-fullwidth" type="submit" :disabled="loading">Entrar</button>

    </form>
    <p class="is-size-7">
    </p>
  </div>
</template>

<script>
export default {
  name: 'EmailSignIn',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    userSignIn: function () {
      this.$store.dispatch('userSignIn', { email: this.email, password: this.password })
    },
    showError: function () {
      this.$toast.open(this.error)
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
