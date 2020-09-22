<template>
    <base-dialog ref="dialog">
        <template v-slot:content>
            <v-container>
                <v-row>
                    {{ dateKey }}
                </v-row>
                <v-row justify="center">
                    <span v-for="(item, index) in Object.keys(editableItemMap)" :key="index">
                        <v-col>
                            {{item}}
                        </v-col>
                        <v-col>
                            <vue-timepicker
                                name="start"
                                v-model="editableItemMap[[item]]"
                            ></vue-timepicker>
                        </v-col>
                    </span>
                </v-row>
                <v-row justify="center">
                    <v-col cols="9">
                        <v-textarea
                            label="Remark"
                            dense
                            placeholder="Enter the reason or memo"
                            rows="2"
                            :value="remark"
                        ></v-textarea>
                    </v-col>
                </v-row>
            </v-container>
        </template>
        <template v-slot:footer>
            <v-btn color="blue darken-1" text @click="$refs.dialog.close()">Close</v-btn>
            <v-btn color="blue darken-1" text @click="$refs.dialog.close()">Save</v-btn>
        </template>
    </base-dialog>
</template>

<script>
import BaseDialog from "../molecules/BaseDialog";
import VueTimepicker from 'vue2-timepicker';
import 'vue2-timepicker/dist/VueTimepicker.css';

export default {
    name: "CrudMenu",
    components: {
        BaseDialog, VueTimepicker
    },
    data() {
        return {
            dateKey: "",
            editableItemMap: {
                stateTime: "",
                endTime: "",
                breakTime: "00:00"
            },
            remark: ""
        }
    },
    methods: {
        open(dateKey) {
            this.dateKey = dateKey;
            this.$nextTick(() => this.$refs.dialog.open());
        }
    }
}
</script>
