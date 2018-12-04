import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import '@/components/_globals'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faTelegram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSpinner, faHome, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import Vuelidate from 'vuelidate'
import VueMq from 'vue-mq'

Vue.use(Vuelidate)
Vue.use(VueMq, {
        breakpoints: {
        phone: 600,
        laptop: 1200,
        other: Infinity
    }
})
library.add(faSpinner, faGithub, faTelegram, faLinkedin, faTwitter, faHome, faBookOpen, faFolderOpen)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
