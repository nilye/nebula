import { createApp, h } from "vue";
import Nebula from "@uai-nebula/core";
import App from './App.vue'

const app = createApp(App)

app.use(Nebula, {})
app.mount('#app')

console.log('VUE APP', app)
