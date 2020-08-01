<template>
    <v-app>
        <v-main>
            <app-search/>
        </v-main>
    </v-app>
</template>

<script>


    import AppSearch from "./components/Search/Search.component";

    export default {
        name: 'App',
        components: {AppSearch},
        data: () => ({
            //
        }),
    };
</script>
