<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const credentials = {
        email: this.email,
        password: this.password,
      };

      // Chame a ação de login no Vuex
      this.$store
        .dispatch("auth/login", credentials)
        .then(() => {
          // Redirecione para a página protegida após o login bem-sucedido
          this.$router.push("/home");
        })
        .catch((error) => {
          // Trate os erros de autenticação
          console.error("Erro ao fazer login:", error);
        });
    },
  },
};
</script>

<style scoped>
/* Adicione estilos CSS específicos para o seu componente aqui */
</style>
