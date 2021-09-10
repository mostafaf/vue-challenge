import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    version: ""
  },
  mutations: {
    setVersion (state) {
      state.version = "0.1.0"
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
