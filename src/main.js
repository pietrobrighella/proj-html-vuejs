import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBuilding, faClock, faGlobe, faHouse, faPhone, faRepeat, faSuitcase, faTruck, faUsers } from '@fortawesome/free-solid-svg-icons'

import './assets/main.scss'

library.add(faBuilding,faRepeat,faHouse,faTruck,faSuitcase,faUsers,faGlobe,faPhone,faClock)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
