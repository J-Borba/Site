import { createApp } from 'vue'
import App from './App.vue'
import '@/style/global.scss'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faLinkedin, faCopyright, faToggleOn, faToggleOff, faCircleChevronDown, faEnvelope, faHome)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
