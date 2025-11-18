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
      <div class="card">
    <div class="card-img-wrapper">
    <img
      :src="`https://image.tmdb.org/t/p/w500${serie.poster_path}`"
      :alt="serie.title"
    />
  </div>

    <div class="info">
      <p class="button">Ver</p>
    </div>
    </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style scoped>
section{
  margin: 0 2vw;
}

h2 {
  color: white;
  font-size: 2.5vw;
  padding: 2vw 0 2vw 0vw;
}

div {
  display: flex;
}

ul li {
  text-decoration: none;
  list-style: none;
  color: #e50914;
}

ul img {
  width: 20vw;
  height: 30vw;
  object-fit: cover;
  border-radius: 10px;
}

.card {
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.5s ease;
}

.card-img-wrapper {
  overflow: hidden;
  border-radius: 12px;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 0;
  transition: transform 0.4s ease;
}

.card:hover {
  transform: scale(1.05);
  z-index: 20;
}

.card:hover img {
  transform: scale(1.12);
}

.card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 5),
    rgba(0, 0, 0, 0.0)
  );
}

.info {
  position: absolute;
  top: 80%;
  left: -15%;
  transform: translate(-50%, -40%);
  opacity: 0;
  transition: 0.35s ease;
  pointer-events: none;
  z-index: 3;
}

.info .button {
  color: #ffffff;
  background: #e50914;
  padding: 8px 40px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.1rem;
  transition: 0.3s ease;
  opacity: 0;
}

.card:hover .info {
  opacity: 1;
  transform: translate(-50%, -50%);
}

.card:hover .button {
  opacity: 1;
}

.card:hover img {
  transform: scale(1.1);
}

.card:hover .fade {
  opacity: 1;
}

.card:hover .info {
  opacity: 1;
  transform: translateY(0);
}

.info p {
  margin: 1px 2px 0 8vw ;
  font-size: 18px;
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

</style>

