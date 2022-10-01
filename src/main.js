import { createApp } from 'vue'
import './css/style.css'
import './css/markdown.css'
import App from './App.vue'
import Router from './routers'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import ImportGlobalComponent from './plugins/ImportGlobalComponent'

const app = createApp(App)
app.use(Router)


const Pinia = createPinia()
Pinia.use(piniaPluginPersist)
app.use(Pinia)

app.use(ImportGlobalComponent)

app.mount('#app')
