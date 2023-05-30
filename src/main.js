import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './validation'
import { auth } from './firebase'

import './assets/base.css'
import './assets/main.css'

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    const app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(VeeValidatePlugin)

    app.mount('#app')
  }
})
