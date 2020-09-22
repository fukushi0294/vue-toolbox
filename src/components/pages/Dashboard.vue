<template>
    <div>
        <v-container>
            <v-data-table
                :headers="headers"
                :items="Object.values(dateRecordsMap)"
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
import {API, graphqlOperation} from 'aws-amplify';
import {listRecords} from "../../graphql/queries";
import moment from "moment";
import CrudMenu from "../organisms/CrudMenu";

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
        headers() {
            return [
                {text: 'Date', align: 'start', sortable: false, value: 'date'},
                {text: 'start time', value: 'start'},
                {text: 'end time', value: 'end'},
                {text: 'break time', value: 'break'},
                {text: 'sum', value: 'sum'},
            ]
        }
    },
    async mounted() {
        this.initializeTimeRecords();
        const records = await API.graphql(graphqlOperation(listRecords));
        if (Array.isArray(records)) {
            records.forEach(record => {
                const key = record.date;
                this.dateRecordsMap[key] = {
                    date: record.date,
                    start: record.start,
                    end: record.end,
                    break: record.break,
                    sum: this.getTotalTime(record)
                }
            });
        }
    },
    methods: {
        initializeTimeRecords() {
            const now = moment();
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
        getTotalTime(record) {
            return record.end - record.start - record.sum;
        },
        onRowItemClicked(item) {
            this.$refs["crud-menu"].open(item.date);
        }
    }
}
</script>
