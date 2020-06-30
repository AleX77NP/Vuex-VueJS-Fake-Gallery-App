<template>
  <div id="app">
    <Header />
  <div class="row">
    <div class="col">
    <AddPhoto />
    </div>
    <div class="col">
    <router-view></router-view>
    </div>
    <div class="col">
    <Favorites />
    </div>
  </div>
  <Footer />
  </div>
</template>

<script>
//import Gallery from './components/Gallery'
import Header from './components/Header'
import Footer from './components/Footer'
import AddPhoto from './components/AddPhoto'
import Favorites from './components/Favorites'
//import About from './components/About'

export default {
  name: 'App',
  components: {
   // Gallery,
    Header,
    Footer,
    AddPhoto,
    Favorites,
   // About
  }
}
</script>

<style>

</style>
