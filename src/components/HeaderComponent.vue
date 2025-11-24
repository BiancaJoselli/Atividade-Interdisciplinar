<script setup>
const emit = defineEmits(["search"]);

function sendSearch(event) {
    const term = event.target.value;
    emit("search", term);
}
</script>

<template>
    <header class="header">
        <div class="left">

            <nav class="menu">
                <RouterLink to="/"><img src="/logo.png" width="80" height="50" alt="Logo"></RouterLink>
                <RouterLink to="/movies" class="active">Filmes</RouterLink>
                <RouterLink to="/series">Séries</RouterLink>
                <RouterLink to="/ordem">Ordem Cronológica</RouterLink>
            </nav>
        </div>

        <div class="right">
            <input type="text" placeholder="Buscar filmes e séries..." class="search" @input="sendSearch" />
        </div>
    </header>
</template>

<style scoped>
.header {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    background: #111;
    border-bottom: 1px solid #222;
    color: white;
}

.left {
    display: flex;
    align-items: center;
    gap: 24px;
}

.logo {
    height: 32px;
}

.menu {
    display: flex;
    gap: 24px;
}

.menu a {
    color: #bbb;
    text-decoration: none;
    font-size: 14px;
}

.menu a.router-link-active {
    color: #f00;
    font-weight: 600;
}

.right {
    display: flex;
    align-items: center;
    gap: 12px;
}

.select,
.search {
    background: #1a1a1a;
    border: 1px solid #333;
    padding: 6px 12px;
    border-radius: 6px;
    color: white;
}

.search {
    width: 260px;
}

.search:focus {
    outline: none;
    border-color: #f00;
}
</style>
