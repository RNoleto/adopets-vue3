<template>
  <Navbar />
  <div class="dashboard">
    <h1>Meu painel</h1>
    <p>Seja bem-vindo, {{ userName }}. Meu id é {{ userId }}</p>
    <div class="sidebar">
      <ul class="menu">
        <li
          @click="activeMenuItem = 'meusPets'"
          :class="{ active: activeMenuItem === 'meusPets' }"
        >
          Meus Pets
        </li>
        <li
          @click="activeMenuItem = 'species'"
          :class="{ active: activeMenuItem === 'species' }"
        >
          Especies
        </li>
        <li
          @click="activeMenuItem = 'menu3'"
          :class="{ active: activeMenuItem === 'menu3' }"
        >
          menu 3
        </li>
      </ul>
    </div>
    <div class="content">
      <div v-if="activeMenuItem === 'meusPets'">
        <MyPetsVue />
      </div>
      <div v-else-if="activeMenuItem === 'species'">
        <species-vue :userId="userId" />
      </div>
      <div v-else>
        <h2>Sessão Menu 3</h2>
      </div>
    </div>
  </div>
</template>

<script>
import MyPetsVue from "../components/MyPets.vue";
import Navbar from "../components/Navbar.vue";
import SpeciesVue from "../components/Species.vue";

import { useUserStore } from "../store/userStore";
export default {
  components: {
    Navbar,
    MyPetsVue,
    SpeciesVue,
  },
  data() {
    return {
      activeMenuItem: "meusPets",
    };
  },
  setup() {
    const userStore = useUserStore();
    let userName = userStore.getUser ? userStore.getUser.name : null;
    let userId = userStore.getUser ? userStore.getUser.id : null;

    // Verificar se o userName e userId estão vazios e, em seguida, tentar obtê-los do localStorage
    if (!userName || !userId) {
      const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
      if (userFromLocalStorage) {
        userName = userFromLocalStorage.name;
        userId = userFromLocalStorage.id;
      }
    }

    return {
      userName,
      userId, // Adicionando userId ao retorno do setup
    };
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  min-height: 560px;
  padding: 10px;
  .sidebar {
    width: auto;
    .menu {
      display: flex;
      gap: 10px;
      li {
        padding: 6px 12px;
        background-color: var(--color-1);
        font-size: 12px;
      }
    }
  }
  .content {
    margin: 10px 0px 0px 0px;
    flex: 1;
    padding: 0px 10px;
  }
}
</style>
