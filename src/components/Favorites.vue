<template>
<div style="margin-right:20px;">
    <h3 style="text-align:center;">My Favorites
    </h3>
<div class="row" v-if="myFavorites.length>0">
    <div class="col-md-3" v-for="item in myFavorites" :key="item.id">
       <GalleryItem v-bind:photo="item" />
      </div>
      </div>
      <div v-else class="row">
          <div class="col">
          <h4 style="text-align:center;">No favorites yet</h4></div>
      </div>
      </div>
    
</template>

<script>
import {mapGetters} from 'vuex'
import GalleryItem from './GalleryItem'

export default {
    name: "Favorites",
    components: {
        GalleryItem
    },
    computed: mapGetters(['myFavorites']),
    created() {
        console.log(mapGetters(['myFavorites']))
    }
}
</script>

<style scoped>

</style>