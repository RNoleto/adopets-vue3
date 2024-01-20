<template>
  <Navbar />
  <div class="container">
    <div class="content page">
      <div class="post">
        <h1 class="title">{{ post.title }}</h1>
        <p class="subtitle">{{ post.subtitle }}</p>
        <p class="date">{{ post.date }}</p>
        <img :src="post.img" :alt="post.title" />
        <div class="paragraphs">
          <p v-for="paragraph in post.content" :key="paragraph">
            {{ paragraph }}
          </p>
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
    padding: 0px 10px;
    .post {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 18px;
      }
      .subtitle {
        font-size: 14px;
      }

      img {
        margin: 10px 0px;
        width: 100%;
      }
      .paragraphs {
        display: flex;
        flex-direction: column;
        gap: 10px;
        p {
          text-align: justify;
          line-height: 20px;
        }
      }
    }
  }
}
@media (min-width: 600px) {
  .container {
    padding: 2rem 0rem;
    .content {
      .post {
        .title {
          font-size: 24px;
        }
        img {
          height: 350px;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }
}
</style>
