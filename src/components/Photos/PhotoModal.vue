<template>
      <v-dialog
        :value="getShowModal"
        @input="closeModal"
        scrollable
        max-width="500px"
        @click:outsite="closeModal"
      >
        <v-card>
          <v-card-title>{{getFullTitle}}</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
                <v-img
                    :src="getCurrentPhoto.url"
                />
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              color="blue darken-1"
              text
              @click="closeModal"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>

<script>
export default {
    data: () => ({}),
    computed: {
        getCurrentPhoto() {
            return this.$store.getters.getCurrentPhoto ?? {};
        },
        getFullTitle() {
            return 'Фото ' + this.getCurrentPhoto.title;
        },
        getShowModal() {
            return this.$store.getters.getShowModal;
        }
    },
    methods: {
        closeModal() {
            this.$store.commit('showModal', false);
        }
    }
 };
</script>

<style></style>