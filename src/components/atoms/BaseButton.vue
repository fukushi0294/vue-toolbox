<template>
    <v-btn
        :color="color"
        @click="$emit('click')"
    >
        <span class="base-button-text">{{ text }}</span>
    </v-btn>
</template>

<script>

export default {
    name: "BaseButton",
    props: {
        color: {default: "indigo darken-1", type: String},
        text: {default: "", type: String}
    }
}
</script>

<style scoped>
.base-button-text {
    color: white;
}
</style>