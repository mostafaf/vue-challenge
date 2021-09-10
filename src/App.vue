<template>
  <div id="app">
    <Navbar />
      <router-view />
    <Footer />
  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  color: #000 !important;
  text-decoration: none;
}

a:hover {
  text-decoration: none !important;
}
</style>
