<template>
  <section class="hero is-fullheight">

    <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">

        <div class="column is-4">
          <div class="box">
            <h4 class="title is-4 has-text-centered has-text-weight-light">Cadastre-se</h4>

            <form @submit="userSignUp">

              <b-field label="Nome completo">
                <b-input
                  required
                  v-model="name"
                  placeholder="Cicrano da Silva"></b-input>
              </b-field>

              <b-field label="Email">
                <b-input type="email"
                  required
                  v-model="email"
                  placeholder="cicrano@meu-email.com.br">
                </b-input>
              </b-field>

              <b-field label="Senha">
                <b-input type="password"
                  required
                  v-model="password"
                  placeholder="senha segura"
                  password-reveal>
                </b-input>
              </b-field>

              <b-field label="Confirmar senha">
                <b-input type="password"
                  required
                  v-model="confirmPassword"
                  placeholder="senha segura"
                  password-reveal>
                </b-input>
              </b-field>

              <button class="button is-primary is-fullwidth" type="submit" :disabled="loading">Confirmar cadastro</button>

            </form>

            <p class="is-size-7">
              Já tenho cadastro. <router-link :to="{ 'name': 'signin' }">Quero entrar</router-link>.
            </p>
          </div> <!-- /box -->
        </div> <!-- /column -->
      </div>
    </div> <!-- /container -->
    </div> <!-- /hero-head -->

    <b-loading  :active.sync="loading" :canCancel="true"></b-loading>
  </section>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparePasswords () {
      return this.password === this.confirmPassword
    },
    error () {
      return this.$store.state.error
    },
    loading () {
      return this.$store.state.loading
    }
  },
  methods: {
    userSignUp: function () {
      if (this.comparePasswords === false) {
        this.$store.commit('setError', 'As senhas não conferem.')
        this.$toast.open({
          duration: 5000,
          message: 'As senhas não conferem.',
          position: 'is-bottom-right',
          type: 'is-danger'})
        return
      }
      this.$store.dispatch('userSignUp', { name: this.name, email: this.email, password: this.password })
    }
  },
  components: { }
}

</script>

<style scoped>
</style>
