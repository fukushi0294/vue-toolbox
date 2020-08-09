<template>
    <v-app>
        <v-app-bar
                app
                color="primary"
                dark
        >
        </v-app-bar>
        <Drawer/>
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>
import Drawer from "./Drawer";

export default {
    name: 'App',
    components: {
        Drawer
    }
};
</script>
