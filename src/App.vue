<template>
  <div id="app">
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
</style>
