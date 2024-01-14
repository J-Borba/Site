import App from './App.vue'
import { createApp } from 'vue'
import { inject } from '@vercel/analytics'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import '@/style/normalize.css'
import '@/0-Global/assets/icons/index.js'
import '@/0-Global/style/global.scss'
import router from './0-Global/router/index.js'

inject()
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
