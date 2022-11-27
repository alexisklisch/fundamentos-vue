# Input de usuario

## Eventos de usuario

Uso **v-on** para hacer un llamado a un evento.

$js/index.js$

```js
const vm = Vue.createApp({
  data() {
    return {
      initialValue: 0
    }
  },
  methods:{
    increment() {
      // Uso this para acceder a todos los valores de data
      this.initialValue++
    }
  },
  template: `<button type="button" v-on:click="increment">Clickeado {{initialValue}} veces</button>`
}).mount('#app')
```

Puedo usar ciertos alias para acelerar funciones del día a día

- .stop
- .prevent
- .capture
- .self
- .passive
- .once

```html
  <!-- Se detendrá la propagación del evento click. -->
  <a v-on:click.stop="hazEsto"></a>

  <!-- El evento de enviar ya no volverá a cargar la página. -->
  <form v-on:submit.prevent="onSubmit"></form>

  <!-- Los modificadores pueden encadenarse -->
  <a v-on:click.stop.prevent="hazEsto"></a>

  <!-- solo el modificador -->
  <form v-on:submit.prevent></form>

  <!-- utilizar el modo de captura al agregar el detector de eventos -->
  <!-- es decir, un evento dirigido a un elemento interno se maneja aquí antes de ser manejado por ese elemento -->
  <div v-on:click.capture="hazEsto">...</div>

  <!-- solo activa el controlador si event.target es el elemento en sí -->
  <!-- es decir, no de un elemento hijo -->
  <div v-on:click.self="hazEso">...</div>
```

Aunque en el curso digan lo contrario (quizás éste feature funciona desde la versión 3), se pueden usar al menos algunas directivas como la de los eventos.

```html
  <div id="app">
    <button type="button" v-on:click="increment">{{initialValue}}</button>
    <!-- Versión simplificada del v-on -->
    <button type="button" @click="increment">{{initialValue}}</button>
  </div>
```
