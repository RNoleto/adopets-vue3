<template>
  <div
    class="services"
    v-for="(service, serviceName) in services"
    :key="serviceName"
  >
    <div class="card">
      <p class="title">{{ serviceName }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Services",
  data() {
    return {
      services: [],
    };
  },
  created() {
    axios
      .get("src/api/adoption.json")
      .then((response) => {
        this.services = response.data.services;
        console.log("Serviços carregados:", this.services);
      })
      .catch((error) => {
        console.log("Erro ao carregar lista de serviços:", error);
      });
  },
};
</script>
<style lang="scss" scoped>
.services {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  .card {
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-1);
    border-radius: 15px;
    box-shadow: 3px 3px 5px rgba($color: #000000, $alpha: 0.25);
    .title {
      font-size: 18px;
      color: var(--color-4);
    }
  }
}
</style>