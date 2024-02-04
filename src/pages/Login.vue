<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="loginUser" method="POST">
      <div>
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          v-model="formData.email"
          autocomplete="current-password"
          required
        />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="formData.password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
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
        .post("/api/login", this.formData)
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
