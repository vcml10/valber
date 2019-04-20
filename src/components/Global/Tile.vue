<template>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">{{ title }}</p>
      <p class="subtitle">atualizado em: {{ updated_at }}</p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Tile',
  props: ['code'],
  data () {
    return {
      'title': 'Título',
      'updated_at': '07/02/2019 - 12:00:00'
    }
  },
  created () {
  },
  mounted () {
    this.methodName()
  },
  methods: {
    methodName: function () {
      console.log('tile component')
    }
  },
  computed: {},
  components: {}
}
</script>

<style scoped>
</style>
