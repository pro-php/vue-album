import axios from "axios";

export default {
    state: {
        photos: [],
        isShowModal: false,
        currentPhoto: {},
    },
    mutations: {
        setPhotos(state, payload) {
            state.photos = payload;
        },
        setCurrentPhoto(state, payload) {
            state.currentPhoto = payload;
        },
        addPhoto(state, payload) {
            state.photos.push(payload);
        },
        showModal(state, payload) {
            state.isShowModal = payload;
        },
    },
    getters: {
        getAllPhotos(state) {
            return state.photos;
        },
        getShowModal: (state) => state.isShowModal,
        getCurrentPhoto: (state) => state.currentPhoto,
    },
    actions: {
        fetchPhotos(context) {
            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
                .then(response => context.commit('setPhotos', response.data));
        },
    },
}