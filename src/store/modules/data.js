import axios from 'axios'

const state = {
    photos: [],
    favorites: []
}

const getters = {
    myGallery: state => state.photos,
    myFavorites: state => state.favorites
};

const actions = {

    async fetchPhotos({commit}) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=50`);
        console.log(response.data);
        commit('setGallery',response.data);
    },
    async addPhoto({commit},newPhoto) {
        const response = await axios.post(`https://jsonplaceholder.typicode.com/photos`,{newPhoto});
        console.log(response);
        commit('addNew',newPhoto);
    },
    addFavorite({commit},photo) {
        console.log(photo);
        commit('addFav',photo);
    }
};

const mutations = {
    setGallery: (state,photos) => state.photos = photos,
    addNew: (state,photo) => state.photos.unshift(photo),
    addFav: (state,photo) => state.favorites = [...state.favorites, photo],

};



export default {
    state,
    getters,
    actions,
    mutations
};