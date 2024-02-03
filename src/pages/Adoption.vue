<template>
  <Navbar />
  <div class="container">
    <div class="content page">
      <h1>Página de Adoção</h1>
      <h3>Aqui você encontra os Pets que estão disponiveis para adoção</h3>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Adoption",
  components: {
    Navbar,
  },
};
</script>