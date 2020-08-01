<template>
    <v-card v-if="movie" class="mx-auto" max-width="400">
        <v-img class="white--text align-end" height="200px" :src="movie.Poster">
            <v-card-title>{{movie.Title}}</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">{{movie.Released}}</v-card-subtitle>
        <v-card-text class="text--primary">
            <div>{{movie.Genre}}</div>
            <div>{{movie.Plot}}</div>
        </v-card-text>
    </v-card>
</template>

<script>

    export default {
        name: 'app-movie-item',
        props: {
            movie: null
        },
        data: () => ({}),
    }
</script>
