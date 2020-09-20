<template>
    <v-container fluid >
        <v-card class="pa-md-0">
            <v-navigation-drawer
                left
                :dark="true"
                app
                permanent>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            Application
                        </v-list-item-title>
                        <v-list-item-subtitle>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list
                    dense
                    nav
                >
                    <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title @click="onDrawerClicked(item.title)">{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {title: 'Dashboard', icon: 'mdi-view-dashboard'},
                {title: 'Notes', icon: 'mdi-check'},
                {title: 'Schedule', icon: 'mdi-calendar'},
                {title: 'Settings', icon: 'mdi-image'}
            ],
        }
    },
    methods: {
        onDrawerClicked(itemTitle) {
            const path = `/${itemTitle.toLowerCase()}`;
            if(this.$route.path !== path){
                this.$router.push(path);
            }
        }
    }
}
</script>