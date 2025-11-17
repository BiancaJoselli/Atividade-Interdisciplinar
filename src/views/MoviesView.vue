<script setup>
    import { onMounted } from 'vue';
    import { useMovieStore } from '@/stores/movieStore';
    
    const movieStore = useMovieStore()

    onMounted(async () => {
        await movieStore.getMovies()
    });
</script>

<template>
    <div>
    <h1>Gêneros de programas de TV</h1>
    <ul v-for="movie in movieStore.movies" :key="movie.id">
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