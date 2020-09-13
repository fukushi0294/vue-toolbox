<template>
    <v-app>
        <v-container>
            <v-row no-gutters>
                <v-col cols="2">
                    <Drawer v-if="this.authenticated"/>
                </v-col>
                <v-col>
                    <router-view/>
                </v-col>
            </v-row>
        </v-container>
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
