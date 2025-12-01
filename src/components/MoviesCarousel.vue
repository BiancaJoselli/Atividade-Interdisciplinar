<script setup>
import { onMounted } from 'vue'
import { useMovieStore } from '@/stores/movieStore'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
const movieStore = useMovieStore()

onMounted(async () => {
  await movieStore.listMovies()

})
</script>

<template>
  <section>
    <h2>Filmes</h2>
    <swiper
      :modules="[Navigation]"
      :slides-per-view="5"
      :space-between="10"
      :navigation="true"
      class="mySwiper"
    >
    <swiper-slide
  v-for="movie in movieStore.movies"
  :key="movie.id"
>

<router-link :to="`/movie/${movie.id}`">
  <div class="card">
    <div class="card-img-wrapper">
    <img
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      :alt="movie.title"
    />
  </div>
    </div>
</router-link>

</swiper-slide>
    </swiper>
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

.card {
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card-img-wrapper {
  overflow: hidden;
  border-radius: 12px;
  }

.card img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.03);
}

.card:hover img {
  transform: scale(1.08);
}

/* Navegação do Swiper */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: black;
  background: rgba(221, 22, 22, 0.9);
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s;
  top: 50%;
  transform: translateY(-50%);
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: rgba(0, 0, 0, 0.7);
  color: white;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 3vw;
}

</style>
