<template>
  <div class="socials">
    <a href="https://www.facebook.com" target="_blank">
      <img src="/assets/icons/facebook-icon.svg" alt="facebook" />
    </a>
    <a href="https://www.instagram.com" target="_blank">
      <img src="/assets/icons/instagram-icon.svg" alt="instagram" />
    </a>
    <a href="https://www.tiktok.com" target="_blank">
      <img src="/assets/icons/tiktok-icon.svg" alt="tiktok" />
    </a>
    <a
      href="https://wa.me//5596981403089?text=Olá!%20Gostaria%20de%20uma%20informação.Vim%20do%20site%20Adopets."
      target="_blank"
    >
      <img src="/assets/icons/whatsapp-icon.svg" alt="whatsapp" />
    </a>
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
