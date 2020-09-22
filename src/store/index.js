import Vue from 'vue'
import Vuex from 'vuex'
import attendance from "./attendance";
import auth from "./auth";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        attendance ,auth
    },
    strict: true,
    plugins: [createPersistedState({
        key: 'vue-toolbox',
        paths: ['auth.token'],
        storage: window.sessionStorage
    })]
})
