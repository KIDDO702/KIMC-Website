<template>
  <Navigation />

  <header class="relative"> 
    <img src="http://localhost:5000/about/header.jpg" alt="header">
    <div class="absolute inset-0 bg-blue-dark bg-opacity-40"></div>
  </header>

  <section class="py-20">
    <div class="container">
      <RouterView />
    </div>
  </section>
  <Footer />
</template>


<script>
  import Navigation from '../components/Navigation.vue';
  import Footer from '../components/Footer.vue';
  import { RouterView } from 'vue-router';

  export default {
    components: {
      Navigation, 
      Footer,
      RouterView
    }
  }
</script>