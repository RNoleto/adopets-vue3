<template>
  <div class="banner">
    <div class="content">
      <div class="firstColumn"></div>
      <div class="secondColumn">
        <img src="../assets/img/dog1.jpg" alt="" />
        <img src="../assets/img/dog2.jpg" alt="" />
        <img src="../assets/img/dog1.jpg" alt="" />
        <img src="../assets/img/dog2.jpg" alt="" />
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
  height: 650px;
  display: flex;
  align-items: center;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    .firstColumn {
      width: 50%;
      height: 100%;
      background-color: grey;
    }
    .secondColumn {
      width: 50%;
      height: 100%;
      img {
        height: 50%;
        width: 50%;
        object-fit: cover;
      }
    }
  }
}
</style>