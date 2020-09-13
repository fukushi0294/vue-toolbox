<template>
    <v-container fluid>
        <v-row justify="center">
            <amplify-authenticator></amplify-authenticator>
        </v-row>
    </v-container>
</template>

<script>
import {AuthState, onAuthUIStateChange} from "@aws-amplify/ui-components";
import {mapMutations} from "vuex";

export default {
    name: 'AuthTemplate',
    created() {
        onAuthUIStateChange((authState, cognitoUser) => {
            const signedIn = authState === AuthState.SignedIn;
            this.isAuthenticated(signedIn);
            if (signedIn) {
                this.setUser(cognitoUser);
                this.$router.push("/dashboard");
            }
        })
    },
    methods: {
        ...mapMutations("auth", ["isAuthenticated", "setUser"])
    }
}
</script>