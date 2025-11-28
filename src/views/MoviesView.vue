<script setup>
import { onMounted } from 'vue'
import { useMovieStore } from '@/stores/movieStore'

const movieStore = useMovieStore()

onMounted(async () => {
  await movieStore.listMovies()
})
</script>

<template>
  <div class="movies-container">
    <div class="grid">
      <router-link
        v-for="movie in movieStore.movies"
        :key="movie.id"
        :to="`/movie/${movie.id}`"
        class="movie-card"
      >
        <div>
          <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.movies-container {
  padding: 2rem;
}

/* GRID COM 4 COLUNAS FIXAS */
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 4 colunas */
  gap: 2rem; /* espaçamento entre eles */
}

/* Card de cada filme */
.movie-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* animação suave */
}

.movie-card:hover {
  transform: scale(1.08); /* aumenta o card */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4); /* sombra bonita */
  cursor: pointer;
}


.movie-card img {
  width: 100%;
  border-radius: 10px;
}

.movie-card p {
  color: white;
  margin-top: 0.5rem;
  font-size: 1rem;
}
</style>
