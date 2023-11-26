<template>
  <Banner />
  <div class="container">
    <div class="content page">
      <h1 class="title">Adote um Amigo</h1>
      <h2 class="subtitle">A Importância da Adoção Animal</h2>
      <div class="text">
        <p>
          Ao escolher a adoção de animais, você não apenas enriquece sua vida
          com a companhia de um novo amigo, mas também contribui para um mundo
          mais compassivo e sustentável. A adoção animal é um ato que vai além
          do simples ato de levar um pet para casa; é um compromisso de amor e
          responsabilidade.
        </p>
        <p>
          Ao optar por adotar, você oferece uma segunda chance a um animal que
          busca um lar amoroso. Milhões de animais em abrigos esperam
          ansiosamente por alguém para compartilhar carinho e felicidade. Além
          disso, a adoção contribui para a redução do abandono e do
          superlotamento em abrigos, ajudando a criar uma sociedade mais
          consciente.
        </p>
        <p>
          Na nossa plataforma, facilitamos a conexão entre animais adoráveis e
          pessoas generosas. Ao adotar, você promove a ideia de que todos os
          seres merecem um lar seguro e carinhoso. Juntos, podemos construir um
          futuro onde cada patinha encontre o caminho para um lar amoroso.
        </p>
        <p>
          Adote hoje e descubra a alegria de ter um companheiro leal ao seu
          lado. Sua decisão faz a diferença na vida de um animal e no mundo que
          compartilhamos. Junte-se a nós na jornada da adoção animal e faça
          parte de uma comunidade comprometida com o bem-estar dos nossos amigos
          peludos.
        </p>
      </div>
    </div>
    <section class="blog">
      <div class="content">
        <h2 class="title">Blog Adopet</h2>
        <div class="cards">
          <Card class="card" v-for="(post, index) in sortedPosts" :key="index">
            <template v-slot:image
              ><img class="card-image" :src="post.img" :alt="post.title"
            /></template>
            <template v-slot:title>{{ post.title }}</template>
            <template v-slot:date
              ><p>
                {{ formatBrazilianDate(post.date) }}
              </p></template
            >
            <template v-slot:description>{{ post.resume }}</template>
            <template v-slot:button> </template>
          </Card>
        </div>
      </div>
    </section>
    <section class="services">
      <div class="content">
        <h1>Serviços</h1>
        <Services />
      </div>
    </section>
  </div>
</template>
<script>
import Banner from "../components/Banner.vue";
import Card from "../components/Card.vue";
import Services from "../components/Services.vue";
import axios from "axios";
export default {
  components: {
    Banner,
    Card,
    Services,
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
    formatBrazilianDate(date) {
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
      })
      .catch((error) => {
        console.log("Erro ao buscar posts:", error);
      });
  },
};
</script>
<style lang="scss" scoped>
.container {
  .content {
    padding: 0px 10px;
    .text {
      padding: 1rem 0px;
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      text-align: justify;
    }
  }
  //Sessão de Blog
  .blog {
    padding: 10px 0px;
    .cards {
      margin-top: 10px;
      max-width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      .card {
        width: 350px;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: var(--color-3);
        color: var(--color-4);
        border-radius: 15px;
        box-shadow: 3px 3px 5px rgba($color: #000000, $alpha: 0.25);
        &-image {
          width: 100%;
          height: auto;
          border-radius: 0px 0px 15px 15px;
          box-shadow: 3px 3px 5px rgba($color: #000000, $alpha: 0.25);
        }
      }
    }
  }
  .services {
    padding: 10px 0px;
  }
}
@media (min-width: 600px) {
  .container {
    .blog {
      .cards {
        justify-content: center;
        .card {
          width: 380px;
        }
      }
    }
  }
}

@media (min-width: 1210px) {
  .container {
    .blog {
      .cards {
        justify-content: start;
      }
    }
  }
}
</style>