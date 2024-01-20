<template>
  <div class="container">
    <div class="content">
      <router-link class="link" to="/">
        <img src="../assets/img/logo.png" alt="logo" class="logo" />
        <h1 class="title">Adopets</h1>
      </router-link>
      <Socials />
      <div class="copyright">
        <p>Todos os direitos reservados.</p>
        <p>Desenvolvido por Ramon Ribeiro Noleto</p>
        <p>devnoleto@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script>
import Socials from "./Socials.vue";
export default {
  name: "Footer",
  components: {
    Socials,
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 3rem 0rem;
  background-color: var(--color-1);
  .content {
    padding: 0px 10px;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    .link {
      width: 100%;
      display: flex;
      gap: 0.2rem;
      align-items: center;
      justify-content: center;
      .logo {
        width: 60px;
      }
      .title {
        font-size: 24px;
      }
    }
    .socials {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
      justify-content: center;
    }
    .copyright {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      gap: 0.1rem;
    }
  }
}
</style>