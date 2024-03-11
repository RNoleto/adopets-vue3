<template>
  <div class="container">
    <div class="content page">
      <img src="/assets/img/logo.png" alt="logo" class="logo" />
      <h2>Login</h2>
      <form @submit.prevent="submit">
        <div>
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="email"
            class="inputTypes"
          />
        </div>
        <div>
          <label for="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
            class="inputTypes"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      axios
        .post("/login", payload, {
          headers: {
            "Content-Type": "application/json",
            Access: "application/json",
          },
        })
        .then((response) => {
          if (response.data.access_token) {
            Cookie.set("_myapp_token", response.data.access_token);
            window.alert("Login feito com sucesso.");
            this.$router.push("/");
          } else {
            throw new Error("Falha ao acessar o token");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          window.alert("Erro ao acessasr o Login. Por favor, tente novamente.");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 640px;
}
.page {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: var(--color-1);
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba($color: #000000, $alpha: 0.25);

  .logo {
    width: 120px;
  }

  label {
    color: var(--color-3);
  }
  .inputTypes {
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
  }
  button {
    width: 100%;
    padding: 5px;
    box-shadow: 2px 2px 2px rgba($color: #000000, $alpha: 0.25);
  }
}
</style>
