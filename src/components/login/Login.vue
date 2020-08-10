<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="2">
                <v-card>
                    <v-layout justify-center>
                        <v-card-actions>
                            <LoginForm/>
                        </v-card-actions>
                    </v-layout>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import LoginForm from "./organism/LoginForm";

export default {
    name: "Login",
    components: {
        LoginForm
    },
    data() {
        return {}
    }
}
</script>

<style scoped>

</style>