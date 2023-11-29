<template>
  <Navbar />
  <div class="container">
    <div class="content page">
      <div class="post">
        <h1 class="title">{{ post.title }}</h1>
        <p class="subtitle">{{ post.subtitle }}</p>
        <p>{{ post.date }}</p>
        <img :src="post.img" :alt="post.title" />
        <div
          class="paragraph"
          v-for="paragraph in post.content"
          :key="paragraph"
        >
          <p>{{ paragraph }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  components: {
    Navbar,
  },
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
        })
        .catch((error) => {
          console.log("Erro ao carregar post:", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  .content {
    .post {
      .paragraph {
      }
    }
  }
}
</style>
