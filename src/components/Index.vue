<template>
  <div id="index">
    <div class="container">
      <div class="tile is-ancestor">
        <stations-by-city />
      </div> <!-- /is-ancestor -->
      <div class="tile is-ancestor">
        <tile code=1 />
        <tile code=2 />
        <tile code=3 />
      </div> <!-- /is-ancestor -->
    </div> <!-- /container -->
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#index {
  margin-top: 80px;
}
</style>
