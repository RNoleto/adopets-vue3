<template>
  <div>
    <div class="cards">
      <div class="card">
        <img src="../../public/assets/img/dog1.webp" alt="" class="pet-img" />
      </div>
      <div class="card">
        <img src="../../public/assets/img/dog1.webp" alt="" class="pet-img" />
      </div>
      <div class="card">
        <img src="../../public/assets/img/dog1.webp" alt="" class="pet-img" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Wanted",
};
</script>
<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 10px 5px;
  .card {
    max-width: 110px;
    overflow: hidden;
    border-radius: 15px;
    .pet-img {
      width: 100%;
      height: auto;
    }
  }
}
</style>