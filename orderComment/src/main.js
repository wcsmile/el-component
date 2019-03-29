import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import Vuex from 'vuex'
import store from './store/store'

Vue.use(Vant)
Vue.use(MuseUI)
Vue.use(Vuex)

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})