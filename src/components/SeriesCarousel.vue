<script setup>
import { onMounted } from 'vue'
import { useSerieStore } from '@/stores/serieStore'

const serieStore = useSerieStore()

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

onMounted(async () => {
  await serieStore.getSeries()
})
</script>

<template>

  <section>
    <h2>Séries</h2>
    <swiper
      :modules="[Navigation]"
      :slides-per-view="5"
      :space-between="10"
      :navigation="true"
      class="mySwiper"
    >
      <swiper-slide
        v-for="serie in serieStore.series"
        :key="serie.id"
      >
      <router-link :to="`/serie/${serie.id}`">
        <div class="card">
    <div class="card-img-wrapper">
    <img
      :src="`https://image.tmdb.org/t/p/w500${serie.poster_path}`"
      :alt="serie.title"
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
  transition: transform 0.4s ease;
}

.card-img-wrapper {
  border-radius: 12px;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  z-index: 10;
}

.card:hover img {
  transform: scale(1.12);
}

/* Controles do Swiper */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: rgb(0, 0, 0);
  background: rgba(221, 22, 22, 0.9);
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: rgba(0, 0, 0, 0.7);
  color: white;
}

:deep(.swiper-button-next) {
  right: 1vw;
}

:deep(.swiper-button-prev) {
  left: 10px;
}


</style>

