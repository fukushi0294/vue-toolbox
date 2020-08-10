<template>
    <v-app>
        <v-app>
            <Drawer v-if="isLoggedIn"/>
            <router-view/>
        </v-app>
    </v-app>
</template>

<script>
import Drawer from "./Drawer";
import AuthContext from "../router/AuthContext";

export default {
    name: 'App',
    components: {
        Drawer
    },
    computed: {
        isLoggedIn(){
            return AuthContext.isLoggedIn();
        }
    }
};
</script>
