const vm = Vue.createApp({
  data() {
    return {
      puerta: 'Puerta cerrada',
      abierto: false
    }
  },
  watch: {
    abierto(value) {
      value
        ? this.puerta = "Puerta abierta"
        : this.puerta = "Puerta cerrada"
    }
  },
  computed: {
    opcion() {
      return this.abierto ? 'Cerrar' : 'Abrir'
    }
  }
}).mount('#app')

