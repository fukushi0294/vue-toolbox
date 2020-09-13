<template>
    <v-app>
        <v-app>
            <Drawer v-if="this.authenticated"/>
            <router-view/>
        </v-app>
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
        ...mapState('auth',["authenticated"])
    }
};
</script>
