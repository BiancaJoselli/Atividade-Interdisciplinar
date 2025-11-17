<script setup>
    import { ref, onMounted } from 'vue';
    import api from '@/plugins/axios';

    const movies = ref([]);

    onMounted(async () => {
    const response = await api.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_companies=420');    
    movies.value = response.data.results;
    });
</script>

<template>
    <div>
    <h1>Gêneros de programas de TV</h1>
    <ul v-for="movie in movies" :key="movie.id">
    <li> {{ movie.title }}</li>             
    <img
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        :alt="movie.title"
    />
    </ul>
    </div>
</template>

<style scoped>
li {
    color: white
} 
</style>