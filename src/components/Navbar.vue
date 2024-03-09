<template>
  <nav>
    <div class="content">
      <div class="adopets">
        <router-link class="link" to="/">
          <img src="/assets/img/logo.png" alt="logo" class="logo" />

          <h1 class="title">Adopets</h1>
        </router-link>
      </div>
      <!-- Menu Mobile -->
      <div class="navbar-toggle" @click="toggleNav">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <ul
        :class="{
          'nav-links-open animate__animated': isNavOpen,
          animate__fadeInRight: isNavOpen,
          animate__fadeOutRight: isClosing,
        }"
      >
        <div class="btn-close" @click="closeNav"></div>
        <li class="menu-mobile">
          <router-link to="/" @click="closeNav">Home</router-link>
        </li>
        <li class="menu-mobile">
          <router-link to="/about" @click="closeNav">Quem Somos</router-link>
        </li>
        <li class="menu-mobile">
          <router-link to="/adoption" @click="closeNav">Adoção</router-link>
        </li>
        <li class="menu-mobile">
          <router-link to="/posts" @click="closeNav">Posts</router-link>
        </li>
        <li class="menu-mobile subnav" v-if="tokenExists">
          <p>Dashboard</p>
          <div class="subnav-content">
            <router-link to="/dashboard" @click="closeNav">Menu 1</router-link>
            <router-link to="/dashboard" @click="closeNav">Menu 2</router-link>
            <router-link to="/dashboard" @click="closeNav">Menu 3</router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import "animate.css";
import Cookie from "js-cookie";
export default {
  name: "Navbar",
  data() {
    return {
      tokenExists: false,
      isNavOpen: false,
      isClosing: false,
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.auth.isAuthenticated;
    },
  },
  mounted() {
    this.tokenExists = Cookie.get("_myapp_token") !== undefined;
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
      this.isClosing = false;
      this.toggleBodyScroll();
    },
    closeNav() {
      if (this.isNavOpen) {
        this.isClosing = true;

        setTimeout(() => {
          this.isNavOpen = false;
          this.isClosing = false;
          this.toggleBodyScroll();
        }, 300);
      }
    },
    toggleBodyScroll() {
      if (this.isNavOpen) {
        document.body.style.overflow = "hidden";
        document.body.addEventListener("touchmove", this.preventScroll, {
          passive: false,
        });
      } else {
        document.body.style.overflow = "";
        document.body.removeEventListener("touchmove", this.preventScroll, {
          passive: false,
        });
      }
    },
    preventScroll(e) {
      e.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  background-color: #808080;
  .content {
    max-width: 1200px;
    color: var(--color-4);
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    color: var(--color-4);
    .adopets {
      .link {
        display: flex;
        gap: 1rem;
        align-items: center;
        .logo {
          width: 60px;
        }
      }
    }

    .navbar-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
      .bar {
        background-color: var(--color-4);
        height: 2px;
        width: 25px;
        margin: 4px 0;
        transition: transform 0.4s;
      }
    }

    ul {
      list-style: none;
      display: flex;
      .btn-close {
        display: none;
      }

      li,
      p {
        margin-right: 1rem;
      }

      &.nav-links-open {
        flex-direction: column;
        position: absolute;
        width: 50%;
        height: 100%;
        top: 0px;
        right: 0px;
        background-color: var(--color-3);
        box-shadow: -3px 0px 5px rgba($color: #000000, $alpha: 25);
        padding: 1rem;
        display: none;
        z-index: 1;
        li,
        p {
          color: var(--color-4);
          margin: 0;
          margin-bottom: 1rem;
        }
      }
    }

    @media (max-width: 768px) {
      .navbar-toggle {
        display: flex;
      }

      ul {
        display: none;

        &.nav-links-open {
          padding: 100px 0px;
          display: flex;
          .btn-close {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-weight: 600;
            padding: 10px;
            background-color: transparent;
            cursor: pointer;
            transition: background-color 0.3s;

            &::before {
              content: "X";
              font-size: 18px;
              clip-path: circle();
              color: var(--color-3);
              background-color: var(--color-4);
              padding: 5px;
            }
          }
          .menu-mobile {
            padding: 8px;
            text-align: center;
          }
          .subnav {
            .subnav-content {
              width: 100%;
              z-index: 1;
              display: none;
              a {
                color: var(--color-4);
                background-color: red;
                text-decoration: none;
                padding: 5px 10px;
                text-align: center;
              }
            }
          }
          .subnav:hover .subnav-content {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
}
</style>
