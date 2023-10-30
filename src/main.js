import './css/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vuelidate from 'vuelidate' // Import Vuelidate

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vuelidate) // Use Vuelidate

app.mount('#app')
