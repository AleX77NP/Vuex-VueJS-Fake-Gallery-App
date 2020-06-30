<template>
    <div>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Gallery</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link"><router-link to="/">Dashboard</router-link> <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link"><router-link to="about">About</router-link></a>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
export default {
    name: "Header"
    
}
</script>


<style scoped>

</style>