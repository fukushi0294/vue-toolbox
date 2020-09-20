<template>
    <v-app-bar
        dense
        color="white"
        app>
        <v-spacer></v-spacer>
        <v-toolbar-title class="pa-md-4">{{`User : ${username}`}}
        </v-toolbar-title>
        <base-button text="Sign Out"></base-button>
    </v-app-bar>
</template>

<script>
import BaseButton from "./atoms/BaseButton";
import {mapState} from "vuex";

export default {
    name: 'AppVar',
    components: {
        BaseButton
    },
    computed:{
        ...mapState('auth', ["username"])
    }
};

</script>