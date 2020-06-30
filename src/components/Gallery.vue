<template>
    <div class="row">
      <div class="col-md-3" v-for="item in myGallery" 
      style="cursor:pointer;"
      :key="item.id" @click="selectFavorite(item)">
       <GalleryItem v-bind:photo="item" />
      </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import GalleryItem from './GalleryItem'

export default {
    name: "Gallery",
    components: {
        GalleryItem
    },
    computed: mapGetters(['myGallery']),
    methods: {
        ...mapActions(['fetchPhotos','addFavorite']),
        selectFavorite(photo) {
            this.addFavorite(photo);
            console.log(photo);
        }
    },
    created() {
        this.fetchPhotos();
    }
}
</script>

<style scoped>

</style>