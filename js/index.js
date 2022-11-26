// vm es la convensión de View Model
const vm = Vue.createApp({
  data() {
    return {
      imgSrc: "https://images.unsplash.com/photo-1668622355716-1027018409fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=20",
      altText: "Imagen de un pibe re loco",
      attr: 'alt'
    }
  },
  // Para generar atributos que cambian tenemos que usar template
  template: `
    <img v-bind:src="imgSrc" v-bind:alt="altText"/>
    <p>Puedo cambiar el atributo reactivamente con una variable</p>
    <img v-bind:[attr]="imgSrc"/>
  `
}).mount('#app')

/*
v-bind sirve para asignar valores atributos reactivos. Sólo funciona en template.
*/