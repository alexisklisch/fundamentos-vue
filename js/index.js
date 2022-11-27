const initialValue = 0

const vm = Vue.createApp({
  data() {
    return {
      counter: initialValue
    }
  },
  methods:{
    increment() {
      this.counter++
    }
  }
}).mount('#app')

