<template>
  <div class="container">
    <div class="content">
    <div class="text">
      <h1 class="title">ADOPET'S</h1>
      <p class="subtitle">Adopets é a sua plataforma online confiável para encontrar o seu novo melhor amigo de quatro patas. Nós conectamos animais adoráveis com famílias amorosas em todo o mundo. Estamos comprometidos em garantir que cada animal encontre um lar amoroso e permanente.</p>
      <div class="buttons">
        <div class="btn btn1"><a href="#">Botão 1</a></div>
        <div class="btn btn2"><a href="#">Botão 2</a></div>
      </div>
    </div>
    <div class="image">
      <img src="../assets/img/pets.png" alt="pets">
    </div>
  </div>
  </div>
</template>
<script>
  export default{
    name: 'Banner',
  }
</script>

<style lang="scss" scoped>
.container{
  background-color: var(--color-1);
  .content{
    display: flex;
    align-items:center ;
    .text{
      width: 100%;
      .title{
        font-size: 46px;
        line-height: 25px;
      }
      .subtitle{
        font: 600 var(--subtitle-font-size) var(--body-font);
        color: var(--color-4);
      }
      .buttons{
        margin-top: 1rem;
        width: 100%;
        display: flex;
        gap: 1rem;
        align-items: center;

        .btn1{
          background-color: transparent;
        }
        .btn2{
          border: 1px solid var(--color-2);
          background-color: var(--color-2);
        }
      }
    }
    .image{
      width: 100%;
    }
  }
}
</style>