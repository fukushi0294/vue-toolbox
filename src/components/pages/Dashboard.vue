<template>
    <v-container>
        <v-data-table
            :headers="headers"
            :items="Object.values(dateRecordsMap)"
            item-key="date"
            class="elevation-1"
            :search="search"
            disable-pagination
            hide-default-footer
            @click:row="onRowItemClicked"
        >
            <template v-slot:top>
                <v-text-field v-model="search" label="Search (UPPER CASE ONLY)" class="mx-4"></v-text-field>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
import {API, graphqlOperation} from 'aws-amplify';
import {listRecords} from "../../graphql/queries";
import moment from "moment";

export default {
    name: 'Dashboard',
    data() {
        return {
            search: '',
            calories: '',
            records: {},
            dateRecordsMap: {}
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
            alert("clicked");
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
        },
    }
}
</script>
