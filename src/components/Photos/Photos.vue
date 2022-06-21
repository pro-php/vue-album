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
export default {
    props: {
        photo: {
            type: Object,
            required: true,
        }
    },
    methods: {
        clickPhoto() {
            console.log('clickPhoto'+this.photo)
            
            this.$emit('clickPhoto', this.photo);
        }
    }
 };
</script>

<style></style>