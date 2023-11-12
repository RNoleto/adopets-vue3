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
              <p class="card-title">Será meu pet gosta de mim?</p>
              <p class="date">12/11/2023</p>
            </div>
            <img
              src="../assets/img/posts/post1.webp"
              alt="Cão Pensando"
              class="cover"
            />
            <div class="midle">
              <p>
                Ah, a eterna pergunta que todos os donos de animais de estimação
                já se fizeram pelo menos uma vez na vida. Afinal, quem nunca
                olhou nos olhinhos pidões do seu bichinho e se perguntou: "Será
                que ele me ama ou só quer a ração?"
              </p>
            </div>
            <div class="end">
              <div class="tags">
                <p class="tag">Engraçado</p>
                <p class="tag">Informativo</p>
                <p class="tag">Curiosidades</p>
              </div>
              <div class="btn">Veja mais</div>
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
    padding: 10px 0px;
    .cards {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .card {
        max-width: 400px;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: var(--color-3);
        padding: 20px 10px;
        color: var(--color-4);
        border-radius: 15px;
        box-shadow: 3px 3px 5px rgba($color: #000000, $alpha: 0.25);
        .top,
        .midle,
        .end {
          width: 100%;
          padding: 0px 5px;
        }
        .top {
        }
        .cover {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
        .midle {
          text-align: justify;
        }
        .end {
          font-size: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          .tags {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            .tag {
              padding: 5px 10px;
              border: 1px solid var(--color-4);
              border-radius: 15px;
              box-shadow: 1px 1px 5px rgba($color: #000000, $alpha: 0.25);
            }
          }
          .btn {
            width: 100%;
            height: auto;
            padding: 10px;
            text-align: center;
            border: 1px solid var(--color-4);
            border-radius: 15px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            &:hover {
              font-size: 14px;
              font-weight: 600;
              background-color: var(--color-1);
            }
          }
        }
      }
    }
  }
}
</style>