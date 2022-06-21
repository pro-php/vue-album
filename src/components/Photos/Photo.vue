<template>
    <v-col cols="4">
        <v-card>
            <v-card-title>{{photo.title}}</v-card-title>
            <v-card-text @click="clickPhoto">
                <v-img
                    :src="photo.url"
                    width="200px"
                    height="200px"
                />
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: {
        photo: {
            type: Object,
            required: true,
        }
    },
    methods: {
        ...mapMutations(['setCurrentPhoto', 'showModal']),
        clickPhoto() {
            this.setCurrentPhoto(this.photo);
            this.showModal(true);
            
            //this.$store.commit('setCurrentPhoto', this.photo);
            //this.$store.commit('showModal');
        }
    }
 };
</script>

<style></style>