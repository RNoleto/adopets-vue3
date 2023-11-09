<template>
  <div class="container">
    <div class="content">
      <p>componente de footer</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
.container {
  background-color: red;
  .content {
    display: flex;
    justify-content: center;
    background-color: pink;
  }
}
</style>