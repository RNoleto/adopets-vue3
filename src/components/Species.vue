<template>
  <div>
    <!-- Formulário de criação de espécie -->
    <form @submit.prevent="submitForm">
      <label for="nome">Nome da Espécie:</label>
      <input type="text" id="nome" v-model="novaEspecie.nome" required />
      <button type="submit">Criar Espécie</button>
    </form>

    <!-- Lista de espécies -->
    <div v-if="especies.length">
      <h2>Lista de Espécies</h2>
      <ul>
        <li v-for="especie in especies" :key="especie.id">
          {{ especie.nome }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    userId: {
      type: Number,
      required: true, // Certifique-se de que o userId é requerido
    },
  },
  data() {
    return {
      novaEspecie: {
        nome: "",
        user_id: this.userId, // Use o userId passado como prop
      },
      especies: [],
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post("/species", this.novaEspecie);
        this.especies.push(response.data);
        this.novaEspecie.nome = ""; // Limpa o campo após a criação
      } catch (error) {
        console.error("Erro ao criar nova espécie:", error);
      }
    },
    async carregarEspecies() {
      try {
        const response = await axios.get("/species");
        this.especies = response.data;
      } catch (error) {
        console.error("Erro ao carregar espécies:", error);
      }
    },
  },
  mounted() {
    this.carregarEspecies();
  },
};
</script>

<style>
</style>
