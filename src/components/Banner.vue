<template>
  <div class="banner">
    <div class="content">
      <div class="firstColumn">
        <div class="top">
          <img src="../assets/img/logo.png" alt="logo" class="logo" />
          <h1 class="title">Adopets</h1>
          <p>menu</p>
        </div>
        <h1 class="title">Titulo</h1>
        <p>End</p>
      </div>
      <div class="secondColumn">
        <div class="images">
          <img src="../assets/img/cat1.webp" alt="" />
          <img src="../assets/img/dog1.webp" alt="" />
          <img src="../assets/img/cat2.webp" alt="" />
          <img src="../assets/img/dog2.webp" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss" scoped>
//Mobile First
.banner {
  background-color: pink;
  .content {
    display: flex;
    flex-wrap: wrap;
    .firstColumn {
      width: 100%;
      background-color: red;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo {
          width: 60px;
        }
      }
    }
    .secondColumn {
      width: 100%;
      background-color: yellow;
      .images {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        img {
          width: 50%;
          height: 50%;
          object-fit: cover;
        }
      }
    }
  }
}
@media (min-width: 720px) {
  .banner {
    height: 700px;
    .content {
      .firstColumn {
        width: 50%;
        height: auto;
        background-color: grey;
      }
      .secondColumn {
        width: 50%;
        height: auto;
      }
    }
  }
}
</style>