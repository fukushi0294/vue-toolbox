<template>
    <div>
        <v-form
                ref="form">
            User name
            <v-text-field
                    class="mt-4 mb-4"
                    dense
                    solo
                    required/>
            Password
            <v-text-field
                    class="mt-4 mb-4"
                    dense
                    solo
                    required/>
            <v-layout justify-center align-center>
                <BaseButton text="Sign In"/>
            </v-layout>
        </v-form>
    </div>
</template>

<script>
import BaseButton from "../../common/atoms/BaseButton";

export default {
    name: "LoginForm",
    components: {
        BaseButton
    }
}
</script>

<style scoped>

</style>