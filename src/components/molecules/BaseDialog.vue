<template>
    <v-dialog v-model="dialog"
              :width="width"
              persistent>
        <v-card>
            <v-card-text>
                <slot name="content"></slot>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <slot name="footer"></slot>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "BaseDialog",
    data() {
        return {
            dialog: false,
        }
    },
    props: {
        width: {default: 700, type: Number}
    },
    methods: {
        open() {
            this.dialog = true;
        },
        close() {
            this.dialog = false;
        }
    }
}
</script>