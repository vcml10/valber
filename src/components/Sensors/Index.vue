<template>
  <div id="index">
    <div class="container">
      <div class="columns is-multiline is-variable is-2">
        <div class="column is-2" v-for="(sensor, index) in sensors" :key=index>
          <sensor :s="sensor" />
        </div>
      </div>
    </div> <!-- /container -->
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      data: this.sensors
    }
  },
  created () {
    this.$store.dispatch('getSensors')
  },
  computed: {
    sensors () {
      return this.$store.state.sensors.sensors
    },
    loading () {
      return this.$store.state.sensors.loading
    },
    error () {
      return this.$store.state.sensors.error
    },
    errorMsg () {
      return this.$store.state.sensors.errorMsg
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
