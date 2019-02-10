<template>
  <div id="station">
    <div class="container">
      <p class="title">Estação {{ station.nome }}</p>
      <p class="is-small">Código: {{ station.codigo_origem }} </p>
      <p class="is-small">Tipo da estação: {{ station.tipo_estacao.descricao }} </p>
      <p class="is-small">Sensores disponíveis:
      <span class="" v-for="(s, index) in station.sensor" :key="index">{{ s.descricao }} ({{ s.unidade }}), </span>
      </p>
      {{ station }}
      <div class="columns is-multiline is-variable is-2">
      </div>
    </div> <!-- /container -->
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      payload: {}
    }
  },
  beforeCreate () {
  },
  created () {
    this.payload['codigo'] = this.$route.params.codigo
    this.payload['estado'] = this.$route.params.estado
    this.payload['cidade'] = this.$route.params.cidade
    this.$store.dispatch('getStationByCode', this.payload)
  },
  computed: {
    station () {
      return this.$store.state.stations.stationByCode[0]
    },
    loading () {
      return this.$store.state.stations.loading
    },
    error () {
      return this.$store.state.stations.error
    },
    errorMsg () {
      return this.$store.state.stations.errorMsg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#station {
  margin-top: 80px;
}
</style>
