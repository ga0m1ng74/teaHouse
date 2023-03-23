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

createApp(App).use(router).mount('#app')