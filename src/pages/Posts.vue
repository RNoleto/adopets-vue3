<template>
  <Navbar />
  <div class="container">
    <div class="content page">
      <h1 class="title">Página com todos os Posts</h1>
      <h2 class="subtitle">Fique por dentro de tudo sobre o mundo animal.</h2>
      <div class="cards">
        <Card class="card" v-for="(post, index) in sortedPosts" :key="index">
          <template v-slot:image>
            <img :src="post.img" :alt="post.title" />
          </template>
          <template v-slot:title>{{ post.title }}</template>
          <template v-slot:date>{{ formatBrasilianDate(post.date) }}</template>
          <template v-slot:description>{{ post.resume }}</template>
          <template v-slot:button></template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Card from "../components/Card.vue";
import axios from "axios";
export default {
  components: {
    Navbar,
    Card,
  },
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    sortedPosts() {
      if (!Array.isArray(this.posts)) {
        this.posts = [];
      }
      return this.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
  },
  methods: {
    formatBrasilianDate(date) {
      const dateObj = new Date(date);
      const day = dateObj.getDate().toString().padStart(2, "0");
      const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
      const year = dateObj.getFullYear();
      return `${day}/${month}/${year}`;
    },
  },
  created() {
    axios
      .get("src/api/adoption.json")
      .then((response) => {
        this.posts = Object.values(response.data.posts);
        console.log("Dados de posts carregados:", this.posts);
      })
      .catch((error) => {
        console.log("Erro ao buscar posts:", error);
      });
  },
};
</script>
<style lang="scss" scoped>
.page {
  padding: 0px 10px;
  .title,
  .subtitle {
    text-align: center;
  }
  .title {
    line-height: 35px;
  }
  .subtitle {
    transform: translateY(0px);
  }
  .cards {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    color: var(--color-4);
    .card {
      width: 350px;
      display: flex;
      flex-wrap: wrap;
      background-color: var(--color-3);
    }
  }
}
@media (min-width: 600px) {
  .page {
    .cards {
      flex-direction: row;
      justify-content: center;
      gap: 10px;
    }
  }
}
</style>