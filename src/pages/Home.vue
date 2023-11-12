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
        <h1 class="title">Blog Adopet</h1>
        <h2 class="subtitle">
          Fique por dentro dos assuntos pets mais latidos e miados.
        </h2>
        <div class="cards">
          <div class="card">
            <div class="top">
              <p>Será meu pet gosta de mim?</p>
            </div>
            <img src="../assets/img/posts/post1.webp" alt="Cão Pensando" />
            <div class="midle">
              <p>
                Ah, a eterna pergunta que todos os donos de animais de estimação
                já se fizeram pelo menos uma vez na vida. Afinal, quem nunca
                olhou nos olhinhos pidões do seu bichinho e se perguntou: "Será
                que ele me ama ou só quer a ração?"
              </p>
            </div>
            <div class="end">
              <p>Engraçado</p>
              <p>Informativo</p>
              <p>Curiosidades</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Banner from "../components/Banner.vue";
export default {
  components: {
    Banner,
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
    background-color: pink;
    padding: 10px 0px;
    .cards {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .card {
        width: 100%;
        height: auto;
        border-radius: 15px;
        padding: 15px 10px;
        display: flex;
        gap: 10px;
        flex-direction: column;
        background-color: var(--color-2);
        box-shadow: 5px 5px 5px rgba($color: #000000, $alpha: 0.25);
        .top,
        .midle,
        .end {
          width: 100%;
        }
        .top {
          font-size: 18px;
          font-weight: 600;
        }
        img {
          box-shadow: 2px 2px 2px rgba($color: #000000, $alpha: 0.25);
        }
        .midle {
          font-size: 14px;
        }
        .end {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>