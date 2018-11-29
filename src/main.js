import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import '@/components/_globals'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
library.add(faSpinner)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
