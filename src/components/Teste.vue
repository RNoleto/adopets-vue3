<template>
  <div>
    <h1>Animais Disponíveis para Adoção</h1>
    <ul>
      <li v-for="animal in animals" :key="animal.id">
        {{ animal.name }} - {{ animal.breed }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
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
  },
};
</script>
