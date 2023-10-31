<template>
<<<<<<< HEAD
  <div class="banner">
    <div class="content">
      <div class="firstColumn">
        <div class="top">
          <Navbar />
        </div>
        <div class="description">
          <h1 class="title">Seja o lar dessas fofuras</h1>
          <p class="info">
            Torne-se um herói peludo! 🐶🐱 Adote um amigo de quatro patas e mude
            uma vida para sempre. Nossos cães e gatos aguardam amor, cuidado e
            um lar. Faça a diferença hoje - traga alegria e amor para sua casa,
            adote um companheiro leal.
          </p>
        </div>
        <div class="socials">
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Whatsapp</p>
          <p>TikTok</p>
        </div>
      </div>
      <div class="secondColumn">
        <div class="images">
          <div class="card">
            <p class="card-name">Mingau</p>
            <img src="../assets/img/cat1.webp" alt="" class="card-pet" />
            <div class="card-infos">
              <p>Raça</p>
              <p>Idade</p>
              <p>Porte</p>
            </div>
          </div>
          <div class="card">
            <p class="card-name">Bolinha</p>
            <img src="../assets/img/dog1.webp" alt="" class="card-pet" />
            <div class="card-infos">
              <p>Raça: Corgi</p>
              <p>Idade: 6 meses</p>
              <p>Porte: Pequeno</p>
            </div>
          </div>
          <div class="card">
            <p class="card-name">Manhosa</p>
            <img src="../assets/img/dog2.webp" alt="" class="card-pet" />
            <div class="card-infos">
              <p>Raça</p>
              <p>Idade</p>
              <p>Porte</p>
            </div>
          </div>
          <div class="card">
            <p class="card-name">Pelúcio</p>
            <img src="../assets/img/cat2.webp" alt="" class="card-pet" />
            <div class="card-infos">
              <p>Raça</p>
              <p>Idade</p>
              <p>Porte</p>
            </div>
          </div>
=======
  <div class="container">
    <div class="content">
      <div class="text">
        <div class="title">ADOPETS</div>
        <p class="subtitle">
          Adopets é a sua plataforma online confiável para encontrar o seu novo
          melhor amigo de quatro patas. Nós conectamos animais adoráveis com
          famílias amorosas em todo o mundo. Estamos comprometidos em garantir
          que cada animal encontre um lar amoroso e permanente.
        </p>
        <div class="buttons">
          <div class="btn btn1"><a href="#">Botão 1</a></div>
          <div class="btn btn2"><a href="#">Botão 2</a></div>
>>>>>>> main
        </div>
      </div>
    </div>
  </div>
</template>
<script>
<<<<<<< HEAD
import Navbar from "./Navbar.vue";
export default {
  name: "Banner",
  components: {
    Navbar,
  },
  data() {
    return {
      dogs: [],
      cats: [],
    };
  },
  created() {},
=======
export default {
  name: "Banner",
>>>>>>> main
};
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
//Mobile First
.banner {
  .content {
    display: flex;
    flex-wrap: wrap;
    .firstColumn {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      background-color: grey;
      color: var(--color-4);
      .description {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        .title {
          width: 100%;
          text-align: center;
          text-transform: uppercase;
          line-height: 25px;
        }
        .info {
          width: 100%;
          text-align: center;
        }
      }
      .socials {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        width: 100%;
      }
    }
    .secondColumn {
      width: 100%;
      .images {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        .card {
          transition: transform 0.2s ease-in;
          width: 50%;
          height: 50%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          &-name {
            font: var(--title-font-size) var(--title-font);
            font-weight: 600;
            width: 100%;
            height: auto;
            color: var(--color-4);
            position: absolute;
            text-align: center;
            transform: translatey(-50px);
            transition: all 0.5s ease-in-out;
            filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25));
          }
          &-pet {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          &-infos {
            font: 12px var(--title-font);
            color: var(--color-4);
            background-color: rgba($color: #000000, $alpha: 0.3);
            backdrop-filter: blur(3px);
            width: 100%;
            padding: 1rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            position: absolute;
            left: 0;
            bottom: 0;
            transform: translatey(190px);
            transition: all 0.7s ease-in-out;
          }
          &:hover {
            .card-name {
              transform: translatey(10px);
            }
            .card-infos {
              transform: translatey(0px);
            }
          }
        }
      }
    }
  }
}
@media (min-width: 720px) {
  .banner {
    .content {
      .firstColumn,
      .secondColumn {
        width: 50%;
        height: 700px;
      }
      .firstColumn {
        justify-content: space-between;
        .description {
          min-height: 150px;
=======
.container {
  background-image: url("../assets/img/modelo-banner.png");
  width: 100%;
  height: 800px;
  background-size: cover;
  background-position: center;
  display: flex;
  .content {
    display: flex;
    align-items: center;
    .text {
      width: 50%;
      height: 100%;
      padding: 1rem;
      display: grid;
      gap: 2rem;
      align-content: center;
      .title {
        font-size: 46px;
        line-height: 25px;
      }
      .subtitle {
        font: 600 var(--subtitle-font-size) var(--body-font);
      }
      .buttons {
        width: 100%;
        display: flex;
        gap: 1rem;
        align-items: center;
        .btn1 {
          background-color: transparent;
          a {
            color: var(--color-4);
          }
          &:hover {
            border: 3px solid var(--color-3);
            background-color: var(--color-4);
            a {
              color: var(--color-3);
            }
          }
        }
        .btn2 {
          border: 3px solid var(--color-2);
          background-color: var(--color-2);
          &:hover {
            background-color: transparent;
            border: 3px solid var(--color-4);
            a {
              color: var(--color-4);
            }
          }
>>>>>>> main
        }
      }
      .secondColumn {
        .card {
          .card-infos {
            font: var(--subtitle-font-size) var(--title-font);
          }
        }
      }
    }
  }
}
</style>