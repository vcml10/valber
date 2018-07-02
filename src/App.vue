<template>
  <div id="app">
   <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    app_title () {
      return this.$store.state.app_title
    }
  }
}
</script>

<style lang="scss">
</style>
