<template>
    <div style="margin-left:30px">
        <h3 style="text-align:center">Add new</h3>
        <form @submit="onSubmit">
  <div class="form-group">
    <label for="example2">Image URL:</label>
    <input type="text" class="form-control" name="url" placeholder="Image url" v-model="url">
  </div>
  <div class="form-group">
    <label for="example2">Thumbnail:</label>
    <input type="text" class="form-control" name="thumbnail" placeholder="Thumbnail url" v-model="thumbnail">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'


export default {
    name: "AddPhoto",
    data() {
       return {
           url: '',
           thumbnail: ''
       }
    },
    methods: {
        ...mapActions(['addPhoto']),
        onSubmit(e) {
            e.preventDefault();
            const newPhoto = {
                albumId:0,
                id: 0,
                url: this.url,
                thumbnail: this.thumbnail
            }
            this.addPhoto(newPhoto);
        }
    }
}
</script>

<style scoped>

</style>