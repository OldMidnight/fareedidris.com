import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import '@/components/_globals'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faTelegram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSpinner, faHome, faBookOpen, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import Vuelidate from 'vuelidate'
import VueMq from 'vue-mq'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(Vuelidate)
Vue.use(VueMq, {
        breakpoints: {
        phone: 700,
        laptop: 1200,
        other: Infinity
    }
})
library.add(faSpinner, faGithub, faTelegram, faTimes, faLinkedin, faTwitter, faHome, faBookOpen, faFolderOpen)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
