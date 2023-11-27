<template>
  <Navbar />
  <div class="container">
    <div class="content page">
      <h1 class="title">Página de Posts</h1>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  name: "Posts",
  components: {
    Navbar,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios
      .get("src/api/adoption.json")
      .then((response) => {
        this.posts = response.data.posts;
        console.log("Dados carregado do Json:", this.posts);
      })
      .catch((error) => {
        console.log("Erro ao carregar posts:", error);
      });
  },
};
</script>

<style lang="scss" scoped>
.container {
  .content {
    padding: 0px 10px;
  }
}
</style>