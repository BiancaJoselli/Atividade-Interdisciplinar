<script setup>
import { onMounted } from 'vue'
import { useMovieStore } from '@/stores/movieStore'

const movieStore = useMovieStore()

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

onMounted(async () => {
  await movieStore.getMovies()
})
</script>

<template>
  <h1>oi</h1>
  <section>
    <swiper
      :modules="[Navigation]"
      :slides-per-view="5"
      :space-between="1"
      :navigation="true"
      class="mySwiper"
    >
      <swiper-slide
        v-for="movie in movieStore.movies"
        :key="movie.id"
      >
        <ul>
          <li>
            <img
              :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
              :alt="movie.title"
            />
          </li>
          <li>{{ movie.title }}</li>
          <li>{{ movie.release_date }}</li>
          <li>{{ movie.vote_average }}</li>
        </ul>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style scoped>
div {
  display: flex;
}

ul li {
  text-decoration: none;
  list-style: none;
  color: white;
}

ul img {
  width: 20vw;
  height: 30vw;
  object-fit: cover;
  border-radius: 10px;
  margin: 0;
  padding: 0.5vw;

}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: rgb(0, 0, 0);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 60vw;

}

:deep(.swiper-button-next) {
  right: 1vw;
}

:deep(.swiper-button-prev) {
  left: 10px;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  top: 50%;
  transform: translateY(-50%);
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  background: rgba(255, 0, 0, 0.9);
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: rgba(0, 0, 0, 0.7);
  color: white;
}


</style>
