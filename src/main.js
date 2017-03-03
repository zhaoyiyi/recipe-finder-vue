// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'

import { nutrition, roundNumber } from './filters'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.filter('nutrition', nutrition)
Vue.filter('roundNumber', roundNumber)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
