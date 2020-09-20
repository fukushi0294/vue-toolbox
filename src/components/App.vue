<template>
    <v-app>
        <AppVar></AppVar>
        <Drawer v-if="authenticated"/>
        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import AppVar from "./AppVar"
import Drawer from "./Drawer";
import {mapState} from "vuex";

export default {
    name: 'App',
    components: {
        AppVar,Drawer
    },
    computed: {
        ...mapState('auth', ["authenticated"])
    }
};
</script>
