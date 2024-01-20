<template>
  <div>
    <h2>Criar Cadastro</h2>
    <form @submit.prevent="register">
      <div>
        <label for="fullName">Nome Completo:</label>
        <input type="text" id="fullName" v-model="fullName" required />
      </div>
      <div>
        <label for="dob">Data de Nascimento:</label>
        <input type="date" id="dob" v-model="dob" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="confirmEmail">Confirmar Email:</label>
        <input type="email" id="confirmEmail" v-model="confirmEmail" required />
      </div>
      <div>
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <label for="confirmPassword">Confirmar Senha:</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="confirmPassword"
          required
        />
      </div>
      <div>
        <button type="submit">Criar Cadastro</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      dob: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    register() {
      const userData = {
        fullName: this.fullName,
        dob: this.dob,
        email: this.email,
        confirmEmail: this.confirmEmail,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };

      // Chame a ação de registro no Vuex
      this.$store
        .dispatch("auth/register", userData)
        .then(() => {
          // Redirecione para a página de login após o registro bem-sucedido
          this.$router.push("/login");
        })
        .catch((error) => {
          // Trate os erros de registro
          console.error("Erro ao criar cadastro:", error);
        });
    },
  },
};
</script>

<style scoped>
/* Adicione estilos CSS específicos para o seu componente aqui */
</style>
