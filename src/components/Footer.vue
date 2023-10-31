<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="./assets/logo.png" alt="Logo" />
          <p>Sua empresa</p>
        </div>
        <div class="footer-links">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">Sobre Nós</router-link></li>
            <!-- Adicione mais links conforme necessário -->
          </ul>
        </div>
        <div class="footer-social">
          <h4>Nos siga nas redes sociais</h4>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 2rem 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    .footer-logo {
      img {
        width: 60px;
      }
    }

    .footer-links {
      ul {
        list-style: none;
        padding: 0;

        li {
          margin-bottom: 10px;
          a {
            text-decoration: none;
            color: #fff;
          }
        }
      }
    }

    .footer-social {
      text-align: right;

      h4 {
        margin-bottom: 10px;
      }

      .social-icons {
        a {
          font-size: 24px;
          margin-right: 10px;
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
