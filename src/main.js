import './css/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vuelidate from 'vuelidate' // Import Vuelidate
import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vuelidate) // Use Vuelidate

const vue = app.mount('#app')

// Initializing AOS after mounting the Vue app
vue.$nextTick(() => {
  AOS.init({
    once: true
  })
})
