<template>
    <v-container fluid>
        <v-app-bar
        app
        color="green"
        dark
        >
            <v-spacer />
            <v-btn outlined class="ml-3">
                <router-link to="/">Главная</router-link>
            </v-btn>
            <v-btn outlined class="ml-3">
                <router-link to="/photos">Фотографии</router-link>
            </v-btn>
        </v-app-bar>
    </v-container>
</template>>