import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from "../components/login/Login";
import Dashboard from "../components/dashboard/Dashboard";
import Settings from "../components/settings/Settings";
import AuthContext from "./AuthContext";

Vue.use(VueRouter);

const routes = [
    {
        path: '/', redirect: '/login'
    },
    {
        path: "/login", component: Login
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
})

function isAuthRequiredPath(path) {
    return path.matched.some(record => record.meta.requiresAuth);
}

function isUserLoggedIn() {
    return AuthContext.loggedIn;
}

export default router
