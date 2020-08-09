import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from "../components/dashboard/Dashboard";
import Settings from "../components/settings/Settings";

Vue.use(VueRouter);

const routes = [
    {
        path: "/dashboard", component: Dashboard
    },
    {
        path: "/settings", component: Settings
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
