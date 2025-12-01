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
        v-for="(movie, index) in movieStore.topMovies"
        :key="movie.id"
      >
        <span class="rank">{{ index + 1 }}</span>

        <RouterLink :to="`/movie/${movie.id}`">
          <div class="poster">
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
  gap: 3vw;
}

.card {
  display: flex;
  align-items: center;
  gap: 1vw;
  width: 30vw;
  height: 20vw;
  position: relative;
}

.rank {
  font-size: 15vw;
  font-weight: 900;
  color: rgba(255, 0, 0, 0.05);
  -webkit-text-stroke: 0.4vw rgba(255, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17%;
  margin: 0 0 0 1vw;
}

.poster {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
}

.poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: transform .4s ease;
}

.card:hover img {
  transform: scale(1.12);
}
</style>
