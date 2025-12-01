<script setup>
import { onMounted, computed } from 'vue'
import { useMovieStore } from '@/stores/movieStore'
import HeroMovies from '@/components/HeroMovies.vue'
import MoviesCarousel from '@/components/MoviesCarousel.vue'
import MoviesAnimation from '@/components/MoviesAnimation.vue'

const props = defineProps({
  search: String
});

const movieStore = useMovieStore();

onMounted(async () => {
  await movieStore.listMovies();
});

const filteredMovies = computed(() => {
  if (!props.search) return movieStore.movies;

  return movieStore.movies.filter(movie =>
    movie.title?.toLowerCase().includes(props.search.toLowerCase())
  );
});
</script>

<template>
  <div class="movies-container">
    <HeroMovies />
    <MoviesCarousel :movies="filteredMovies" />
    <MoviesAnimation :movies="filteredMovies" />
  </div>
</template>
<style scoped>
.movies-container {
  padding: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
}

.movie-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.movie-card:hover {
  transform: scale(1.08);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
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
