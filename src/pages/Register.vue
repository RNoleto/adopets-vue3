<template>
  <div>
    <h2>Cadastro de Usuário</h2>
    <form @submit.prevent="registerUser" method="POST">
      <div>
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="formData.email" required />
      </div>
      <div>
        <label for="password">Senha:</label>
        <input
          type="password"
          id="password"
          v-model="formData.password"
          required
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    registerUser() {
      axios
        .post("http://localhost:8000/api/register", this.formData)
        .then((response) => {
          console.log("Usuário cadastrado com sucesso:", response.data);
        })
        .catch((error) => {
          console.error("Erro ao cadastrar usuário:", error.response.data);
        });
    },
  },
};
</script>