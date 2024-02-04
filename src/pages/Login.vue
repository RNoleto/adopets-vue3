<template>
  <div class="container">
    <div class="content page">
      <img src="/assets/img/logo.png" alt="logo" class="logo" />
      <h2>Login</h2>
      <form @submit.prevent="loginUser" method="POST">
        <div>
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            v-model="formData.email"
            class="inputTypes"
            required
          />
        </div>
        <div>
          <label for="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="formData.password"
            class="inputTypes"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginUser() {
      axios
        .post("http://localhost:8000/api/login", this.formData)
        .then((response) => {
          console.log("Login feito com sucesso:", response.data);
        })
        .catch((error) => {
          console.error("Login invalido", error.response.data);
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
