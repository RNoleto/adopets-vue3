<template>
  <Banner />
  <div class="container">
    <div class="content">
      <h1>Página home</h1>
      <div class="text">
        <p>teste da home</p>
      </div>
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