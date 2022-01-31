import Vue from 'vue'
import App from './App.vue'
import router from './_router/router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './_store'
import VueSplitGrid from 'vue-split-grid'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSplitGrid)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
