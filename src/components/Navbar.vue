<template>
  <nav>
    <div class="adopets">
      <router-link class="link" to="/">
        <img src="../assets/img/logo.png" alt="logo" class="logo" />
        <h1 class="title">Adopets</h1>
      </router-link>
    </div>
    <div class="navbar-toggle" @click="toggleNav">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <ul :class="{ 'nav-links-open': isNavOpen }">
      <li><router-link to="/" @click="closeNav">Home</router-link></li>
      <li>
        <router-link to="/about" @click="closeNav">Quem Somos</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    closeNav() {
      this.isNavOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  background-color: #808080;
  color: var(--color-4);
  padding: 1rem;
  display: flex;
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
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  background-color: var(--color-4);
  height: 2px;
  width: 25px;
  margin: 4px 0;
  transition: transform 0.4s;
}

ul {
  list-style: none;
  display: flex;
}

li {
  margin-right: 1rem;
}

.nav-links-open {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 1rem;
  background-color: #808080;
  padding: 1rem;
  border: 1px solid var(--color-4);
  display: none;
}

.nav-links-open li {
  color: var(--color-4);
  margin: 0;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .navbar-toggle {
    display: flex;
  }

  ul {
    display: none;
  }
}
</style>