import Vue from 'vue';
import App from './components/App.vue';
import '@aws-amplify/ui-vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import {Amplify} from 'aws-amplify';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
