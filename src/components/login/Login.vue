<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="2">
                <v-card >
                    <v-card-actions>
                        <v-form ref="form">
                            <v-text-field
                                    class="ml-8 mr-8"
                                    label="E-mail"
                                    required/>
                            <v-text-field
                                    class="ml-8 mr-8"
                                    label="Password"
                                    required/>
                            <v-btn
                                    color="success"
                                    class="mr-4"
                            >
                                Sign In
                            </v-btn>
                        </v-form>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {}
    }
}
</script>

<style scoped>

</style>