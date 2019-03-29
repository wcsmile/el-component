import Vuex from 'vuex'
import Vue  from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({

    state: {
        remarkText: [],
        inputText: ''
    },
    mutations: {
        setRemarkText(state, val) { state.remarkText = val },
        setInputText(state, val) { state.inputText = val }
    }
})