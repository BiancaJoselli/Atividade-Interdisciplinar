<script setup></script>

<template>
    <section class="hero">
    <div class="overlay">
        <h1>BEM-VINDO AO UNIVERSO MARVEL</h1>
        <p>Explore os maiores heróis, vilões e histórias épicas do cinema e das séries</p>
    </div>
    </section>
</template>

<style scoped>
.hero {
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.8)
    ),
    url('@/assets/fundo.jpg');
    background-size: cover;
    background-position: center;
    height: 95vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
}

.overlay {
    width: 90%;
}

h1 {
    font-size: 3rem;
    font-weight: 800;
}

p {
    font-size: 1.2rem;
    color: #ccc;
}
</style>
