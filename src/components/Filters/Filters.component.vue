<template>
    <v-row>
        <v-col>
            <v-combobox
                    v-model="type"
                    :items="items"
                    label="Type"
            ></v-combobox>
        </v-col>
        <v-col>
            <v-text-field
                    label="Year"
                    v-model="year"
            ></v-text-field>
        </v-col>
        <v-col>
            <v-btn @click="clearFilters()">Clear</v-btn>
        </v-col>
    </v-row>
</template>

<script>

    import {MovieTypes} from "../../StaticData/MovieTypes";

    export default {
        name: 'app-filters',
        props: {
            movie: null
        },
        data: () => ({
            type: null,
            items: MovieTypes,
            year: null
        }),
        methods: {
            clearFilters() {
                this.type = null;
                this.year = null;
            }
        }
    }
</script>
