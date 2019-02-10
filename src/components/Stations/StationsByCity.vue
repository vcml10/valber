<template>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Escolha uma cidade</p>
      <b-field>
        <b-autocomplete
          v-model="name"
          :data="filteredDataArray"
          placeholder="ex. Fortaleza"
          icon="magnify"
          @select="option => selected = option">
          <template slot="empty">Nenhuma cidade encontrada</template>
        </b-autocomplete>
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
     </div>  <!-- /content -->
     <b-pagination
        :total="stationsByCity.length"
        :current.sync="current"
        :per-page="perPage">
      </b-pagination>
    </article> <!-- /article -->
  </div>
</template>

<script>
export default {
  name: 'StationsByCity',
  data () {
    return {
      data: this.cities,
      station: '',
      name: '',
      selected: null,
      current: 1,
      perPage: 5
    }
  },
  beforeCreate () {
    this.$store.dispatch('getCities')
  },
  created () {
  },
  computed: {
    filteredDataArray () {
      return this.cities.filter((option) => {
        return option
          .toString()
          .toLowerCase()
          .indexOf(this.name.toLowerCase()) >= 0
      })
    },
    paginatedItems () {
      let pageNumber = this.current - 1
      return this.stationsByCity.slice(pageNumber * this.perPage, (pageNumber + 1) * this.perPage)
    },
    cities () {
      return this.$store.state.stations.cities
    },
    stationsByCity () {
      return this.$store.state.stations.stationsByCity
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
    selected: function () {
      if (this.selected === null) {
      } else {
        this.$store.dispatch('getStationsByCity', this.selected)
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
