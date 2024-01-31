<template>
  <Navbar />
  <div class="container">
    <div class="content page">
      <h1>Página About</h1>
    </div>
    <teste />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Teste from "../components/Teste.vue";
export default {
  components: {
    Navbar,
    Teste,
  },
};
</script>
