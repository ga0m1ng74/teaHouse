import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'

/**
 * add router from router/index.js
 */
import router from '@/router'

/**
 * device screen size adaptation
 */
import '@/assets/js/flexible'

/**
 * pinia
 */
import { createPinia } from 'pinia'
const pinia = createPinia()

/**
 * vant
 */
import Vant from 'vant'
import 'vant/lib/index.css'

/**
 * fastclick
 */
import { FastClick } from 'fastclick'
FastClick.attach(document.body)

createApp(App)
    .use(router)
    .use(pinia)
    .use(Vant)
    .mount('#app')