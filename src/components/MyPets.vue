<template>
  <h2>Meus Pets</h2>
  <div class="content">
    <form action="POST">
      <div @submit.prevent="registerPet" class="inputType">
        <label for="nome">Nome</label>
        <input type="text" name="nome" />
      </div>
      <div class="inputType">
        <label for="especie">Especie</label>
        <select name="especie" id="especie">
          <option value="#">Selecione</option>
          <option value="1">Especie 1</option>
        </select>
      </div>
      <div class="inputType">
        <label for="raca">Raça</label>
        <input type="text" name="raca" />
      </div>
      <div class="inputType">
        <label for="nascimento">Data de Nascimento</label>
        <input type="date" name="nascimento" />
      </div>
      <div class="inputType">
        <label for="porte">Porte</label>
        <select name="porte" id="porte">
          <option value="#">Selecione</option>
          <option value="toy">Toy</option>
          <option value="pequeno">Pequeno</option>
          <option value="medio">Médio</option>
          <option value="grande">Grande</option>
        </select>
      </div>
      <div class="inputType">
        <label for="genero">Sexo</label>
        <select name="genero" id="genero">
          <option value="#">Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      </div>
      <div class="inputType">
        <label for="">Disponivel para Adoção?</label>
        <select name="adocao" id="adocao">
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
    };
  },
  methods: {
    registerPet() {
      axios
        .post("/animals", this.formData)
        .then((response) => {
          window.alert(`Cadastro de ${this.formData.name} feito com sucesso!`);
        })
        .catch((error) => {
          console.error("Erro ao cadastrar o pet:", error.response.data);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  .inputType {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
  }
}
</style>