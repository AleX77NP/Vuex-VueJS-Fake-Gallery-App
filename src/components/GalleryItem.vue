<template>
    <div class="card">
        <img :src="photo.url" class="card-img-top">
    <div class="card-body">
        <h4 class="title">{{photo.id}}</h4>
    </div>
    </div>
</template>

<script>
export default {
    name: "GalleryItem",
    props: ['photo']
}
</script>


<style scoped>
.card {
    margin-bottom: 15px;
}
.title {
    text-align: center;
}
</style>