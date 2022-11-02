import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faMagnifyingGlass, faXmark, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faXmark, faArrowUp, faArrowDown)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
