import { createApp } from 'vue'
import App from './App.vue'
// import '@/style/normalize.css'
import '@/style/global.scss'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/assets/icons/index'
import { inject } from '@vercel/analytics'

inject()
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
