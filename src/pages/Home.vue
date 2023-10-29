<template>
  <div class="main">
    <Banner />
    <section>
      <div class="content">
        <h1>Bem vindos</h1>
      </div>
    </section>
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
.main {
  background-color: pink;
  height: 100%;
}
</style>