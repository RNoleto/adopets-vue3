<template>
  <div class="container">
    <div class="content page">
      <h1>Página individual de cada post</h1>
      <div class="post">
        <h1 class="title">{{ post.title }}</h1>
        <p>{{ post.resume }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostPage",
  data() {
    return {
      postUrl: null,
      post: {},
    };
  },
  mounted() {
    this.postUrl = this.$route.params.url;
    this.getPostByUrl(this.postUrl);
  },
  methods: {
    getPostByUrl(url) {
      axios
        .get("/src/api/adoption.json")
        .then((response) => {
          const posts = response.data.posts;
          this.post = posts.find((post) => post.url === url) || {};
          console.log("Dados do post encontrado:", this.post);
        })
        .catch((error) => {
          console.log("Erro ao carregar post:", error);
        });
    },
  },
};
</script>
