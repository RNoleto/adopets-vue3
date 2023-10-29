<template>
  <nav>
    <div class="adopets">
      <img src="../assets/img/logo.png" alt="logo" class="logo" />
      <h1 class="title">Adopets</h1>
    </div>
    <div class="navbar-toggle" @click="toggleNav">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <ul :class="{ 'nav-links-open': isNavOpen }">
      <li><router-link to="/" @click="closeNav">Home</router-link></li>
      <li><router-link to="/about" @click="closeNav">About</router-link></li>
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
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .adopets {
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
}

.bar {
  background-color: #fff;
  height: 4px;
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
  background-color: #333;
  padding: 1rem;
  border: 1px solid #fff;
  display: none;
}

.nav-links-open li {
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