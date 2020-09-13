import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./auth";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth
    },
    strict: true,
    plugins: [createPersistedState({
        key: 'vue-toolbox',
        paths: ['auth.token'],
        storage: window.sessionStorage
    })]
})
