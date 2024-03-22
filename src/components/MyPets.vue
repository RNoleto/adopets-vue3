<template>
  <h2>Meus Pets</h2>
  <div class="content">
    <form @submit.prevent="registerPet">
      <div class="inputType">
        <label for="nome">Nome</label>
        <input type="text" v-model="name" name="nome" />
      </div>
      <!-- Seleção de Especies -->
      <div class="inputType">
        <label for="especie">Espécie</label>
        <select name="especie" v-model="selectedSpecies">
          <option :value="null" :disabled="selectedSpecies === null">
            Selecione
          </option>
          <option
            v-for="species in speciesList"
            :key="species.id"
            :value="species.id"
          >
            {{ species.nome }}
          </option>
        </select>
      </div>
      <div class="inputType">
        <label for="raca">Raça</label>
        <input type="text" v-model="raca" name="raca" />
      </div>
      <div class="inputType">
        <label for="nascimento">Data de Nascimento</label>
        <input type="date" v-model="nascimento" name="nascimento" />
      </div>
      <div class="inputType">
        <label for="porte">Porte</label>
        <select name="porte" v-model="porte" id="porte">
          <option value="#">Selecione</option>
          <option value="toy">Toy</option>
          <option value="pequeno">Pequeno</option>
          <option value="medio">Médio</option>
          <option value="grande">Grande</option>
        </select>
      </div>
      <div class="inputType">
        <label for="genero">Sexo</label>
        <select name="genero" v-model="sexo" id="genero">
          <option value="#">Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      </div>
      <div class="inputType">
        <label for="adocao">Situação do Animal</label>
        <select name="adocao" v-model="situacao" id="adocao">
          <option value="#">Selecione</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MyPets",
  data() {
    return {
      name: "",
      raca: "",
      nascimento: "",
      porte: "",
      sexo: "",
      adocao: "",
      speciesList: [],
      selectedSpecies: null,
    };
  },
  mounted() {
    this.loadSpecies();
  },
  methods: {
    registerPet() {
      const formData = {
        name: this.name,
        raca: this.raca,
        nascimento: this.nascimento,
        porte: this.porte,
        sexo: this.sexo,
        adocao: this.adocao,
        speciesId: this.selectedSpecies,
      };

      axios
        .post("/animals", formData)
        .then((response) => {
          window.alert(`Cadastro de ${formData.name} feito com sucesso!`);
          this.resetForm();
        })
        .catch((error) => {
          console.error("Erro ao cadastrar o pet:", error.response.data);
        });
    },
    loadSpecies() {
      axios
        .get("/species")
        .then((response) => {
          this.speciesList = response.data;
        })
        .catch((error) => {
          console.error("Erro ao carregar as espécies:", error);
        });
    },
    resetForm() {
      this.name = "";
      this.raca = "";
      this.nascimento = "";
      this.porte = "";
      this.sexo = "";
      this.adocao = "";
      this.selectedSpecies = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
