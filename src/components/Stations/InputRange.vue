<template>
  <div class="tile is-parent">
    <article class="tile is-child">
      <div class="field is-grouped is-grouped-centered">

        <b-datepicker
          placeholder="Escolha uma data..."
          v-model="pickedDate"
          :date-formatter="dateFormatter"
          :day-names="dayNames"
          :month-names="monthNames"
          icon="calendar-today">
        </b-datepicker>

        <!--<b-field
          label=""
          message="Hora no formato hh:mm">
          <b-timepicker
            v-if="pickedDate"
            placeholder="Escolha a hora do dia..."
            v-model="pickedTime"
            :date-formatter="timeFormatter"
            :increment-minutes="incrementMinutes"
            icon="clock"
            v-on:change.native="changedTime"
            editable>
          </b-timepicker>
        </b-field> -->

        <b-field
          label=""
          message="Hora no formato hh:mm">
          <b-input
            v-if="pickedDate"
            placeholder="Escolha uma hora..."
            v-model="pickedTime"
            icon="clock"
            v-on:change.native="changedTime">
          </b-input>
        </b-field>

        <!-- <input
          v-if="pickedDate"
          type="range"
          class="slider"
          :value="value"
          @input="onInput"
          @change="onChange"
          min="0"
          max="24"
          step="1"
          style="margin-bottom:10px;"
          >
          {{ changedValue }} -->
      </div> <!-- is-grouped -->

      <b-notification
        v-if="pickedDate && pickedTime"
        type="is-info"
        :closable="false"
      >
      Data escolhida: {{ finalPrintedDateTime }}
      </b-notification>
    </article>
  </div>
</template>

<script>
export default {
  name: 'InputRange',
  data () {
    return {
      data: '',
      // value: 50,
      // changedValue: 0,
      incrementMinutes: 60,
      pickedDate: new Date(),
      pickedTime: null,
      finalDate: '',
      dayNames: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    }
  },
  created () {
  },
  methods: {
    changedTime (e) {
      this.pickedTime = e.target.value
      this.finalDate = this.pickedDate.getFullYear().toString() +
        '-' +
        (this.pickedDate.getMonth() + 1).toString() +
        '-' +
        this.pickedDate.getDate().toString() +
        ' ' +
        this.pickedTime
      this.$emit('hour-changed', this.finalDate)
    },
    dateFormatter (d) {
      return d.toLocaleDateString('pt-BR')
    },
    timeFormatter (t) {
      if (typeof t === 'string') { return t }
      var minutes = (t.getMinutes() < 10 ? '0' : '') + t.getMinutes()
      var hours = (t.getHours() < 10 ? '0' : '') + t.getHours()
      var time = hours + ':' + minutes
      return time
    }
    /* onInput (e) {
      this.$emit('input', e.target.value)
      this.value = e.target.value
      console.log(e.target.value)
    },
    onChange (e) {
      this.$emit('change', e.target.value)
      this.value = e.target.value
      this.changedValue = e.target.value
    } */
  },
  computed: {
    finalPrintedDateTime () {
      if (this.pickedTime === null) { return '' }
      return this.dateFormatter(this.pickedDate) + ' ' + this.timeFormatter(this.pickedTime)
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
    // range: function () {
    //  this.$emit('input', this.range)
    // },
    // value: function () {
    //  this.range = this.value
    // },
  }
}
</script>

<style scoped>
</style>
