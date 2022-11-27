const vm = Vue.createApp({
  data() {
    return {
      primerNombre: "Alexis",
      apellido: "Fleitas Klisch",
      now: new Date
    }
  },
  computed: {
    nombreCompleto() {
      return `${this.primerNombre} ${this.apellido}`
    },
    fecha() {
      return this.now.toLocaleDateString()
    }
  }
}).mount('#app')

