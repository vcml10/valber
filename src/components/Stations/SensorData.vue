<template>
  <div class="box has-text-centered">
    <b-icon
      :icon="sensorIcon(s.codigo)"
      size="is-medium">
    </b-icon>
    <p class="subtitle">{{ s.descricao }}</p>
    <p class="subtitle">{{ s.valor }} ({{ s.unidade }})</p>
  </div>
</template>

<script>
export default {
  name: 'SensorData',
  props: ['s', 'payload'],
  data () {
    return {
      'description': 'Descrição do sensor',
      'unit': 'ºC'
    }
  },
  created () {
    this.payload['codigo'] = this.s.codigo
    console.log(this.payload)
  },
  mounted () {
  },
  methods: {
    sensorIcon: function (code) {
      var iconList = {
        1: 'weather-windy',
        2: 'temperature-celsius',
        3: 'temperature-celsius',
        4: 'temperature-celsius',
        5: 'weather-pouring',
        9: 'temperature-celsius',
        13: 'temperature-celsius',
        17: 'flash',
        18: 'weather-windy',
        19: '',
        20: 'weather-windy',
        22: 'weather-rainy',
        24: 'weather-fog',
        26: 'weather-windy',
        27: 'temperature-celsius',
        28: 'temperature-celsius',
        29: 'temperature-celsius',
        30: 'weather-windy',
        31: 'weather-windy',
        32: 'weather-windy',
        33: 'weather-windy',
        36: 'temperature-celsius',
        37: 'temperature-celsius',
        38: 'temperature-celsius',
        40: 'temperature-celsius',
        48: 'temperature-celsius',
        41: 'cup-water',
        47: 'white-balance-sunny',
        50: 'weather-windy',
        52: 'weather-windy',
        55: 'temperature-celsius',
        56: 'temperature-celsius',
        59: 'weather-rainy',
        60: 'weather-rainy',
        62: 'weather-windy',
        6: 'water-percent',
        53: 'water-pump',
        61: 'water-percent',
        98: 'terrain',
        99: 'water-percent',
        100: 'battery-40'
      }
      if (!iconList.hasOwnProperty(code)) {
        return 'chip'
      } else {
        return iconList[code]
      }
    }
  },
  computed: {
  },
  components: {}
}
</script>

<style scoped>
</style>
