import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from "../components/dashboard/Dashboard";
import Settings from "../components/settings/Settings";
import AuthTemplate from "../components/login/AuthTemplate";
import {Auth} from "aws-amplify";

Vue.use(VueRouter);

const routes = [
    {
        path: '/', redirect: '/login'
    },
    {
        path: "/login", component: AuthTemplate
    },
    {
        path: "/dashboard", component: Dashboard, meta: {requiresAuth: true}
    },
    {
        path: "/settings", component: Settings, meta: {requiresAuth: true}
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (isAuthRequiredPath(to) && !isUserLoggedIn()) {
        next({path: '/login', query: {redirect: to.fullPath}});
    } else {
        next();
    }
});

function isAuthRequiredPath(path) {
    return path.matched.some(record => record.meta.requiresAuth);
}

async function isUserLoggedIn() {
    if(Vue.prototype.$store.state.auth.authenticated){
        return true;
    }
    const credentials = await Auth.currentCredentials();
    return credentials.authenticated;
}

export default router
