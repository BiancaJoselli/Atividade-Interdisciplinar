<script setup>
// const emit = defineEmits(["search"]);

// function sendSearch(event) {
//     const term = event.target.value;
//     emit("search", term);
// }
</script>
<template>
    <header class="navbar">
  <nav>
    <div class="left">
      <router-link to="/" class="active">
        <img src="@/assets/logo.png" alt="Marvel Studios" class="logo" />
      </router-link>
    </div>

    <div class="center">
      <router-link to="/" class="active">Início</router-link>
      <router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Séries</router-link>
    </div>

    <!-- <div class="right">
      <input type="text" placeholder="Buscar filmes e séries..." class="search" @input="sendSearch" />
    </div> -->
  </nav>
</header>

</template>

<style scoped>
.navbar {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 0.6rem 1.5rem;
  z-index: 999;
  box-shadow: 0 8px 25px rgba(0,0,0,0.80);
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left,
.center,
.right {
  display: flex;
  align-items: center;
}

.center {
  gap: 1.5rem;
}

.logo {
  height: 35px;
}

a {
  color: #ccc;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.2s;
}

a:hover {
  color: #e62429;
}

.router-link-exact-active {
  color: #e62429;
  font-weight: bold;
}

.search {
  background-color: #222;
  border: none;
  border-radius: 7px;
  padding: 0.4rem 0.5rem;
  color: #ffffff;
}

.search:focus {
  outline: none;
  border: 1px solid #e62429; 
}

.search:hover {
  border: #ff0000;
}

.filtro {
    margin-left: auto;
    background-color: #222;
    color: #fff;
    border: none;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
}

.busca {
    background-color: #222;
    border: none;
    border-radius: 4px;
    padding: 0.3rem 0.6rem;
    color: #fff;
}
</style>
