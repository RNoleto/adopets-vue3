<template>
    <div class="container">
      <div class="content">
        <div class="text">
          <div class="title">ADOPETS</div>
          <p class="subtitle">Adopets é a sua plataforma online confiável para encontrar o seu novo melhor amigo de quatro patas. Nós conectamos animais adoráveis com famílias amorosas em todo o mundo. Estamos comprometidos em garantir que cada animal encontre um lar amoroso e permanente.</p>
          <div class="buttons">
            <div class="btn btn1"><a href="#">Botão 1</a></div>
            <div class="btn btn2"><a href="#">Botão 2</a></div>
          </div>
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
  background-image: url('../assets/img/modelo-banner.png');
  width: 100%;
  height: 800px;
  background-size: cover;
  background-position: center;
  display: flex;
  .content{
    display: flex;
    align-items:center;
    .text{
      width: 50%;
      height: 100%;
      padding: 1rem;
      display: grid;
      gap: 2rem;
      align-content: center;
      .title{
        font-size: 46px;
        line-height: 25px;
      }
      .subtitle{
        font: 600 var(--subtitle-font-size) var(--body-font);
      }
      .buttons{
        width: 100%;
        display: flex;
        gap: 1rem;
        align-items: center;
        .btn1{
          background-color: transparent;
          a{
            color: var(--color-4);
          }
          &:hover{
            border: 3px solid var(--color-3);
            background-color: var(--color-4);
            a{
              color: var(--color-3);
            }
          }
        }
        .btn2{
          border: 3px solid var(--color-2);
          background-color: var(--color-2);
          &:hover{
            background-color: transparent;
            border: 3px solid var(--color-4);
            a{
              color: var(--color-4);
            }
          }
        }
      }
    }
  }
}
</style>