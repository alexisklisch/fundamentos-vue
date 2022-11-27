# Reactividad

## Propiedades computadas

Puedo crear unas variables más complejas para usar en el sitio web. Estas **propiedades computadas** se parecen a los métodos pero son reactivas.

```html
<div id="app">
  <h3>Hola, soy {{nombreCompleto}}</h3>
  <p>Hoy es {{fecha}}</p>
</div>
```

```js
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
```
