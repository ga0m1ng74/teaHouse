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
 * fun-tab plugin
 */
import FunTab from 'fun-tab'
import 'fun-tab/dist/index.css'
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

createApp(App)
    .use(router)
    .use(FunTab)
    .use(pinia)
    .use(Vant)
    .mount('#app')