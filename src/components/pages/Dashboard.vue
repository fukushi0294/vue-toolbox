<template>
    <v-container>
        <v-data-table
            :headers="headers"
            :items="records"
            item-key="date"
            class="elevation-1"
            :search="search"
        >
            <template v-slot:top>
                <v-text-field v-model="search" label="Search (UPPER CASE ONLY)" class="mx-4"></v-text-field>
            </template>
            <template v-slot:body.append>
                <tr>
                    <td></td>
                    <td>
                        <v-text-field v-model="calories" type="number" label="Less than"></v-text-field>
                    </td>
                    <td colspan="4"></td>
                </tr>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
import {API, graphqlOperation} from 'aws-amplify';
import {listRecords} from "../../graphql/queries";

export default {
    name: 'Dashboard',
    data() {
        return {
            search: '',
            calories: '',
            records: [
                {
                    date: '2020-08-01',
                    start: "09:00",
                    end: "17:00",
                    break: 60,
                    sum: 480,
                },
                {
                    date: '2020-08-02',
                    start: "09:00",
                    end: "17:00",
                    break: 60,
                    sum: 480,
                },
                {
                    date: '2020-08-03',
                    start: "09:00",
                    end: "17:00",
                    break: 60,
                    sum: 480,
                }
            ],
        }
    },
    async mounted() {
        const records = await API.graphql(graphqlOperation(listRecords));
        if(Array.isArray(records)){
            this.records = records.map(record => {
                return {
                    date: record.id,
                    start: record.start,
                    end: record.end,
                    break: record.break,
                    sum: this.getTotalTime(record)
                };
            });
        }
    },
    methods: {
        getTotalTime(record) {
            return record.end - record.start - record.sum;
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
