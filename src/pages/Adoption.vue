<template>
  <Navbar />
  <div class="container">
    <div class="content page">
      <h1>Página de Adoção</h1>
      <h3>Aqui você encontra os Pets que estão disponiveis para adoção</h3>
      <div class="animals">
        <div class="animal-card" v-for="animal in animals" :key="animal.id">
          <p class="animal-name">{{ animal.name }}</p>
          <img :src="animal.img" :alt="animal.name" class="animal-img" />
          <div class="animal-details">
            <p>Idade: {{ getAgeLabel(animal.age) }}</p>
            <p>Raça: {{ animal.breed }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Adoption",
  components: {
    Navbar,
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
        const response = await axios.get("http://localhost:8000/api/animals");
        this.animals = response.data;
      } catch (error) {
        console.error("Erro ao buscar animais:", error);
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
.page {
  padding: 0px 10px;
  .animals {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;

    .animal-card {
      max-width: 185px;
      height: auto;
      overflow: hidden;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      position: relative;
      .animal-name {
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
      .animal-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .animal-details {
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
    }
    .animal-card:hover {
      .animal-name {
        transform: translatey(10px);
      }
      .animal-details {
        transform: translatey(0px);
      }
    }
  }
}

@media (min-width: 720px) {
  .page {
    .animals {
      flex-wrap: nowrap;
      .animal-card {
        max-width: 300px;
        height: auto;
        overflow: hidden;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        position: relative;
      }
    }
  }
}
</style>