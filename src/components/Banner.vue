<template>
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
        <Socials />
      </div>
      <div class="secondColumn">
        <div class="images">
          <div
            class="card"
            v-for="(animal, index) in shuffledAnimals.slice(0, 4)"
            :key="index"
          >
            <p class="card-name">{{ animal.name }}</p>
            <img :src="animal.img" alt="" class="card-pet" />
            <div class="card-infos">
              <p>Raça: {{ animal.breed }}</p>
              <p>Idade: {{ animal.age }}</p>
              <p>Porte: {{ animal.size }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Navbar from "./Navbar.vue";
import Socials from "./Socials.vue";
export default {
  name: "Banner",
  components: {
    Navbar,
    Socials,
  },
  data() {
    return {
      adoption: {
        dogs: [],
        cats: [],
      },
    };
  },
  computed: {
    shuffledAnimals() {
      const dogs = this.adoption.dog || [];
      const cats = this.adoption.cat || [];
      const shuffled = [];

      while (dogs.length > 0 || cats.length > 0) {
        if (dogs.length > 0) {
          shuffled.push(dogs.shift());
        }
        if (cats.length > 0) {
          shuffled.push(cats.shift());
        }
      }

      return shuffled;
    },
  },
  created() {
    axios
      .get("src/api/adoption.json")
      .then((response) => {
        this.adoption = response.data.adoption;
      })
      .catch((error) => {
        console.log("Erro ao buscar dados:", error);
      });
  },
};
</script>

<style lang="scss" scoped>
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
            font: var(--subtitle-font-size) var(--title-font);
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
            transform: translatey(110px);
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
        }
      }
    }
  }
}
</style>