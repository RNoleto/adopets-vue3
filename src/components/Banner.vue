<template>
  <div class="banner">
    <div class="content">
      <div class="firstColumn">
        <div class="top">
          <img src="../assets/img/logo.png" alt="logo" class="logo" />
          <h1>Adopets</h1>
        </div>
        <div class="midle">
          <h1 class="title">Titulo como frase de efeito</h1>
        </div>
        <div class="end">
          <h1>End</h1>
        </div>
      </div>
      <div class="secondColumn">
        <img src="../assets/img/cat1.webp" alt="" />
        <img src="../assets/img/dog1.webp" alt="" />
        <img src="../assets/img/dog2.webp" alt="" />
        <img src="../assets/img/cat2.webp" alt="" />
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
.banner {
  background-color: pink;
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    box-shadow: 5px 5px 5px rgba($color: #000000, $alpha: 0.3);
    .firstColumn {
      width: 50%;
      height: 100%;
      background-color: grey;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px;
      .top {
        height: auto;
        display: flex;
        align-items: center;
        .logo {
          width: 120px;
        }
      }
      .midle {
        background-color: red;
        width: 100%;
        .title {
          text-transform: uppercase;
        }
      }
      .end {
        background-color: pink;
        height: auto;
      }
    }
    .secondColumn {
      width: 50%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      img {
        width: 50%;
        height: 50%;
        object-fit: cover;
      }
    }
  }
}
</style>