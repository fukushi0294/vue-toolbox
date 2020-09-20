<template>
    <div>
        <v-btn
                class="mb-4"
                color="indigo darken-1"
                @click="$emit('click')"
        >
            <span class="base-button-text">{{ text }}</span>
        </v-btn>
    </div>
</template>

<script>

export default {
    name: "BaseButton",
    props: {
        text: {default: ""}
    }
}
</script>

<style scoped>
.base-button-text {
    color: white;
}
</style>