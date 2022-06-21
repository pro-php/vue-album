<template>
    <v-container>
        <PhotoForm v-if="getPhotos.length < 11" />
        <div v-else>Вы добавили максимум фото</div>
        <v-row>
            <Photo 
                v-for="photo in getPhotos" :key="photo.id"
                :photo="photo"
            />
        </v-row>
        <PhotoModal />
    </v-container>
</template>

<script>
import Photo from '@/components/Photos/Photo.vue';
import PhotoForm from '@/components/Photos/PhotoForm.vue';
import PhotoModal from '@/components/Photos/PhotoModal.vue';
import { mapActions } from 'vuex';

    export default {
        components: {
        Photo,
        PhotoForm,
        PhotoModal
    },
    data: () => ({
        photos: [],
    }),
    mounted() {
        this.fetchPhotos();
        //this.$store.dispatch('fetchPhotos');
    },
    computed: {
        getPhotos() {
            return this.$store.getters.getAllPhotos;
        }
    },
    methods: {
        ...mapActions(['fetchPhotos']),
    }
};
</script>

<style></style>