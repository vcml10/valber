<template>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Escolha um ou mais sensores</p>
      <b-field>
        <div class="columns is-multiline is-variable is-2">
          <div class="column is-2" v-for="(sensor, index) in sensors" :key=index>
            <b-checkbox v-model="sensorsGroup"
                        :native-value="sensor.codigo">
              {{ sensor.descricao }}
            </b-checkbox>
          </div>
        </div>
      </b-field>
      <p class="subtitle" v-if="selected">Estações</p>
      <div class="content">
        <ol type="1">
          <li v-for="(station, index) in paginatedItems" :key=index>
            <router-link
              :to="{ name: 'station', params: {codigo: station.codigo, estado: station.municipio.uf, cidade: station.municipio.nome }}">
              {{ station.nome }}
            </router-link>
              ({{ station.tipo_estacao.descricao }})
            <ol type="a" style="margin-top: 0;margin-bottom:0.5em">
              <li v-if="station.localizacao">Localização: {{ station.localizacao }}</li>
            </ol>
          </li>
        </ol>
        <b-loading :is-full-page="fullpage" :active.sync="loading" :can-cancel="true"></b-loading>
     </div>  <!-- /content -->
     <b-pagination
        :total="stationsBySensor.length"
        :current.sync="current"
        :per-page="perPage">
      </b-pagination>
    </article> <!-- /article -->
  </div>
</template>

<script>
export default {
  name: 'StationsBySensor',
  data () {
    return {
      data: this.sensors,
      sensorsGroup: [],
      station: '',
      name: '',
      selected: null,
      current: 1,
      perPage: 5,
      fullpage: false
    }
  },
  beforeCreate () {
    this.$store.dispatch('getSensors')
  },
  created () {
  },
  computed: {
    paginatedItems () {
      let pageNumber = this.current - 1
      return this.stationsBySensor.slice(pageNumber * this.perPage, (pageNumber + 1) * this.perPage)
    },
    sensors () {
      return this.$store.state.sensors.sensors
    },
    cities () {
      return this.$store.state.stations.cities
    },
    stationsBySensor () {
      return this.$store.state.stations.stationsBySensor
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
    sensorsGroup: function () {
      if (this.sensorsGroup.length === 0) {
      } else {
        this.$store.dispatch('getStationsBySensor', this.sensorsGroup)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#index {
  margin-top: 80px;
}
</style>
