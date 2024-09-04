<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/PageHeader.vue'
import Footer from './components/PageFooter.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* App-level styling */
</style>
