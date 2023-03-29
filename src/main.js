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
//


createApp(App).use(router).use(FunTab).mount('#app')