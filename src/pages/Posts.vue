<template>
  <Navbar />
  <div class="container">
    <div class="content page">
      <h1 class="title">Página de Posts</h1>
      <Card class="card" v-for="(post, index) in posts" :key="index">
        <template v-slot:image>
          <img class="card-image" :src="post.img" :alt="post.title" />
        </template>
        <template v-slot:title>{{ post.title }}</template>
        <template v-slot:date>{{ formatBrazilianDate(post.date) }}</template>
        <template v-slot:description>{{ post.resume }}</template>
        <template v-slot:button></template>
      </Card>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Card from "@/components/Card.vue";
import axios from "axios";
export default {
  name: "Posts",
  components: {
    Navbar,
    Card,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    formatBrazilianDate(date) {
      const dateObj = new Date(date);
      const day = dateObj.getDate().toString().padStart(2, "0");
      const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
      const year = dateObj.getFullYear();
      return `${day}/${month}/${year}`;
    },
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
    .card {
      background-color: var(--color-3);
      &-image {
        width: 100%;
        height: auto;
        border-radius: 0px 0px 15px 15px;
        box-shadow: 3px 3px 5px rgba($color: #000000, $alpha: 0.25);
      }
    }
  }
}
</style>