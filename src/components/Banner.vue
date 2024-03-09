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
          <div class="card" v-for="animal in animals" :key="animal.id">
            <p class="card-name">{{ animal.name }}</p>
            <img :src="animal.img" :alt="animal.name" class="card-pet" />
            <div class="card-infos">
              <p>Raça: {{ animal.breed }}</p>
              <p>Idade: {{ getAgeLabel(animal.age) }}</p>
              <p>Porte: {{ getSizeLabel(animal.size) }}</p>
              <p>Sexo: {{ getGenderLabel(animal.gender) }}</p>
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
      animals: [],
    };
  },
  created() {
    this.fetchAnimals();
  },
  methods: {
    async fetchAnimals() {
      try {
        const response = await axios.get("/animals");
        this.animals = response.data;
      } catch (error) {
        console.error("Erro ao buscar animais:", error);
      }
    },
    getSizeLabel(size) {
      //converte o valor de animal.size para o porte respectivo
      switch (size) {
        case 0:
          return "Toy";
        case 1:
          return "Pequeno";
        case 2:
          return "Médio";
        case 3:
          return "Grande";
        default:
          return "Desconhecido";
      }
    },
    getGenderLabel(gender) {
      //converte o valor de animal.gender para o respectivo sexo
      switch (gender) {
        case 0:
          return "Macho";
        case 1:
          return "Fêmea";
      }
    },
    getAgeLabel(age) {
      if (age < 12) {
        return `${age} meses`;
      } else {
        const years = Math.floor(age / 12);
        const months = age % 12;
        if (months === 0) {
          return `${years} ano${years > 1 ? "s" : ""}`;
        } else {
          return `${years} ano${years > 1 ? "s" : ""} e ${months} meses`;
        }
      }
    },
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
          text-align: left;
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