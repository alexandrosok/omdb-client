<template>
    <v-container>
        <v-row>
            <v-col class="search-container" cols="12" sm="6" md="3">
                <v-text-field
                        @input="searchMovie($event)"
                        label="Search Movie"
                ></v-text-field>
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
                                :rules="[this.isYear]"
                                label="Year"
                                v-model="year"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-btn @click="clearFilters()">Clear</v-btn>
                    </v-col>
                </v-row>
                <app-movie-item :movie="movie"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    import './search.style.css';
    import _ from 'lodash';
    import HttpMovie from "../../Services/HttpMovie.service";
    import AppMovieItem from "../Movie/movie-item.component";

    export default {
        name: 'app-search',
        components: {AppMovieItem},
        data: () => ({
            HttpMovie,
            movie: null,
            type: null,
            items: ['movie', 'series', 'episode'],
            year: null,
            isYear: value => parseInt(value, 10) || 'Numbers Only',
        }),
        beforeMount() {
            this.HttpMovie = new HttpMovie(this.$http)
        },
        methods: {
            HttpSearchMovie(term) {
                this.HttpMovie.SearchMovie(term, this.type, this.year)
                    .then((response) => {
                        this.movie = response.movie;
                    })
            },
            clearFilters() {
                this.type = null;
                this.year = null;
            },
            searchMovie: _.throttle(function (term) {
                if (term) {
                    this.HttpSearchMovie(term);
                }
            }, 2000)
        }
    }
</script>
