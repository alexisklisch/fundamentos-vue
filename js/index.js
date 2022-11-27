const vm = Vue.createApp({
  data() {
    return {
      src: 'Mi link'
    }
  },
  template: `
    <p>{{src}}</p>
    <input v-model="src"/>
    <img :src="src" />
  `
}).mount('#app')

