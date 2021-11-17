import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router'

import VueSplide from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, fas)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(VueSplide)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
