<template>
  <Banner />
  <div class="container">
    <div class="content">
      <h1>Página home</h1>
      <p>Conteudo da página home, teste</p>
    </div>
  </div>
</template>
<script>
import Banner from "../components/Banner.vue";
export default {
  components: {
    Banner,
  },
};
</script>

<style lang="scss" scoped>
.container {
  .content {
    padding: 0px 10px;
  }
}
</style>