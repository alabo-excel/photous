import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

import { fb } from './firebase'


Vue.config.productionTip = false

fb.auth().onAuthStateChanged(function() {
    // if (!app) {

    // }
})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')