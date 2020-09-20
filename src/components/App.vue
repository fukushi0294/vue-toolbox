<template>
    <v-app>
        <Drawer v-if="authenticated"/>
        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Drawer from "./Drawer";
import {mapState} from "vuex";

export default {
    name: 'App',
    components: {
        Drawer
    },
    computed: {
        ...mapState('auth', ["authenticated"])
    }
};
</script>
