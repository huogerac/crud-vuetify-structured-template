import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

//filters
import { shortDateFilter } from './filters/dateFilter'
Vue.filter('shortDateFilter', shortDateFilter)

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
