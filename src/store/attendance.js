import {API, graphqlOperation} from "aws-amplify";
import {listRecords} from "../graphql/queries";
import {createRecord} from "../graphql/mutations";

export default {
    namespaced: true,
    state: {
        attendanceItemMap: new Map(),
        month: ""
    },
    getters: {
        getIndividualItem(state, key) {
            if (state.attendanceItemMap.has(key)) {
                return state.attendanceItemMap.get(key);
            }
            return null;
        }
    },
    mutations: {
        setMonthOnDashboard(state, data) {
            state.attendanceItemMap.clear();
            state.month = data;
        },
        setAttendanceItemInMap(state, {key: key, value: value}) {
            state.attendanceItemMap.set(key, value);
        },
    },
    actions: {
        async loadRecordByMonth({commit}, payload) {
            const filter = {month: {eq: payload.month}};
            const records = await API.graphql(graphqlOperation(listRecords, {filter: filter}));
            if (Array.isArray(records)) {
                records.forEach(record => {
                    const key = record.date;
                    const value = {
                        date: record.date,
                        start: record.start,
                        end: record.end,
                        break: record.break
                    }
                    commit("setAttendanceItemInMap", {key: key, value: value});
                });
            }
        },
        async createNewRecord({commit}, payload) {
            const record = {id: "", ...payload};
            await API.graphql(graphqlOperation(createRecord, {input: record}));
            commit("setAttendanceItemInMap", {key: payload.date, value: payload});
        }
    }
}