<template>
    <v-container>
        <v-row class="d-flex">
            <v-text-field v-model="title"></v-text-field>
            <v-file-input v-model="photoFile"></v-file-input>
            <v-btn @click="addNewPhoto">Добавить</v-btn>
        </v-row>
    </v-container>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data: () => ({
        title: '',
        photoFile: null,
    }),
    methods: {
        ...mapMutations(['addPhoto']),
        addNewPhoto() {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                const photo = {
                    id: Date.now(),
                    title: this.title,
                    url: fileReader.result
                }

                this.addPhoto(photo);
            }
            fileReader.readAsDataURL(this.photoFile)
        }
    }
};
</script>

<style></style>