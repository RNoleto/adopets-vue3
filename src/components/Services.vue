<template>
  <div class="services">
    <div
      v-for="(service, serviceName) in services"
      :key="serviceName"
      class="card"
    >
      <p class="title">{{ serviceName }}</p>
      <img :src="service.icon" alt="" class="icon" />
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
  justify-content: space-between;
  margin-top: 10px;
  gap: 5px;
  .card {
    width: 120px;
    height: auto;
    padding: 10px;
    gap: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    align-items: center;
    background-color: var(--color-1);
    border-radius: 15px;
    box-shadow: 3px 3px 5px rgba($color: #000000, $alpha: 0.25);
    transition: all 0.3s ease-in-out;
    .title {
      text-align: center;
      font-size: 16px;
      color: var(--color-4);
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
    }
    .icon {
      width: 65px;
    }
    &:hover {
      transform: scale(1.05);
      background-color: var(--color-2);
      box-shadow: 3px 3px 5px rgba($color: #000000, $alpha: 0.15);
    }
  }
}
</style>