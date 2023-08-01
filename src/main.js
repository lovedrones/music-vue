import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './validation'
import { auth } from './firebase'
import Icon from './directives/icon'
import i18n from './i18n'

import './assets/base.css'
import './assets/main.css'

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    const app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(VeeValidatePlugin)
    app.use(i18n)
    app.directive('icon', Icon)

    app.mount('#app')
  }
})
