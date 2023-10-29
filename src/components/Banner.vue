<template>
  <div class="banner">
    <div class="content">
      <div class="firstColumn">
        <div class="description">
          <h1 class="title">Seja o lar dessas fofuras</h1>
          <p class="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            esse eum repellat error tenetur, ipsam maxime minima deleniti fugit
            beatae pariatur consequatur dolorem animi expedita magni voluptate
            quaerat voluptates corporis!
          </p>
        </div>
        <div class="socials">
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Whatsapp</p>
          <p>TikTok</p>
        </div>
      </div>
      <div class="secondColumn">
        <div class="images">
          <div class="card">
            <p class="card-name">Mingau</p>
            <img src="../assets/img/cat1.webp" alt="" class="card-pet" />
            <div class="card-infos">
              <p>Raça</p>
              <p>Idade</p>
              <p>Porte</p>
            </div>
          </div>
          <div class="card">
            <p class="card-name">Bolinha</p>
            <img src="../assets/img/dog1.webp" alt="" class="card-pet" />
            <div class="card-infos">
              <p>Raça: Corgi</p>
              <p>Idade: 6 meses</p>
              <p>Porte: Pequeno</p>
            </div>
          </div>
          <div class="card">
            <p class="card-name">Manhosa</p>
            <img src="../assets/img/dog2.webp" alt="" class="card-pet" />
            <div class="card-infos">
              <p>Raça</p>
              <p>Idade</p>
              <p>Porte</p>
            </div>
          </div>
          <div class="card">
            <p class="card-name">Pelúcio</p>
            <img src="../assets/img/cat2.webp" alt="" class="card-pet" />
            <div class="card-infos">
              <p>Raça</p>
              <p>Idade</p>
              <p>Porte</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {
      dogs: [],
      cats: [],
    };
  },
  created() {},
};
</script>

<style lang="scss" scoped>
//Mobile First
.banner {
  .content {
    display: flex;
    flex-wrap: wrap;
    .firstColumn {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      background-color: grey;
      color: var(--color-4);
      .description {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        .title {
          width: 100%;
          text-align: center;
          text-transform: uppercase;
          line-height: 25px;
        }
        .info {
          width: 100%;
          text-align: center;
          font-style: italic;
        }
      }
      .socials {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        width: 100%;
      }
    }
    .secondColumn {
      width: 100%;
      .images {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        .card {
          transition: transform 0.2s ease-in;
          width: 50%;
          height: 50%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          &-name {
            font: var(--title-font-size) var(--title-font);
            font-weight: 600;
            width: 100%;
            height: auto;
            color: var(--color-4);
            position: absolute;
            text-align: center;
            transform: translatey(-50px);
            transition: all 0.5s ease-in-out;
            filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25));
          }
          &-pet {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          &-infos {
            font: var(--subtitle-font-size) var(--title-font);
            color: var(--color-4);
            background-color: rgba($color: #000000, $alpha: 0.3);
            backdrop-filter: blur(3px);
            width: 100%;
            padding: 1rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            position: absolute;
            left: 0;
            bottom: 0;
            transform: translatey(110px);
            transition: all 0.7s ease-in-out;
          }
          &:hover {
            .card-name {
              transform: translatey(10px);
            }
            .card-infos {
              transform: translatey(0px);
            }
          }
        }
      }
    }
  }
}
@media (min-width: 720px) {
  .banner {
    .content {
      .firstColumn,
      .secondColumn {
        width: 50%;
        height: 700px;
      }
      .firstColumn {
        justify-content: space-between;
        .description {
          min-height: 150px;
        }
      }
    }
  }
}
</style>