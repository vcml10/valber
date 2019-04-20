<template>
  <div id="station">
    <div class="container">
      <p class="title">Estação {{ station.nome }}</p>
      <p class="is-small" v-if="station.codigo_origem">Código: {{ station.codigo_origem }} </p>
      <p class="is-small">Tipo da estação: {{ station.tipo_estacao.descricao }} </p>
      <p class="is-small" v-if="station.sensor">Sensores disponíveis:
      <span class="" v-for="(s, index) in station.sensor" :key="index">
        <span v-if="index === station.sensor.length - 1">
          {{ s.descricao }} ({{ s.unidade }}).
        </span>
        <span v-else>
          {{ s.descricao }} ({{ s.unidade }}),
        </span>
      </span>
      </p>
      <div class="tile is-ancestor" style="margin-top:20px;">
        <input-range
          v-model="finalDate"
          v-on:hour-changed="updatedTime" />
        {{ finalDate }}
      </div>
    </div> <!-- /container -->
    <div class="container">
      <div class="columns is-multiline is-variable is-2">
        <div class="column is-2" v-for="(s, index) in station.sensor" :key=index>
          <sensor-data :s=s :payload="queryObj" />
        </div>
      </div>
    </div> <!-- /container -->
  </div>
</template>

<script>
import InputRange from './InputRange.vue'
import SensorData from './SensorData.vue'

export default {
  name: 'Index',
  components: {
    'input-range': InputRange,
    'sensor-data': SensorData
  },
  data () {
    return {
      finalDate: '',
      payload: {},
      queryObj: {},
      flag: 0
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
  methods: {
    updatedTime: function (finalDate) {
      this.flag = finalDate
      this.queryObj['data'] = finalDate
    }
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
  },
  watch: {
    flag: function () {
      console.log(this.queryObj)
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
