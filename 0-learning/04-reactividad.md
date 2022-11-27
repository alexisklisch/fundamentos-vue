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

## Watchers

Parecido al *useEffect* en **React** y pasamos el nombre de una función para que renderice la página cada vez que cambia su estado.

Los **watchers** tienen que tener el mismo nombre que la variable a la que estamos observando. Cuando ésta cambia, se ejecuta el watcher.

```js
const vm = Vue.createApp({
  data() {
    return {
      text: 'Primer texto'
    }
  },
  watch: {
    // value es un parámetro con el nuevo valor que cambió
    // old es el valor previo al cambio
    text(value, old) {
      console.log('Funciona', value);
    }
  }
}).mount('#app')
```

## Estilos reactivos

Puedo alterar los estilos reactivamente creando un bind de style en el elemento que necesite. Después puedo usar herramientas aprendidas previamente para alterar esos valores dinámicamente.

```js
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
```
