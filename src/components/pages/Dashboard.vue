<template>
    <div>
        <v-container>
            <v-data-table
                :headers="headers"
                :items="Object.values(syncData)"
                item-key="date"
                class="elevation-1"
                disable-pagination
                hide-default-footer
                @click:row="onRowItemClicked"
            >
            </v-data-table>
        </v-container>
        <crud-menu ref="crud-menu"></crud-menu>
    </div>
</template>

<script>
import moment from "moment";
import CrudMenu from "../organisms/CrudMenu";
import {mapActions, mapState} from "vuex";

export default {
    name: 'Dashboard',
    components: {
        CrudMenu
    },
    data() {
        return {
            dateRecordsMap: {}
        }
    },
    computed: {
        ...mapState("attendance", ["attendanceItemMap"]),
        headers() {
            return [
                {text: 'Date', align: 'start', sortable: false, value: 'date'},
                {text: 'start time', value: 'start'},
                {text: 'end time', value: 'end'},
                {text: 'break time', value: 'break'},
                {text: 'sum', value: 'sum'},
            ]
        },
        syncData() {
            const storeData = this.attendanceItemMap;
            if (storeData.size !== 0) {
                storeData.forEach((value, key) =>
                    this.dateRecordsMap[[key]] = value
                );
            }
            return this.dateRecordsMap;
        }
    },
    mounted() {
        const now = moment();
        this.initializeTimeRecords(now);
        this.loadRecordByMonth({month: now.month() + 1});
    },
    methods: {
        ...mapActions("attendance", ["loadRecordByMonth"]),
        initializeTimeRecords(now) {
            const range = Array.from({length: now.daysInMonth()}, (_, i) => ++i);
            this.dateRecordsMap = range.reduce((map, day) => {
                const date = `${now.year()}-${now.month() + 1}-${day}`;
                const key = moment(date).format("YYYY/MM/DD");
                map[key] = {
                    date: key,
                    start: null,
                    end: null,
                    break: null,
                    sum: null
                };
                return map;
            }, {});
        },
        onRowItemClicked(item) {
            this.$refs["crud-menu"].open(item.date);
        }
    }
}
</script>
