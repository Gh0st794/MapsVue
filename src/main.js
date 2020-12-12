import Vue from 'vue'
import App from './App.vue'
import VueGeolocation from 'vue-browser-geolocation'

Vue.config.productionTip = false
Vue.use(VueGeolocation)

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCns9qTHyD7PLX0FrIJOWXWKKaBLgHU-ec'
  }
})

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
