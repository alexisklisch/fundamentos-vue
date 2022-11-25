// vm es la convensión de View Model
const vm = Vue.createApp({
  data() {
    return {
      text: 'Hola a todos',
      elementHtml: '<h2>Soy Alexis</h2>'
    }
  },
  // Podemos generar html desde JS
  // Aquí habilitamos por ejemplo las directivas de Vue
  template: `<h1 v-text="text"></h1>
  <div v-html="elementHtml"></div>
  <p>Hola mi rey</p>
  `
}).mount('#app')

/*
v-text permite agregar texto al elemento sin escribirlo dentro de la etiqueta
v-once renderiza una sola vez. Si lo alteramos post ejecución, no cambiará
v-html da la instrucción de leer el string como HTML, sino lo lee como plano
*/