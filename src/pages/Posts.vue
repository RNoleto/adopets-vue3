<template>
  <Navbar />
  <div class="container">
    <div class="content page">
      <h1 class="title">Página de Posts</h1>
      <div class="cards">
        <Card
          class="card"
          v-for="(post, index) in posts"
          :key="index"
          :url="post.url"
        >
          <template v-slot:image>
            <img class="card-image" :src="post.img" :alt="post.title" />
          </template>
          <template v-slot:title>{{ post.title }}</template>
          <template v-slot:date>{{ formatBrazilianDate(post.date) }}</template>
          <template v-slot:description>{{ post.resume }}</template>
          <template v-slot:button>
            <div class="btn" @click="navigateToPost(post.url)" v-if="post.url">
              Ver Mais
            </div>
          </template>
        </Card>
      </div>
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
    navigateToPost(postUrl) {
      this.$router.push({ name: "PostPage", params: { url: postUrl } });
    },
  },
  mounted() {
    axios
      .get("src/api/adoption.json")
      .then((response) => {
        this.posts = response.data.posts;
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
    .cards {
      margin-top: 10px;
      max-width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      .card {
        width: 100%;
        max-width: 380px;
        background-color: var(--color-3);
        &-image {
          width: 100%;
          height: auto;
          border-radius: 0px 0px 15px 15px;
          box-shadow: 3px 3px 5px rgba($color: #000000, $alpha: 0.25);
        }
        .btn {
          background-color: var(--color-1);
          color: #fff;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
          text-align: center;
          &-hover {
            background-color: var(--color-2);
          }
        }

      }
    }
  }
}
@media (min-width: 600px) {

  .container {
    .content {
      .cards {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }
    }
  }
}
@media (min-width: 1200px) {
  .container {
    .content {
      .cards {
        justify-content: space-between;
      }

    }
  }
}
</style>