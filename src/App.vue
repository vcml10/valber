<template>
  <div id="app">
   <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$store.dispatch('setAppConfiguration')
  },
  computed: {
    app_title () {
      return this.$store.state.app_title
    }
  }
}
</script>

<style lang="scss">
</style>
