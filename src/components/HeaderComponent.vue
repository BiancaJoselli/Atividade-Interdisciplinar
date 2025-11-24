<script setup>
const emit = defineEmits(["search"]);

function sendSearch(event) {
    const term = event.target.value;
    emit("search", term);
}
</script>
<template>
    <header class="navbar">
    <nav>
        <router-link to="/" class="active"><img src="@/assets/logo.png" alt="Marvel Studios" class="logo" /></router-link>
        <router-link to="/" class="active">Início</router-link>
        <router-link to="/filmes">Filmes</router-link>
        <router-link to="/tv">Séries</router-link>
        <!-- <select class="filtro">
        <option>Todos</option>
        <option>Ordem Cronológica</option>
        </select> -->
        <div class="right">
            <input type="text" placeholder="Buscar filmes e séries..." class="search" @input="sendSearch" />
        </div>
    </nav>
    </header>
</template>

<style scoped>
.navbar {
    background-color: #000;
    display: flex;
    align-items: center;
    padding: 0.5rem 2rem;
    font-family: Arial, Helvetica, sans-serif;
}

nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
}

.logo {
    height: 35px;
    margin-right: 1rem;
}

a {
    color: #ccc;
    text-decoration: none;
    font-size: 1rem;
    transition: 0.2s;
}

a:hover {
    color: #e62429;
}

.router-link-exact-active {
    color: #e62429;
    font-weight: bold;
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
