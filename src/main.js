import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBuilding, faHouse, faRepeat, faTruck } from '@fortawesome/free-solid-svg-icons'

import './assets/main.scss'

library.add(faBuilding,faRepeat,faHouse,faTruck)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
