<script setup>
import { onMounted } from 'vue'
import { useMovieStore } from '@/stores/movieStore'
const movieStore = useMovieStore()

onMounted(async () => {
  await movieStore.getTopMovies()
})
</script>

<template>
  <section class="top5">
    <h2>Top 5 filmes hoje</h2>

    <div class="top5-container">
      <div
        class="card"
        v-for="movie in movieStore.topMovies"
        :key="movie.id"
      >
        <RouterLink :to="`/movie/${movie.id}`">
          <div class="card-img-wrapper">
            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" />
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 0 2vw;
}

h2 {
  color: white;
  font-size: 2.5vw;
  padding: 2vw 0;
}

.top5-container {
  display: flex;
  gap: 1.5vw;
}

.card {
  position: relative;
  width: 20vw;       
  height: 30vw;     
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.5s ease;
}

.card-img-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.4s ease;
}

.card:hover {
  transform: scale(1.05);
  z-index: 20;
}

.card:hover img {
  transform: scale(1.12);
}
</style>
