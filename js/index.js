const vm = Vue.createApp({
  data() {
    return {
      puerta: 'Puerta cerrada',
      abierto: false,
      appStyle: {},
      titleStyle: {},
      btnStyle: {}
    }
  },
  watch: {
    abierto(value, old) {
      value
        ? this.puerta = "Puerta abierta"
        : this.puerta = "Puerta cerrada"

      if (value) {
        this.appStyle = { backgroundColor: '#d4f2cd' }
        this.titleStyle = {color: 'green'}
        this.btnStyle = {backgroundColor: 'green'}
      } else {
        this.appStyle = old
        this.titleStyle = old
        this.btnStyle = old
      }
    }
  },
  computed: {
    opcion() {
      return this.abierto ? 'Cerrar' : 'Abrir'
    }
  }
}).mount('#app')

