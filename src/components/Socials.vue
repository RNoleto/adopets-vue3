<template>
  <div class="socials">
    <img src="../assets/icons/facebook-icon.svg" alt="facebook" />
    <img src="../assets/icons/instagram-icon.svg" alt="instagram" />
    <img src="../assets/icons/tiktok-icon.svg" alt="tiktok" />
    <img src="../assets/icons/whatsapp-icon.svg" alt="whatsapp" />
  </div>
</template>
<script>
export default {
  name: "Socials",
};
</script>
<style lang="scss" scoped>
.socials {
  width: 100%;
  height: auto;
  padding: 5px 0px;
  img {
    width: 35px;
    height: 100%;
    padding: 5px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
